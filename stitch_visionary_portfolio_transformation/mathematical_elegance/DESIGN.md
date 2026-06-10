---
name: Mathematical Elegance
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#89ceff'
  on-tertiary: '#00344d'
  tertiary-container: '#009ada'
  on-tertiary-container: '#002d43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  surface-charcoal: '#18181b'
  surface-glass: rgba(24, 24, 27, 0.6)
  electric-indigo: '#6366f1'
  vibrant-purple: '#a855f7'
  border-subtle: rgba(255, 255, 255, 0.08)
  data-node: '#22c55e'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  container-max: 1200px
---

## Brand & Style

This design system is built for the "Future-Forward Minimalist." It targets a high-end audience of researchers and technology executives who value technical rigor as much as aesthetic sophistication. The UI should evoke a sense of **precision, intelligence, and depth**.

The style is a synthesis of **Minimalism** and **Glassmorphism**, structured through the lens of mathematical order. It uses a "Dark Mode" foundation to represent the void of computation, punctuated by "electric" accents that signify neural activity and algorithmic breakthroughs. Visual elements rely on high-precision line art and subtle geometric patterns that suggest grid systems, coordinate planes, and data structures.

The emotional response should be one of "calm authority"—a digital environment where complex Machine Learning concepts feel structured and navigable.

## Colors

The palette is anchored in a deep monochromatic base. The "Neutral" is a true rich black (#09090b), providing a high-contrast canvas for the "Electric Indigo" and "Vibrant Purple" brand colors.

- **Primary (Electric Indigo):** Used for primary CTAs, active states, and critical technical highlights.
- **Secondary (Vibrant Purple):** Used for gradients, secondary accents, and distinguishing between research vs. engineering content.
- **Tertiary (Cyan/Blue):** Reserved for data-driven highlights or status indicators within complex systems.
- **Surface Strategy:** Layers are defined by varying shades of charcoal and translucent "glass" overlays rather than flat grays. This creates a sense of physical depth within the digital space.

## Typography

The typographic system contrasts "Humanist Precision" with "Technical Utility."

1.  **Headlines (Plus Jakarta Sans):** These are bold and high-contrast. Use tight letter-spacing for large displays to create a "locked-in" architectural feel.
2.  **Body (Plus Jakarta Sans):** Selected for its high legibility in dark environments. Maintain generous line-height to prevent eye fatigue during long-form research reading.
3.  **Labels & Metadata (Space Mono):** Used for all technical data, tags, timestamps, and code snippets. This monospace font acts as a visual "anchor" to the researcher’s engineering roots.

**Hierarchy Note:** All technical skills and project tags must use the `label-caps` or `label-mono` style to clearly distinguish data from narrative description.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The layout philosophy is centered on "Mathematical Whitespace"—generous vertical breathing room between sections to signify importance and clarity.

- **Grid:** Use a 24px gutter to maintain clear separation between technical cards.
- **Rhythm:** All spacing (padding, margins) must be multiples of the 8px base unit.
- **Hero Sections:** Always utilize 100vh height on desktop to create an immersive "entry" into the researcher's world.
- **Alignment:** Use rigid edge-alignment for text blocks to maintain the "mathematical" feel, avoiding centered text for long-form content.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

1.  **The Base:** True Black (#09090b).
2.  **Tier 1 (Cards/Sections):** "Charcoal" (#18181b) with a 1px solid border at 8% white opacity.
3.  **Tier 2 (Interactive/Floating):** Semi-transparent "Glass" surfaces with a `backdrop-filter: blur(12px)`.
4.  **The Glow:** High-priority elements (like "Featured" projects) utilize a subtle, soft outer glow in the primary color (Indigo) with 10% opacity, simulating a "screen glow" effect from high-end hardware.

Avoid using shadows on smaller elements like buttons or chips; use border-color changes or background shifts to indicate interaction.

## Shapes

The shape language is **"Soft Industrial."** While the system is precise, it avoids harsh, aggressive corners to maintain a premium feel.

- **Standard UI elements:** Use 0.25rem (4px) corner radius. This applies to input fields, buttons, and small tags.
- **Cards:** Use 0.75rem (12px) for project and experience cards to create a clear container identity.
- **Interactive Pills:** Use full-round (pill) shapes only for category filters and primary action tags to make them feel "tactile" and clickable.
- **Line Art:** Any decorative iconography should use 1.5px or 2px stroke weights with rounded caps to match the typography's softness.

## Components

### Buttons
- **Primary:** Solid "Electric Indigo" background with white text. No shadow. On hover: transition to "Vibrant Purple."
- **Ghost:** 1px border (#FFFFFF 20%) with transparent background. On hover: background becomes #FFFFFF 5% and border becomes #FFFFFF 40%.

### Cards
- **Project Card:** Charcoal background, 1px subtle border. Images should have a subtle desaturation filter, returning to full color on hover.
- **Feature Badge:** A small, pill-shaped badge in the top corner of cards using `label-caps` typography and a gradient border (Indigo to Purple).

### Technical Arsenal (Chips)
- Monospace font, 12px.
- Background: #18181b.
- Border: 1px solid #FFFFFF 10%.
- Interaction: On hover, the border takes the Primary color.

### Inputs
- Dark backgrounds (#09090b) with a 1px bottom border as the primary focus, or a very subtle full-box border. 
- Focus state: Border color transitions to Indigo with a 2px "neon" glow at the base.

### Data Visualizations
- Use thin, high-precision lines.
- Scatter plots and node maps should use the `data-node` (Green) or Tertiary (Cyan) colors to stand out against the Indigo/Purple brand.