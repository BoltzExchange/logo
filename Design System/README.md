# Boltz Design System

A design system for **Boltz** — the non-custodial Bitcoin bridge at
[boltz.exchange](https://boltz.exchange). Boltz lets users swap between
different Bitcoin "layers" — on-chain BTC, the Lightning Network, Liquid (L-BTC),
Rootstock (RBTC), and stablecoins (USDT / USDC / USDt0) across many EVM and
non-EVM chains — without ever giving up custody of their funds. Swaps are atomic
and enforced by cryptography rather than a centralized exchange.

This repo is *not* the production codebase. It is a curated capture of the
visual + interaction language used by Boltz today, packaged so design agents
(and humans) can prototype convincingly on-brand artifacts.

## Sources used to build this system

- **Codebase:** `boltz-web-app/` (mounted as a local file system, Solid.js +
  SCSS, ~v2.1.2). The single source of truth for color tokens, typography,
  border radii, animation, layout. Public mirror: <https://github.com/BoltzExchange/boltz-web-app>.
- **Brand assets:** uploaded SVGs (`uploads/boltz-logo*.svg`,
  `uploads/boltz-pro-logo_circle.svg`).
- **Brand colors (provided by stakeholder):** `Boltz Yellow #E6C826`,
  `Boltz Blue #081E36`.
- **Public web property:** <https://boltz.exchange/>, plus the products pages
  `/products/btcpay`, `/products/client`, `/products/pro`.

Don't assume the reader has access to any of the above — every fact you need is
restated in this file or in `colors_and_type.css`.

## Products represented

Boltz ships several surfaces. This system focuses on the two most public:

1. **Boltz Web App** (default theme) — the consumer swap UI at
   `boltz.exchange`. Yellow accent on dark navy. Most users land here.
2. **Boltz Pro** (pro theme) — same engine, traders' surface. Users *earn* sats
   by swapping in directions that rebalance Boltz's liquidity. Burnt-orange
   accent on near-black background.

Other surfaces mentioned in the codebase but not given a full UI kit here:

- **Boltz Client** — headless CLI / daemon for self-custodial automation.
- **BTCPay Server plugin** — embeds Boltz swaps into BTCPay merchant flows.

---

## Index

Files in this design system, top-down:

- `README.md` — this file.
- `SKILL.md` — Agent Skill manifest; lets Claude Code load this system as a
  named skill.
- `colors_and_type.css` — drop-in CSS file with every color, type, radius and
  weight token. Use this as the foundation of any new artifact.
- `assets/` — logos, product icons (BTC, Lightning, Liquid, USDT, …), network
  glyphs, and circuit illustrations copied verbatim from the codebase.
- `preview/` — small HTML cards that render in the Design System tab so the
  user can review each token visually.
- `ui_kits/web-app/` — React (Babel-JSX) reproduction of the consumer Swap UI,
  with header / footer / swap form / asset picker / hero. `index.html`
  demonstrates the full screen.
- `ui_kits/pro/` — React reproduction of Boltz Pro. Shares components with the
  consumer kit but applies the `boltz-theme="pro"` palette.

To use the system in a new HTML file:

```html
<link rel="stylesheet" href="colors_and_type.css" />
<!-- or, for Pro: -->
<html boltz-theme="pro">…</html>
```

Then reference tokens like `var(--color-primary)`, `var(--color-secondary-700)`,
`var(--border-radius-md)`, etc.

---

## Content fundamentals

### Voice

Boltz speaks like a **technical co-founder who's also pretty online**.
Confident, precise, never marketing-cute. It assumes the reader knows what
"non-custodial," "Lightning," "Layer 2" and "BOLT12" mean — those terms are
used unexplained on the homepage. Acronyms are not spelled out. Jargon is a
filter, not a barrier; Boltz is comfortable being a tool for people who already
care about Bitcoin self-sovereignty.

The tone runs from **direct utility copy** ("Start Swapping", "Refund Swap",
"Paste a Lightning invoice, BOLT12 or LNURL to receive funds") to **terse
brand statements** ("Non-Custodial Bitcoin Bridge", "Stack Sats
Non-Custodially").

It will get warm in two specific places: the footer (`Made with 🧡 by Team
Boltz`) and rare moments of celebration (`Back up all your swaps with a single
Rescue Key 🙌`). That's the entire emoji budget.

### Casing

- **Title Case** for product names, headlines, button labels, nav items, page
  H1s: "Lightning Nodes", "Number of Channels", "Start Swapping",
  "Boltz Rescue Key".
- **Sentence case** for inline help and body sentences.
- **UPPERCASE** is reserved for two things: section "eyebrow" labels
  (`<h2 class="headline">` in the codebase — `INTEGRATIONS`, `PARTNERS`,
  `LIGHTNING NODES`) and small interior labels inside form rows
  (`SEND`, `RECEIVE`, `MIN`, `MAX`).
- Inline asset codes / denominations are always uppercase: `BTC`, `LBTC`,
  `RBTC`, `USDT`, `WBTC`.

### "We" vs "you"

The product talks **to** the user in second person ("You will be able to refund
after the swap timeout!") and refers to itself as **Boltz**, almost never "we"
("Boltz utilizes Layer 2 scaling technologies…"). Mentions of the team show up
only in the footer.

### Error & warning copy

Warnings are blunt and start with the consequence, not the cause:

- `Keep this page open, otherwise your swap can't complete!`
- `Make sure your transaction confirms within ~24 hours after creation of this swap!`
- `⚠️ WARNING: This will delete ALL your swap data and generate a new Rescue Key.`

The single ⚠️ is the *only* emoji used in alert copy, and only for destructive
actions.

### Vibe checklist

- Confident, technical, *not* friendly-startup. No "Let's get you set up!"
- No exclamation marks in marketing copy. ✅ in confirmation copy
  ("Successfully swapped!"), used sparingly.
- No invented brand verbs. The product "swaps", "refunds", "rescues" — that's
  the verb pool.
- Numbers and units are shown raw (`{{ years }} yrs`, `Number of Peers`, sat
  counts as integers with separators). Never humanized to "lots of" or "tons
  of".

---

## Visual foundations

### Color

- Two themes ship as full token sets: `[boltz-theme="default"]` and
  `[boltz-theme="pro"]`. They share the *same* structural tokens
  (`--color-secondary-700` is the card background in both) and differ only in
  hue. This makes every component theme-portable.
- **Default theme**: a near-black navy ramp from `#12253a` (body) →
  `#0f1f30` (cards) → `#091625` (inputs). Primary is `#e8cb2b`
  Boltz yellow. Link colour is a teal `#4fadc2`.
- **Pro theme**: a still-darker neutral ramp from `#14191e` → `#070a0e`.
  Primary is a burnt orange `#c47835`. Text drops from `#d7dee4` to
  `#9fa8b1` to suit the higher-density trader surface.
- Opacity is encoded as a discrete ramp (`--color-white-05/10/15/25/30/50/60/80/90`)
  rather than ad-hoc rgba. **Always pick from the ramp**, even when prototyping.

### Type

- **Noto Sans** for everything (400 / 500 / 550 / 700 / 800). The 550 weight
  is unusual but is what the codebase uses for asset-code labels.
- **Noto Sans Mono** for code, hashes, swap IDs, anything technical.
- Body baseline: `14px / 1.45`.
- The single distinctive type move is the **gradient hero H1** —
  `font-size: 64px; font-weight: 800` with a `linear-gradient(20deg, yellow,
  blue)` text-clipped fill. Use sparingly, exactly once per page.
- Section breakers use UPPERCASE `h2.headline`, 26px, weight 400 — no gradient.

### Background & layout

- Always dark. There is no light-mode in production. Backgrounds are flat
  fills, **never** photographic.
- The only non-flat background trick: the `/products` header uses a subtle
  **dot-grid** (radial-gradient of `var(--color-white-10)` dots, 13×13px) that
  fades to transparent over the bottom 40% via a linear-gradient mask. Reuse it
  when introducing a page section, but don't stack it.
- Cards and the swap "frame" set a **max-width** (`496px` for the swap card,
  `1024px` for the homepage, `1100px` for product pages) and center the
  content. Mobile breaks at `768px` and `488px`.

### Animation

- Easing is conservative: `ease-out` for entrances, `ease-in-out` for hover,
  `cubic-bezier(0.22, 1, 0.36, 1)` (a soft, slightly springy curve) for
  expanding/collapsing fee details.
- Hero entrance animations stack three properties: `opacity 0→1`,
  `filter: blur(20px) → 0`, and a 50–150px translate. ~0.8–1s, scroll-triggered
  via `animation-timeline: view()`.
- The Boltz logo on the loading screen has a *single* signature animation: a
  3-second `scale(1) → scale(1.1) → scale(1)` loop called `boltzing`. Use it
  for any loading state.
- Reduced-motion is honored — wrap entrance animations in
  `@media (prefers-reduced-motion: no-preference)`.
- No bounces, no parallax, no Lottie. No emoji animations.

### Hover and press

- **Buttons** swap from yellow → light gray (`--color-secondary-200`) on
  hover; text colour stays inverted to the dark navy. Disabled buttons go to
  `--color-medium-gray` with `cursor: not-allowed`.
- **Inputs** on focus get a yellow `--color-primary-60` border, no outline,
  no glow.
- **Cards (product cards)** scale to `1.02`, gain a 1px link-colour border
  and a `0 0 12px var(--color-link)` glow. This is the canonical "this is a
  clickable card" motion.
- **Hero swap card** has a quiet ambient `box-shadow: 0 0 40px
  var(--color-primary-glow)` when not yet interacted with; on hover it
  intensifies to `60px`. Once the user clicks in, the glow disappears.
- Links underline on hover and shift to `--color-link-hover` (a brighter teal
  in default, a brighter orange in pro).
- There is no press-shrink. Buttons do not scale down on `:active`.

### Borders, radii, shadows

- Radii: **8** (sm — small badges), **12** (md — buttons, inputs, cards), **16**
  (lg — large cards), **999rem** for pills (asset selectors, denomination
  toggles, language switcher).
- Borders are almost always `1px solid var(--color-white-15)` against the dark
  surface. Cards use `--color-white-05` for a quieter edge.
- Shadow system is *very* restrained. Just two patterns:
  - Card shadow: `2px 4px 10px var(--color-black-20)`.
  - Glow shadow (links and the hero frame): `0 0 12px–60px var(--color-link)`
    or `var(--color-primary-glow)`.
- No inner shadows. No multi-layer "elevation" tokens. Boltz keeps cards close
  to the surface.

### Transparency & blur

- Glass blur (`backdrop-filter`) is **not used** anywhere in the codebase.
- Transparency shows up only via the opacity ramp — never `opacity:` on a
  filled element to dim it; always swap to a lower-alpha variable.
- The one exception: the `text-slide-up`/`text-slide-left` entrance animations
  start at `filter: blur(20px)` and animate to `blur(0)`. That blur is
  motion-only — it never sits statically.

### Imagery

- Almost no photography. The "imagery" budget is spent on:
  - Partner / integration **logos** (SVG, monochrome-friendly).
  - Two **circuit illustrations** (`ln-circuit.svg`, `ln-circuit-pro.svg`)
    that sit behind the products hero with a `radial-gradient` mask, scaled
    1.1×, opacity 0.8.
  - Asset **icons** (BTC, Lightning, Liquid, USDT, etc) — small, square,
    deliberately *not* perfectly aligned to a grid (Lightning is full-bleed,
    Bitcoin is padded — see `.hero-icons img` in `hero.scss`).
- Tone: cool, dark, slightly futuristic. No warm sunsets, no human photography,
  no AI-art textures.

### Layout rules

- Nav is **non-sticky**, sits at the top, full-width, `var(--color-secondary-700)`.
- Footer is dead-centered, just socials + a thin row of legal links + the
  brand line `Made with 🧡 by Team Boltz`.
- Form rows for amounts use a small **eyebrow label inside the input**
  (`.amount-row-label`), positioned `top:10px / left:14px`, uppercase 11px.
  Max/Min "chips" sit in the opposite corner.
- The asset selector is a 42-px-tall pill that overlays the *left* edge of the
  amount input — it's docked inside the input, not a separate field.
- Tabular numbers (denomination switcher, fees) right-align.

### Iconography (high level)

See the **Iconography** section below. Short version: the codebase pulls icons
from `solid-icons` (Bootstrap + Octicons + Heroicons + Font Awesome wrappers)
*and* hand-rolls asset glyphs as SVG. We bias toward **`lucide`** in this kit
because the visual weight is closer to `solid-icons/bs` and the library is
CDN-friendly. Asset glyphs (BTC / Lightning / Liquid / USDT / WBTC / USDC /
USDt0 / network logos) are all real SVGs, copied verbatim into `assets/icons/`
and `assets/networks/` from the production app.

---

## Iconography

The Boltz web app pulls from several sources:

- **`solid-icons`** — a Solid.js icon pack that wraps several open sets. The
  codebase mixes:
  - `solid-icons/bs` (Bootstrap Icons) for footer socials.
  - `solid-icons/oc` (Octicons) for `OcLinkexternal2` next to external links.
  - `solid-icons/io` (Ionicons) for `IoLanguage` (the language toggle).
  - `solid-icons/hi` (Heroicons), `solid-icons/fa` (Font Awesome), `solid-icons/vs`
    (VS Code icons) for the Pro page checklist / arrow / dismiss UI.
- **Hand-drawn SVG assets** in `src/assets/` — every cryptocurrency icon, every
  partner/integration logo, every network glyph (Solana, Arbitrum, etc.).
  These are not interchangeable with a generic icon font; they are part of the
  brand.
- **Custom SVG paths** in components for the hamburger menu, the boltz
  lightning-bolt loading mark, and the wordmark.

### How this kit handles icons

- **Asset & network glyphs** — copied wholesale to `assets/icons/` (BTC,
  Lightning, Liquid, USDT, USDC, USDt0, WBTC, tBTC, RBTC, BTC denominator, sat
  denominator) and `assets/networks/` (Ethereum, Arbitrum, Base, Optimism,
  Polygon, Solana, Tron, Rootstock). These are the **authoritative** versions —
  use them, don't redraw them.
- **UI / chrome icons** — we substitute **Lucide** (CDN: `lucide@latest`) for
  the `solid-icons` set, because it is CDN-friendly and has a near-identical
  visual weight (1.5px strokes, 24×24 viewbox). Where Lucide doesn't have a
  near-equivalent (e.g. some Bootstrap-style filled socials in the footer), we
  fall back to its outlined version. **This is a substitution — flag it if
  pixel-fidelity to the live app matters.**
- **Emoji** — used in copy strings (`🧡`, `🙌`, `⚠️`) but never as UI
  iconography. Don't paint emoji into buttons or empty states.
- **Unicode** — `|` (pipe) and `·` (middot) appear in the footer between links.
  No other unicode-as-icon usage.

### Logo files

- `assets/boltz-icon.svg` — the standalone lightning-bolt mark (production
  favicon source). Use this whenever the wordmark is unnecessary.
- `assets/boltz-wordmark.svg` — the full wordmark, single-color. Mask this with
  a gradient (`mask: url(…)`) as `#logo-mask` does in the live nav, to get the
  canonical yellow-gradient wordmark.
- `assets/boltz-logo.svg`, `assets/boltz-logo-white.svg`,
  `assets/boltz-logo-black.svg` — full-color, white-only and black-only
  stakeholder-provided wordmarks. Pick by background.
- `assets/boltz-logo-circle.svg` (+ `-transparent`, `-transparent-black`,
  `boltz-pro-logo-circle.svg`) — circular avatar/badge versions. Use these for
  social profile pictures, partner cards, anywhere a square icon doesn't fit.

---

## Caveats and substitutions

- **Fonts.** The codebase uses self-hosted Noto Sans + Noto Mono via
  `@fontsource`. This kit loads the same families from Google Fonts. The
  metrics match; if you need fully offline / self-hosted, drop `.woff2` files
  into `fonts/` and rewrite the `@import` at the top of `colors_and_type.css`.
- **UI icons.** Substituted Lucide for `solid-icons`. See above.
- **Animation tooling.** The codebase uses CSS `animation-timeline: view()` for
  scroll-triggered entrances (a 2024 CSS feature). It's supported in modern
  Chromium but not yet Safari. Prototypes should treat it as enhancement, not
  baseline.
