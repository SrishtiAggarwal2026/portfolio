import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outputFile = path.join(root, "data", "gallery-manifest.json");

const IMAGE_FILE_RE = /\.(jpe?g|png|webp)$/i;
const VIDEO_FILE_RE = /\.(mp4|webm|mov|m4v)$/i;

function determineCategory(relPath) {
  const lower = relPath.toLowerCase();
  if (lower.startsWith("pillars of change/advocacy") || lower.startsWith("images/2026_work") || lower.includes("advocacy")) {
    return "Advocacy Clinic";
  }
  if (lower.startsWith("pillars of change/voices unheard") || lower.startsWith("voices/") || lower.includes("slam") || lower.includes("poetry")) {
    return "Voices Unheard";
  }
  if (lower.startsWith("pillars of change/f1") || lower.startsWith("f1/") || lower.includes("blaze")) {
    return "F1 in Schools";
  }
  if (lower.startsWith("pillars of change/teacher training") || lower.startsWith("books/") || lower.includes("reading room")) {
    return "Reading Room & Literacy";
  }
  if (lower.startsWith("hero/")) {
    return "Community Movement";
  }
  if (lower.startsWith("achivements/") || lower.includes("ib_winner")) {
    return "Global Recognition";
  }
  if (lower.startsWith("in the communites") || lower.startsWith("in-the-communities")) {
    return "Community Fieldwork";
  }
  return "Advocacy & Community";
}

function scanDir(dir, rel = "", fileRe = IMAGE_FILE_RE) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(rel, entry.name).replace(/\\/g, "/");

    // Skip symlinks to avoid duplicate scanning (e.g. macOS case-insensitive symlinks)
    const lstat = fs.lstatSync(fullPath);
    if (lstat.isSymbolicLink()) continue;

    if (entry.isDirectory()) {
      results = results.concat(scanDir(fullPath, relPath, fileRe));
    } else if (fileRe.test(entry.name)) {
      // Skip system icons and founder avatar
      if (
        entry.name === "profile_pic.jpeg" ||
        entry.name.startsWith("apple-touch") ||
        entry.name.startsWith("favicon") ||
        entry.name.endsWith(".svg")
      ) {
        continue;
      }

      const buf = fs.readFileSync(fullPath);
      const hash = crypto.createHash("md5").update(buf).digest("hex");
      results.push({
        fullPath,
        relPath,
        filename: entry.name,
        hash,
        category: determineCategory(relPath),
      });
    }
  }

  return results;
}

const allImages = scanDir(publicDir);

// Sort: prioritising core images/ first, then hero/, then pillars, f1, books, etc.
allImages.sort((a, b) => {
  const isAImages = a.relPath.startsWith("images/");
  const isBImages = b.relPath.startsWith("images/");
  if (isAImages && !isBImages) return -1;
  if (!isAImages && isBImages) return 1;
  return a.relPath.localeCompare(b.relPath, undefined, { sensitivity: "base", numeric: true });
});

// Deduplicate exact binary duplicate files across folders to prevent identical images in gallery
const seenHashes = new Set();
const uniqueImages = [];
for (const img of allImages) {
  if (!seenHashes.has(img.hash)) {
    seenHashes.add(img.hash);
    const webSrc = "/" + img.relPath.split("/").map((part) => encodeURIComponent(part)).join("/");
    uniqueImages.push({
      relPath: img.relPath,
      filename: img.filename,
      src: webSrc,
      category: img.category,
    });
  }
}

fs.writeFileSync(outputFile, JSON.stringify(uniqueImages, null, 2) + "\n", "utf8");
console.log(`Updated gallery manifest: scanned ${allImages.length} images, indexed ${uniqueImages.length} unique photos.`);

// Per-pillar photo sets for the home page "Pillars of Change" cards. Deduplicated only
// within each pillar, so photos also present in images/ still appear here.
const pillarFolders = {
  clinic: { category: "Advocacy Clinic", dirs: ["Pillars Of Change/Advocacy Clinics"] },
  voices: {
    category: "Voices Unheard",
    dirs: ["Pillars Of Change/Voices Unheard & Slam Poetry Performance", "voices"],
  },
  f1: { category: "F1 in Schools", dirs: ["Pillars Of Change/F1-Marketing & Social initiative", "f1"] },
  readingRoom: {
    category: "Reading Room & Literacy",
    dirs: ["Pillars Of Change/Teacher Training Program", "books"],
  },
};

function collectPillarMedia(fileRe) {
  const media = {};
  for (const [key, { category, dirs }] of Object.entries(pillarFolders)) {
    const seen = new Set();
    media[key] = [];
    for (const dir of dirs) {
      const abs = path.join(publicDir, dir);
      if (!fs.existsSync(abs)) continue;
      const files = scanDir(abs, dir, fileRe).sort((a, b) =>
        a.relPath.localeCompare(b.relPath, undefined, { sensitivity: "base", numeric: true })
      );
      for (const file of files) {
        if (seen.has(file.hash)) continue;
        seen.add(file.hash);
        media[key].push({
          relPath: file.relPath,
          filename: file.filename,
          src: "/" + file.relPath.split("/").map((part) => encodeURIComponent(part)).join("/"),
          category,
        });
      }
    }
  }
  return media;
}

const summarize = (media) =>
  Object.entries(media)
    .map(([k, v]) => `${k}=${v.length}`)
    .join(", ");

const pillarGalleries = collectPillarMedia(IMAGE_FILE_RE);
fs.writeFileSync(
  path.join(root, "data", "pillar-galleries.json"),
  JSON.stringify(pillarGalleries, null, 2) + "\n",
  "utf8"
);
console.log(`Updated pillar galleries: ${summarize(pillarGalleries)}.`);

const pillarVideos = collectPillarMedia(VIDEO_FILE_RE);
fs.writeFileSync(
  path.join(root, "data", "pillar-videos.json"),
  JSON.stringify(pillarVideos, null, 2) + "\n",
  "utf8"
);
console.log(`Updated pillar videos: ${summarize(pillarVideos)}.`);
