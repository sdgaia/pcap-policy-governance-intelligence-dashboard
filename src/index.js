import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>PCAP Policy Governance Intelligence Dashboard</title>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f3f5f9;
        margin: 0;
        padding: 24px;
        color: #17233c;
      }

      .container {
        max-width: 1600px;
        margin: auto;
      }

      .hero {
        background: white;
        border-radius: 18px;
        padding: 24px;
        margin-bottom: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      }

      .hero h1 {
        margin: 0;
        font-size: 42px;
      }

      .subtitle {
        margin-top: 10px;
        color: #60708f;
        font-size: 16px;
      }

      .top-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
        margin-bottom: 20px;
      }

      .card {
        background: white;
        border-radius: 16px;
        padding: 18px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }

      .card-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 14px;
      }

      .gauge {
        width: 100%;
        height: 90px;
        position: relative;
      }

      .gauge svg {
        width: 100%;
        height: 100%;
      }

      .gauge-value {
        position: absolute;
        width: 100%;
        text-align: center;
        top: 42px;
        font-size: 28px;
        font-weight: bold;
      }

      .section-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
        margin-bottom: 20px;
      }

      .metric-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
      }

      .bar {
        height: 10px;
        border-radius: 20px;
        background: #dfe6ef;
        overflow: hidden;
        margin-top: 6px;
      }

      .bar-fill {
        height: 100%;
        border-radius: 20px;
      }

      .pill-row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 12px;
      }

      .pill {
        padding: 6px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        background: #edf2ff;
      }

      .summary-box {
        border: 1px solid #e6ebf3;
        border-radius: 12px;
        padding: 12px;
        margin-bottom: 10px;
      }

      .summary-box h4 {
        margin: 0 0 6px 0;
        font-size: 13px;
      }

      .summary-box p {
        margin: 0;
        font-size: 13px;
        color: #4d5d79;
      }

      .documents-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
      }

      .doc-card {
        border: 1px solid #e4e9f2;
        border-radius: 12px;
        padding: 10px;
        background: #fafcff;
      }

      .doc-label {
        font-size: 11px;
        color: #70809c;
        margin-bottom: 4px;
      }

      .doc-title {
        font-size: 13px;
        font-weight: bold;
      }

    </style>
  </head>
  <body>
    <div class="container">

      <div class="hero">
        <h1>🧠 National Agroecology Transition Policy</h1>
        <div class="subtitle">
          Policy Governance Intelligence • Recursive Policy Architecture • Propagation Intelligence
        </div>
      </div>

      <div class="top-grid">

        ${renderGauge('PIG Score',82,'#22c55e')}
        ${renderGauge('Strategic Aggregation',78,'#2563eb')}
        ${renderGauge('Intrinsic OCI-D',84,'#22c55e')}
        ${renderGauge('Intrinsic OCI-O',68,'#2563eb')}
        ${renderGauge('Fragmentation Index',28,'#ef4444')}

      </div>

      <div class="card" style="margin-bottom:20px;">
        <div class="card-title">🧩 Overall Policy Intelligence Assessment</div>

        <div class="section-grid">
          <div class="summary-box">
            <h4>🟢 PIG Score</h4>
            <p>82% — Recursive governance architecture remains strategically coherent.</p>
          </div>

          <div class="summary-box">
            <h4>🟠 Intelligence–Execution Differential</h4>
            <p>Execution propagation remains weaker than recursive policy continuity.</p>
          </div>
        </div>

        <div class="pill-row">
          <div class="pill">Recursive continuity</div>
          <div class="pill">Propagation integrity</div>
          <div class="pill">Cross-policy coherence</div>
          <div class="pill">Strategic visibility</div>
        </div>
      </div>

      <div class="section-grid">

        <div class="card">
          <div class="card-title">Recursive Governance Intelligence Components</div>

          ${metric('C1 Strategic Alignment',90,'#22c55e')}
          ${metric('C2 Policy Translation',85,'#22c55e')}
          ${metric('C3 Sectoral Architecture',75,'#2563eb')}
          ${metric('C4 Strategic Monitoring',70,'#2563eb')}
          ${metric('C5 Strategic Escalation',68,'#2563eb')}
          ${metric('C6 Strategic Auditability',82,'#22c55e')}

        </div>

        <div class="card">
          <div class="card-title">Recursive Intelligence Stability Layer</div>

          ${metric('Strategic Alignment Stability',90,'#22c55e')}
          ${metric('Translation Continuity',85,'#22c55e')}
          ${metric('Architectural Integrity',75,'#2563eb')}
          ${metric('Monitoring Intelligence',70,'#2563eb')}
          ${metric('Escalation Intelligence',68,'#2563eb')}
          ${metric('Recursive Auditability',82,'#22c55e')}

        </div>

      </div>

      <div class="card" style="margin-bottom:20px;">
        <div class="card-title">📚 Recursive Intelligence Architecture</div>

        <div class="documents-grid">

          <div class="doc-card">
            <div class="doc-label">Primary Strategic Anchor</div>
            <div class="doc-title">National Agroecology Transition Policy</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Recursive Governance Layer</div>
            <div class="doc-title">National → Sector Strategy</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Governance Owner</div>
            <div class="doc-title">Ministry of Food & Agriculture</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Horizontal Visibility</div>
            <div class="doc-title">Accessible</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Reference Chain Integrity</div>
            <div class="doc-title">Strong</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Propagation Architecture</div>
            <div class="doc-title">Operationally Stable</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Recursive Inheritance</div>
            <div class="doc-title">C1-C2-C3 Preserved</div>
          </div>

          <div class="doc-card">
            <div class="doc-label">Cross-Policy Integration</div>
            <div class="doc-title">Moderate</div>
          </div>

        </div>
      </div>

      <div class="section-grid">

        <div class="card">
          <div class="card-title">📡 Propagation Intelligence</div>

          <div class="summary-box">
            <h4>Strongest Propagation</h4>
            <p>PRG-2 Circular Food Systems — 81%</p>
          </div>

          <div class="summary-box">
            <h4>Weakest Propagation</h4>
            <p>PRG-3 Nutrition & Youth — 52%</p>
          </div>

        </div>

        <div class="card">
          <div class="card-title">🧠 Recursive Governance Intelligence Synthesis</div>

          <div class="summary-box">
            <h4>Executive Summary</h4>
            <p>Policy intelligence architecture remains structurally coherent with stable recursive continuity.</p>
          </div>

          <div class="summary-box">
            <h4>Propagation Outlook</h4>
            <p>Monitoring propagation remains partially unstable across programme transition layers.</p>
          </div>

          <div class="summary-box">
            <h4>Reviewer Focus</h4>
            <p>Cross-policy escalation inheritance and recursive monitoring sufficiency.</p>
          </div>

        </div>

      </div>

    </div>
  </body>
  </html>
  `);
});

function renderGauge(title,value,color){
  return `
    <div class="card">
      <div class="card-title">${title}</div>
      <div class="gauge">
        <svg viewBox="0 0 200 120">
          <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="#e5e7eb" stroke-width="18"/>
          <path d="M20 100 A80 80 0 0 1 ${20 + (160*value/100)} 100" fill="none" stroke="${color}" stroke-width="18"/>
        </svg>
        <div class="gauge-value" style="color:${color}">${value}%</div>
      </div>
    </div>
  `;
}

function metric(label,value,color){
  return `
    <div class="metric-row">
      <div style="width:70%">
        <div style="font-size:13px;font-weight:bold">${label}</div>
        <div class="bar">
          <div class="bar-fill" style="width:${value}%;background:${color}"></div>
        </div>
      </div>
      <div style="font-weight:bold">${value}%</div>
    </div>
  `;
}

app.listen(PORT, () => {
  console.log('PIG dashboard running');
});
