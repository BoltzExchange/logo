---
name: boltz-design
description: Use this skill to generate well-branded interfaces and assets for Boltz (boltz.exchange — the non-custodial Bitcoin Layer 2 / Lightning / stablecoin swap), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available
files. The high-level shape:

- `README.md` — full context: what Boltz is, voice/tone, visual foundations,
  iconography rules, plus an index of every other file.
- `colors_and_type.css` — drop-in stylesheet with every token. Almost every
  artifact you build should start by linking this file.
- `assets/` — the official logos (wordmark, lightning mark, circle variants,
  Pro variants), asset glyphs (BTC / Lightning / Liquid / RBTC / tBTC / WBTC /
  USDT / USDC / USDt0), denominator glyphs, and network glyphs (ETH / ARB /
  BASE / OP / POL / SOL / TRON / RSK).
- `preview/` — small specimen cards. Browse these to see real swatches, type
  specimens, and component states.
- `ui_kits/web-app/` — React (Babel-JSX) recreation of the consumer swap
  homepage. Components: `Nav`, `SwapCard`, `AssetPicker`, `HeroBoxes`,
  `NodeStats`, `Footer`. Open `ui_kits/web-app/index.html` for a live demo.
- `ui_kits/pro/` — Boltz Pro product page (`boltz-theme="pro"`).
  Components: `ProHeader`, `IntroSection` (with sparkline fee chart),
  `OptionsSection`, `TargetAudience`. Reuses `Nav` + `Footer` from the
  web-app kit.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, you can copy assets and read the rules here to become an
expert in designing with the Boltz brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.

## Two theme toggle

Boltz ships two themes. Pick by setting the `boltz-theme` attribute on `<html>`
(or a wrapper):

- `boltz-theme="default"` (also applied to `:root` automatically) — yellow on
  dark navy, used everywhere except Pro.
- `boltz-theme="pro"` — burnt-orange on near-black, used on `/products/pro`
  and the Pro web app.

All component CSS in the UI kits is theme-agnostic — switching the attribute
re-skins the whole tree.

## What NOT to do (this is on-brand for Boltz)

- No light mode. Boltz has no light mode.
- No emoji as iconography. Only `🧡`, `🙌`, `⚠️` in copy, in the places noted
  in README.md.
- No friendly-startup marketing voice. Don't write "Let's get you swapping!"
  Write "Start Swapping".
- No invented colors. Pick from `var(--color-…)` tokens. Use the alpha ramp
  (`var(--color-white-10/15/30/…)`) instead of ad-hoc rgba.
- No inner shadows, no multi-stop elevation systems, no glassmorphism, no
  blue-purple gradients. The only gradient is the hero yellow→blue text fill
  (and its Pro orange equivalent).
- Don't redraw the asset glyphs (BTC, LN, Liquid, USDT, etc). The SVGs in
  `assets/icons/` are the brand assets — use them as-is.
