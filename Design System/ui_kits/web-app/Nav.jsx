// Nav.jsx — top navigation with wordmark + language + links

const Nav = ({ network = "mainnet", isPro = false }) => {
    const [langOpen, setLangOpen] = React.useState(false);
    return (
        <nav className="boltz-nav" data-theme={isPro ? "pro" : "default"}>
            <div className="nav-inner">
                <a href="#" style={{ borderLeft: "none", padding: 0 }} aria-label="Boltz home">
                    <span className="logo-mask" role="img" aria-label="Boltz" />
                </a>
                {network !== "mainnet" && (
                    <span className="net-pill">{network.toUpperCase()}</span>
                )}
                {isPro && <span className="net-pill pro">PRO</span>}
                <a href="#" className="active">Swap</a>
                <a href="#">Rescue</a>
                <a href="#">History</a>
                <a href="#">Products</a>
                <a href="#">Help ↗</a>
                <a href="#">Docs ↗</a>
                <button
                    className="lang-btn"
                    aria-label="Language"
                    onClick={() => setLangOpen(o => !o)}
                    style={{ borderLeft: "none" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

window.Nav = Nav;
