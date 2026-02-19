export const personalInfo = {
  name: "Ram Poptani",
  title: "Software Developer",
  location: "Mumbai, India",
  phone: "+91 9518317113",
  email: "ram.poptani.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/ram-poptani-302/",
  github: "https://github.com/Ram-Poptani",
  summary:
    "Full Stack Java Developer with 2.5+ years of experience building scalable microservices and REST APIs using Java and Spring Boot at Ernst & Young (EY). Proficient in designing event-driven microservices with Apache Kafka, optimizing database performance with Hibernate and Redis, and delivering end-to-end features with React.js. Deployed and maintained containerized applications on Azure with CI/CD pipelines.",
};

export const skills = {
  "Languages & Frameworks": [
    "Java 17",
    "Spring Boot",
    "PHP",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Express.js",
    "NestJS",
    "React.js",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "MSSQL", "Redis"],
  Tools: [
    "Apache Kafka",
    "Docker",
    "Microsoft Azure",
    "Azure DevOps",
    "CI/CD",
    "Git",
    "Maven",
  ],
};

export const experience = [
  {
    company: "Ernst & Young LLP.",
    subtitle: "Digital & Emerging Technologies",
    role: "Associate Consultant",
    location: "Mumbai",
    period: "Jul 2023 – Present",
    highlights: [
      "Built RESTful & GraphQL APIs with Java/Spring Boot and Redis caching — 20% faster response times, 40% fewer security vulnerabilities.",
      "Designed event-driven microservices using Apache Kafka for async processing across distributed services.",
      "Optimized Hibernate queries and PostgreSQL indexing to resolve N+1 problems and reduce query execution time.",
      "Containerized and deployed services on Azure with Docker and CI/CD pipelines.",
    ],
  },
  {
    company: "Target Publications Pvt. Ltd.",
    subtitle: "",
    role: "Full Stack Developer Intern",
    location: "Mumbai",
    period: "Jul 2021 – Dec 2021",
    highlights: [
      "Developed features for Pulse ERP using Node.JS, MySQL, including RESTful Amazon API integration for pricing analysis and automated testing in a TDD environment, collaborating with a team of 5 developers.",
    ],
  },
];

export const projects = [
  {
    title: "Realtime Crypto Data Pipeline",
    language: "Java",
    date: "Jan 2026",
    github: "https://github.com/Ram-Poptani/market-data-platform",
    description: [
      "Built 3 event-driven microservices: a Binance WebSocket consumer, a real-time data relay (WebSocket → browser), and a historical data service with batch persistence and OHLCV aggregation.",
      "Developed a React SPA with live trade streaming and interactive candlestick charts using Chart.js.",
      "Used RabbitMQ fanout exchange for decoupled message distribution and PostgreSQL with Hibernate batch inserts for efficient storage.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "RabbitMQ",
      "WebSockets",
      "Hibernate",
      "PostgreSQL",
      "React.js",
      "Chart.js",
      "Maven",
    ],
  },
  {
    title: "Multi-Client CLI Chat System",
    language: "Java",
    date: "June 2023",
    github: "https://github.com/Ram-Poptani/java-chat-system",
    description: [
      "Built a concurrent TCP socket chat system with real-time client-to-client messaging, broadcast, and server-to-client communication using Java multithreading and ConcurrentHashMap.",
      "Implemented admin controls for user moderation and Hibernate-backed user persistence on PostgreSQL.",
    ],
    tech: [
      "Java 8",
      "TCP Sockets",
      "Multithreading",
      "ConcurrentHashMap",
      "Hibernate",
      "PostgreSQL",
      "Gradle",
    ],
  },
];

export const education = [
  {
    institution: "Vivekanand Education Society's Institute of Technology",
    location: "Mumbai",
    degree: "Bachelor of Engineering in Information Technology",
    period: "Nov 2020 – May 2023",
    board: "",
    score: "8.12 / 10",
    scoreLabel: "Cumulative GPA",
  },
  {
    institution: "Vivekanand Education Society's Polytechnic",
    location: "Mumbai",
    degree: "Diploma in Computer Technology",
    period: "2017 – 2020",
    board: "MSBTE",
    score: "87.49%",
    scoreLabel: "Percentage",
  },
  {
    institution: "Sri Satya Sai Niketan High School",
    location: "Ulhasnagar",
    degree: "SSC (Class X)",
    period: "2017",
    board: "SSC",
    score: "68.40%",
    scoreLabel: "Percentage",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
