export const personalInfo = {
  name: "Engr. Abdul Hadi",
  fullName: "Abdul Hadi Khan",
  nickname: "Aadi",
  title: "Software Engineer & Systems Architect",
  badge: "Available for Roles & High-Impact Projects",
  location: "Karachi, Pakistan",
  email: "aabdul.hadikhan10@gmail.com",
  phone: "(+92) 3332216999",
  socials: {
    github: "https://github.com/Aadi100",
    linkedin: "https://www.linkedin.com/in/abdulhadi03/",
    discord: "https://discord.com/users/hype_aadi",
    discordTag: "hype_aadi",
    instagram: "https://www.instagram.com/ig_aadi10/"
  },
  stats: [
    { label: "Public Repositories", value: "10+" },
    { label: "Core Domains", value: "4+" },
    { label: "Architecture", value: "Systems to Cloud" },
    { label: "Degree", value: "BE Software Eng." }
  ],
  bio: `Software Engineer & Systems Architect specializing in the Microsoft .NET ecosystem (C#, ASP.NET Core, EF Core), modern React, and Applied AI. Combines deep full-stack and systems engineering with machine learning integration—from deploying on-device edge AI models (computer vision & TensorFlow Lite) and real-time behavioral anomaly detection, to architecting high-reliability IoT middleware and cloud platforms. Proven track record in designing thread-safe services, immutable audit ledgers, and secure database schemas (SQL Server, PostgreSQL) with strict RBAC. Passionate about leveraging intelligent systems and Clean Architecture to deliver fault-tolerant, scalable enterprise software in Agile environments.`
};

export const categories = [
  { id: "all", label: "All Systems" },
  { id: "fullstack", label: "Full Stack & Cloud" },
  { id: "systems", label: "Systems & IoT" },
  { id: "mobile-ai", label: "Mobile & AI" }
];

export const projects = [
  {
    id: "telemetry-analytics-engine",
    title: "Real-Time Telemetry & Behavior Analytics Engine",
    subtitle: "High-frequency metric streaming and behavioral pattern auditing dashboard",
    category: "fullstack",
    featured: true,
    badge: "Enterprise System",
    confidential: true,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React 19", "Vite", "Chart.js", "React Router", "Oxlint"],
    description: "An enterprise-grade telemetry ingestion and visualization platform built to compute real-time statistical metrics, flag anomalous behavioral patterns, inspect violation logs, and render interactive audit graphs with minimal latency.",
    highlights: [
      "Dynamic telemetry graphing using Chart.js & react-chartjs-2 with live high-frequency metric feeds.",
      "Optimized React 19 architecture guaranteeing sub-second initial load and minimal memory footprint.",
      "Modular dashboard design with tokenized route authentication, secure asset rendering, and alert mechanisms.",
      "Production-hardened code structure verified with strict static analysis."
    ],
    architecture: {
      client: "React 19 SPA with Vite HMR & responsive dark engineering UI",
      telemetry: "Behavioral metric ingestion and real-time visualization widgets",
      security: "Token-authenticated inspection endpoints with client-side sanitization"
    }
  },
  {
    id: "distributed-booking-cloud",
    title: "Distributed Multi-Tenant Scheduling & Ledger Ecosystem",
    subtitle: "Event-driven cloud backend, double-booking prevention, and biometric verification",
    category: "mobile-ai",
    featured: true,
    badge: "Distributed Cloud & Mobile",
    confidential: true,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    tags: ["Supabase", "PostgreSQL RLS", "React Native", "Expo", "TensorFlow Lite", "TypeScript", "Zustand"],
    description: "End-to-end multi-tenant facilities management ecosystem featuring an event-driven Supabase backend, append-only financial ledgers, and an Expo/React Native mobile application with on-device face detection biometric check-ins.",
    highlights: [
      "Zero double-bookings guaranteed via PostgreSQL filtered unique indexes on resource and slot timestamps.",
      "Dual append-only ledger architecture (credits & debits) for immutable financial and regulatory audit trails.",
      "Cross-platform mobile application featuring Vision Camera with on-device TensorFlow Lite neural face detection.",
      "Asynchronous notification pipelines (Email & WhatsApp Cloud APIs) for instant transactional receipts.",
      "State-driven workflow powered by decoupled Zustand stores and smooth native transitions."
    ],
    architecture: {
      backend: "Supabase PostgreSQL, Edge Functions (Deno/TypeScript), Row Level Security (RLS)",
      mobile: "Expo SDK / React Native, Vision Camera Face Detector, react-native-fast-tflite",
      integrations: "Multi-Channel Messaging APIs, Mapbox Geofencing, Biometric Store"
    }
  },
  {
    id: "industrial-biometric-iot",
    title: "Industrial Biometric IoT & Access Control Middleware",
    subtitle: "Hardware terminal synchronization bridge with real-time WebSocket streaming",
    category: "systems",
    featured: true,
    badge: "Hardware & IoT",
    confidential: true,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["C#", ".NET Framework 4.8", "SQLite", "WebSockets", "AxFP_CLOCKLib", "WinForms"],
    description: "Robust industrial Windows desktop middleware acting as a mission-critical bridge between multi-modal biometric hardware terminals (facial recognition, RFID, fingerprint) and remote enterprise cloud servers.",
    highlights: [
      "Thread-safe Single-Threaded Apartment (STA) OCX invoker managing direct TCP/IP communications with hardware readers.",
      "Configurable debounce algorithm that prevents duplicate badge scans and synchronizes check-ins ahead of check-outs.",
      "Fault-tolerant offline persistence in SQLite with automated self-healing retry queues on network interruption.",
      "Real-time event push to remote servers via auto-reconnecting WebSocket client.",
      "Face enrollment sub-system with unmanaged memory marshaling and automated 24h maintenance cycles."
    ],
    architecture: {
      hardwareLayer: "Biometric hardware device drivers (Face/RFID/Fingerprint) over TCP/IP",
      dataPipeline: "Local log file buffering -> SQLite persistence -> WebSocket streaming",
      resilience: "Exponential retry backoff, prioritized check-in syncing, memory-safe P/Invoke"
    }
  },
  {
    id: "hardware-pos-engine",
    title: "Serial Peripheral Interface & Retail Workflow Engine",
    subtitle: "Direct RS-232 serial hardware communication and transactional processing",
    category: "systems",
    featured: false,
    badge: "Hardware & Systems",
    confidential: true,
    image: "https://images.unsplash.com/photo-1556742049-0a67e5572240?auto=format&fit=crop&w=1200&q=80",
    tags: ["C#", "ASP.NET Core", "Razor Pages", "RS-232 Serial", "Hardware I/O"],
    description: "An integrated Point of Sale and retail workflow engine built with ASP.NET Core Razor Pages, featuring direct RS-232 serial communication with external scales, scanners, and peripheral hardware.",
    highlights: [
      "Direct serial port polling service capturing real-time weight and telemetry from scale hardware.",
      "Razor Pages component architecture with responsive layout and touch-screen ready interface.",
      "Transactional order processing with itemized receipt generation and audit logging."
    ],
    architecture: {
      server: "ASP.NET Core on .NET / Razor Pages",
      peripherals: "RS-232 / USB Serial COM port listeners with checksum validation"
    }
  },
  {
    id: "assay-testing-portal",
    title: "Commercial Material Testing & Assay Certification Platform",
    subtitle: "Multi-tier role management, testing verification, and inventory tracking",
    category: "fullstack",
    featured: false,
    badge: "Commercial Platform",
    confidential: true,
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1200&q=80",
    tags: ["PHP", "MySQL", "JavaScript", "REST APIs", "Role Auth"],
    description: "Commercial laboratory assay and bullion testing portal allowing assayers to log purity measurements, generate test certificates, track vault items, and manage customer accounts.",
    highlights: [
      "Multi-tier role authentication dividing administrator, lab technician, and customer views.",
      "Automated assay certificate creation with cryptographic verification IDs.",
      "RESTful product and bullion bars inventory catalog with image upload pipeline."
    ],
    architecture: {
      backend: "PHP backend with parameterized SQL query security",
      frontend: "Lightweight responsive JS/HTML5/CSS3 client with instant live search"
    }
  }
];

export const skillCategories = [
  {
    title: "Languages & Core",
    icon: "Code",
    description: "Robust type-safe programming across enterprise, systems, and web",
    skills: [
      { name: "C# / .NET", level: 95, note: ".NET 8/9, .NET Framework 4.8, WinForms, ASP.NET MVC/Core" },
      { name: "TypeScript & JavaScript", level: 94, note: "Modern React.js, Next.js, Node.js" },
      { name: "Python", level: 88, note: "Flask, Django, Automation & Data Pipelines" },
      { name: "SQL & Relational Design", level: 92, note: "SQL Server, PostgreSQL, MySQL query optimization" },
      { name: "C / C++", level: 80, note: "Systems programming & memory logic" },
      { name: "PHP", level: 82, note: "Server-side scripting & REST services" }
    ]
  },
  {
    title: "Frontend & Mobile",
    icon: "Layout",
    description: "Responsive, high-frame-rate user interfaces with intuitive UX",
    skills: [
      { name: "React.js & Next.js", level: 95, note: "Modern Hooks, Router, Responsive SPAs" },
      { name: "React Native & Expo", level: 90, note: "Cross-platform mobile, Vision Camera, Maps" },
      { name: "Tailwind CSS & Bootstrap", level: 95, note: "Glassmorphism, Grid, Mobile-First Styling" },
      { name: "ASP.NET Razor Pages", level: 90, note: "Server-rendered components & enterprise POS" },
      { name: "Chart.js & Telemetry Viz", level: 92, note: "Real-time streaming charts & telemetry" },
      { name: "Zustand & State Stores", level: 90, note: "Decoupled predictable application state" }
    ]
  },
  {
    title: "Backend, Cloud & Databases",
    icon: "Server",
    description: "Scalable APIs, append-only ledgers, and edge-native architectures",
    skills: [
      { name: "ASP.NET Core & Web APIs", level: 95, note: "RESTful endpoints, JWT Auth, Clean Architecture" },
      { name: "Entity Framework Core", level: 92, note: "Code-first migrations, LINQ, DB optimizations" },
      { name: "WebSockets & MQTT Protocol", level: 92, note: "Real-time bidirectional device communication" },
      { name: "SQL Server & PostgreSQL", level: 92, note: "Stored procedures, indexes, RLS security" },
      { name: "Supabase & MongoDB", level: 88, note: "Document & cloud database stores" },
      { name: "Microsoft Azure & Cloud", level: 86, note: "Cloud hosting, background tasks & scaling" }
    ]
  },
  {
    title: "Systems, IoT & Applied AI",
    icon: "Cpu",
    description: "Connecting physical hardware, biometrics, and distributed protocols",
    skills: [
      { name: "IoT Device Integration", level: 95, note: "Biometric readers (Face, RFID, Fingerprint), COM ports" },
      { name: "RS-232 Serial Port I/O", level: 90, note: "Industrial scales & hardware POS peripherals" },
      { name: "On-Device Neural Inference", level: 88, note: "TensorFlow Lite & computer vision face models" },
      { name: "Thread-Safe Invokers (STA)", level: 92, note: "COM / OCX marshaling and hardware thread safety" },
      { name: "Hardware Debounce Logic", level: 92, note: "Anti-duplication filters & sync prioritization" },
      { name: "Offline Persistence & Sync", level: 90, note: "SQLite local buffering & auto-healing retries" }
    ]
  }
];

export const experienceMilestones = [
  {
    period: "03/02/2025 – Present",
    role: "Full Stack Developer",
    company: "Idea Inns",
    location: "Karachi, Pakistan",
    description: "Developing enterprise-level .NET Windows Forms applications integrated with IoT hardware for real-time device monitoring and control. Architecting ASP.NET backend services using MVC architecture, SQL Server, RESTful APIs, JWT authentication, and WebSocket protocols for seamless IoT device communication. Designing and deploying live web applications with React frontends and collaborating with international hardware teams (including Chinese technicians) to ensure efficient IoT integration and real-time data synchronization.",
    tags: [".NET", "C#", "ASP.NET MVC", "React.js", "SQL Server", "WebSockets", "JWT", "IoT Hardware"]
  },
  {
    period: "01/10/2023 – 31/01/2025",
    role: "Jr Developer",
    company: "Axionics Pvt. Ltd",
    location: "Karachi, Pakistan",
    description: "Architected enterprise applications leveraging Python Flask, .NET frameworks, and Razor Pages, integrating RESTful APIs with SQL Server and MongoDB databases. Built Windows Forms desktop solutions and deployed cloud infrastructure on Microsoft Azure, ensuring scalable performance for diverse client requirements. Established IoT device integration with backend systems for real-time data collection, processing, and monitoring.",
    tags: [".NET Framework", "Windows Forms", "Razor Pages", "Python Flask", "Azure", "SQL Server", "MongoDB", "IoT"]
  },
  {
    period: "01/09/2023 – 30/09/2023",
    role: "Engineering Internee",
    company: "PAC Kamra MRF",
    location: "Attock, Pakistan",
    description: "Assisted senior IT staff with troubleshooting and maintaining mission-critical software applications. Researched and learned about emerging technologies, automation pipelines, and industry best practices in software development.",
    tags: ["Software Troubleshooting", "Automation", "Systems Maintenance", "Best Practices"]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (BE) in Software Engineering",
    shortDegree: "Bachelors",
    institution: "Karachi Institute of Economics and Technology (KIET)",
    location: "Karachi, Pakistan",
    period: "27/09/2021 – 13/06/2025",
    field: "Software Engineering",
    description: "Comprehensive 4-year engineering curriculum focused on software design patterns, distributed enterprise architectures, database management, algorithms, operating systems, and intelligent computer systems.",
    highlights: [
      "Specialized in Enterprise .NET, Distributed Systems, and Advanced Web Engineering",
      "Rigorous coursework in Data Structures, Object-Oriented Analysis, and Computer Networks",
      "Engineered hardware-integrated software and intelligent vision applications"
    ]
  },
  {
    degree: "Higher Secondary Certificate (Intermediate)",
    shortDegree: "Intermediate",
    institution: "Usman Public School Campus 2",
    location: "Karachi, Pakistan",
    period: "01/03/2017 – 04/06/2019",
    field: "Pre-Engineering",
    description: "Advanced secondary studies emphasizing analytical mathematics, physics, and chemistry as foundations for engineering problem-solving.",
    highlights: [
      "Core focus on Advanced Mathematics, Physics, and Logic Formulation",
      "Strong analytical and scientific foundation"
    ]
  },
  {
    degree: "Secondary School Certificate (Matriculation)",
    shortDegree: "Matriculation",
    institution: "Usman Public School Campus 13",
    location: "Karachi, Pakistan",
    period: "04/06/2007 – 07/01/2017",
    field: "Computer Science",
    description: "Secondary education with a specialized focus on Computer Science, fundamental programming concepts, and digital literacy.",
    highlights: [
      "Field of study: Computer Science & Algorithmic Basics",
      "Excellence in science and introductory computing"
    ]
  }
];

export const terminalCommands = {
  help: `Available commands:
  • whoami      - Overview of Engr. Abdul Hadi
  • education   - Academic degrees & institutions
  • experience  - Work experience & roles
  • skills      - Core tech stack breakdown
  • systems     - Architecture breakdown of enterprise systems
  • repos       - GitHub and professional profile links
  • contact     - Display contact channels and email
  • clear       - Clear terminal output`,
  
  whoami: `Engr. Abdul Hadi (Aadi)
Role: Software Engineer & Systems Architect
Location: Karachi, Pakistan
Focus: Microsoft .NET Ecosystem (C#, ASP.NET Core, EF Core), Modern React & Applied AI (Edge TFLite & Computer Vision)`,

  education: `Academic Background:
1. Bachelors (BE Software Engineering) [2021 – 2025]
   • Karachi Institute of Economics and Technology (KIET)
2. Intermediate (Pre-Engineering) [2017 – 2019]
   • Usman Public School Campus 2
3. Matriculation (Computer Science) [2007 – 2017]
   • Usman Public School Campus 13`,

  experience: `Professional Experience:
• Idea Inns [Feb 2025 – Present]: Full Stack Developer (.NET, React, IoT, WebSockets, SQL Server)
• Axionics Pvt. Ltd [Oct 2023 – Jan 2025]: Jr Developer (C#, Python Flask, Azure, MongoDB, IoT)
• PAC Kamra MRF [Sep 2023]: Engineering Internee (IT Maintenance, Automation)`,

  skills: `Languages: C#, TypeScript, JavaScript, Python, C/C++, PHP, SQL
Frontend:  React.js, Next.js, Razor Pages, Windows Forms, Tailwind CSS, Bootstrap
Backend:   ASP.NET Core / MVC, WebSockets, MQTT, REST APIs, EF Core, JWT
Databases: SQL Server, PostgreSQL, Supabase, MongoDB, MySQL, Azure
IoT & AI:  Biometric Device SDKs (Face/RFID/Fingerprint), RS-232 COM, TensorFlow Lite`,

  systems: `Enterprise Architecture Showcases:
1. Real-Time Telemetry & Behavioral Analytics Engine -> React 19 + Chart.js Ingestion
2. Distributed Multi-Tenant Scheduling & Ledger Ecosystem -> Supabase + Expo + TFLite Face AI
3. Industrial Biometric IoT & Access Control Middleware -> C# .NET 4.8 + Terminal OCX + WebSockets
4. Serial Peripheral Interface & Retail Workflow Engine -> ASP.NET Core + Serial Hardware I/O
5. Commercial Material Testing & Assay Certification Platform -> PHP & MySQL Role-Based Portal`,

  repos: `Professional Links:
• GitHub Profile: https://github.com/Aadi100
• LinkedIn:       https://www.linkedin.com/in/abdulhadi03/`,

  contact: `Reach out directly:
• Email:    aabdul.hadikhan10@gmail.com
• Phone:    (+92) 3332216999
• LinkedIn: https://www.linkedin.com/in/abdulhadi03/
• GitHub:   https://github.com/Aadi100
• Discord:  hype_aadi`
};
