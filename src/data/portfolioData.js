export const personalInfo = {
  name: "Engr. Abdul Hadi",
  nickname: "Aadi",
  title: "Software Engineer & Systems Architect",
  badge: "Available for Roles & High-Impact Projects",
  location: "Karachi, Pakistan",
  email: "aabdul.hadikhan10@gmail.com",
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
    { label: "Engineering Scope", value: "Full Stack" }
  ],
  bio: `I am a Software Engineer who thrives at the intersection of high-reliability systems middleware, industrial IoT, scalable cloud architectures, and modern web applications. From writing C# .NET biometric middleware that connects industrial hardware to real-time WebSockets, to architecting multi-tenant React 19 and Supabase platforms with on-device mobile AI, I build resilient, high-performance software.`
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
      { name: "TypeScript", level: 92, note: "Full-Stack APIs & React Native" },
      { name: "JavaScript (ESNext)", level: 95, note: "Modern React 19, Node.js" },
      { name: "C# / .NET", level: 90, note: ".NET 4.8 / Core, WinForms, ASP.NET" },
      { name: "Python", level: 85, note: "Automation, Scripting & Data" },
      { name: "C / C++", level: 80, note: "Systems programming & memory logic" },
      { name: "PHP & SQL", level: 85, note: "Relational queries & Web backends" }
    ]
  },
  {
    title: "Frontend & Mobile",
    icon: "Layout",
    description: "Responsive, high-frame-rate user interfaces with intuitive UX",
    skills: [
      { name: "React 19 & React 18", level: 95, note: "Vite, Hooks, Custom Contexts" },
      { name: "React Native & Expo", level: 90, note: "Mobile Apps, Vision Camera, Maps" },
      { name: "Tailwind CSS & Modern CSS", level: 95, note: "Glassmorphism, Grid, Flexbox" },
      { name: "Zustand & State Management", level: 90, note: "Predictable decoupled state" },
      { name: "Chart.js & Data Viz", level: 90, note: "Live telemetry and dashboards" },
      { name: "Vite & Build Tooling", level: 92, note: "Sub-second HMR & Oxlint" }
    ]
  },
  {
    title: "Backend, Cloud & Databases",
    icon: "Server",
    description: "Scalable APIs, append-only ledgers, and edge-native architectures",
    skills: [
      { name: "Supabase & PostgreSQL", level: 92, note: "RLS Security, Triggers & Edge Functions" },
      { name: "ASP.NET Core & Razor", level: 88, note: "RESTful services, Enterprise POS" },
      { name: "WebSockets & Realtime", level: 90, note: "Continuous bidirectional streaming" },
      { name: "SQLite & File Buffering", level: 88, note: "Embedded local cache & fallback" },
      { name: "RESTful API Architecture", level: 95, note: "Standardized schemas & CORS" },
      { name: "Append-Only Accounting", level: 90, note: "Tax & regulatory compliant ledgers" }
    ]
  },
  {
    title: "Systems, Embedded & IoT",
    icon: "Cpu",
    description: "Connecting physical hardware, biometrics, and distributed protocols",
    skills: [
      { name: "Biometric Hardware SDKs", level: 92, note: "Face/Finger/RFID Terminal Protocols" },
      { name: "RS-232 Serial Port I/O", level: 88, note: "Industrial scales & POS peripherals" },
      { name: "TensorFlow Lite On-Device", level: 85, note: "Fast on-device neural inference" },
      { name: "Thread-Safe Invokers (STA)", level: 90, note: "Inter-process & COM marshaling" },
      { name: "Hardware Debounce Logic", level: 92, note: "Event prioritization & anti-duplication" },
      { name: "Offline Persistence & Sync", level: 90, note: "Resilient SQLite cache & auto-retry" }
    ]
  }
];

export const experienceMilestones = [
  {
    year: "2026 - Present",
    role: "Full-Stack Engineer & Systems Architect",
    company: "Enterprise Software & Cloud Platforms",
    location: "Karachi, Pakistan",
    description: "Engineering real-time behavioral telemetry dashboards in React 19, distributed cloud scheduling ecosystems on Supabase & PostgreSQL with append-only ledger security, and on-device mobile AI vision pipelines with Expo and TensorFlow Lite.",
    tags: ["React 19", "Supabase", "React Native", "Expo", "TypeScript", "TensorFlow Lite"]
  },
  {
    year: "2025 - 2026",
    role: "Systems & IoT Middleware Engineer",
    company: "Industrial Biometrics & Retail Automation",
    location: "Karachi, Pakistan",
    description: "Engineered desktop systems middleware in C# .NET to orchestrate multi-terminal biometric readers (Face, RFID, Fingerprint) with automated synchronization, SQLite resilience, and real-time WebSocket streaming. Built hardware POS serial peripheral integration.",
    tags: ["C#", ".NET Framework", "WebSockets", "Hardware OCX", "SQLite", "Serial Ports"]
  },
  {
    year: "2024 - 2025",
    role: "Full-Stack & Cloud Systems Developer",
    company: "Software Architecture & APIs",
    location: "Karachi, Pakistan",
    description: "Architected high-throughput relational databases, RESTful services, and real-time event streaming pipelines. Focused on data integrity, idempotent operations, and secure API gateways.",
    tags: ["TypeScript", "C#", "PostgreSQL", "REST APIs", "WebSockets"]
  },
  {
    year: "2023 - 2024",
    role: "Web & Software Developer",
    company: "Commercial Client Solutions",
    location: "Karachi, Pakistan",
    description: "Developed commercial testing and material verification platforms, streamlining inventory, lab certification, and client reporting with PHP and relational databases.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Security"]
  }
];

export const terminalCommands = {
  help: `Available commands:
  • whoami      - Overview of Engr. Abdul Hadi
  • skills      - Core tech stack breakdown
  • systems     - Architecture breakdown of enterprise systems
  • repos       - GitHub and professional profile links
  • contact     - Display contact channels and email
  • clear       - Clear terminal output`,
  
  whoami: `Engr. Abdul Hadi (Aadi)
Role: Software Engineer & Systems Architect
Location: Karachi, Pakistan
Focus: Industrial IoT & Biometrics (C# .NET) -> Cloud & Modern Web (React 19, Supabase, Expo Mobile)`,

  skills: `Languages: TypeScript, JavaScript, C#, Python, C/C++, PHP, SQL
Frontend:  React 19, React Native (Expo), Vite, Tailwind CSS, Chart.js, Zustand
Backend:   Supabase (PostgreSQL RLS), ASP.NET Core, Edge Functions, WebSockets, SQLite
Systems:   Biometric Hardware SDKs, RS-232 Serial COM, TFLite On-Device`,

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
• LinkedIn: https://www.linkedin.com/in/abdulhadi03/
• GitHub:   https://github.com/Aadi100
• Discord:  hype_aadi`
};
