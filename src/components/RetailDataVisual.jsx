import React from 'react';

export default function RetailDataVisual() {
  return (
    <div className="project-schematic-wrapper" aria-label="Retail Data Analysis Pipeline Schematic">
      <div className="schematic-header">
        <span className="schematic-tag">DATA PIPELINE SCHEMATIC</span>
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
            <pattern id="grid-pattern-data" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E6E3DB" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="620" height="320" fill="url(#grid-pattern-data)" rx="6" />

          {/* Step 1: Raw Ingestion */}
          <g transform="translate(25, 45)">
            <rect width="125" height="230" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="10" y="10" width="105" height="22" rx="3" fill="#EAE7DF" />
            <text x="62" y="25" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              RAW DATASET
            </text>

            <rect x="10" y="44" width="105" height="40" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="58" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Transactions
            </text>
            <text x="18" y="72" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              InvoiceID, Date, SKU
            </text>

            <rect x="10" y="94" width="105" height="40" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="108" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Product Catalog
            </text>
            <text x="18" y="122" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              Category, Unit Price
            </text>

            <rect x="10" y="144" width="105" height="40" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="158" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Customer Orders
            </text>
            <text x="18" y="172" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              Quantity, Total Amt
            </text>

            <rect x="10" y="218" width="105" height="4" rx="2" fill="#68675F" />
          </g>

          {/* Arrow 1 */}
          <path d="M 150 160 L 175 160" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="175,157 180,160 175,163" fill="#315DEB" />

          {/* Step 2: Pandas Cleaning */}
          <g transform="translate(180, 45)">
            <rect width="135" height="230" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="10" y="10" width="115" height="22" rx="3" fill="#EAE7DF" />
            <text x="67" y="25" fill="#315DEB" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700" textAnchor="middle">
              PANDAS &amp; NUMPY
            </text>

            <rect x="10" y="44" width="115" height="50" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="58" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Data Cleaning
            </text>
            <text x="18" y="72" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Drop Null Records
            </text>
            <text x="18" y="84" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Type Conversions
            </text>

            <rect x="10" y="104" width="115" height="50" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="118" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Date Transformations
            </text>
            <text x="18" y="132" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • pd.to_datetime()
            </text>
            <text x="18" y="144" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Monthly Aggregates
            </text>

            <rect x="10" y="164" width="115" height="45" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="178" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Numerical Groupings
            </text>
            <text x="18" y="192" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • np.sum(), np.mean()
            </text>

            <rect x="10" y="218" width="115" height="4" rx="2" fill="#315DEB" />
          </g>

          {/* Arrow 2 */}
          <path d="M 315 160 L 340 160" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="3 2" />
          <polygon points="340,157 345,160 340,163" fill="#315DEB" />

          {/* Step 3: Matplotlib Output */}
          <g transform="translate(345, 45)">
            <rect width="250" height="230" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="10" width="226" height="22" rx="3" fill="#EAE7DF" />
            <text x="125" y="25" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              MATPLOTLIB VISUAL OUTPUTS
            </text>

            {/* Simulated Clean Chart 1: Bar chart */}
            <g transform="translate(18, 44)">
              <rect width="102" height="100" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
              <text x="8" y="16" fill="#20201E" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
                Sales by Category
              </text>
              {/* Bars */}
              <rect x="12" y="55" width="12" height="35" fill="#315DEB" rx="1" />
              <rect x="30" y="38" width="12" height="52" fill="#20201E" rx="1" />
              <rect x="48" y="48" width="12" height="42" fill="#315DEB" rx="1" />
              <rect x="66" y="28" width="12" height="62" fill="#20201E" rx="1" />
              <rect x="84" y="62" width="12" height="28" fill="#9BAEE6" rx="1" />
              <line x1="8" y1="90" x2="96" y2="90" stroke="#DCD9D0" strokeWidth="1" />
            </g>

            {/* Simulated Clean Chart 2: Trend Line plot */}
            <g transform="translate(130, 44)">
              <rect width="108" height="100" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
              <text x="8" y="16" fill="#20201E" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
                Monthly Trend Line
              </text>
              {/* Grid line */}
              <line x1="10" y1="40" x2="98" y2="40" stroke="#F0EFEA" strokeWidth="1" />
              <line x1="10" y1="65" x2="98" y2="65" stroke="#F0EFEA" strokeWidth="1" />
              <line x1="10" y1="90" x2="98" y2="90" stroke="#DCD9D0" strokeWidth="1" />
              {/* Trend Polyline */}
              <polyline
                points="15,75 30,68 45,72 60,48 75,52 90,32"
                fill="none"
                stroke="#315DEB"
                strokeWidth="2"
              />
              <circle cx="15" cy="75" r="2.5" fill="#20201E" />
              <circle cx="30" cy="68" r="2.5" fill="#20201E" />
              <circle cx="45" cy="72" r="2.5" fill="#20201E" />
              <circle cx="60" cy="48" r="2.5" fill="#315DEB" />
              <circle cx="75" cy="52" r="2.5" fill="#20201E" />
              <circle cx="90" cy="32" r="2.5" fill="#315DEB" />
            </g>

            {/* Summary metrics panel */}
            <rect x="18" y="156" width="220" height="52" rx="3" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="26" y="172" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Descriptive Statistics
            </text>
            <text x="26" y="186" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              Mean order volume · Category distribution · Variance metrics
            </text>
            <text x="26" y="198" fill="#315DEB" fontSize="7" fontFamily="'JetBrains Mono', monospace">
              Output format: Clean figures for presentation &amp; study
            </text>

            <rect x="18" y="218" width="220" height="4" rx="2" fill="#315DEB" />
          </g>
        </svg>
      </div>

      <div className="schematic-footer">
        <span className="schematic-caption">
          Python analytical pipeline: tabular ingestion and datetime cleansing in Pandas, numerical operations with NumPy, and figure generation in Matplotlib.
        </span>
      </div>
    </div>
  );
}
