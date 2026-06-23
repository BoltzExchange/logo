// TargetAudience.jsx — perfect-for / not-designed-for comparison.

const Check = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 13l4 4 10-10" />
    </svg>
);
const Cross = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M6 6l12 12M18 6L6 18" />
    </svg>
);

const TargetAudience = () => (
    <div className="target-audience-section">
        <div className="target-header">
            <h3>Who Pro is for</h3>
        </div>
        <div className="target-cards">
            <div className="card perfect-for">
                <h3>Perfect for</h3>
                <ul>
                    <li><Check /> Market makers running Lightning liquidity</li>
                    <li><Check /> Trading desks rebalancing across layers</li>
                    <li><Check /> Routing-node operators looking to earn the spread</li>
                    <li><Check /> Power users comfortable reading a fee curve</li>
                </ul>
            </div>
            <div className="card not-designed-for">
                <h3>Not designed for</h3>
                <ul>
                    <li><Cross /> Fixed-fee, "just-swap-now" use cases — use the regular app</li>
                    <li><Cross /> Custodial integrations — we don't hold your keys</li>
                    <li><Cross /> Sub-dust amounts — minimums apply</li>
                    <li><Cross /> Anyone who finds "negative fee" confusing</li>
                </ul>
            </div>
        </div>
    </div>
);

window.TargetAudience = TargetAudience;
