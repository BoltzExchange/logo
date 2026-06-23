// SwapCard.jsx — the canonical .frame swap card.

const SwapCard = ({ onCreate }) => {
    const [from, setFrom] = React.useState("BTC");
    const [to, setTo]     = React.useState("LN");
    const [sendAmt, setSendAmt] = React.useState("0.00120000");
    const [recvAmt, setRecvAmt] = React.useState("118,420");
    const [feesOpen, setFeesOpen] = React.useState(false);

    const reverse = () => {
        setFrom(to); setTo(from);
        setSendAmt(recvAmt); setRecvAmt(sendAmt);
    };

    return (
        <div className="frame">
            <h3>Create Atomic Swap</h3>

            <div className="amount-field">
                <span className="eyebrow">Send</span>
                <div className="limits">
                    <button type="button">Min</button>
                    <button type="button">Max</button>
                </div>
                <div className="asset-pill-wrap">
                    <AssetPicker value={from} onChange={setFrom} />
                </div>
                <input
                    inputMode="decimal"
                    value={sendAmt}
                    onChange={e => setSendAmt(e.target.value)} />
            </div>

            <div className="reverse-row">
                <button className="reverse-btn" type="button" onClick={reverse} aria-label="Reverse swap direction">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4l-2 2 2 2M2 6h10M12 12l2-2-2-2M14 10H4" />
                    </svg>
                </button>
            </div>

            <div className="amount-field">
                <span className="eyebrow">Receive</span>
                <div className="limits">
                    <button type="button">Min</button>
                    <button type="button">Max</button>
                </div>
                <div className="asset-pill-wrap">
                    <AssetPicker value={to} onChange={setTo} />
                </div>
                <input
                    inputMode="decimal"
                    value={recvAmt}
                    onChange={e => setRecvAmt(e.target.value)} />
            </div>

            <div className="fees-row">
                <button
                    className="fees-toggle"
                    aria-expanded={feesOpen}
                    onClick={() => setFeesOpen(o => !o)}>
                    <span>Fees</span>
                    <span style={{ display: "inline-block", transform: feesOpen ? "rotate(90deg)" : "none", transition: "transform .32s cubic-bezier(.22,1,.36,1)" }}>›</span>
                </button>
                <span style={{ color: "var(--color-text)" }}>~ 0.10% + 132 sat</span>
            </div>
            {feesOpen && (
                <div style={{ background: "var(--color-secondary-800)", border: "1px solid var(--color-white-10)", borderRadius: "var(--border-radius-md)", padding: "10px 12px", margin: "0 0 8px", fontSize: 12, color: "var(--color-white-60)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Boltz Fee</span><span style={{ color: "var(--color-text)" }}>0.10%</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>Network Fee</span><span style={{ color: "var(--color-text)" }}>132 sat</span>
                    </div>
                </div>
            )}

            <button className="btn-primary" type="button" onClick={onCreate}>
                Create Swap
            </button>
        </div>
    );
};

window.SwapCard = SwapCard;
