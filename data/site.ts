/** Rights to Reality Advocacy Clinic — hardcoded content */

export const siteMeta = {
  title: "Voices Unheard",
  brand: "Rights to Reality - Srishti Aggarwal",
  org: "Rights to Reality Advocacy Clinic",
  founder: "Srishti Aggarwal",
  school: "The British School, New Delhi",
  partnerNgo: "Hamari Pahchan NGO",
  linkedin: "https://www.linkedin.com/in/srishti-aggarwal-5734303b9/",
  description:
    "A youth-led social initiative empowering underprivileged women through welfare scheme enrollment and slam poetry performed at schools and literary festivals.",
} as const;

/** Shared SEO keywords and Open Graph defaults (see `lib/seo.ts`). */
export const siteSeo = {
  locale: "en_IN",
  /** Open Graph / Twitter preview image under `/public` (ideally 1200×630). */
  ogImagePath: "/images/IMG_5800.jpg",
  keywords: [
    "Voices Unheard",
    "Rights to Reality Advocacy Clinic",
    "youth advocacy",
    "women welfare schemes",
    "India NGO",
    "New Delhi",
    "slam poetry",
    "social initiative",
    "Hamari Pahchan",
    "legal literacy",
    "community storytelling",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Founder" },
  { href: "/initiative", label: "Initiative" },
  { href: "/impact", label: "Impact" },
  { href: "/voices", label: "Voices Unheard" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Get Involved" },
] as const;

export const home = {
  heroSub:
    "A 12-month advocacy movement transforming real stories into slam poetry — bridging privileged spaces with marginalized voices.",
  stats: [
    { value: 2000, suffix: "+", label: "Women Reached" },
    { value: 800, suffix: "+", label: "Children Impacted" },
    { value: 2500, suffix: " USD", label: "IB Global Grant" },
    { value: 12, suffix: "", label: "Months of Impact" },
  ] as const,
  whatIs: {
    body: `Voices Unheard pairs on-the-ground welfare advocacy with ethical storytelling. Weekly sessions build trust; documented stories become slam poetry that travels to schools and festivals — so marginalized voices are present in privileged spaces.`,
    steps: [
      { title: "Weekly Sessions", desc: "Scheme education & enrollment support" },
      { title: "Story Collection", desc: "Consent-based documentation with dignity" },
      { title: "Poetry Performance", desc: "Slam poetry at schools & festivals" },
    ] as const,
  },
  poemTicker: [
    "Silence is not absence — it is a room waiting for a microphone.",
    "We enroll schemes in the morning; we perform truth in the evening.",
    "Every stanza here began as a kitchen table conversation.",
    "What we whisper in circles, we owe to the stage — with consent, with care.",
  ] as const,
  ctaBanner: "One Student. One Initiative. Ripples of Change.",
} as const;

export const about = {
  tagline:
    "Turning lived experiences into slam poems. Turning slam poems into policy conversations.",
  badges: [
    "Founder · Rights to Reality",
    "Co-Founder · Shakurpur Reading Room",
    "IB Global Youth Action Fund Winner",
    "F1 in Schools World Finalist · Team Blaze",
    "Student · The British School, New Delhi",
    "Advocate · Hamari Pahchan NGO",
  ] as const,
  story: {
    beginning: `Srishti began volunteering with Hamari Pahchan NGO in November 2024, assisting underprivileged women with welfare scheme documentation and education access in slum communities around Delhi. What started as practical advocacy quickly became something deeper — she was listening.`,
    turning: `Through 12 months of weekly on-ground sessions, Srishti documented 100+ life stories with informed consent. She observed a fundamental gap: even in the same city, marginalized voices were entirely absent from mainstream narratives. Schools, festivals, and public discourse were missing the stories of the women she sat beside every week.`,
    voices: `Srishti founded Voices Unheard as a creative sub-initiative — adapting ten of the most powerful stories into slam poetry, which she performs at school events and literary festivals. She also recruited and trained five student volunteers in ethical storytelling and consent-based narrative collection.`,
    clinic: `Her primary vehicle is the Rights to Reality Advocacy Clinic, where she works across Anganwadi Centres in Sector 8, Noida, as well as multiple Anganwadi Centres in Vasant Kunj, Inder Camp, and Israel Camp in the Mahipalpur area. In collaboration with Hamari Pehchaan NGO, she leads weekly sessions and has conducted awareness programs on government schemes like PMMVY, Sukanya Samriddhi, Mahila Shakti Kendra, and One Stop Centre. To date, the initiative has reached over 2,000 women and positively impacted more than 800 children.`,
  },
  values: [
    { title: "Ethical Storytelling", desc: "Consent and dignity at every step." },
    { title: "Consent-First", desc: "No story moves without clear permission." },
    { title: "Community Trust", desc: "Relationships before outcomes." },
    { title: "Youth Leadership", desc: "Students as peers, not saviours." },
    { title: "Creative Advocacy", desc: "Poetry as public truth-telling." },
    { title: "SDG 10 Alignment", desc: "Reduced inequalities, concretely." },
  ] as const,
  statStrip: [
    "12 months",
    "2,000+ women",
    "800+ children",
    "USD 2,500 grant",
    "10 poems",
    "5 volunteers",
    "4 welfare schemes",
  ] as const,
  quote:
    "Voices Unheard transforms silence into storytelling, and storytelling into social change.",
  galleryCaptions: [
    "Weekly advocacy session",
    "Scheme enrollment workshop",
    "Performing at school event",
    "Community storytelling circle",
    "Volunteer training session",
    "With Hamari Pahchan team",
  ] as const,
} as const;

export const initiative = {
  cards: [
    {
      title: "Advocacy Clinic & Welfare Access",
      desc: "Weekly Anganwadi sessions guiding women through welfare scheme documentation, legal protections, and government entitlements.",
      image: "/Pillars%20Of%20Change/Advocacy%20Clinics/1%20Right%20Of%20Reality%20.jpeg",
      tag: "Grassroots Action",
      href: "#clinic",
    },
    {
      title: "Voices Unheard: Slam Poetry Performance",
      desc: "Transforming lived community conversations into spoken-word poetry performed across school assemblies and literary festivals.",
      image: "/Pillars%20Of%20Change/Voices%20Unheard%20%26%20Slam%20Poetry%20Performance/2.jpeg",
      tag: "Stage Advocacy",
      href: "#process",
    },
    {
      title: "F-1 World National Finals, Marketing & Social initiative",
      desc: "Representing India at World & National Finals managing marketing, sustainability strategy, pit display design, and Women in STEM campaigns.",
      image: "/Pillars%20Of%20Change/F1-Marketing%20%26%20Social%20initiative/1.jpeg",
      tag: "Marketing & Social initiative",
      href: "#f1",
    },
    {
      title: "Community Reading & Literacy Hub",
      desc: "Establishing community reading sanctuaries paired with educator training workshops alongside SEWA Bharti and Kitaab4U.",
      image: "/Pillars%20Of%20Change/Teacher%20Training%20Program/1.jpeg",
      tag: "Community Literacy",
      href: "#reading-room",
    },
  ] as const,
  accordion: [
    {
      title: "Scheme Education & Guidance",
      content:
        "Clear breakdowns of eligibility, required documentation, and timelines for government schemes.",
    },
    {
      title: "Hands-on Enrollment Assistance",
      content:
        "Direct support for PMMVY, Sukanya Samriddhi, and social protection application submissions.",
    },
    {
      title: "Volunteer Training & Ethics",
      content:
        "Student volunteers trained in informed consent, dignity-first intake, and respectful documentation.",
    },
    {
      title: "Dedicated Follow-up & Verification",
      content:
        "Routine check-ins to ensure verified benefits reach the beneficiary bank accounts.",
    },
  ] as const,
  steps: [
    { title: "Listen", desc: "Community dialogue with empathy and dignity" },
    { title: "Consent", desc: "Informed, written permission before any story moves" },
    { title: "Craft", desc: "Transforming real narratives into poetic stanzas" },
    { title: "Perform", desc: "Amplifying voices on school and festival stages" },
  ] as const,
  schemes: [
    {
      name: "PMMVY",
      tag: "Maternal Health",
      full: "Pradhan Mantri Matru Vandana Yojana",
      who: "Pregnant women & lactating mothers (₹5,000 direct benefit transfer).",
    },
    {
      name: "Sukanya Samriddhi",
      tag: "Girl Child",
      full: "Sukanya Samriddhi Yojana",
      who: "Girl children under 10 — high-interest savings for education and marriage.",
    },
    {
      name: "Mahila Shakti Kendra",
      tag: "Empowerment",
      full: "Mahila Shakti Kendra Scheme",
      who: "Rural & peri-urban women seeking skill training, digital literacy, and rights.",
    },
    {
      name: "One Stop Centre",
      tag: "Crisis Support",
      full: "One Stop Centre Scheme",
      who: "Women facing violence or distress — medical, legal, and counseling aid.",
    },
  ] as const,
} as const;

export const f1Data = {
  title: "F-1 World National Finals, Marketing & Social initiative",
  team: "Team Blaze",
  school: "The British School, New Delhi",
  role: "Marketing, Budget Control and Sustainability Manager",
  tagline: "Represented India at the F-1 World National Finals",
  summary:
    "Represented India at the F-1 World National Finals as Marketing, Budget Control and Sustainability Manager for Team Blaze (The British School). Directed the team's branding and communication, managed budget and financial planning, and worked on incorporating sustainability into the project. Led a Women in STEM interview campaign highlighting representation and workplace experiences, handled social media, conducted school-wide awareness fairs, arranged corporate sponsors, and designed the team's official pit display.",
  highlights: [
    {
      title: "Women in STEM Campaign",
      desc: "Conceived and led an interview campaign highlighting female representation, workplace experiences, and STEM pathways.",
      emoji: "👩‍🔬",
    },
    {
      title: "Marketing & Communication",
      desc: "Directed Team Blaze's branding, public communication strategy, and managed high-impact social media campaigns.",
      emoji: "📢",
    },
    {
      title: "Budget Control & Sponsors",
      desc: "Helped manage project budget, financial planning, resource allocation, and arranged corporate sponsors.",
      emoji: "💼",
    },
    {
      title: "Sustainability Manager",
      desc: "Spearheaded sustainable practices and environmental integration throughout the car build and presentation.",
      emoji: "🌱",
    },
    {
      title: "Pit Display Design",
      desc: "Designed and engineered the official competition pit display showcasing the team's engineering and marketing achievements.",
      emoji: "🏎️",
    },
    {
      title: "School Awareness Fair",
      desc: "Organized hands-on STEM and F1 awareness fairs across The British School to inspire and engage younger students.",
      emoji: "🎯",
    },
  ] as const,
  bulletPoints: [
    "Represented India at the F1 in Schools World Finals with Team Blaze",
    "Served as Marketing, Budget Control and Sustainability Manager",
    "Led the 'Women in STEM' interview campaign spotlighting representation and workplace experiences",
    "Directed branding, communication, and social media outreach",
    "Managed budget, financial planning, and arranged corporate sponsorships",
    "Designed and executed the team's official competition pit display and conducted school awareness fairs",
  ] as const,
  media: {
    poster: "/in-the-communities/f1.png",
    teamPhoto: "/Pillars%20Of%20Change/F1-Marketing%20%26%20Social%20initiative/1.jpeg",
  },
} as const;

export const readingRoom = {
  title: "Community Reading Room & Teacher Training Programme",
  location: "Shakurpur, Delhi",
  partner: "SEWA Bharti & Kitaab4U",
  lead: "Srishti Aggarwal & Vedika",
  paragraphs: [
    "A joint initiative by Srishti Aggarwal and Vedika (founder of Kitaab4U), in collaboration with SEWA Bharti, establishing a safe community learning sanctuary and teacher training hub in Shakurpur, Delhi.",
    "Vedika mobilised community book drives collecting 100+ titles, while Srishti provided the structural book racks, teacher training resources, and educational materials to create a lasting, accessible ecosystem for educators and children.",
  ],
  highlights: [
    {
      emoji: "📚",
      title: "100+ Shelved Books",
      desc: "Curated collection spanning early literacy, storybooks, and foundational learning.",
    },
    {
      emoji: "🤝",
      title: "Youth Collaboration",
      desc: "Srishti & Vedika (Kitaab4U) combined efforts to build sustainable community infrastructure.",
    },
    {
      emoji: "🗂️",
      title: "Book Racks & Setup",
      desc: "Structural library shelving and materials donated to establish a permanent resource space.",
    },
    {
      emoji: "👩‍🏫",
      title: "Teacher Training",
      desc: "Workshops empowering local educators with modern foundational literacy pedagogy.",
    },
    {
      emoji: "🌱",
      title: "Safe Community Space",
      desc: "Weekly reading circles hosted at SEWA Bharti Center empowering local children.",
    },
  ] as const,
  media: [
    { type: "image", src: "/books/teacher-training-session-1.jpg", alt: "Teacher training workshop in Shakurpur" },
    { type: "image", src: "/books/teacher-training-session-2.jpg", alt: "Educator engagement and foundational learning pedagogy" },
    { type: "image", src: "/books/Reading room 1.jpeg", alt: "Children reading in Shakurpur Reading Room" },
    { type: "image", src: "/books/Reading Room 2.jpeg", alt: "Book bank shelves and students" },
    { type: "image", src: "/books/Reading room 4.jpeg", alt: "Reading session in progress" },
    { type: "image", src: "/books/Reading room 5.jpeg", alt: "Children with books" },
    { type: "image", src: "/books/Reading room 6.jpeg", alt: "Book donation distribution" },
    { type: "image", src: "/books/Reading room 7.jpeg", alt: "Book bank racks setup" },
    { type: "image", src: "/books/Reading Room 9.jpeg", alt: "Students engaged in story time" },
    { type: "video", src: "/books/Reading room 8.mp4", alt: "Reading Room video activity" },
    { type: "video", src: "/books/Reading room 10.mp4", alt: "Interactive session at Reading Room" },
  ] as const,
} as const;

export const impactPage = {
  heroSub: "Concrete welfare access, youth citizenship in action, and marginalized voices amplified on public stages.",
  heroImage: {
    src: "/images/2026_work_6.jpeg",
    alt: "Srishti Aggarwal presenting the Rights to Reality government welfare scheme guides during on-ground outreach",
  },
  pillars: [
    {
      title: "Communities & Families",
      imageSrc: "/images/2026_work_2.jpeg",
      imageAlt: "Community outreach and legal awareness session in Sector 8, Noida",
      stat: "2,000+ Women",
      bullets: [
        "Informed consent at every interaction",
        "Direct welfare scheme enrollments",
        "Lived realities voiced in public spheres",
      ],
    },
    {
      title: "Students & Youth Volunteers",
      imageSrc: "/images/2026_work_5.jpeg",
      imageAlt: "Student volunteer assisting community members with scheme documentation",
      stat: "5 Trained Peers",
      bullets: [
        "Active citizenship beyond classroom theory",
        "Ethical listening and dignity-first intake",
        "Long-term culture of community service",
      ],
    },
    {
      title: "Societal Dialogue",
      imageSrc: "/in-the-communities/voice-unheard-theatre.jpg",
      imageAlt: "Voices Unheard slam poetry performance amplifying community narratives on public stages",
      stat: "10 Slam Poems",
      bullets: [
        "Slam poetry as an advocacy catalyst",
        "Connecting grassroots to premier schools",
        "Replicable youth action blueprint",
      ],
    },
  ] as const,
  counters: [
    { label: "Women Reached", value: 2000, suffix: "+" },
    { label: "Children Impacted", value: 800, suffix: "+" },
    { label: "IB Global Grant", value: 2500, suffix: " USD" },
    { label: "Original Stanzas", value: 10, suffix: " Poems" },
  ] as const,
  testimonials: [
    {
      quote:
        "Someone explained the forms in plain language and stayed with me until submission — I didn’t feel rushed.",
      name: "Community Participant",
      role: "Mahipalpur Clinic",
    },
    {
      quote:
        "Training in consent-based listening changed how I see my city. It feels like real citizenship.",
      name: "Student Volunteer",
      role: "The British School",
    },
    {
      quote:
        "When poetry meets welfare work, women see themselves reflected with dignity.",
      name: "Field Collaborator",
      role: "Hamari Pahchan NGO",
    },
  ] as const,
  sdg: {
    title: "SDG 10 — Reduced Inequalities",
    body:
      "Bridging the resource and awareness gap between privileged institutions and peri-urban settlements through direct scheme enrollment and narrative representation.",
    also: "Also advancing SDG 4 (Quality Education) and SDG 5 (Gender Equality).",
  },
} as const;

export const voicesPage = {
  heroSub:
    "Ethical documentation meets performance poetry — transforming kitchen-table conversations into catalysts for change.",
  flow: [
    { step: "01", title: "Listen", desc: "Weekly community conversations in Anganwadis" },
    { step: "02", title: "Consent", desc: "Informed, respectful permission to share" },
    { step: "03", title: "Craft", desc: "Preserving raw authenticity in verse" },
    { step: "04", title: "Perform", desc: "Stage advocacy at schools and festivals" },
  ] as const,
  performances: [
    { event: "Winter Literary Evening", date: "Feb 2026", venue: "New Delhi", status: "Upcoming" as const },
    { event: "School Assembly Feature", date: "Nov 2025", venue: "The British School", status: "Past" as const },
    { event: "Community Festival Stage", date: "Apr 2026", venue: "New Delhi", status: "Upcoming" as const },
  ] as const,
} as const;

export const timelineData = {
  phases: [
    {
      id: "p1",
      number: "01",
      title: "November 2024",
      headline: "Grassroots Volunteering & Direct Immersion",
      summary:
        "Began on-the-ground volunteering with Hamari Pahchan NGO in underserved Delhi settlements, listening directly to families and navigating public assistance paperwork.",
      location: "Slum communities across Delhi",
      badge: "Grassroots Foundation",
      stat: "Ground-Level Intake",
      dot: "burgundy" as const,
      items: [
        "Volunteered weekly with Hamari Pahchan NGO across peri-urban settlements in Delhi",
        "Assisted women directly with welfare documentation, birth certificates, and ID cards",
        "Identified systemic bottlenecks in public awareness, digital barriers, and scheme enrollment follow-through",
      ],
    },
    {
      id: "p2",
      number: "02",
      title: "Mid 2025",
      headline: "Clinic Formalisation & Peer Volunteer Network",
      summary:
        "Standardised the Rights to Reality Advocacy Clinic model and trained a team of 5 student volunteers from The British School in dignity-first intake and consent protocols.",
      location: "Mahipalpur & Sector 8 Noida",
      badge: "Institutional Structure",
      stat: "5 Trained Peers",
      dot: "gold" as const,
      items: [
        "Formalised Rights to Reality Advocacy Clinic into a replicable, youth-driven community model",
        "Recruited and trained 5 student peer volunteers in informed consent, ethical interviewing, and casework",
        "Conducted detailed baseline surveys across Anganwadi Centres in Mahipalpur (Inder & Israel Camps) and Noida",
      ],
    },
    {
      id: "p3",
      number: "03",
      title: "November 2025",
      headline: "Voices Unheard & Creative Advocacy",
      summary:
        "Launched Voices Unheard to bridge privileged spaces with grassroots narratives, transforming 100+ recorded community conversations into 10 slam poems performed at festivals.",
      location: "Anganwadis & School Stages",
      badge: "Creative Advocacy",
      stat: "100+ Stories · 10 Poems",
      dot: "green" as const,
      items: [
        "Established regular weekly advocacy clinics across Noida Sector 8 and Mahipalpur settlements",
        "Founded Voices Unheard: collected 100+ life stories with consent and adapted 10 into spoken-word stanzas",
        "Enrolled 100+ women into maternity and savings schemes (PMMVY, Sukanya Samriddhi) and facilitated 30 school admissions",
      ],
    },
    {
      id: "p4",
      number: "04",
      title: "2026 Winner",
      headline: "IB Global Youth Action Fund Winner & Scale",
      summary:
        "Selected as a Global Winner of the International Baccalaureate Youth Action Fund, receiving a USD 2,500 grant and recognition from the UP Ministry of Women's Welfare.",
      location: "Global IB Community & UP Ministry",
      badge: "Global Recognition",
      stat: "$2,500 IB Grant Awarded",
      dot: "burgundy" as const,
      items: [
        "Selected as Global Winner of the prestigious IB Global Youth Action Fund with a grant of ~USD 2,500",
        "Work acknowledged and supported by the UP Ministry of Women's Welfare, Child Development and Nutrition",
        "Expanded overall initiative footprint to over 2,000 women reached and 800+ children positively impacted",
      ],
    },
  ] as const,
} as const;

export const contact = {
  involvement: [
    {
      title: "Volunteer With Us",
      desc: "Join our weekly Anganwadi clinics or assist with youth reading sessions.",
      badge: "Grassroots",
    },
    {
      title: "Partner Institution",
      desc: "Host a slam poetry performance or co-host welfare education workshops.",
      badge: "Collaboration",
    },
    {
      title: "Share Your Story",
      desc: "Confidential, dignity-first conversations for women and community members.",
      badge: "Community",
    },
  ] as const,
} as const;

export const achievements = {
  title: "Global Recognition & Grants",
  founderSnippet: "Srishti Aggarwal is a young changemaker who has demonstrated how youth-led action can create meaningful and measurable impact within underserved communities.",
  body: "Through her initiative, Rights to Reality Advocacy Clinic, Srishti has worked extensively with women and children across Anganwadi Centres in Noida (Sector 8), as well as multiple Anganwadi Centres in Vasant Kunj, Inder Camp, and Israel Camp in the Mahipalpur area. In collaboration with Hamari Pehchaan NGO, she has conducted awareness sessions to help families understand and access government welfare schemes, educational support, healthcare benefits, legal assistance, and various social protection programmes.",
  recognition: "The impact and innovation of the project have been recognised internationally. Srishti was selected as a winner of the International Baccalaureate (IB) Global Youth Action Fund, receiving a grant of approximately USD 2,500 to further develop and expand the Rights to Reality Advocacy Clinic. The funding has supported the project's continued grassroots outreach, community awareness initiatives, and efforts to create sustainable social impact.",
  ministryRecognition: "In addition to this international recognition, her work has also been acknowledged by the Uttar Pradesh Ministry of Women’s Welfare, Child Development and Nutrition and is being implemented in partnership with Hamari Pehchaan NGO, strengthening the initiative's reach and effectiveness.",
  impactDetails: "To date, the initiative has reached over 2,000 women and positively impacted more than 800 children by improving awareness of welfare schemes, education opportunities, healthcare support, and social protection programmes. Through regular field visits and community engagement, the project continues to empower underserved families with the knowledge and confidence to access government benefits designed for their well-being.",
  empathyClosing: "Beyond measurable outcomes, Rights to Reality Advocacy Clinic is rooted in empathy, advocacy, and meaningful community partnerships. Through continuous engagement with women at the grassroots, Srishti has gained valuable insights into the challenges faced by underserved communities while reinforcing her belief that informed, compassionate young leaders can become powerful catalysts for lasting social transformation.",
  ibLink: "https://ibo.org/festival-of-hope/youth-in-action/rights-to-reality-advocacy-clinic--voices-unheard?contentId=207578",
  highlights: [
    { text: "Winner – International Baccalaureate (IB) Global Youth Action Fund", emoji: "🏆" },
    { text: "Awarded a grant of approximately USD 2,500 to scale and strengthen the Rights to Reality Advocacy Clinic", emoji: "💰" },
    { text: "Implemented in partnership with Hamari Pehchaan NGO through sustained grassroots engagement", emoji: "🤝" },
    { text: "Recognised by the Uttar Pradesh Ministry of Women’s Welfare, Child Development and Nutrition for community-focused impact", emoji: "🏅" },
    { text: "Reached over 2,000 women through awareness sessions on government welfare schemes and social protection programmes", emoji: "👩" },
    { text: "Positively impacted more than 800 children by promoting access to educational support and child welfare initiatives", emoji: "📚" },
    { text: "Working across Anganwadi Centres in Noida, Vasant Kunj, Inder Camp, and Israel Camp (Mahipalpur) to improve awareness and accessibility of government benefits", emoji: "🌍" },
    { text: "Demonstrating the power of youth-led leadership in creating sustainable, community-driven social change", emoji: "🌱" }
  ] as const,
  featuredBy: "Featured by The British School for her outstanding achievement in securing the International Baccalaureate (IB) Global Youth Action Fund grant of approximately USD 2,500, recognising the impact and innovation of the Rights to Reality Advocacy Clinic.",
  schoolImage: "/images/ib_winner_official_poster.jpeg"
} as const;

