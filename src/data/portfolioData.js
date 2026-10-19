/**
 * ==============================================================================
 * SHUBHAM AHIR — PORTFOLIO CONFIGURATION & DATA SOURCE
 * ==============================================================================
 * Clean, verified personal information, project case studies, technical skills,
 * and experience records. All data strictly adheres to verified source records.
 * ==============================================================================
 */

export const personalData = {
  name: "Shubham Ahir",
  initials: "SA",
  eyebrow: "00 / AVAILABLE FOR INTERNSHIPS",
  status: "5th Semester B.Tech CSE · GSFC University",
  heading: "Shubham Ahir",
  introduction: "Computer Science student building practical web applications and AI-powered tools.",
  supporting: "Interested in full-stack development, data-driven applications, and building useful products.",
  degree: "B.Tech in Computer Science and Engineering",
  university: "GSFC University",
  location: "Gujarat, India",

  about: {
    lead: "I'm a B.Tech Computer Science and Engineering student at GSFC University. I enjoy building projects that help me apply what I learn, and I'm continuing to develop my skills through software and data-focused work.",
    paragraph2: "My work focuses on practical problem solving: developing responsive full-stack applications with React, Node.js, Express, and MongoDB, and performing exploratory data analysis using Python, Pandas, NumPy, and Matplotlib.",
    focusAreas: [
      "Software Development Fundamentals",
      "Full-Stack Web Architecture (React, Node.js, Express, MongoDB)",
      "RESTful API Design & Database Modeling",
      "Exploratory Data Analysis & Visualization (Python, Pandas, Matplotlib)"
    ]
  },

  contact: {
    heading: "Let's build something real.",
    subheading: "I'm interested in learning, building, and contributing to meaningful software projects through internship opportunities.",
    availabilityNote: "Open to internship opportunities · India",
    email: "shubhamahir2525@gmail.com",
    github: "https://github.com/skyuchiha69",
    linkedin: "https://www.linkedin.com/in/shubham-ahir-a4781330a",
    resumeUrl: null, // Strictly null until real resume PDF is supplied in public/resume/
  }
};

export const skillsCategories = [
  {
    id: "languages",
    category: "Languages",
    description: "Core programming languages used across systems, scripting, and data pipelines.",
    skills: ["Python", "JavaScript", "Java", "C/C++"]
  },
  {
    id: "frontend",
    category: "Frontend",
    description: "Semantic, accessible, and reactive user interface development.",
    skills: ["React.js", "HTML", "CSS"]
  },
  {
    id: "backend",
    category: "Backend",
    description: "Server runtimes, request routing middleware, and database operations.",
    skills: ["Node.js", "Express.js"]
  },
  {
    id: "data",
    category: "Data",
    description: "Relational querying, tabular transformations, numerical computing, and charting.",
    skills: ["SQL", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    id: "tools",
    category: "Tools & Visualization",
    description: "Version control, code collaboration, and interactive visual graphing.",
    skills: ["Git", "GitHub", "D3.js"]
  }
];

export const projectsData = [
  {
    id: "rent-wise",
    number: "01",
    featured: true,
    title: "Rent Wise",
    tagline: "Clothing Rental Management Application",
    shortDescription: "A clothing rental-management application involving inventory, bookings, authentication, payments, and return-settlement workflows.",
    category: "Web Development",
    categoryTag: "Web Development",
    status: "Academic Project · In Active Development",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    techStackString: "React · Node.js · Express.js · MongoDB",
    image: "/projects/rent-wise/rent-wise-preview.png",
    gallery: [
      "/projects/rent-wise/rent-wise-preview.png"
    ],
    githubUrl: "https://github.com/solankimanav99/perfectRentAndRemin/tree/main",
    liveUrl: null,
    visualType: "rental-schematic",
    overview: {
      problem: "Managing rental inventory across clothing catalogs involves complex scheduling, availability checks, security deposit management, and structured return settlements.",
      solution: "Rent Wise provides a dedicated web interface and backend API designed to organize clothing rental catalogs, handle reservations, authenticate customers, simulate payments, and track returns.",
      contribution: "Designed and developed the React frontend views (Home, Catalogue, Product Details, Bookings), integrated REST API endpoints in Node.js/Express, and structured MongoDB document schemas for clothing inventory and rental orders.",
      statusDetails: "Academic project in active development. Features working catalog browsing, checkout simulation, authentication, and inventory administration. Note: Built as an academic prototype rather than a production-ready commercial release."
    },
    highlights: [
      {
        label: "Rental Lifecycle Workflow",
        text: "Structured full rental lifecycle states: reservation, payment processing, pickup dispatch, return inspection, fine calculations, and deposit settlement."
      },
      {
        label: "RESTful API Architecture",
        text: "Implemented modular Express route handlers with payload validation, JWT authentication middleware, and rate limiting."
      },
      {
        label: "Responsive React Interface",
        text: "Built a responsive frontend interface with category filtering, real-time cart state, and date range picking."
      }
    ],
    learnings: [
      "Structuring multi-attribute inventory models in MongoDB.",
      "Managing end-to-end booking states and asynchronous client-server communication.",
      "Implementing clean separation between REST controllers, business services, and database models."
    ]
  },
  {
    id: "deal-intelligence-agent",
    number: "02",
    featured: true,
    title: "Deal Intelligence Agent",
    tagline: "AI-Powered Sales Copilot Prototype · Hack Baroda 2026",
    shortDescription: "A Hack Baroda 2026 prototype exploring an AI-powered sales copilot, including deal context, stakeholder relationships, objection insights, similar-deal retrieval, and sales recommendations.",
    category: "AI / Data",
    categoryTag: "AI / Data",
    hackathonTag: "Hack Baroda 2026 · Team CODE BUSTERS",
    status: "Selected for Final Offline Round · Hack Baroda 2026",
    technologies: ["HTML", "CSS", "JavaScript", "D3.js"],
    techStackString: "HTML · CSS · JavaScript · D3.js",
    image: "/projects/deal-intelligence/memory-graph.png",
    gallery: [
      "/projects/deal-intelligence/memory-graph.png",
      "/projects/deal-intelligence/dashboard.png",
      "/projects/deal-intelligence/deal-workspace.png",
      "/projects/deal-intelligence/sales-copilot.png"
    ],
    githubUrl: "https://github.com/skyuchiha69/Deal-Intelligence-Agent",
    liveUrl: null,
    visualType: "deal-intelligence-schematic",
    overview: {
      problem: "Sales teams navigating complex B2B deals often encounter fragmented institutional memory, lack visibility into stakeholder influence chains, and miss past objection handling patterns.",
      solution: "Deal Intelligence Agent is an AI-assisted sales intelligence prototype created for Hack Baroda 2026 by Team CODE BUSTERS. It explores organizational memory, relationship graph visualization, objection intelligence, and strategic guidance.",
      contribution: "Collaborated on the prototype implementation, developing the interactive D3.js relationship network, simulated deal datasets, navigation workspace, and judge presentation flow.",
      statusDetails: "Hackathon prototype developed for Hack Baroda 2026. Selected for the final offline round. Implemented with client-side JavaScript and D3.js; explores AI copilot workflows without claiming live production API deployment."
    },
    highlights: [
      {
        label: "Stakeholder Relationship Graph",
        text: "Interactive force-directed graph built with D3.js visualizing deal stakeholders, champions, decision-makers, and objections."
      },
      {
        label: "Objection & Context Exploration",
        text: "Structured indexing of common sales objections paired with historical resolution patterns and tactical recommendations."
      },
      {
        label: "Judge Demo & Simulation Mode",
        text: "Crafted interactive guided presentation workflows demonstrating deal state progression and recommendation queries."
      }
    ],
    learnings: [
      "Implementing custom force-directed graph layouts and SVG node rendering in D3.js.",
      "Collaborating under hackathon deadlines at Hack Baroda 2026 to prototype complex sales workflows.",
      "Designing responsive, dark-mode analytical interfaces with clean data visualization principles."
    ]
  },
  {
    id: "campus-copilot",
    number: "03",
    featured: true,
    title: "Campus Copilot",
    tagline: "Academic Assistant · GSFC University IEEE Hackathon",
    shortDescription: "A campus-assistant project built during an IEEE hackathon organized by GSFC University, featuring student academic views, timetable navigation, and contextual query exploration.",
    category: "AI / Data",
    categoryTag: "AI / Data",
    hackathonTag: "GSFC University IEEE Hackathon",
    status: "Hackathon Prototype · GSFC University IEEE Hackathon",
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express.js", "MongoDB"],
    techStackString: "React · TypeScript · Vite · Node.js · Express.js",
    image: "/projects/campus-copilot/campus-copilot-dashboard.png",
    gallery: [
      "/projects/campus-copilot/campus-copilot-dashboard.png",
      "/projects/campus-copilot/campus-copilot-timetable.png",
      "/projects/campus-copilot/campus-copilot-courses.png",
      "/projects/campus-copilot/campus-copilot-attendance.png"
    ],
    githubUrl: "https://github.com/skyuchiha69/Campus-copilot-ieee",
    liveUrl: null,
    visualType: "campus-copilot-schematic",
    overview: {
      problem: "University portals and academic records are frequently dispersed across separate departmental boards, notices, and timetables, making daily schedule tracking cumbersome for students.",
      solution: "Campus Copilot was developed during the GSFC University IEEE Hackathon to unify student academic essentials into a clean interface—combining timetable lookups, attendance monitoring, examination venues, and a contextual campus assistant.",
      contribution: "Contributed across the frontend and backend integration, developing student dashboard views, timetable cards, navigation layouts, and Express API routing.",
      statusDetails: "Hackathon prototype developed during the IEEE hackathon at GSFC University. Implemented with React, TypeScript, and Vite on the frontend and Express/MongoDB services on the backend."
    },
    highlights: [
      {
        label: "Unified Student Dashboard",
        text: "Centralized interface displaying current class schedules, cumulative GPA, aggregate attendance metrics, and priority campus bulletins."
      },
      {
        label: "Timetable & Course Navigation",
        text: "Day-by-day interactive timetable views showing room locations, faculty instructors, and course module status."
      },
      {
        label: "TypeScript & Vite Architecture",
        text: "Constructed with strictly typed interfaces across data models, UI components, and mock API service handlers."
      }
    ],
    learnings: [
      "Building a typed React application with Vite and Tailwind CSS under intense hackathon timelines.",
      "Structuring clean student portal layouts with high visual clarity and rapid navigation.",
      "Coordinating multi-service workflows and API client mock layers for academic data."
    ]
  },
  {
    id: "retail-data-analysis",
    number: "04",
    featured: true,
    title: "Retail Data Analysis",
    tagline: "Exploratory Data Analysis & Visual Reporting",
    shortDescription: "A data-analysis project using Python, Pandas, NumPy, and Matplotlib exploring structured distributions, summary metrics, and visual reporting.",
    category: "AI / Data",
    categoryTag: "AI / Data",
    status: "Completed Academic Project",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    techStackString: "Python · Pandas · NumPy · Matplotlib",
    image: "/projects/retail-data/data-analysis-chart.png",
    gallery: [
      "/projects/retail-data/data-analysis-chart.png",
      "/projects/retail-data/fare-comparison-chart.png"
    ],
    githubUrl: null,
    liveUrl: null,
    visualType: "data-schematic",
    overview: {
      problem: "Tabular datasets often contain unformatted dates, missing data, and dispersed rows that conceal underlying categorical distributions and quantitative relationships.",
      solution: "Developed an analytical exploratory pipeline in Python utilizing Pandas for data cleaning and transformations, NumPy for numerical operations, and Matplotlib for clear visual reporting.",
      contribution: "Authored data-cleaning routines, performed group-by aggregations and summary metrics, and rendered clean Matplotlib plots with custom labels, legends, and axis annotations.",
      statusDetails: "Completed academic data-science project featuring exploratory data cleaning, descriptive statistical calculations, and rendered visual charts."
    },
    highlights: [
      {
        label: "Data Ingestion & Cleaning",
        text: "Employed Pandas to clean raw CSV records, impute missing values, filter outlier entries, and parse chronological dimensions."
      },
      {
        label: "Categorical Aggregation",
        text: "Computed category breakdowns, value counts, and distributional percentiles using NumPy and Pandas groupby functions."
      },
      {
        label: "Matplotlib Visualizations",
        text: "Generated horizontal bar charts with explicit value labels, pie charts, and comparative distributions for clear interpretation."
      }
    ],
    learnings: [
      "Applying exploratory data analysis (EDA) techniques to understand dataset structure and anomalies.",
      "Generating informative, uncluttered charts with Matplotlib suitable for analytical presentation.",
      "Writing concise data transformations using Pandas vectorization and grouping operations."
    ]
  },
  {
    id: "soilsense-monitoring",
    number: "05",
    featured: false,
    title: "SoilSense — Soil Monitoring System",
    tagline: "Web Application & Real-Time Monitoring Dashboard",
    shortDescription: "A soil monitoring web application featuring a dashboard for displaying temperature, humidity, soil moisture, and pH readings with historical tables.",
    category: "Web Development",
    categoryTag: "Web Development",
    status: "Functional Web Prototype",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    techStackString: "HTML · CSS · JavaScript · Express.js · MongoDB",
    image: null,
    gallery: [],
    githubUrl: "https://github.com/skyuchiha69/soildata",
    liveUrl: null,
    visualType: "soilsense-schematic",
    overview: {
      problem: "Monitoring agricultural soil health requires consolidating continuous metric streams—such as temperature, humidity, soil moisture, and pH levels—into an accessible interface with chronological records.",
      solution: "SoilSense is a soil monitoring web application featuring a dashboard for displaying temperature, humidity, soil moisture, and pH readings. It retrieves stored sensor readings from a backend API and presents recent measurements in a dashboard with a history table.",
      contribution: "Worked on this project across the full-stack web application, contributing to frontend dashboard styling and DOM updates, backend Express API endpoints, and MongoDB database persistence.",
      statusDetails: "Functional web application prototype comprising a responsive frontend dashboard, Express.js backend endpoints, and MongoDB persistence. Operates via 5-second automatic HTTP polling to query and render recent stored measurements."
    },
    highlights: [
      {
        label: "Telemetry Monitoring Dashboard",
        text: "Interactive web dashboard featuring dedicated readout cards for temperature (°C), ambient humidity (%), soil moisture (%), and pH levels."
      },
      {
        label: "Recent History Data Table",
        text: "Tabular display presenting recent stored measurements with formatted local timestamps and sensor metrics dynamically populated via DOM operations."
      },
      {
        label: "RESTful Data Retrieval Endpoint",
        text: "Express backend endpoint (GET /api/data) that queries MongoDB via Mongoose, returning the latest 10 chronological readings sorted by timestamp."
      }
    ],
    learnings: [
      "Building clean, responsive telemetry dashboard layouts with semantic HTML, CSS, and vanilla JavaScript.",
      "Implementing structured REST API endpoints in Express.js for retrieving and persisting time-stamped records.",
      "Managing browser-side asynchronous HTTP polling cycles and updating DOM components dynamically."
    ]
  },
  {
    id: "quantum-scan-protocol",
    number: "06",
    featured: false,
    title: "Quantum Scan Protocol",
    tagline: "Security & Crowd Flow Concept · Prayagraj Mahakumbh Hackathon",
    shortDescription: "A security and verification concept combining QR-code technology and facial recognition for crowd flow tracking and attendee safety.",
    category: "Hackathons",
    categoryTag: "Hackathons",
    hackathonTag: "Prayagraj Mahakumbh Hackathon",
    status: "Hackathon Concept · Prayagraj Mahakumbh Hackathon",
    technologies: ["Computer Vision Concept", "QR Code Verification", "System Architecture"],
    techStackString: "System Architecture · QR Protocols · Computer Vision Concept",
    image: null,
    gallery: [],
    githubUrl: null,
    liveUrl: null,
    visualType: null,
    overview: {
      problem: "Large-scale religious congregations such as the Mahakumbh experience monumental attendee density, making real-time identity verification, lost-person identification, and checkpoint crowd control extraordinarily difficult.",
      solution: "Proposed the Quantum Scan Protocol concept during the Prayagraj Mahakumbh hackathon, integrating rapid two-factor physical verification combining dynamic QR credentials with facial feature recognition at entry and critical sector transit points.",
      contribution: "Developed system architecture concepts and workflow schematics for high-throughput identification and checkpoint verification queues.",
      statusDetails: "Conceptual hackathon architecture proposal created for the Prayagraj Mahakumbh hackathon."
    },
    highlights: [
      {
        label: "Two-Factor Verification Flow",
        text: "Explored pairing instantaneous QR credential reading with rapid face-bounding checks to prevent credential sharing in congested sectors."
      },
      {
        label: "Offline-Resilient Node Sync",
        text: "Architected edge caching protocols so local checkpoints can perform instantaneous verification without dependent high-latency cloud round-trips."
      }
    ],
    learnings: [
      "Analyzing massive crowd logistics, failure modes, and security constraints in high-density gathering scenarios.",
      "Balancing biometric accuracy thresholds with real-time throughput requirements."
    ]
  }
];

export const experienceData = [
  {
    id: "logistic-infotech",
    role: "Web Development Intern — React.js",
    company: "Logistic Infotech Pvt. Ltd.",
    location: "Rajkot, Gujarat, India",
    dates: "20 May 2024 – 20 June 2024",
    duration: "One month",
    durationLabel: "One month",
    status: "Completed",
    type: "Project Internship",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3"],
    projectGuide: "Mr. Chintan Adatiya",
    narrative: "Completed a one-month project internship focused on web development using React.js, gaining hands-on exposure to frontend development and practical web-development workflows.",
    supportingPoints: [
      "Hands-on exposure to React.js and component-based frontend development.",
      "Familiarity with structuring and developing frontend interfaces.",
      "Practical exposure to web development in a project setting."
    ]
  }
];

export const hackathonsData = [
  {
    id: "hack-baroda-2026",
    title: "Hack Baroda 2026",
    role: "Deal Intelligence Agent · Team CODE BUSTERS",
    achievement: "Selected for Final Offline Round",
    isWin: false,
    description: "Built an AI-powered sales intelligence copilot prototype combining organizational memory, stakeholder graph exploration, and objection analysis.",
    technologies: ["JavaScript", "HTML5", "CSS3", "D3.js", "Google Gemini API"]
  },
  {
    id: "mahakumbh-hackathon",
    title: "Prayagraj Mahakumbh Hackathon",
    role: "Quantum Scan Protocol",
    achievement: "Hackathon Concept & Architecture",
    isWin: false,
    description: "Formulated the Quantum Scan Protocol concept, combining QR-code technology and facial recognition for attendee tracking and safety in high-density crowds.",
    technologies: ["System Design", "QR Protocols", "Computer Vision Concept"]
  },
  {
    id: "ieee-hackathon",
    title: "GSFC University IEEE Hackathon",
    role: "Campus Copilot",
    achievement: "Hackathon Prototype",
    isWin: false,
    description: "Architected Campus Copilot, an AI-powered university assistant with retrieval-augmented generation (RAG) and authenticated academic services.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "RAG"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "GSFC University",
    status: "Current (5th Semester)",
    type: "Undergraduate Degree",
    location: "Gujarat, India",
    notes: "Core coursework in software engineering, database management systems, data structures and algorithms, web technologies, and data analysis.",
    pillars: [
      {
        title: "Engineering Foundations",
        description: "Understanding system design principles, modular programming, and data structures."
      },
      {
        title: "Practical Projects",
        description: "Applying academic computer science concepts to working full-stack and data applications."
      },
      {
        title: "Analytical Problem Solving",
        description: "Decomposing complex problems into manageable modules and evaluating trade-offs."
      },
      {
        title: "Continuous Learning",
        description: "Exploring modern web frameworks, AI tools, and data analysis pipelines."
      }
    ]
  }
];
