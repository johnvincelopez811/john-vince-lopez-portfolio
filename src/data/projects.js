import sumbongCover from "../assets/projects/SUMBONG-Website-optimized.jpg";
import sumbongMobile from "../assets/projects/SUMBONG-Mobile-optimized.jpg";
import floraLaneMobile from "../assets/projects/FloralLane-Mobile-optimized.jpg";
import floraLaneWebsite from "../assets/projects/FloralLane-Website-optimized.jpg";
import codeWatchMobile from "../assets/projects/CodeWatch-Mobile-optimized.jpg";
import ntsWeb from "../assets/projects/NTS-Web-optimized.jpg";
import ntsMobile from "../assets/projects/04893468-2d60-41b8-8b89-da86a5f3b13f.png";
import ahciWebsite from "../assets/projects/AHCI-Website.png";

// ---------------------------------------------------------------------------
// PROJECTS
// `slug` is used for the /projects/:slug route. `coverImage` / `gallery`
// entries should point to files placed in src/assets/projects/ — leave
// them null/empty until real screenshots are available; the UI falls
// back to a clean placeholder instead of a broken image.
// `githubUrl` / `liveUrl` left as "" disable that action instead of
// linking to "#".
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "neticketing-system",
    slug: "neticketing-system",
    current: true,
    title: "Neticketing System",
    category: "Internal Retail Support System",
    status: "Active · Private",
    featured: true,
    summary: "A web and mobile support-ticket system for New Era Cap Philippines store teams.",
    problem: "Store concerns needed one clear and trackable reporting channel.",
    users: "New Era Cap Philippines store teams and internal support personnel.",
    solution: "A connected web and mobile workflow for submitting, reviewing, tracking, and resolving store tickets.",
    overview:
      "The main internal system I currently handle as Web Developer for New Era Cap Philippines, covering requests such as void approvals and store computer issues.",
    features: [
      "Web and mobile support ticket submission",
      "Void request reporting and tracking",
      "Computer and system concern monitoring",
      "Centralized ticket status and follow-up",
    ],
    technologies: ["Web Application", "Mobile Application", "Ticket Workflow", "Store Support"],
    tagsLabel: "System Focus",
    role: "Web & Mobile Developer — currently developing, maintaining, and supporting the system across platforms.",
    contributionType: "Current Role · Web & Mobile Developer",
    decisions: [],
    challenges: [
      {
        challenge: "Store concerns vary in urgency and type.",
        resolution: "The ticket workflow keeps requests organized, traceable, and easier to follow up.",
      },
    ],
    outcomes: "Provides a consistent internal process for reporting and tracking store support concerns.",
    lessons: "Internal tools work best when reporting steps are clear and status updates are easy to follow.",
    futureImprovements: [],
    coverImage: ntsWeb,
    mobileImage: ntsMobile,
    webPreviewLabel: "Web application",
    gallery: [],
    deviceType: "browser",
    isPrivate: true,
    placeholderTitle: "Private internal system",
    placeholderMessage: "The actual interface is not shown to protect company and operational information.",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "ahci-company-portfolio",
    slug: "ahci-company-portfolio",
    current: true,
    title: "AHCI Company Portfolio",
    category: "Professional Company Website",
    status: "Active · Professional",
    featured: false,
    summary: "As Web Developer, I handle ongoing AHCI website updates and manage company content through Strapi.",
    problem: "Company information and portfolio content need to stay accurate, organized, and current.",
    users: "Prospective clients, partners, applicants, and company stakeholders.",
    solution: "Maintain the public website and manage structured content through Strapi for faster, consistent updates.",
    overview: "I currently handle website updates and Strapi-managed content for the AHCI company portfolio.",
    features: [
      "Company portfolio and service content updates",
      "Strapi content management",
      "Website maintenance and quality checks",
    ],
    technologies: ["Strapi", "CMS", "Web Maintenance", "Content Management"],
    role: "Web Developer — handles website updates, content maintenance, and Strapi-managed publishing.",
    contributionType: "Web Developer · Updates & Strapi",
    decisions: [],
    challenges: [
      {
        challenge: "Keep company content current without disrupting the public website.",
        resolution: "Use structured Strapi content and review updates before publishing.",
      },
    ],
    outcomes: "Keeps the company portfolio current and easier to maintain through a structured content workflow.",
    lessons: "A clear CMS workflow makes frequent company updates safer and more consistent.",
    futureImprovements: [],
    coverImage: ahciWebsite,
    gallery: [],
    deviceType: "browser",
    placeholderTitle: "AHCI Company Portfolio",
    placeholderMessage: "Website updates and Strapi content management.",
    githubUrl: "",
    liveUrl: "https://ahci.com.ph/",
  },
  {
    id: "sumbong",
    slug: "sumbong",
    title: "SUMBONG",
    category: "School Capstone Project",
    status: "Completed · Academic",
    featured: false,
    summary: "A web and mobile incident reporting system with automatic report classification.",
    problem: "Manual report sorting delayed the review of urgent incidents.",
    users: "Residents submitting incidents and administrators reviewing reports.",
    solution: "SUMBONG automatically categorizes each report so administrators can review and respond faster.",
    overview: "An end-to-end platform for incident submission, classification, and admin review.",
    features: [
      "Web and mobile incident submission",
      "Automatic report categorization",
      "Admin review and report management",
      "Incident status tracking",
    ],
    technologies: ["React Native", "React JS", "Firebase", "Naive Bayes / Machine Learning", "Jupyter Notebook"],
    role: "Lead Developer — built the core system and integrated the classification model.",
    contributionType: "School Capstone · Lead Developer",
    decisions: [
      "Used Naive Bayes for simple and efficient text classification.",
      "Kept the report form short and easy to complete.",
    ],
    challenges: [
      {
        challenge: "Similar report descriptions were difficult to classify correctly.",
        resolution: "Improved the training data and text preprocessing for more consistent results.",
      },
    ],
    outcomes: "Completed a working capstone with web, mobile, admin, and machine-learning features.",
    lessons: "Better training data produced more reliable classifications.",
    futureImprovements: [
      "Add analytics for report trends over time",
      "Support image attachments on reports",
      "Expand the classifier's training set for finer-grained categories",
    ],
    coverImage: sumbongCover,
    mobileImage: sumbongMobile,
    gallery: [],
    deviceType: "browser",
    githubUrl: "", // TODO: add GitHub repo link
    liveUrl: "", // TODO: add live demo link
  },
  {
    id: "floralane",
    slug: "floralane",
    title: "FloraLane",
    category: "School Project · Web & Mobile E-Commerce",
    status: "Completed · Academic",
    featured: false,
    summary: "A flower-shop e-commerce system with a Flutter mobile app and an admin web dashboard.",
    problem: "Customers needed a simpler way to personalize and order flowers, while administrators needed one place to manage the shop.",
    users: "Flower-shop customers using the mobile app and administrators managing products and orders on the web.",
    solution: "A connected e-commerce experience combining mobile flower customization and ordering with a web-based administration side.",
    overview: "FloraLane lets customers browse and customize floral arrangements through the mobile app while administrators manage shop activity through the web dashboard.",
    features: [
      "Browse flower types and arrangements",
      "Customize bouquets by flower type",
      "Shopping cart and order placement",
      "Web administration for products and orders",
    ],
    technologies: ["Flutter", "Firebase", "Web Admin Dashboard"],
    role: "Team Leader & Full-Stack Developer — led the project and worked across the Flutter mobile app, web administration side, and backend services.",
    contributionType: "School Project · Team Leader & Full-Stack",
    decisions: [],
    challenges: [
      {
        challenge: "Keeping bouquet customization simple on a small screen.",
        resolution: "Organized flower choices into a clear, guided selection flow.",
      },
    ],
    outcomes: "Completed a functional academic e-commerce system connecting customer ordering with web-based shop management.",
    lessons: "A clear customer flow and an organized admin side are both essential to a complete e-commerce experience.",
    futureImprovements: [],
    coverImage: floraLaneWebsite,
    mobileImage: floraLaneMobile,
    webPreviewLabel: "Admin web dashboard",
    gallery: [],
    deviceType: "browser",
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "codewatch",
    slug: "codewatch",
    title: "CodeWatch",
    category: "School Project · Mobile E-Commerce",
    status: "Completed · Academic",
    featured: false,
    summary: "A mobile e-commerce app for discovering, selecting, and ordering watches.",
    problem: "Watch shoppers needed a simple mobile flow for browsing products and placing orders.",
    users: "Customers looking for a convenient way to shop for watches on mobile.",
    solution: "A complete mobile storefront connecting product discovery, customer accounts, cart management, and ordering.",
    overview: "CodeWatch is a school e-commerce project designed to make watch shopping clear and accessible from a mobile device.",
    features: [
      "Browse watch collections and product details",
      "Customer registration and secure login flow",
      "Shopping cart and checkout experience",
      "Order placement and management",
    ],
    technologies: ["Mobile Development", "Backend Integration", "Database"],
    tagsLabel: "Project Scope",
    role: "Full-Stack Developer — worked across the mobile interface, backend logic, and application data flow.",
    contributionType: "School Project · Full-Stack Developer",
    decisions: [],
    challenges: [
      {
        challenge: "Keeping product, cart, and order data consistent across the shopping flow.",
        resolution: "Structured the application flow so each customer action updates the correct data and screen state.",
      },
    ],
    outcomes: "Completed a functional academic mobile commerce experience covering the core watch-ordering journey.",
    lessons: "A dependable e-commerce flow needs clear state handling from product selection through checkout.",
    futureImprovements: [],
    coverImage: codeWatchMobile,
    gallery: [],
    deviceType: "mobile",
    githubUrl: "",
    liveUrl: "",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}
