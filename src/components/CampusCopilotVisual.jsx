import React from 'react';

export default function CampusCopilotVisual() {
  return (
    <div className="project-schematic-wrapper" aria-label="Campus Copilot Architecture Schematic">
      <div className="schematic-header">
        <span className="schematic-tag">HACKATHON PROTOTYPE SCHEMATIC</span>
        <span className="schematic-note">VISUAL REPRESENTATION</span>
      </div>

      <div className="schematic-body">
        <svg
          viewBox="0 0 620 320"
          className="schematic-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Subtle Grid Background */}
          <defs>
            <pattern id="grid-pattern-copilot" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E6E3DB" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="620" height="320" fill="url(#grid-pattern-copilot)" rx="6" />

          {/* Module 1: React Frontend (Vite + Tailwind CSS) */}
          <g transform="translate(22, 40)">
            <rect width="174" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="150" height="24" rx="3" fill="#EAE7DF" />
            <text x="87" y="28" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              FRONTEND (REACT + TS)
            </text>

            {/* RAG Chat UI Box */}
            <rect x="12" y="46" width="150" height="66" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" strokeDasharray="3 2" />
            <text x="20" y="62" fill="#315DEB" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
              RAG Academic Chat
            </text>
            <text x="20" y="76" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • 3-tier grounding status
            </text>
            <text x="20" y="88" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Verified source citations
            </text>
            <text x="20" y="100" fill="#20201E" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              • Prompt-injection defense
            </text>

            {/* Student Services UI */}
            <rect x="12" y="120" width="150" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="136" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Student Records Views
            </text>
            <text x="20" y="149" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Attendance calculator
            </text>
            <text x="20" y="161" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Timetable, results &amp; exams
            </text>

            {/* Ingestion & RBAC Badge */}
            <rect x="12" y="180" width="150" height="42" rx="4" fill="#EAE7DF" />
            <text x="87" y="196" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              DOCUMENT UPLOADER
            </text>
            <text x="87" y="210" fill="#68675F" fontSize="7.2" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
              PDF/TXT text extraction
            </text>

            <rect x="12" y="228" width="150" height="4" rx="2" fill="#315DEB" />
          </g>

          {/* Connection Arrows: Frontend to Express API */}
          <path d="M 196 110 L 232 110" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="232,107 238,110 232,113" fill="#315DEB" />
          <text x="214" y="102" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            /api/v1
          </text>

          <path d="M 232 170 L 196 170" stroke="#68675F" strokeWidth="1.5" />
          <polygon points="196,167 190,170 196,173" fill="#68675F" />
          <text x="214" y="184" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            JSON
          </text>

          {/* Module 2: Express Backend (Node.js) */}
          <g transform="translate(238, 40)">
            <rect width="168" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="144" height="24" rx="3" fill="#EAE7DF" />
            <text x="84" y="28" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              BACKEND (EXPRESS.JS)
            </text>

            {/* Security & JWT Context */}
            <rect x="12" y="46" width="144" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="63" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              JWT &amp; RBAC Route Guards
            </text>
            <text x="20" y="76" fill="#315DEB" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • req.user.id isolation
            </text>
            <text x="20" y="88" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • student/faculty/admin roles
            </text>

            {/* AI Orchestrator */}
            <rect x="12" y="106" width="144" height="56" rx="4" fill="#FFFFFF" stroke="#20201E" strokeWidth="1" />
            <text x="20" y="123" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Service Layer
            </text>
            <text x="20" y="136" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • AI orchestrator
            </text>
            <text x="20" y="147" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • VectorStore adapter (RAG)
            </text>
            <text x="20" y="157" fill="#315DEB" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Portal adapter bridge
            </text>

            {/* Knowledge Gap Resolution */}
            <rect x="12" y="170" width="144" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="187" fill="#315DEB" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Knowledge Gap Tracker
            </text>
            <text x="20" y="200" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Logs unverified queries
            </text>
            <text x="20" y="211" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Admin verification flow
            </text>

            <rect x="12" y="228" width="144" height="4" rx="2" fill="#20201E" />
          </g>

          {/* Connection Arrows: Express to MongoDB / Vector Store */}
          <path d="M 406 110 L 442 110" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="442,107 448,110 442,113" fill="#315DEB" />
          <text x="424" y="102" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            RAG Query
          </text>

          <path d="M 442 170 L 406 170" stroke="#68675F" strokeWidth="1.5" />
          <polygon points="406,167 400,170 406,173" fill="#68675F" />
          <text x="424" y="184" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            Vectors
          </text>

          {/* Module 3: Storage & RAG Vector Engine */}
          <g transform="translate(448, 40)">
            <rect width="150" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="10" y="12" width="130" height="24" rx="3" fill="#EAE7DF" />
            <text x="75" y="28" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              STORAGE &amp; VECTOR RAG
            </text>

            {/* Vector Chunks Storage */}
            <rect x="10" y="46" width="130" height="66" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" />
            <text x="18" y="63" fill="#315DEB" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
              Vector Retrieval
            </text>
            <text x="18" y="77" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Document chunks
            </text>
            <text x="18" y="89" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Atlas vector index
            </text>
            <text x="18" y="101" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Multi-tenant isolation
            </text>

            {/* Core Database Collections */}
            <rect x="10" y="120" width="130" height="66" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="137" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              MongoDB Database
            </text>
            <text x="18" y="151" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Users &amp; auth bcrypt
            </text>
            <text x="18" y="163" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Attendance &amp; schedules
            </text>
            <text x="18" y="175" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Notices, events &amp; maps
            </text>

            {/* Hackathon Context Badge */}
            <rect x="10" y="194" width="130" height="28" rx="3" fill="#ECEAE3" />
            <text x="75" y="212" fill="#20201E" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              IEEE HACKATHON PROTOTYPE
            </text>

            <rect x="10" y="228" width="130" height="4" rx="2" fill="#315DEB" />
          </g>
        </svg>
      </div>

      <div className="schematic-footer">
        <span className="schematic-caption">
          Campus Copilot architecture: React &amp; Tailwind frontend communicating with Express API for grounded RAG chat, student records, and vector document retrieval.
        </span>
      </div>
    </div>
  );
}
