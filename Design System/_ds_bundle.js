/* @ds-bundle: {"format":3,"namespace":"BoltzDesignSystem_3dde43","components":[],"sourceHashes":{"ui_kits/pro/App.jsx":"efd990547ee7","ui_kits/pro/IntroSection.jsx":"91c85f3b6096","ui_kits/pro/OptionsSection.jsx":"4e447e5847c9","ui_kits/pro/ProHeader.jsx":"6b24cccadfc6","ui_kits/pro/TargetAudience.jsx":"636bed4e220f","ui_kits/web-app/App.jsx":"3da2e9017021","ui_kits/web-app/AssetPicker.jsx":"6e3a360d51ed","ui_kits/web-app/Footer.jsx":"5232de60ac5e","ui_kits/web-app/HeroBoxes.jsx":"e16b8f7d2070","ui_kits/web-app/Nav.jsx":"18d576ebcfb8","ui_kits/web-app/SwapCard.jsx":"09e02f79f639"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BoltzDesignSystem_3dde43 = window.BoltzDesignSystem_3dde43 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/pro/App.jsx
try { (() => {
// App.jsx — Pro page assembled.

const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
  isPro: true
}), /*#__PURE__*/React.createElement("div", {
  className: "products-pro"
}, /*#__PURE__*/React.createElement(ProHeader, null), /*#__PURE__*/React.createElement("div", {
  className: "content"
}, /*#__PURE__*/React.createElement(IntroSection, null), /*#__PURE__*/React.createElement(OptionsSection, null), /*#__PURE__*/React.createElement(TargetAudience, null))), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pro/IntroSection.jsx
try { (() => {
// IntroSection.jsx — "how it works" + fee chart card.

const FEE_SAMPLE = [-0.1, -0.05, 0.02, 0.08, 0.15, 0.12, 0.05, -0.02, -0.08, -0.12, -0.05, 0.03, 0.10, 0.18, 0.22, 0.16, 0.08, 0.00, -0.06, -0.10, -0.04, 0.06, 0.14, 0.20, 0.13, 0.05, -0.03, -0.09, -0.05, 0.02];
const FeeChart = () => {
  const w = 480,
    h = 140;
  const pad = 8;
  const minY = -0.15,
    maxY = 0.25;
  const xStep = (w - pad * 2) / (FEE_SAMPLE.length - 1);
  const toY = v => h - pad - (v - minY) / (maxY - minY) * (h - pad * 2);
  const points = FEE_SAMPLE.map((v, i) => [pad + i * xStep, toY(v)]);
  const path = points.map((p, i) => i === 0 ? `M${p[0]} ${p[1]}` : `L${p[0]} ${p[1]}`).join(" ");
  const zeroY = toY(0);
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    role: "img",
    "aria-label": "Sample Boltz Pro fee chart"
  }, [-0.1, 0, 0.1, 0.2].map(v => /*#__PURE__*/React.createElement("line", {
    key: v,
    x1: pad,
    x2: w - pad,
    y1: toY(v),
    y2: toY(v),
    stroke: "var(--color-grid)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("line", {
    x1: pad,
    x2: w - pad,
    y1: zeroY,
    y2: zeroY,
    stroke: "var(--color-white-25)",
    strokeDasharray: "3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: `${path} L${w - pad} ${zeroY} L${pad} ${zeroY} Z`,
    fill: "url(#feeFill)",
    opacity: "0.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    stroke: "var(--color-chart-purple)",
    strokeWidth: "1.5",
    fill: "none"
  }), points.slice(0, -1).map((p, i) => {
    const next = points[i + 1];
    const above = FEE_SAMPLE[i] >= 0 && FEE_SAMPLE[i + 1] >= 0;
    if (!above) return null;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: p[0],
      y1: p[1],
      x2: next[0],
      y2: next[1],
      stroke: "var(--color-chart-blue)",
      strokeWidth: "2"
    });
  }), points.slice(0, -1).map((p, i) => {
    const next = points[i + 1];
    const below = FEE_SAMPLE[i] < 0 && FEE_SAMPLE[i + 1] < 0;
    if (!below) return null;
    return /*#__PURE__*/React.createElement("line", {
      key: `b${i}`,
      x1: p[0],
      y1: p[1],
      x2: next[0],
      y2: next[1],
      stroke: "var(--color-chart-green)",
      strokeWidth: "2"
    });
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "feeFill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--color-chart-purple)",
    stopOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--color-chart-purple)",
    stopOpacity: "0"
  }))));
};
const IntroSection = () => /*#__PURE__*/React.createElement("div", {
  className: "intro-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "intro-details"
}, /*#__PURE__*/React.createElement("h3", null, "How it works"), /*#__PURE__*/React.createElement("p", null, "Boltz Pro pays you for swapping in directions that rebalance our liquidity. The fee on any given pair moves up or down depending on routing demand \u2014 when the protocol needs flow in your direction,", /*#__PURE__*/React.createElement("em", null, " you"), " earn the spread instead of paying it.")), /*#__PURE__*/React.createElement("div", {
  className: "chart-card"
}, /*#__PURE__*/React.createElement("p", null, "Recent Pro fee \u2014 BTC \u21C4 Lightning"), /*#__PURE__*/React.createElement(FeeChart, null), /*#__PURE__*/React.createElement("div", {
  className: "legend"
}, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: "var(--color-chart-blue)"
  }
}), "positive (you pay)"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: "var(--color-chart-green)"
  }
}), "negative (you earn)"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: "var(--color-chart-purple)"
  }
}), "regular boltz fee"))));
window.IntroSection = IntroSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro/IntroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pro/OptionsSection.jsx
try { (() => {
// OptionsSection.jsx — three product-option cards (web UI / API / Telegram bot).

const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));
const OptionsSection = () => /*#__PURE__*/React.createElement("div", {
  className: "options-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "options-header"
}, /*#__PURE__*/React.createElement("h3", null, "Choose your interface"), /*#__PURE__*/React.createElement("p", null, "One engine, three doors in.")), /*#__PURE__*/React.createElement("a", {
  className: "card",
  href: "#"
}, /*#__PURE__*/React.createElement("svg", {
  width: "28",
  height: "28",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  style: {
    color: "var(--color-secondary-300)"
  }
}, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 20h8M12 18v2"
})), /*#__PURE__*/React.createElement("h4", null, "Pro Web App ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("p", null, "Swap directly with the most favourable live pricing \u2014 no API integration needed.")), /*#__PURE__*/React.createElement("a", {
  className: "card",
  href: "#"
}, /*#__PURE__*/React.createElement("svg", {
  width: "28",
  height: "28",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  style: {
    color: "var(--color-secondary-300)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 18l6-6-6-6M8 6l-6 6 6 6"
})), /*#__PURE__*/React.createElement("h4", null, "REST API ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("p", null, "Programmatic access to the same fee curve. Pin a target spread and let your bot do the rest.")), /*#__PURE__*/React.createElement("a", {
  className: "card",
  href: "#"
}, /*#__PURE__*/React.createElement("svg", {
  width: "28",
  height: "28",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  style: {
    color: "var(--color-secondary-300)"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 5h18l-7 13-3-5-8-1z"
})), /*#__PURE__*/React.createElement("h4", null, "Telegram bot ", /*#__PURE__*/React.createElement(Arrow, null)), /*#__PURE__*/React.createElement("p", null, "Subscribe to pricing alerts in your favourite direction. Quote \u2192 confirm \u2192 swap, all in DMs.")));
window.OptionsSection = OptionsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro/OptionsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pro/ProHeader.jsx
try { (() => {
// ProHeader.jsx — products-page hero (h1 + big h2) with the dot-grid background.

const ProHeader = () => /*#__PURE__*/React.createElement("div", {
  className: "header"
}, /*#__PURE__*/React.createElement("h1", null, "Boltz Pro"), /*#__PURE__*/React.createElement("h2", null, "Stack Sats Non-Custodially."));
window.ProHeader = ProHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro/ProHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pro/TargetAudience.jsx
try { (() => {
// TargetAudience.jsx — perfect-for / not-designed-for comparison.

const Check = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 13l4 4 10-10"
}));
const Cross = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12M18 6L6 18"
}));
const TargetAudience = () => /*#__PURE__*/React.createElement("div", {
  className: "target-audience-section"
}, /*#__PURE__*/React.createElement("div", {
  className: "target-header"
}, /*#__PURE__*/React.createElement("h3", null, "Who Pro is for")), /*#__PURE__*/React.createElement("div", {
  className: "target-cards"
}, /*#__PURE__*/React.createElement("div", {
  className: "card perfect-for"
}, /*#__PURE__*/React.createElement("h3", null, "Perfect for"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, null), " Market makers running Lightning liquidity"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, null), " Trading desks rebalancing across layers"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, null), " Routing-node operators looking to earn the spread"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, null), " Power users comfortable reading a fee curve"))), /*#__PURE__*/React.createElement("div", {
  className: "card not-designed-for"
}, /*#__PURE__*/React.createElement("h3", null, "Not designed for"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Cross, null), " Fixed-fee, \"just-swap-now\" use cases \u2014 use the regular app"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Cross, null), " Custodial integrations \u2014 we don't hold your keys"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Cross, null), " Sub-dust amounts \u2014 minimums apply"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Cross, null), " Anyone who finds \"negative fee\" confusing")))));
window.TargetAudience = TargetAudience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro/TargetAudience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/App.jsx
try { (() => {
// App.jsx — assembles the kit into a homepage-shaped view.

const App = () => {
  const [hideHero, setHideHero] = React.useState(false);
  const [created, setCreated] = React.useState(false);
  const [route, setRoute] = React.useState("home"); // home | success

  if (route === "success") {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("div", {
      className: "inner-wrap",
      style: {
        paddingTop: 48,
        paddingBottom: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "frame",
      style: {
        marginTop: 32,
        maxWidth: 496,
        textAlign: "center",
        padding: "32px 24px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        color: "var(--color-primary)"
      }
    }, "Congratulations!"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--color-text)",
        margin: "8px 0 4px"
      }
    }, "You successfully created your swap."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--color-white-50)",
        fontSize: 13,
        margin: "0 0 16px"
      }
    }, "Keep this page open, otherwise your swap can't complete!"), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "12px auto",
        width: 160,
        height: 160,
        background: "var(--color-white)",
        borderRadius: "var(--border-radius-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-secondary-700)",
        fontFamily: "var(--font-mono)",
        fontSize: 11
      }
    }, "QR \xB7 lnbc1pj\u2026"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        margin: "16px 0 0"
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn-primary",
      style: {
        background: "var(--color-black-40)",
        color: "var(--color-text)"
      },
      onClick: () => setRoute("home")
    }, "\u2190 New Swap"), /*#__PURE__*/React.createElement("button", {
      className: "btn-primary"
    }, "Copy Invoice")))), /*#__PURE__*/React.createElement(Footer, null));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("div", {
    className: "inner-wrap hero"
  }, /*#__PURE__*/React.createElement("div", {
    id: "create-overlay",
    className: hideHero ? "" : "glow",
    onClick: () => setHideHero(true),
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(SwapCard, {
    onCreate: () => setRoute("success")
  })), !hideHero && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Non-Custodial Bitcoin Bridge", /*#__PURE__*/React.createElement("small", null, "Swap between different Bitcoin layers and Stablecoins while staying in full control.")), /*#__PURE__*/React.createElement("button", {
    className: "start-btn",
    onClick: () => {
      setHideHero(true);
      document.querySelector("#create-overlay")?.scrollIntoView?.({
        behavior: "smooth",
        block: "start"
      });
    }
  }, "Start Swapping"), /*#__PURE__*/React.createElement(HeroBoxes, null), /*#__PURE__*/React.createElement(NodeStats, null))), /*#__PURE__*/React.createElement(Footer, null));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/AssetPicker.jsx
try { (() => {
// AssetPicker.jsx — pill-shaped asset selector docked inside an amount input.

const ASSETS = [{
  code: "BTC",
  name: "Bitcoin",
  icon: "../../assets/icons/bitcoin.svg"
}, {
  code: "LN",
  name: "Lightning",
  icon: "../../assets/icons/lightning.svg"
}, {
  code: "LBTC",
  name: "Liquid Bitcoin",
  icon: "../../assets/icons/liquid.svg"
}, {
  code: "RBTC",
  name: "Rootstock BTC",
  icon: "../../assets/icons/rootstock.svg"
}, {
  code: "USDT",
  name: "Tether USD",
  icon: "../../assets/icons/usdt.svg"
}, {
  code: "USDC",
  name: "USD Coin",
  icon: "../../assets/icons/usdc.svg"
}, {
  code: "WBTC",
  name: "Wrapped BTC",
  icon: "../../assets/icons/wbtc.svg"
}];
const AssetPicker = ({
  value,
  onChange
}) => {
  const [open, setOpen] = React.useState(false);
  const asset = ASSETS.find(a => a.code === value) || ASSETS[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "asset-pill",
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "listbox",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("img", {
    src: asset.icon,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "code"
  }, asset.code), /*#__PURE__*/React.createElement("svg", {
    className: "arrow",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6l5 5 5-5"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      zIndex: 10,
      background: "var(--color-secondary-800)",
      border: "1px solid var(--color-white-10)",
      borderRadius: "var(--border-radius-md)",
      boxShadow: "0 16px 32px var(--color-black-20)",
      padding: 6,
      minWidth: 180
    }
  }, ASSETS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.code,
    type: "button",
    onClick: () => {
      onChange(a.code);
      setOpen(false);
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      padding: "8px 10px",
      background: a.code === value ? "var(--color-secondary-600)" : "transparent",
      color: "var(--color-text)",
      border: "none",
      borderRadius: "var(--border-radius-sm)",
      cursor: "pointer",
      font: "inherit",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.icon,
    alt: "",
    style: {
      width: 24,
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 550,
      textTransform: "uppercase"
    }
  }, a.code), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-white-50)",
      fontSize: 12,
      marginLeft: "auto"
    }
  }, a.name)))));
};
window.AssetPicker = AssetPicker;
window.ASSETS = ASSETS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/AssetPicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Footer.jsx
try { (() => {
// Footer.jsx — exactly the layout from src/components/Footer.tsx

const FooterIcon = ({
  d
}) => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));
const ICONS = {
  github: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.69-.01-1.36-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z",
  twitter: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15",
  youtube: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
  email: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
};
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  className: "boltz-footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "socials"
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  title: "Github"
}, /*#__PURE__*/React.createElement(FooterIcon, {
  d: ICONS.github
})), /*#__PURE__*/React.createElement("a", {
  href: "#",
  title: "Twitter"
}, /*#__PURE__*/React.createElement(FooterIcon, {
  d: ICONS.twitter
})), /*#__PURE__*/React.createElement("a", {
  href: "#",
  title: "Nostr"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/nostr.svg",
  alt: "",
  style: {
    width: 22,
    height: 22
  }
})), /*#__PURE__*/React.createElement("a", {
  href: "#",
  title: "Substack"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/substack.svg",
  alt: "",
  style: {
    width: 22,
    height: 22
  }
})), /*#__PURE__*/React.createElement("a", {
  href: "#",
  title: "Youtube"
}, /*#__PURE__*/React.createElement(FooterIcon, {
  d: ICONS.youtube
})), /*#__PURE__*/React.createElement("a", {
  href: "#",
  title: "Email"
}, /*#__PURE__*/React.createElement(FooterIcon, {
  d: ICONS.email
}))), /*#__PURE__*/React.createElement("p", {
  className: "footer-nav"
}, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Partner"), " | ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Branding"), " | ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Status"), " | ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Regtest"), " | ", /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Onion")), /*#__PURE__*/React.createElement("p", {
  className: "legal-nav"
}, /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Terms"), /*#__PURE__*/React.createElement("a", {
  href: "#"
}, "Privacy")), /*#__PURE__*/React.createElement("p", {
  className: "version"
}, "Version: 2.1.2, Commit Hash: a1b2c3d"), /*#__PURE__*/React.createElement("p", {
  className: "made"
}, "Made with \uD83E\uDDE1 by Team Boltz"));
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/HeroBoxes.jsx
try { (() => {
// HeroBoxes.jsx + NodeStats.jsx — supporting hero content.

const HeroBoxes = () => /*#__PURE__*/React.createElement("div", {
  className: "hero-boxes"
}, /*#__PURE__*/React.createElement("div", {
  className: "hero-box"
}, /*#__PURE__*/React.createElement("h2", null, "Fast"), /*#__PURE__*/React.createElement("h3", null, "Built on Layer 2"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, "Boltz utilizes Layer 2 scaling technologies like the Lightning Network.")), /*#__PURE__*/React.createElement("div", {
  className: "hero-box"
}, /*#__PURE__*/React.createElement("h2", null, "Safe"), /*#__PURE__*/React.createElement("h3", null, "Non-Custodial"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("p", null, "Swaps on Boltz are atomic, cryptography ensures users are always in control of their money.")), /*#__PURE__*/React.createElement("div", {
  className: "hero-box"
}, /*#__PURE__*/React.createElement("h2", null, "Multi-Layer"), /*#__PURE__*/React.createElement("h3", null, "Bitcoin Layers and Stablecoins"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
  className: "hero-icons"
}, /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/lightning.svg",
  alt: "Lightning"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/bitcoin.svg",
  alt: "Bitcoin",
  className: "padded"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/liquid.svg",
  alt: "Liquid",
  className: "padded"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/rootstock.svg",
  alt: "Rootstock"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/tbtc.svg",
  alt: "tBTC"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/wbtc.svg",
  alt: "WBTC"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/usdt.svg",
  alt: "USDT"
}), /*#__PURE__*/React.createElement("img", {
  src: "../../assets/icons/usdc.svg",
  alt: "USDC"
}))));
const NodeStats = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
  className: "section-headline"
}, "Lightning Nodes"), /*#__PURE__*/React.createElement("div", {
  className: "numbers"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "8,247", /*#__PURE__*/React.createElement("small", null, "Number of Channels"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "4,193", /*#__PURE__*/React.createElement("small", null, "Number of Peers"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "1,124.3", /*#__PURE__*/React.createElement("small", null, "Capacity (BTC)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "num"
}, "6.92 yrs", /*#__PURE__*/React.createElement("small", null, "Oldest Channel")))));
window.HeroBoxes = HeroBoxes;
window.NodeStats = NodeStats;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/HeroBoxes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Nav.jsx
try { (() => {
// Nav.jsx — top navigation with wordmark + language + links

const Nav = ({
  network = "mainnet",
  isPro = false
}) => {
  const [langOpen, setLangOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "boltz-nav",
    "data-theme": isPro ? "pro" : "default"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      borderLeft: "none",
      padding: 0
    },
    "aria-label": "Boltz home"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-mask",
    role: "img",
    "aria-label": "Boltz"
  })), network !== "mainnet" && /*#__PURE__*/React.createElement("span", {
    className: "net-pill"
  }, network.toUpperCase()), isPro && /*#__PURE__*/React.createElement("span", {
    className: "net-pill pro"
  }, "PRO"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "active"
  }, "Swap"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Rescue"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "History"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Products"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Help \u2197"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Docs \u2197"), /*#__PURE__*/React.createElement("button", {
    className: "lang-btn",
    "aria-label": "Language",
    onClick: () => setLangOpen(o => !o),
    style: {
      borderLeft: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"
  })))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/SwapCard.jsx
try { (() => {
// SwapCard.jsx — the canonical .frame swap card.

const SwapCard = ({
  onCreate
}) => {
  const [from, setFrom] = React.useState("BTC");
  const [to, setTo] = React.useState("LN");
  const [sendAmt, setSendAmt] = React.useState("0.00120000");
  const [recvAmt, setRecvAmt] = React.useState("118,420");
  const [feesOpen, setFeesOpen] = React.useState(false);
  const reverse = () => {
    setFrom(to);
    setTo(from);
    setSendAmt(recvAmt);
    setRecvAmt(sendAmt);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "frame"
  }, /*#__PURE__*/React.createElement("h3", null, "Create Atomic Swap"), /*#__PURE__*/React.createElement("div", {
    className: "amount-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Send"), /*#__PURE__*/React.createElement("div", {
    className: "limits"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Min"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Max")), /*#__PURE__*/React.createElement("div", {
    className: "asset-pill-wrap"
  }, /*#__PURE__*/React.createElement(AssetPicker, {
    value: from,
    onChange: setFrom
  })), /*#__PURE__*/React.createElement("input", {
    inputMode: "decimal",
    value: sendAmt,
    onChange: e => setSendAmt(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "reverse-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "reverse-btn",
    type: "button",
    onClick: reverse,
    "aria-label": "Reverse swap direction"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l-2 2 2 2M2 6h10M12 12l2-2-2-2M14 10H4"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "amount-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Receive"), /*#__PURE__*/React.createElement("div", {
    className: "limits"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Min"), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, "Max")), /*#__PURE__*/React.createElement("div", {
    className: "asset-pill-wrap"
  }, /*#__PURE__*/React.createElement(AssetPicker, {
    value: to,
    onChange: setTo
  })), /*#__PURE__*/React.createElement("input", {
    inputMode: "decimal",
    value: recvAmt,
    onChange: e => setRecvAmt(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fees-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fees-toggle",
    "aria-expanded": feesOpen,
    onClick: () => setFeesOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null, "Fees"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      transform: feesOpen ? "rotate(90deg)" : "none",
      transition: "transform .32s cubic-bezier(.22,1,.36,1)"
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text)"
    }
  }, "~ 0.10% + 132 sat")), feesOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-secondary-800)",
      border: "1px solid var(--color-white-10)",
      borderRadius: "var(--border-radius-md)",
      padding: "10px 12px",
      margin: "0 0 8px",
      fontSize: 12,
      color: "var(--color-white-60)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Boltz Fee"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text)"
    }
  }, "0.10%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Network Fee"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text)"
    }
  }, "132 sat"))), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    type: "button",
    onClick: onCreate
  }, "Create Swap"));
};
window.SwapCard = SwapCard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/SwapCard.jsx", error: String((e && e.message) || e) }); }

})();
