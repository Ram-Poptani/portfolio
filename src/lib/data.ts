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

export const roles = [
  "Full Stack Java Developer",
  "Backend Engineer",
  "Node.js Developer",
  "Problem Solver",
  "API Builder",
  "React Developer",
];

export const skillItems = [
  { name: "Java 17", icon: "/icons/java.svg", category: "lang", proficiency: 92 },
  { name: "Spring Boot", icon: "/icons/spring-boot.svg", category: "lang", proficiency: 90 },
  { name: "PHP", icon: "/icons/php.svg", category: "lang", proficiency: 80 },
  { name: "Laravel", icon: "/icons/laravel.svg", category: "lang", proficiency: 78 },
  { name: "JavaScript", icon: "/icons/javascript.svg", category: "lang", proficiency: 90 },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "lang", proficiency: 90 },
  { name: "Express.js", icon: "/icons/express.svg", category: "lang", proficiency: 90 },
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "lang", proficiency: 90 },
  { name: "React.js", icon: "/icons/react.svg", category: "lang", proficiency: 78 },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "db", proficiency: 85 },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "db", proficiency: 80 },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "db", proficiency: 70 },
  { name: "MSSQL", icon: "/icons/mssql.svg", category: "db", proficiency: 65 },
  { name: "Redis", icon: "/icons/redis.svg", category: "db", proficiency: 75 },
  { name: "Apache Kafka", icon: "/icons/kafka.svg", category: "tool", proficiency: 80 },
  { name: "RabbitMQ", icon: "/icons/rabbitmq.svg", category: "tool", proficiency: 80 },
  { name: "Docker", icon: "/icons/docker.svg", category: "tool", proficiency: 82 },
  { name: "Microsoft Azure", icon: "/icons/azure.svg", category: "tool", proficiency: 78 },
  { name: "Azure DevOps", icon: "/icons/azure-devops.svg", category: "tool", proficiency: 75 },
  { name: "CI/CD", icon: "/icons/cicd.svg", category: "tool", proficiency: 80 },
  { name: "Git", icon: "/icons/git.svg", category: "tool", proficiency: 90 },
  { name: "Maven", icon: "/icons/maven.svg", category: "tool", proficiency: 85 },
];

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
