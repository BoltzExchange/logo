# Web App UI kit

Reproduces the consumer surface at <https://boltz.exchange>. Default theme
(yellow on dark navy).

Coverage:

- `Nav.jsx` — top navigation with wordmark (yellow gradient mask), language
  toggle, and links.
- `SwapCard.jsx` — the `.frame` swap card with eyebrow-labelled amount inputs,
  asset selector pills, reverse toggle, fees row, and CTA.
- `AssetPicker.jsx` — the pill-shaped asset selector docked inside the amount
  input.
- `HeroBoxes.jsx` — the three Fast / Safe / Multi-Layer feature cards below
  the swap.
- `NodeStats.jsx` — the four big-number stats row (channels / peers / capacity
  / oldest channel).
- `Footer.jsx` — socials + legal + version line + the `Made with 🧡` mark.
- `App.jsx` — wires everything onto the page in the same order as the live
  homepage.

Open `index.html` to see the assembled view. Click "Start Swapping" to dim the
hero glow (same interaction as the live app's `setHideHero`).

These components are deliberately cosmetic — the swap form does **not** call
the real Boltz API; it only manages enough local state to feel real.
