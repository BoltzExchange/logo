// AssetPicker.jsx — pill-shaped asset selector docked inside an amount input.

const ASSETS = [
    { code: "BTC",  name: "Bitcoin",          icon: "../../assets/icons/bitcoin.svg"   },
    { code: "LN",   name: "Lightning",        icon: "../../assets/icons/lightning.svg" },
    { code: "LBTC", name: "Liquid Bitcoin",   icon: "../../assets/icons/liquid.svg"    },
    { code: "RBTC", name: "Rootstock BTC",    icon: "../../assets/icons/rootstock.svg" },
    { code: "USDT", name: "Tether USD",       icon: "../../assets/icons/usdt.svg"      },
    { code: "USDC", name: "USD Coin",         icon: "../../assets/icons/usdc.svg"      },
    { code: "WBTC", name: "Wrapped BTC",      icon: "../../assets/icons/wbtc.svg"      },
];

const AssetPicker = ({ value, onChange }) => {
    const [open, setOpen] = React.useState(false);
    const asset = ASSETS.find(a => a.code === value) || ASSETS[0];
    return (
        <div style={{ position: "relative" }}>
            <button
                type="button"
                className="asset-pill"
                onClick={() => setOpen(o => !o)}
                aria-haspopup="listbox"
                aria-expanded={open}>
                <img src={asset.icon} alt="" />
                <span className="code">{asset.code}</span>
                <svg className="arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6l5 5 5-5" />
                </svg>
            </button>
            {open && (
                <div style={{
                    position: "absolute",
                    top: "calc(100% + 6px)", left: 0, zIndex: 10,
                    background: "var(--color-secondary-800)",
                    border: "1px solid var(--color-white-10)",
                    borderRadius: "var(--border-radius-md)",
                    boxShadow: "0 16px 32px var(--color-black-20)",
                    padding: 6, minWidth: 180,
                }}>
                    {ASSETS.map(a => (
                        <button
                            key={a.code}
                            type="button"
                            onClick={() => { onChange(a.code); setOpen(false); }}
                            style={{
                                display: "flex", alignItems: "center", gap: 8,
                                width: "100%", padding: "8px 10px",
                                background: a.code === value ? "var(--color-secondary-600)" : "transparent",
                                color: "var(--color-text)",
                                border: "none", borderRadius: "var(--border-radius-sm)",
                                cursor: "pointer", font: "inherit",
                                textAlign: "left",
                            }}>
                            <img src={a.icon} alt="" style={{ width: 24, height: 24 }} />
                            <span style={{ fontWeight: 550, textTransform: "uppercase" }}>{a.code}</span>
                            <span style={{ color: "var(--color-white-50)", fontSize: 12, marginLeft: "auto" }}>{a.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

window.AssetPicker = AssetPicker;
window.ASSETS = ASSETS;
