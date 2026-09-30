// Edit everything about your portfolio here.

export const profile = {
  firstName: "Geethmi",
  lastName: "Fernando",
  role: "Full Stack Developer",
  location: "Bandarawela, Sri Lanka",
  email: "geethmiiresha27@gmail.com",
  // TODO: put your real profile links here
  github: "https://github.com/Geethmiiresha",
  linkedin: "https://www.linkedin.com/in/geethmi-iresha-324a33370/",
  headline: "I build full-stack web apps with Java, Spring Boot and PHP.",
  intro:
    "IT undergraduate in Bandarawela, looking for a full stack developer internship.",
};

export const about = [
  "I'm an IT undergraduate who likes turning messy real-world workflows into clean, secure web systems. My projects cover inventory, hotel bookings and hospital records, so I've spent a lot of time on relational databases, role-based login and the small details that stop data from going wrong.",
  "Lately I've been adding intelligent features to my work, like AI business insights and a chatbot that answers stock questions, and I'm learning React to build better front ends.",
];

export const facts = [
  { label: "Languages", value: "Sinhala (native), English (professional working proficiency)" },
  { label: "Certificate", value: "English for School Leavers, Uva Wellassa University" },
  { label: "Working style", value: "Planning, time management, problem solving, leadership, listening" },
];

export const projects = [
  {
    title: "Inventory Management System",
    short: "InventoryMS",
    summary: "Stock control with AI insights and a chatbot.",
    stack: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript"],
    points: [
      "Full-stack inventory system with role-based secure login, dashboards and CRUD operations.",
      "Automated AI business insights, revenue forecasting and predictive stock status analysis.",
      "Interactive AI chatbot that answers inventory questions and raises stock warnings instantly.",
    ],
    github: "", // paste the repo link, e.g. https://github.com/you/inventoryms
    live: "",
  },
  {
    title: "Train View Chalet Hotel Management System",
    short: "Train View Chalet",
    summary: "Room bookings and guest tracking for a chalet hotel.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    points: [
      "Web system that digitizes room reservations, guest tracking and administrative workflows.",
      "Secure MySQL database and PHP backend that prevent booking conflicts and manage room inventory.",
      "Custom request form so guests can state dietary and transport needs.",
    ],
    github: "",
    live: "",
  },
  {
    title: "Hospital Management System",
    short: "Hospital Management",
    summary: "Records, appointments and staff access control.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    points: [
      "Backend logic and database management for hospital operations, records and appointments.",
      "Secure user authentication and role-based access control with a responsive UI for medical staff.",
    ],
    github: "",
    live: "",
  },
  {
    title: "Student Study Scheduler",
    short: "Study Scheduler",
    summary: "Plan study hours and track deadlines with charts.",
    stack: ["HTML5", "CSS3", "JavaScript", "Chart.js", "LocalStorage"],
    points: [
      "Responsive web app that helps students manage study time, allocate hours and track deadlines.",
      "Chart.js for dynamic visual data and the LocalStorage API to keep data between visits.",
    ],
    github: "",
    live: "",
  },
];

export const skills = [
  { group: "Languages", items: ["Java", "PHP", "JavaScript", "Python"] },
  { group: "Web", items: ["HTML5", "CSS3", "Spring Boot", "RESTful APIs"] },
  { group: "Databases", items: ["MySQL", "Relational database design"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "XAMPP"] },
];

export const education = [
  {
    place: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    where: "Badulla",
    title: "Higher National Diploma in Information Technology",
    when: "2023 to present",
  },
  {
    place: "Bandarawela Dharmapala National School",
    where: "Bandarawela",
    title: "G.C.E. Advanced Level: Engineering Technology (C), SFT (B), ICT (C)",
    when: "2022",
  },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
