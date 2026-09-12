// ---------------------------------------------------------------------------
// SITE / PERSONAL CONFIGURATION
// Edit this file to update personal details, navigation, and social links.
// ---------------------------------------------------------------------------

export const personal = {
  fullName: "John Vince T. Lopez",
  firstName: "John Vince",
  monogram: "JVL",
  title: "Web & Mobile Developer",
  typingTitles: [
    "Web & Mobile Developer",
    "React Front-End Developer",
    "Flutter & React Native Developer",
    "Internal Systems Developer",
  ],
  heroGreeting: "Hi, I'm",
  heroStatement:
    "I build responsive websites, internal business systems, and mobile applications that turn everyday workflows into clear, practical digital experiences.",
  availabilityTags: ["React & Flutter", "Web + Mobile", "Retail systems experience"],
  portraitLabels: ["JVL · BUILD 01", "WEB + MOBILE"],
  summary:
    "Web Developer at New Era Cap Philippines under Authentic Caps Retail, Inc. I build and maintain user-focused web experiences for the retail and apparel industry, backed by experience in full-stack development, systems analysis, quality assurance, and interface design.",
  education: "Bachelor of Science in Information Technology",
  email: "johnvincelopez811@gmail.com",
  phone: "09764236545",
  location: "Philippines",
  // Add the file at this exact path/name — the Hero will pick it up
  // automatically once it exists.
  resumeFileName: "JohnVinceLopez_Resume.pdf",
  // Add the supplied portrait at this exact path/name to replace the
  // fallback: src/assets/images/john-vince-lopez-portrait.jpg
  profileImageFileName: "john-vince-lopez-portrait.jpg",
  portraitAlt: "John Vince Lopez holding a mechanical keyboard.",
};

// Replace these placeholder URLs with real profile links.
// Leave "" if a link isn't ready yet — the UI hides or disables buttons
// that point to an empty URL instead of linking to "#".
export const socials = {
  github: "", // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/john-vince-lopez-04644b369/",
  facebook: "", // e.g. "https://facebook.com/your-profile"
  upwork: "https://www.upwork.com/freelancers/~01b1502079cf01dc74",
};

export const navLinks = [
  { label: "Home", to: "hero" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Process", to: "process" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

// Drives the Build Index rail (site-wide navigation signature) — one
// entry per major section, in narrative order.
export const buildIndex = [
  { num: "01", to: "hero", label: "Welcome" },
  { num: "02", to: "services", label: "Services" },
  { num: "03", to: "projects", label: "Works" },
  { num: "04", to: "process", label: "Process" },
  { num: "05", to: "about", label: "Profile" },
  { num: "06", to: "skills", label: "Stack" },
  { num: "07", to: "experience", label: "Journey" },
  { num: "08", to: "contact", label: "Reach Out" },
];

// Compact, verified capability preview shown inside the Hero composition.
export const heroContacts = [
  {
    type: "email",
    label: "Email",
    value: "johnvincelopez811@gmail.com",
    href: "mailto:johnvincelopez811@gmail.com",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "View Profile",
    href: "https://www.linkedin.com/in/john-vince-lopez-04644b369/",
  },
  {
    type: "viber",
    label: "Viber",
    value: "+639432143041",
    href: "viber://chat?number=%2B639432143041",
  },
];
export const footerClosingLine = "Built with clarity, curiosity, and continuous improvement.";

export const aboutPreview = {
  paragraphs: [
    "I'm currently a Web Developer for New Era Cap Philippines under Authentic Caps Retail, Inc., a company in the retail, apparel, fashion, and clothing accessories industry.",
    "I enjoy turning business needs into clear, responsive, and practical web experiences while continuing to grow across web and mobile development.",
  ],
  facts: [
    { label: "Current role", value: "Web Developer" },
    { label: "Brand", value: "New Era Cap Philippines" },
    { label: "Company", value: "Authentic Caps Retail, Inc." },
    { label: "Industry", value: "Retail & Apparel" },
  ],
};

export const aboutPage = {
  journey:
    "My development journey began with web and mobile projects, then expanded through systems analysis and quality assurance work. Today, I apply that foundation as a Web Developer for New Era Cap Philippines under Authentic Caps Retail, Inc.",
  approach:
    "I start by understanding the actual problem and who's affected by it before touching a design tool or a code editor. From there I prototype the interface, break the build into manageable pieces, and test as I go rather than at the very end.",
  currentlyLearning: ["Advanced React patterns", "API design", "Automated testing"],
  values: [
    "Clear, honest communication about progress and blockers",
    "Writing code that the next person — including future me — can actually follow",
    "Treating feedback as part of the process, not a setback",
  ],
  goals:
    "I'm focused on growing as a Web Developer, improving the quality of the digital experiences I build, and expanding my skills in modern front-end and full-stack development.",
};

// Formspree endpoint for the contact form. Leave empty until a form is
// created at https://formspree.io, e.g. "https://formspree.io/f/xxxxxxx".
// While empty, the contact form opens a pre-filled mailto: link instead,
// so it never displays a false "message sent" confirmation.
export const formspreeEndpoint = "";
