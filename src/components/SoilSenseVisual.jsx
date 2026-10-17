import React from 'react';

export default function SoilSenseVisual() {
  return (
    <div className="project-schematic-wrapper" aria-label="SoilSense Soil Monitoring System Architecture Schematic">
      <div className="schematic-header">
        <span className="schematic-tag">SYSTEM ARCHITECTURE SCHEMATIC</span>
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
            <pattern id="grid-pattern-soil" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E6E3DB" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="620" height="320" fill="url(#grid-pattern-soil)" rx="6" />

          {/* Module 1: Client Dashboard (HTML/CSS/JS) */}
          <g transform="translate(25, 40)">
            <rect width="170" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="146" height="24" rx="3" fill="#EAE7DF" />
            <text x="85" y="28" fill="#20201E" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              CLIENT DASHBOARD (WEB)
            </text>

            {/* 4 Sensor Telemetry Cards Simulation */}
            <g transform="translate(12, 46)">
              {/* Temp */}
              <rect x="0" y="0" width="70" height="32" rx="3" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" strokeDasharray="2 2" />
              <text x="6" y="13" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace">TEMP</text>
              <text x="6" y="26" fill="#315DEB" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">-- °C</text>

              {/* Humidity */}
              <rect x="76" y="0" width="70" height="32" rx="3" fill="#FFFFFF" stroke="#20201E" strokeWidth="1" />
              <text x="82" y="13" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace">HUM</text>
              <text x="82" y="26" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">-- %</text>

              {/* Soil Moisture */}
              <rect x="0" y="38" width="70" height="32" rx="3" fill="#FFFFFF" stroke="#20201E" strokeWidth="1" />
              <text x="6" y="51" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace">SOIL</text>
              <text x="6" y="64" fill="#20201E" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">-- %</text>

              {/* pH Level */}
              <rect x="76" y="38" width="70" height="32" rx="3" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" strokeDasharray="2 2" />
              <text x="82" y="51" fill="#68675F" fontSize="7" fontFamily="'JetBrains Mono', monospace">pH LEVEL</text>
              <text x="82" y="64" fill="#315DEB" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="700">-- pH</text>
            </g>

            {/* History Table Container */}
            <rect x="12" y="126" width="146" height="66" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="141" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Recent History Table
            </text>
            <line x1="12" y1="147" x2="158" y2="147" stroke="#EAE7DF" strokeWidth="1" />
            
            <text x="20" y="159" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              Time · Temp · Hum · Soil · pH
            </text>
            <text x="20" y="171" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              Sorted by latest timestamp
            </text>
            <text x="20" y="183" fill="#315DEB" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              Dynamic DOM row render
            </text>

            {/* 5s Polling Badge */}
            <rect x="12" y="200" width="146" height="24" rx="3" fill="#EAE7DF" />
            <circle cx="24" cy="212" r="3.5" fill="#315DEB" />
            <text x="34" y="215" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              POLLING: 5000ms INTERVAL
            </text>

            <rect x="12" y="228" width="146" height="4" rx="2" fill="#315DEB" />
          </g>

          {/* Connection Arrows: Client to Express */}
          <path d="M 195 110 L 235 110" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="235,107 241,110 235,113" fill="#315DEB" />
          <text x="215" y="102" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            /api/data
          </text>

          <path d="M 235 170 L 195 170" stroke="#68675F" strokeWidth="1.5" />
          <polygon points="195,167 189,170 195,173" fill="#68675F" />
          <text x="215" y="184" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            JSON Array
          </text>

          {/* Module 2: Express Backend (Node.js) */}
          <g transform="translate(242, 40)">
            <rect width="165" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="12" y="12" width="141" height="24" rx="3" fill="#EAE7DF" />
            <text x="82" y="28" fill="#20201E" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              BACKEND API (EXPRESS)
            </text>

            {/* GET Route Handler */}
            <rect x="12" y="48" width="141" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="65" fill="#20201E" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              GET /api/data
            </text>
            <text x="20" y="79" fill="#315DEB" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              find().sort(&#123;time:-1&#125;)
            </text>
            <text x="20" y="91" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              limit(10) latest readings
            </text>

            {/* POST Route Handler */}
            <rect x="12" y="108" width="141" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="125" fill="#20201E" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              POST /data
            </text>
            <text x="20" y="139" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace">
              new Data(req.body)
            </text>
            <text x="20" y="151" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              save() document to DB
            </text>

            {/* Middleware & Static */}
            <rect x="12" y="168" width="141" height="52" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="20" y="185" fill="#315DEB" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Server Middleware
            </text>
            <text x="20" y="198" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              express.static('public')
            </text>
            <text x="20" y="210" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              cors() &amp; express.json()
            </text>

            <rect x="12" y="228" width="141" height="4" rx="2" fill="#20201E" />
          </g>

          {/* Connection Arrows: Express to MongoDB */}
          <path d="M 407 110 L 447 110" stroke="#315DEB" strokeWidth="1.5" strokeDasharray="4 3" />
          <polygon points="447,107 453,110 447,113" fill="#315DEB" />
          <text x="427" y="102" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            Mongoose
          </text>

          <path d="M 447 170 L 407 170" stroke="#68675F" strokeWidth="1.5" />
          <polygon points="407,167 401,170 407,173" fill="#68675F" />
          <text x="427" y="184" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">
            Docs
          </text>

          {/* Module 3: Database Layer (MongoDB & Mongoose) */}
          <g transform="translate(454, 40)">
            <rect width="141" height="240" rx="6" fill="#FBFAF7" stroke="#DCD9D0" strokeWidth="1.5" />
            <rect x="10" y="12" width="121" height="24" rx="3" fill="#EAE7DF" />
            <text x="70" y="28" fill="#20201E" fontSize="9.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600" textAnchor="middle">
              DATABASE (MONGODB)
            </text>

            {/* Schema Definition Card */}
            <rect x="10" y="48" width="121" height="114" rx="4" fill="#FFFFFF" stroke="#315DEB" strokeWidth="1" />
            <text x="18" y="65" fill="#315DEB" fontSize="8.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              schema: Data
            </text>
            <text x="18" y="80" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • temperature: Number
            </text>
            <text x="18" y="93" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • humidity: Number
            </text>
            <text x="18" y="106" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • soil: Number
            </text>
            <text x="18" y="119" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • ph: Number
            </text>
            <text x="18" y="132" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • time: Date (now)
            </text>
            <text x="18" y="148" fill="#20201E" fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Collection: datas
            </text>

            {/* Persistence Details */}
            <rect x="10" y="170" width="121" height="50" rx="4" fill="#FFFFFF" stroke="#DCD9D0" strokeWidth="1" />
            <text x="18" y="187" fill="#20201E" fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="600">
              Cluster Connection
            </text>
            <text x="18" y="200" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • Mongoose connect
            </text>
            <text x="18" y="212" fill="#68675F" fontSize="7.5" fontFamily="'JetBrains Mono', monospace">
              • MongoDB Atlas / local
            </text>

            <rect x="10" y="228" width="121" height="4" rx="2" fill="#315DEB" />
          </g>
        </svg>
      </div>

      <div className="schematic-footer">
        <span className="schematic-caption">
          Periodic telemetry pipeline: Browser dashboard polling Express API every 5 seconds for chronological Mongoose sensor readings.
        </span>
      </div>
    </div>
  );
}
