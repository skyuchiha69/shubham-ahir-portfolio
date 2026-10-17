import React from 'react';

export default function DealIntelligenceVisual() {
  return (
    <div className="project-schematic-wrapper" aria-label="Deal Intelligence Agent Prototype Schematic">
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
            <pattern id="grid-pattern-deal" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E6E3DB" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="620" height="320" fill="url(#grid-pattern-deal)" rx="6" />

          {/* Module 1: Stakeholder & Deal Graph (D3.js) */}
          <g transform="translate(25, 40)">
            <rect width="170" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="146" height="24" rx="3" fill="#EAE7DF" />
            <text x="85" y="28" fill="#20201E" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              STAKEHOLDER GRAPH (D3.JS)
            </text>

            {/* Interactive Graph Simulation Box */}
            <rect x="12" y="48" width="146" height="110" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Graph Nodes and Edges */}
            <line x1="85" y1="75" x2="45" y2="115" stroke="#DCD9D0" strokeWidth="1.5" />
            <line x1="85" y1="75" x2="125" y2="115" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="45" y1="115" x2="85" y2="140" stroke="#DCD9D0" strokeWidth="1.2" />
            <line x1="125" y1="115" x2="85" y2="140" stroke="#315DEB" strokeWidth="1.5" />

            {/* Center Node: Deal Target */}
            <circle cx="85" cy="75" r="14" fill="#20201E" />
            <text x="85" y="79" fill="#FFFFFF" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              DEAL
            </text>

            {/* Node: Champion */}
            <circle cx="45" cy="115" r="11" fill="#FBFAF7" stroke="#315DEB" strokeWidth="1.5" />
            <text x="45" y="118" fill="#315DEB" fontSize="7" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              CHMP
            </text>

            {/* Node: Decision Maker */}
            <circle cx="125" cy="115" r="11" fill="#315DEB" />
            <text x="125" y="118" fill="#FFFFFF" fontSize="7" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              EXEC
            </text>

            {/* Node: Blocker / Influencer */}
            <circle cx="85" cy="140" r="10" fill="#EAE7DF" stroke="#20201E" strokeWidth="1" />
            <text x="85" y="143" fill="#20201E" fontSize="6.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              INFL
            </text>

            {/* Sub-label */}
            <rect x="12" y="168" width="146" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="186" fill="#20201E" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Network Dynamics
            </text>
            <text x="20" y="200" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Relationship topology
            </text>
            <text x="20" y="212" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Sentiment &amp; influence
            </text>

            <rect x="12" y="228" width="146" height="4" rx="2" fill="#315DEB" />
          </g>

          {/* Connection Arrows: Graph to Memory */}
          <path d="M 195 120 L 225 120" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="225,117 230,120 225,123" fill="#315DEB" />
          <text x="210" y="112" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">STATE</text>

          {/* Module 2: Organizational Memory & Context */}
          <g transform="translate(230, 40)">
            <rect width="165" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="141" height="24" rx="3" fill="#EAE7DF" />
            <text x="82" y="28" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              ORGANIZATIONAL MEMORY
            </text>

            {/* Objection Intelligence */}
            <rect x="12" y="48" width="141" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="66" fill="#20201E" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Objection Catalog
            </text>
            <text x="20" y="80" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Pricing &amp; scope pushback
            </text>
            <text x="20" y="92" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Competitor comparisons
            </text>

            {/* Historical Deal Retrieval */}
            <rect x="12" y="108" width="141" height="54" rx="4" fill="#FFFFFF" stroke="#20201E" strokeWidth="1" />
            <text x="20" y="126" fill="#20201E" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Historical Precedents
            </text>
            <text x="20" y="140" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Similar won/lost cases
            </text>
            <text x="20" y="152" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Contextual similarities
            </text>

            {/* Demo Workflow State */}
            <rect x="12" y="170" width="141" height="50" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="188" fill="#315DEB" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Judge Demo Scenario
            </text>
            <text x="20" y="204" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              Simulated pitch dataset
            </text>

            <rect x="12" y="228" width="141" height="4" rx="2" fill="#20201E" />
          </g>

          {/* Connection Arrows: Memory to AI Engine */}
          <path d="M 395 120 L 425 120" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="425,117 430,120 425,123" fill="#315DEB" />
          <text x="410" y="112" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">PROMPT</text>

          {/* Module 3: AI Intelligence Layer (Gemini API) */}
          <g transform="translate(430, 40)">
            <rect width="165" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="141" height="24" rx="3" fill="#EAE7DF" />
            <text x="82" y="28" fill="#315DEB" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              GEMINI API INTEGRATION
            </text>

            {/* Recommendation Output */}
            <rect x="12" y="48" width="141" height="60" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" />
            <text x="20" y="66" fill="#315DEB" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
              Strategy Guidance
            </text>
            <text x="20" y="80" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Contextual playbooks
            </text>
            <text x="20" y="92" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Objection counter-tactics
            </text>
            <text x="20" y="102" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Follow-up priority scoring
            </text>

            {/* Outcome Simulation */}
            <rect x="12" y="116" width="141" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="134" fill="#20201E" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Outcome Simulation
            </text>
            <text x="20" y="148" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Decision branch modeling
            </text>
            <text x="20" y="160" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              • Exploratory trade-offs
            </text>

            {/* Prototype Badge */}
            <rect x="12" y="176" width="141" height="44" rx="4" fill="#ECEAE3" />
            <text x="82" y="196" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              HACK BARODA DEMO
            </text>
            <text x="82" y="210" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
              Proof-of-Concept Prototype
            </text>

            <rect x="12" y="228" width="141" height="4" rx="2" fill="#315DEB" />
          </g>
        </svg>
      </div>

      <div className="schematic-footer">
        <span className="schematic-caption">
          Hackathon prototype flow: D3.js stakeholder topology connected with structured organizational memory and Google Gemini API integration.
        </span>
      </div>
    </div>
  );
}
