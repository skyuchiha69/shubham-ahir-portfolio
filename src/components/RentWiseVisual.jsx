import React from 'react';

export default function RentWiseVisual() {
  return (
    <div className="project-schematic-wrapper" aria-label="Rent Wise Architectural Schematic">
      <div className="schematic-header">
        <span className="schematic-tag">ARCHITECTURAL SCHEMATIC</span>
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
            <pattern id="grid-pattern-rent" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E6E3DB" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="620" height="320" fill="url(#grid-pattern-rent)" rx="6" />

          {/* Client Layer (React) */}
          <g transform="translate(30, 40)">
            <rect width="160" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="136" height="24" rx="3" fill="#EAE7DF" />
            <text x="80" y="28" fill="#20201E" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              FRONTEND (REACT)
            </text>

            {/* Property Inventory Card */}
            <rect x="14" y="50" width="132" height="78" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" strokeDasharray="3 3" />
            <text x="24" y="68" fill="#315DEB" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              Property Module
            </text>
            <text x="24" y="86" fill="#68675F" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              • Listing Catalog
            </text>
            <text x="24" y="100" fill="#68675F" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              • Lease Term Tracking
            </text>
            <text x="24" y="114" fill="#68675F" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              • Availability Status
            </text>

            {/* Clothing Inventory Card */}
            <rect x="14" y="142" width="132" height="78" rx="4" fill="#FFFFFF" stroke="#20201E" strokeWidth="1" />
            <text x="24" y="160" fill="#20201E" fontSize="10" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700">
              Apparel Module
            </text>
            <text x="24" y="178" fill="#68675F" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              • Garment Categories
            </text>
            <text x="24" y="192" fill="#68675F" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              • Sizing &amp; Condition
            </text>
            <text x="24" y="206" fill="#68675F" fontSize="8.5" fontFamily="'JetBrains Mono', monospace">
              • Rental Durations
            </text>

            <rect x="14" y="228" width="132" height="4" rx="2" fill="#315DEB" />
          </g>

          {/* Connection Arrows: React to Express */}
          <path d="M 190 120 L 230 120" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="230,117 236,120 230,123" fill="#315DEB" />
          <text x="210" y="110" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">REST</text>

          <path d="M 230 180 L 190 180" stroke="#68675F" strokeWidth="1.5" />
          <polygon points="190,177 184,180 190,183" fill="#68675F" />
          <text x="210" y="195" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">JSON</text>

          {/* Server Layer (Node.js & Express) */}
          <g transform="translate(240, 40)">
            <rect width="160" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="136" height="24" rx="3" fill="#EAE7DF" />
            <text x="80" y="28" fill="#20201E" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              BACKEND API (EXPRESS)
            </text>

            {/* Route Handlers */}
            <rect x="14" y="52" width="132" height="48" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="22" y="70" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              GET /api/inventory
            </text>
            <text x="22" y="86" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              Category filter routes
            </text>

            <rect x="14" y="110" width="132" height="48" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="22" y="128" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              POST /api/rentals
            </text>
            <text x="22" y="144" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              Booking records
            </text>

            {/* Validation & Middleware */}
            <rect x="14" y="170" width="132" height="50" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="22" y="188" fill="#315DEB" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Middleware
            </text>
            <text x="22" y="204" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              Request validation
            </text>

            <rect x="14" y="228" width="132" height="4" rx="2" fill="#20201E" />
          </g>

          {/* Connection Arrows: Express to MongoDB */}
          <path d="M 400 120 L 440 120" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="440,117 446,120 440,123" fill="#315DEB" />
          <text x="420" y="110" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Mongoose</text>

          <path d="M 440 180 L 400 180" stroke="#68675F" strokeWidth="1.5" />
          <polygon points="400,177 394,180 400,183" fill="#68675F" />
          <text x="420" y="195" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Docs</text>

          {/* Database Layer (MongoDB) */}
          <g transform="translate(450, 40)">
            <rect width="140" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="10" y="12" width="120" height="24" rx="3" fill="#EAE7DF" />
            <text x="70" y="28" fill="#20201E" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              DATABASE (MONGODB)
            </text>

            {/* Collections */}
            <rect x="12" y="52" width="116" height="50" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" />
            <text x="20" y="70" fill="#315DEB" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              properties
            </text>
            <text x="20" y="86" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              id, type, lease, rate
            </text>

            <rect x="12" y="112" width="116" height="50" rx="4" fill="#FFFFFF" stroke="#20201E" strokeWidth="1" />
            <text x="20" y="130" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              apparel_items
            </text>
            <text x="20" y="146" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              id, size, tag, days
            </text>

            <rect x="12" y="172" width="116" height="48" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="190" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              rental_bookings
            </text>
            <text x="20" y="206" fill="#68675F" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              dates, status
            </text>

            <rect x="12" y="228" width="116" height="4" rx="2" fill="#315DEB" />
          </g>
        </svg>
      </div>

      <div className="schematic-footer">
        <span className="schematic-caption">
          Dual-domain data flow: React client components communicating through Express REST routes to MongoDB collections.
        </span>
      </div>
    </div>
  );
}
