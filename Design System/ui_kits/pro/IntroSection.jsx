// IntroSection.jsx — "how it works" + fee chart card.

const FEE_SAMPLE = [
    -0.1, -0.05, 0.02, 0.08, 0.15, 0.12, 0.05, -0.02, -0.08, -0.12,
    -0.05,  0.03, 0.10, 0.18, 0.22, 0.16, 0.08, 0.00, -0.06, -0.10,
    -0.04,  0.06, 0.14, 0.20, 0.13, 0.05, -0.03, -0.09, -0.05,  0.02,
];

const FeeChart = () => {
    const w = 480, h = 140;
    const pad = 8;
    const minY = -0.15, maxY = 0.25;
    const xStep = (w - pad * 2) / (FEE_SAMPLE.length - 1);
    const toY = v => h - pad - ((v - minY) / (maxY - minY)) * (h - pad * 2);
    const points = FEE_SAMPLE.map((v, i) => [pad + i * xStep, toY(v)]);
    const path = points.map((p, i) => (i === 0 ? `M${p[0]} ${p[1]}` : `L${p[0]} ${p[1]}`)).join(" ");
    const zeroY = toY(0);

    return (
        <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Sample Boltz Pro fee chart">
            {/* grid */}
            {[-0.1, 0, 0.1, 0.2].map(v => (
                <line key={v} x1={pad} x2={w - pad} y1={toY(v)} y2={toY(v)}
                    stroke="var(--color-grid)" strokeWidth="1" />
            ))}
            {/* zero line dashed */}
            <line x1={pad} x2={w - pad} y1={zeroY} y2={zeroY}
                stroke="var(--color-white-25)" strokeDasharray="3 4" />
            {/* area + line */}
            <path d={`${path} L${w - pad} ${zeroY} L${pad} ${zeroY} Z`}
                fill="url(#feeFill)" opacity="0.4" />
            <path d={path} stroke="var(--color-chart-purple)" strokeWidth="1.5" fill="none" />
            {/* segments above zero in chart-blue */}
            {points.slice(0, -1).map((p, i) => {
                const next = points[i + 1];
                const above = FEE_SAMPLE[i] >= 0 && FEE_SAMPLE[i + 1] >= 0;
                if (!above) return null;
                return (
                    <line key={i} x1={p[0]} y1={p[1]} x2={next[0]} y2={next[1]}
                        stroke="var(--color-chart-blue)" strokeWidth="2" />
                );
            })}
            {/* segments below zero in chart-green */}
            {points.slice(0, -1).map((p, i) => {
                const next = points[i + 1];
                const below = FEE_SAMPLE[i] < 0 && FEE_SAMPLE[i + 1] < 0;
                if (!below) return null;
                return (
                    <line key={`b${i}`} x1={p[0]} y1={p[1]} x2={next[0]} y2={next[1]}
                        stroke="var(--color-chart-green)" strokeWidth="2" />
                );
            })}
            <defs>
                <linearGradient id="feeFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="var(--color-chart-purple)" stopOpacity="0.4" />
                    <stop offset="1" stopColor="var(--color-chart-purple)" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const IntroSection = () => (
    <div className="intro-section">
        <div className="intro-details">
            <h3>How it works</h3>
            <p>
                Boltz Pro pays you for swapping in directions that rebalance our
                liquidity. The fee on any given pair moves up or down depending on
                routing demand — when the protocol needs flow in your direction,
                <em> you</em> earn the spread instead of paying it.
            </p>
        </div>
        <div className="chart-card">
            <p>Recent Pro fee — BTC ⇄ Lightning</p>
            <FeeChart />
            <div className="legend">
                <span><span className="dot" style={{ background: "var(--color-chart-blue)" }} />positive (you pay)</span>
                <span><span className="dot" style={{ background: "var(--color-chart-green)" }} />negative (you earn)</span>
                <span><span className="dot" style={{ background: "var(--color-chart-purple)" }} />regular boltz fee</span>
            </div>
        </div>
    </div>
);

window.IntroSection = IntroSection;
