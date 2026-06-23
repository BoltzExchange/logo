// OptionsSection.jsx — three product-option cards (web UI / API / Telegram bot).

const Arrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
);

const OptionsSection = () => (
    <div className="options-section">
        <div className="options-header">
            <h3>Choose your interface</h3>
            <p>One engine, three doors in.</p>
        </div>
        <a className="card" href="#">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-secondary-300)" }}>
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M8 20h8M12 18v2" />
            </svg>
            <h4>Pro Web App <Arrow /></h4>
            <p>Swap directly with the most favourable live pricing — no API integration needed.</p>
        </a>
        <a className="card" href="#">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-secondary-300)" }}>
                <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            <h4>REST API <Arrow /></h4>
            <p>Programmatic access to the same fee curve. Pin a target spread and let your bot do the rest.</p>
        </a>
        <a className="card" href="#">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-secondary-300)" }}>
                <path d="M3 5h18l-7 13-3-5-8-1z" />
            </svg>
            <h4>Telegram bot <Arrow /></h4>
            <p>Subscribe to pricing alerts in your favourite direction. Quote → confirm → swap, all in DMs.</p>
        </a>
    </div>
);

window.OptionsSection = OptionsSection;
