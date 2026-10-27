import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { about } from "@/data/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGalleryImageCaption(filename: string, index: number, category?: string): string {
  const name = filename.toLowerCase();

  // Known specific key photos
  if (name.includes("ib_winner")) return "IB Global Youth Action Fund Winner — Official Recognition";
  if (name.includes("2026_work_1")) return "Noida Sector 8 Anganwadi clinic session";
  if (name.includes("2026_work_2")) return "Community outreach and legal awareness program";
  if (name.includes("2026_work_3")) return "One-on-one documentation support with a beneficiary";
  if (name.includes("2026_work_4")) return "Distributing welfare scheme information brochures";
  if (name.includes("2026_work_5")) return "Story documentation session with community members";
  if (name.includes("2026_work_6")) return "Advocacy session with mothers at Noida Anganwadi";
  if (name.includes("community_dialogue")) return "Community dialogue and scheme orientation circle";
  if (name.includes("community_hearth")) return "Listening session with community elders & mothers";
  if (name.includes("voices_stage_duet")) return "Voices Unheard stage performance at school auditorium";
  if (name.includes("voices_ensemble")) return "Voices Unheard youth ensemble slam poetry showcase";
  if (name.includes("voices_performance")) return "Slam poetry advocacy — sharing community stanzas";
  if (name.includes("teacher-training") || name.includes("teacher training")) {
    return "Teacher training workshop in foundational pedagogy — Shakurpur";
  }
  if (name.includes("reading room")) return "Shakurpur Community Reading Room with SEWA Bharti & Kitaab4U";

  // Category based captions
  if (category === "F1 in Schools" || name.includes("f1") || name.includes("blaze")) {
    const f1Captions = [
      "Team Blaze pit display engineering & branding showcase",
      "Representing India at F1 in Schools World Finals",
      "Women in STEM interview campaign & outreach fair",
      "Budget control & sponsorship coordination for Team Blaze",
      "F1 in Schools World Finals race display & sustainability presentation",
    ];
    return f1Captions[index % f1Captions.length];
  }

  if (category === "Reading Room & Literacy") {
    const readingCaptions = [
      "Shakurpur Community Reading Room — student learning circle",
      "Curating book bank shelves & foundational literacy materials",
      "Collaborative teacher training with SEWA Bharti educators",
      "Interactive reading circles empowering young readers",
    ];
    return readingCaptions[index % readingCaptions.length];
  }

  if (category === "Voices Unheard") {
    const voicesCaptions = [
      "Voices Unheard — turning community stories into spoken verse",
      "Consent-based slam poetry performance on stage",
      "Youth advocacy through rhythm, stanza, and lived experience",
    ];
    return voicesCaptions[index % voicesCaptions.length];
  }

  return about.galleryCaptions[index % about.galleryCaptions.length];
}
