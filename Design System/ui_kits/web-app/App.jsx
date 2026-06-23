// App.jsx — assembles the kit into a homepage-shaped view.

const App = () => {
    const [hideHero, setHideHero] = React.useState(false);
    const [created, setCreated] = React.useState(false);
    const [route, setRoute] = React.useState("home"); // home | success

    if (route === "success") {
        return (
            <React.Fragment>
                <Nav />
                <div className="inner-wrap" style={{ paddingTop: 48, paddingBottom: 96 }}>
                    <div className="frame" style={{ marginTop: 32, maxWidth: 496, textAlign: "center", padding: "32px 24px" }}>
                        <h3 style={{ color: "var(--color-primary)" }}>Congratulations!</h3>
                        <p style={{ color: "var(--color-text)", margin: "8px 0 4px" }}>You successfully created your swap.</p>
                        <p style={{ color: "var(--color-white-50)", fontSize: 13, margin: "0 0 16px" }}>
                            Keep this page open, otherwise your swap can't complete!
                        </p>
                        <div style={{
                            margin: "12px auto", width: 160, height: 160,
                            background: "var(--color-white)",
                            borderRadius: "var(--border-radius-md)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "var(--color-secondary-700)", fontFamily: "var(--font-mono)", fontSize: 11,
                        }}>QR · lnbc1pj…</div>
                        <div style={{ display: "flex", gap: 8, margin: "16px 0 0" }}>
                            <button className="btn-primary" style={{ background: "var(--color-black-40)", color: "var(--color-text)" }}
                                onClick={() => setRoute("home")}>← New Swap</button>
                            <button className="btn-primary">Copy Invoice</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Nav />
            <div className="inner-wrap hero">
                <div
                    id="create-overlay"
                    className={hideHero ? "" : "glow"}
                    onClick={() => setHideHero(true)}
                    style={{ paddingTop: 24 }}>
                    <SwapCard onCreate={() => setRoute("success")} />
                </div>
                {!hideHero && (
                    <React.Fragment>
                        <h1>
                            Non-Custodial Bitcoin Bridge
                            <small>Swap between different Bitcoin layers and Stablecoins while staying in full control.</small>
                        </h1>
                        <button className="start-btn" onClick={() => {
                            setHideHero(true);
                            document.querySelector("#create-overlay")?.scrollIntoView?.({ behavior: "smooth", block: "start" });
                        }}>Start Swapping</button>
                        <HeroBoxes />
                        <NodeStats />
                    </React.Fragment>
                )}
            </div>
            <Footer />
        </React.Fragment>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
