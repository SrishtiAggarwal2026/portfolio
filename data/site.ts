/** Rights to Reality Advocacy Clinic — hardcoded content */

export const siteMeta = {
  title: "Voices Unheard",
  org: "Rights to Reality Advocacy Clinic",
  founder: "Srishti Aggarwal",
  school: "The British School, New Delhi",
  partnerNgo: "Hamari Pahchan NGO",
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
  { href: "/initiative", label: "The Initiative" },
  { href: "/impact", label: "Impact" },
  { href: "/voices", label: "Voices Unheard" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Get Involved" },
] as const;

export const home = {
  flipWords: ["Heard", "Seen", "Empowered", "Amplified"] as const,
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
  venn: {
    circles: ["Privileged Youth", "Marginalized Communities", "Voices Unheard"] as const,
    center: "Poetry & Advocacy",
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
    "Turning lived experiences into poems. Turning poems into policy conversations.",
  badges: [
    "Founder · Rights to Reality",
    "Co-Founder · Shakurpur Reading Room",
    "IB Global Youth Action Fund Winner",
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
      title: "Rights to Reality Advocacy Clinic",
      desc: "Direct support: welfare enrollment, scheme education, follow-up.",
    },
    {
      title: "Voices Unheard",
      desc: "Creative wing: stories adapted into slam poetry for public stages.",
    },
  ] as const,
  accordion: [
    {
      title: "Scheme Introduction & Education",
      content:
        "Clear explanations of eligibility, documents, and timelines for key government programmes.",
    },
    {
      title: "Enrollment Assistance",
      content:
        "Hands-on support for PMMVY, Sukanya Samriddhi Yojana, Mahila Shakti Kendra, and One Stop Centre Scheme.",
    },
    {
      title: "Volunteer Training",
      content:
        "Five student volunteers trained in ethical intake, consent, and narrative documentation.",
    },
    {
      title: "Long-term Guidance & Follow-up",
      content:
        "Ongoing check-ins so enrollment translates into sustained benefit.",
    },
  ] as const,
  steps: [
    "Trust-Building & Community Engagement",
    "Ethical Story Listening Workshops",
    "Collaborative Documentation with Volunteers",
    "Poetry Crafting & Authenticity Preservation",
    "Community Feedback & Validation",
    "Performance & Advocacy at Schools/Festivals",
  ] as const,
  schemes: [
    {
      name: "PMMVY",
      full: "Pradhan Mantri Matru Vandana Yojana",
      who: "Pregnant women and lactating mothers (conditional cash transfer).",
    },
    {
      name: "Sukanya Samriddhi",
      full: "Sukanya Samriddhi Yojana",
      who: "Girl children — long-term savings and education support.",
    },
    {
      name: "Mahila Shakti Kendra",
      full: "Mahila Shakti Kendra Scheme",
      who: "Women seeking skills, information, and convergence of schemes.",
    },
    {
      name: "One Stop Centre",
      full: "One Stop Centre Scheme",
      who: "Women affected by violence — integrated support services.",
    },
  ] as const,
} as const;

export const readingRoom = {
  title: "Building a Community Reading Room with SEWA Bharti & Kitaab4U",
  location: "Shakurpur, Delhi",
  partner: "SEWA Bharti & Kitaab4U",
  lead: "Srishti Aggarwal & Vedika",
  paragraphs: [
    "As part of her commitment to promoting literacy and expanding access to educational resources, Srishti Aggarwal collaborated with SEWA Bharti and Kitaab4U to establish a Reading Room and Book Bank in Shakurpur, Delhi.",
    "The initiative was created to provide children from the local community with a dedicated space where regular reading sessions could be conducted, encouraging a culture of reading, curiosity, and lifelong learning. The Reading Room serves as a safe and accessible environment where children can explore books beyond their school curriculum and strengthen their literacy skills.",
    "The project was a joint initiative by Srishti Aggarwal and Vedika. Through her ongoing social initiative, Kitaab4U, Vedika led the collection of books from the community, while Srishti contributed by donating the book racks required to establish the Book Bank and supporting the collection of additional books. Together, they helped build a resource-rich learning space that will continue to benefit children for years to come.",
    "By combining community participation with meaningful youth leadership, the initiative transformed a simple idea into a sustainable educational resource, ensuring that children have greater access to books and opportunities to develop a lifelong love for reading.",
  ],
  highlights: [
    {
      emoji: "📚",
      title: "Reading Room & Book Bank",
      desc: "Established a Reading Room and Book Bank at SEWA Bharti, Shakurpur, to promote literacy among children.",
    },
    {
      emoji: "🤝",
      title: "Youth Collaboration",
      desc: "Joint initiative by Srishti Aggarwal and Vedika, combining their efforts to create a sustainable community learning space.",
    },
    {
      emoji: "📖",
      title: "Book Drive by Kitaab4U",
      desc: "Vedika, through her social initiative Kitaab4U, led the collection of donated books for the Reading Room.",
    },
    {
      emoji: "🗂️",
      title: "Infrastructure & Book Donation",
      desc: "Srishti donated the book racks required to establish the Book Bank and contributed additional books to expand the collection.",
    },
    {
      emoji: "👧",
      title: "Dedicated Learning Space",
      desc: "Created a dedicated space where regular reading sessions can be conducted, encouraging reading habits and improving access to educational resources.",
    },
    {
      emoji: "🌱",
      title: "Community Impact",
      desc: "Strengthened community learning by providing children with free access to books in a safe, welcoming, and engaging environment.",
    },
    {
      emoji: "💙",
      title: "Lasting Educational Change",
      desc: "Demonstrated the power of collaborative youth-led initiatives in creating lasting educational impact for underserved communities.",
    },
  ] as const,
  media: [
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
  heroSub: `Impact isn't just in numbers. It's in the student who volunteers for the first time, the community member who feels heard.`,
  heroImage: {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=80",
    alt: "A diverse group of children and adults smiling together outdoors",
  },
  pillars: [
    {
      title: "Impact on Communities",
      imageSrc:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=600&q=80",
      imageAlt: "People joining hands in a circle, representing community solidarity",
      bullets: [
        "Voices documented with informed consent",
        "Dignity-centered intake and follow-up",
        "Representation in privileged cultural spaces",
      ],
    },
    {
      title: "Impact on Students & Youth",
      imageSrc:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=600&q=80",
      imageAlt: "Students studying together at a shared table",
      bullets: [
        "Empathy over stereotypes",
        "Active citizenship in practice",
        "First-time volunteers building habits of service",
      ],
    },
    {
      title: "Broader Societal Impact",
      imageSrc:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&h=600&q=80",
      imageAlt: "Hands joined in unity against a bright sky",
      bullets: [
        "Literature as an advocacy tool",
        "Bridges between schools and NGOs",
        "A replicable model for peer chapters",
      ],
    },
  ] as const,
  counters: [
    { label: "Women Reached", value: 2000, suffix: "+" },
    { label: "Children Impacted", value: 800, suffix: "+" },
    { label: "IB Global Grant", value: 2500, suffix: " USD" },
    { label: "Poems Performed", value: 10, suffix: "" },
  ] as const,
  testimonials: [
    {
      quote:
        "Someone explained the forms in plain language and stayed with me until the application was submitted — I didn’t feel rushed.",
      name: "Community participant",
      role: "Mahipalpur",
    },
    {
      quote:
        "Training in consent-based documentation changed how I listen. It feels like real citizenship, not a checkbox activity.",
      name: "Student volunteer",
      role: "The British School",
    },
    {
      quote:
        "When poetry meets welfare work, people see themselves reflected with dignity — not reduced to numbers on a slide.",
      name: "Programme collaborator",
      role: "Hamari Pahchan NGO",
    },
  ] as const,
  sdg: {
    title: "SDG 10 — Reduced Inequalities",
    body:
      "Closing gaps in welfare access and whose stories appear in schools and festivals — concrete steps toward more equal voice and opportunity.",
    also: "Also contributing to SDG 4 (Quality Education) and SDG 5 (Gender Equality).",
  },
} as const;

export const voicesPage = {
  heroSub:
    "Ethical documentation meets performance poetry — so stories travel farther than any single neighbourhood.",
  flow: ["Real Story", "Ethical Documentation", "Slam Poetry", "Performed on Stage"] as const,
  performances: [
    { event: "Winter Literary Evening", date: "2026-02-14", venue: "New Delhi", status: "Upcoming" as const },
    { event: "School Assembly Feature", date: "2025-11-20", venue: "The British School", status: "Past" as const },
    { event: "Community Festival", date: "2026-04-05", venue: "New Delhi", status: "Upcoming" as const },
  ] as const,
} as const;

export const timelineData = {
  phases: [
    {
      id: "p1",
      title: "November 2024",
      dot: "burgundy" as const,
      items: [
        "Began volunteering with Hamari Pahchan",
        "Assisted women with welfare documentation",
        "Observed gaps in awareness and follow-up",
      ],
    },
    {
      id: "p2",
      title: "Mid 2025",
      dot: "gold" as const,
      items: [
        "Formalised Rights to Reality Advocacy Clinic",
        "Recruited and trained 5 student volunteers",
        "Launched baseline surveys in Mahipalpur",
        "Designed scheme-awareness measurement tools",
      ],
    },
    {
      id: "p3",
      title: "November 2025",
      dot: "green" as const,
      items: [
        "Weekly advocacy workshops and women-only circles",
        "250+ women reached through clinics",
        "Founded Voices Unheard creative wing",
        "100+ stories collected with informed consent",
        "10 stories adapted into slam poetry",
        "Performed at school events",
        "100+ women accessing schemes",
        "30 families supported with education applications",
        "Scale-up plans and funding proposals drafted",
      ],
    },
    {
      id: "p4",
      title: "2026 Winner",
      dot: "burgundy" as const,
      items: [
        "Selected as a winner of the IB Global Youth Action Fund",
        "Awarded USD 2,500 grant to scale and strengthen the Rights to Reality Advocacy Clinic",
        "Recognised by the Uttar Pradesh Ministry of Women’s Welfare, Child Development and Nutrition",
        "Sustained grassroots outreach: reached 2,000+ women and 800+ children",
        "Expanded operations to Noida Sector 8 and Vasant Kunj Anganwadi Centres",
      ],
    },
  ] as const,
} as const;

export const contact = {
  involvement: [
    { title: "Volunteer With Us", desc: "Join ethical storytelling and clinic support." },
    { title: "Partner as an NGO/School", desc: "Host performances or co-design workshops." },
    { title: "Share Your Story", desc: "We listen with dignity and consent." },
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
  schoolImage: "/achivements/img-1.jpeg"
} as const;

