# Pro UI kit

Reproduces a slice of the **Boltz Pro** surface (`/products/pro` on the live
app). Same components as the consumer kit but with `boltz-theme="pro"` applied
to the document — every token swaps to the burnt-orange / near-black palette
automatically.

Coverage:

- Reuses `Nav.jsx` and `Footer.jsx` from `../web-app/`.
- `ProHeader.jsx` — the products page H1 + H2 + dot-grid background.
- `IntroSection.jsx` — two-column "how it works" + sparkline fee chart card.
- `OptionsSection.jsx` — three product-option cards (Pro UI, REST API, Telegram
  bot) with the canonical hover-glow.
- `TargetAudience.jsx` — the "Perfect for / Not designed for" comparison.

Open `index.html` to see the Pro product page assembled, scaled into the
Design System preview frame.
