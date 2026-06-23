// HeroBoxes.jsx + NodeStats.jsx — supporting hero content.

const HeroBoxes = () => (
    <div className="hero-boxes">
        <div className="hero-box">
            <h2>Fast</h2>
            <h3>Built on Layer 2</h3>
            <hr />
            <p>Boltz utilizes Layer 2 scaling technologies like the Lightning Network.</p>
        </div>
        <div className="hero-box">
            <h2>Safe</h2>
            <h3>Non-Custodial</h3>
            <hr />
            <p>Swaps on Boltz are atomic, cryptography ensures users are always in control of their money.</p>
        </div>
        <div className="hero-box">
            <h2>Multi-Layer</h2>
            <h3>Bitcoin Layers and Stablecoins</h3>
            <hr />
            <div className="hero-icons">
                <img src="../../assets/icons/lightning.svg" alt="Lightning" />
                <img src="../../assets/icons/bitcoin.svg"   alt="Bitcoin"   className="padded" />
                <img src="../../assets/icons/liquid.svg"    alt="Liquid"    className="padded" />
                <img src="../../assets/icons/rootstock.svg" alt="Rootstock" />
                <img src="../../assets/icons/tbtc.svg"      alt="tBTC" />
                <img src="../../assets/icons/wbtc.svg"      alt="WBTC" />
                <img src="../../assets/icons/usdt.svg"      alt="USDT" />
                <img src="../../assets/icons/usdc.svg"      alt="USDC" />
            </div>
        </div>
    </div>
);

const NodeStats = () => (
    <React.Fragment>
        <h2 className="section-headline">Lightning Nodes</h2>
        <div className="numbers">
            <div><div className="num">8,247<small>Number of Channels</small></div></div>
            <div><div className="num">4,193<small>Number of Peers</small></div></div>
            <div><div className="num">1,124.3<small>Capacity (BTC)</small></div></div>
            <div><div className="num">6.92 yrs<small>Oldest Channel</small></div></div>
        </div>
    </React.Fragment>
);

window.HeroBoxes = HeroBoxes;
window.NodeStats = NodeStats;
