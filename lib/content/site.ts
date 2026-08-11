export const site = {
  org: {
    fullName: "Rights to Reality Advocacy Clinic",
    shortName: "Voices Unheard",
    tagline: "Student-led advocacy initiative",
    description:
      "A high-impact storytelling and legal-literacy initiative that turns rights on paper into lived dignity — through clinics, creative work, and community voice.",
  },
  hero: {
    titleLead: "Voices",
    titleAccent: "Unheard",
    subtitle: "Student-led advocacy initiative",
    eyebrow: "Rights to Reality Advocacy Clinic",
    quoteLines: [
      "Some voices are not silent.",
      "They are simply unheard.",
    ] as const,
    primaryCta: "Explore the story",
    secondaryCta: "See our impact",
  },
  hook: {
    lines: [
      "Behind every number is a story.",
      "Behind every story is a voice.",
      "And too many remain unheard.",
    ],
  },
  about: {
    heading: "Why we exist",
    eyebrow: "About",
    lead:
      "Rights should not end at the margin of a textbook. We bridge law, empathy, and community storytelling so people can recognize, claim, and exercise their rights in real life.",
    body: [
      "The clinic is run by students alongside mentors: part legal literacy, part narrative change. We listen first, then equip neighbors and peers with clear information and dignified pathways to action.",
      "“Voices Unheard” is our creative spine — poetry, film, and testimony that make statistics feel human, and make silence visible.",
    ],
  },
  problems: [
    {
      title: "Rights without routes",
      description:
        "People often know something is wrong — but not what to call it, where to go, or whom to trust.",
      image: "/mock1.jpg" as const,
    },
    {
      title: "Stories left out of the record",
      description:
        "Policy debates rarely carry the texture of everyday harm: eviction fear, classroom exclusion, workplace silence.",
      image: "/mock2.jpg" as const,
    },
    {
      title: "Advocacy that feels out of reach",
      description:
        "Formal systems can feel cold and fast. Without translation and support, many never enter the door.",
      image: "/mock1.jpg" as const,
    },
  ],
  solution: {
    clinic: {
      title: "Advocacy Clinic",
      points: [
        "Know-your-rights sessions and guided intakes",
        "Referral mapping with community partners",
        "Plain-language resources you can actually use",
      ],
    },
    voices: {
      title: "Voices Unheard",
      points: [
        "Creative storytelling: poetry, short film, audio",
        "Public exhibits and readings that center lived experience",
        "A living archive of community testimony (with consent)",
      ],
    },
  },
  timeline: [
    {
      phase: "Listen",
      detail:
        "Community dialogues and safe listening rooms to name priorities without judgment.",
    },
    {
      phase: "Translate",
      detail:
        "Turn law into language people can hold: FAQs, walkthroughs, and role-play scenarios.",
    },
    {
      phase: "Accompany",
      detail:
        "Navigate next steps together — paperwork, timelines, and referrals with dignity.",
    },
    {
      phase: "Amplify",
      detail:
        "Creative work that carries truth to wider audiences and shifts what “counts” as evidence.",
    },
  ],
  impact: {
    heading: "Impact that compounds",
    eyebrow: "Outcomes",
    narrative:
      "We measure what matters: confidence, clarity, and connection — not vanity metrics. Numbers here are illustrative placeholders you can replace with audited figures.",
    stats: [
      { label: "Neighbors reached", value: 1200, suffix: "+" },
      { label: "Clinic hours", value: 340, suffix: "" },
      { label: "Creative pieces published", value: 48, suffix: "" },
      { label: "Partner organizations", value: 12, suffix: "" },
    ],
  },
  future: {
    heading: "Where we’re going",
    eyebrow: "Future vision",
    items: [
      {
        title: "Regional student chapters",
        description: "Replicate the clinic model with shared ethics and local leadership.",
        icon: "network" as const,
        image: "/mock1.jpg" as const,
      },
      {
        title: "Rights-to-reality toolkit",
        description: "Open, multilingual templates for schools and community hubs.",
        icon: "book" as const,
        image: "/mock2.jpg" as const,
      },
      {
        title: "Impact fellowship",
        description: "Fund storytellers and paralegal mentors as peers, not “cases.”",
        icon: "users" as const,
        image: "/mock2.jpg" as const,
      },
      {
        title: "Policy translation lab",
        description: "Turn community testimony into briefs decision-makers can hear.",
        icon: "scale" as const,
        image: "/mock1.jpg" as const,
      },
    ],
  },
  gallery: {
    heading: "Moments from the field",
    eyebrow: "Gallery",
    caption: "Placeholder media — swap with client-approved photography and film.",
  },
  poetry: {
    heading: "A fragment",
    eyebrow: "Poetry",
    lines: [
      "If a right is written and no one reads it,",
      "does it still sound like protection?",
      "We carry the answer in our throats —",
      "a chorus waiting for daylight.",
    ],
    attribution: "— Voices Unheard collective",
  },
} as const;
