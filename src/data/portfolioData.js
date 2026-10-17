/**
 * ==============================================================================
 * SHUBHAM AHIR — PORTFOLIO CONFIGURATION & DATA SOURCE
 * ==============================================================================
 * This configuration file houses all personal information, project case studies,
 * technical skills, and external links for the portfolio.
 *
 * TO UPDATE YOUR INFORMATION:
 * 1. Links (GitHub, LinkedIn, Email, Live Demos):
 *    - Replace `null` with your actual URL or email address.
 *    - The website will automatically display the corresponding button/link once
 *      a non-null string is provided.
 *    - Leaving a value as `null` cleanly suppresses the button so no dead links exist.
 *
 * 2. Résumé:
 *    - Place your resume PDF in `/public/resume/Shubham_Ahir_Resume.pdf`
 *    - Set `resumeUrl: "/resume/Shubham_Ahir_Resume.pdf"` below.
 *
 * 3. Adding New Projects:
 *    - Add a new object to the `projects` array following the existing schema.
 * ==============================================================================
 */

export const personalData = {
  name: "Shubham Ahir",
  initials: "SA",
  eyebrow: "COMPUTER SCIENCE & ENGINEERING · GSFC UNIVERSITY",
  heading: "Building things that solve real problems.",
  headline:
    "I'm Shubham Ahir, a Computer Science and Engineering student interested in software development, data and practical engineering.",
  status: "5th Semester Student",
  degree: "B.Tech in Computer Science and Engineering",
  university: "GSFC University",
  location: "Gujarat, India", // Verified university context

  about: {
    lead: "I'm a B.Tech Computer Science and Engineering student at GSFC University. I enjoy building projects that help me apply what I learn, and I'm continuing to develop my skills through software and data-focused work.",
    paragraph2:
      "My work focuses on practical problem solving: developing responsive full-stack applications with React, Node.js, and MongoDB, and performing exploratory data analysis using Python, Pandas, NumPy, and Matplotlib.",
    academicFocus: [
      "Software Development Fundamentals",
      "Full-Stack Web Architecture",
      "Database Modeling & RESTful APIs",
      "Exploratory Data Analysis & Visualization"
    ]
  },

  contact: {
    heading: "Have an opportunity or a project in mind?",
    subheading:
      "I'm interested in learning, building and contributing to meaningful software projects through internship opportunities.",
    
    // IMPORTANT: Verified contact links. Set to string URL when ready.
    // If left as null, the public site cleanly indicates contact readiness
    // without producing dead buttons or broken links.
    email: null,        // e.g. "yourname@gsfcuniversity.ac.in" or "shubham@example.com"
    github: null,       // e.g. "https://github.com/shubham-ahir"
    linkedin: null,     // e.g. "https://linkedin.com/in/shubham-ahir"
    resumeUrl: null,    // e.g. "/resume/Shubham_Ahir_Resume.pdf"
  }
};

export const skillsData = [
  {
    category: "Programming & Data",
    description: "Core programming and analytical tools used for data transformation and visualization.",
    skills: [
      { name: "Python", context: "Applied for scripting, data wrangling, and exploratory analysis pipelines." },
      { name: "Pandas", context: "Data manipulation, DataFrame cleaning, aggregation, and restructuring." },
      { name: "NumPy", context: "Numerical array operations, vectorized calculations, and statistics." },
      { name: "Matplotlib", context: "Exploratory charting, trend analysis plots, and distribution graphs." }
    ]
  },
  {
    category: "Frontend",
    description: "Building responsive, semantic, and interactive user interfaces.",
    skills: [
      { name: "React", context: "Component-driven user interfaces, state management, and modern hooks." },
      { name: "JavaScript", context: "Core ES6+ language fundamentals, DOM manipulation, asynchronous logic." },
      { name: "HTML5", context: "Semantic document structure, accessibility landmarks, clean markup." },
      { name: "CSS3", context: "Responsive layouts, Flexbox, CSS Grid, custom properties, and animations." }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Server runtime, API routing, and document-oriented database modeling.",
    skills: [
      { name: "Node.js", context: "Server-side JavaScript runtime environment for backend applications." },
      { name: "Express", context: "RESTful API endpoint creation, routing logic, and request middleware." },
      { name: "MongoDB", context: "NoSQL document modeling, collection querying, and CRUD operations." }
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "GSFC University",
    status: "Current (5th Semester)",
    type: "Undergraduate Degree",
    notes: "Focusing on core computer science subjects, programming fundamentals, full-stack application development, and data analysis."
  }
];

export const projectsData = [
  {
    id: "rent-wise",
    number: "01",
    title: "Rent Wise",
    tagline: "Intelligent Rental Property & Clothing-Rental Management",
    shortDescription:
      "An intelligent rental-management project focused on organizing rental inventory and related workflows for residential properties and clothing rentals.",
    category: "Full-Stack Web Application",
    status: "Academic Project · In Active Development",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    
    // Live links: set to string when deployed; kept null to avoid dead buttons
    githubUrl: null,
    liveUrl: null,
    
    visualType: "rental-schematic",
    visualLabel: "System Architecture & Workflow Schematic",
    
    overview: {
      problem:
        "Managing rental inventory across disparate categories—such as residential real estate and apparel rentals—typically involves mismatched data structures, fragmented availability tracking, and tedious manual record keeping.",
      solution:
        "Rent Wise provides a structured web interface and backend API designed to consolidate rental asset catalogs, track item status, and streamline booking workflows in one centralized platform.",
      contribution:
        "Designed the React frontend interface, developed RESTful API endpoints using Node.js and Express to manage rental records, and structured the MongoDB document schemas to support diverse rental item attributes.",
      statusDetails:
        "Currently developed as a functional academic prototype. Core inventory listing and API handling are implemented; ongoing work focuses on expanded filtering and validation logic."
    },

    highlights: [
      {
        label: "Dual-Domain Modeling",
        text: "Designed MongoDB document collections capable of handling differing attributes for rental properties (location, lease terms) and rental clothing (size, condition, rental duration)."
      },
      {
        label: "Modular REST Endpoints",
        text: "Implemented Express route handlers for structured CRUD operations against rental inventory items with JSON payload validation."
      },
      {
        label: "Component State in React",
        text: "Structured interactive inventory displays and filter states to provide responsive browsing across rental categories."
      }
    ],

    learnings: [
      "Translating multi-category business requirements into coherent database schemas in MongoDB.",
      "Structuring clean separation of concerns between client components and backend REST controllers.",
      "Handling asynchronous state transitions and error feedback in React frontend views."
    ]
  },
  {
    id: "retail-data-analysis",
    number: "02",
    title: "Retail Data Analysis",
    tagline: "Exploratory Data Analysis & Visual Reporting",
    shortDescription:
      "A data-analysis project using Python to explore, clean, and visualize retail sales data and transactional patterns.",
    category: "Data Analysis & Visualization",
    status: "Completed Academic Project",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    
    // Live links: set to string when repo is published
    githubUrl: null,
    liveUrl: null,
    
    visualType: "data-schematic",
    visualLabel: "Data Pipeline & Analytical Output Schematic",

    overview: {
      problem:
        "Raw retail transactional records frequently contain missing values, inconsistent formats, and unaggregated rows that obscure underlying sales trends, popular categories, and seasonal shifts.",
      solution:
        "Built a modular exploratory data analysis workflow in Python that ingests retail datasets, performs thorough cleaning and missing-data imputation, computes descriptive statistics, and renders visual charts.",
      contribution:
        "Authored the Python scripts using Pandas for data ingestion and DataFrame transformations, utilized NumPy for statistical computations, and constructed visual plots using Matplotlib.",
      statusDetails:
        "Completed analytical study covering exploratory data cleaning, descriptive summary metrics, and visual distribution charting."
    },

    highlights: [
      {
        label: "Data Ingestion & Cleaning",
        text: "Applied Pandas to parse raw retail transactions, handle missing entries, standardize date timestamps, and validate column types."
      },
      {
        label: "Aggregation & Metrics",
        text: "Employed NumPy and Pandas grouping functions to compute monthly revenue trends, product category breakdowns, and order volume summaries."
      },
      {
        label: "Visual Storytelling",
        text: "Generated clear Matplotlib figures illustrating sales trajectories over time and relative performance across product categories."
      }
    ],

    learnings: [
      "Handling real-world dataset quirks including date formatting, missing values, and type casting.",
      "Applying multi-index grouping and aggregate functions in Pandas for rapid exploratory insights.",
      "Designing clean, non-distracting data visual plots with well-labeled axes and legends using Matplotlib."
    ]
  }
];
