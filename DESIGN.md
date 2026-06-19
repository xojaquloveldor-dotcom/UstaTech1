---
name: Lumina Prime
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00a572'
  on-tertiary-container: '#00311f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
The design system is engineered for a premium, high-performance service platform that operates at the intersection of technology and luxury. The brand personality is sophisticated, nocturnal, and energetic, targeting high-intent users who value efficiency and modern aesthetics.

The visual direction utilizes a **Glassmorphic** style layered over a deep, obsidian-inspired foundation. It emphasizes depth through light refraction, semi-transparent overlays, and vibrant neon accents that act as "light sources" within the dark environment. The emotional response should be one of "controlled power"—a sense that the platform is both highly advanced and effortlessly premium.

## Colors
This design system utilizes a high-contrast dark palette to create a sense of infinite depth.

- **Surface (Neutral):** The base is a deep charcoal (#0f172a). Secondary surfaces should use a 5-8% lighter tint to differentiate background layers.
- **Primary (Vibrant Blue):** Used for core actions, focus states, and primary brand moments. It functions as the main "signal" color.
- **Accent (Neon Orange):** Specifically reserved for "On-demand" status indicators, urgent alerts, or high-priority tags to ensure immediate eye-tracking.
- **Glass Overlays:** Use semi-transparent whites (Alpha 0.05 to 0.15) with a 20px-40px background blur to create the signature glass effect.

## Typography
The typography is centered around **Inter** for its systematic clarity and excellent legibility in dark environments. For technical data or small UI labels, **Geist** is introduced to provide a precise, developer-friendly edge.

Scale headlines aggressively to maintain hierarchy against vibrant backgrounds. Use lower font weights (Light/Regular) for large display text to maintain a "premium" feel, while reserving Semibold/Bold for functional buttons and navigational cues.

## Layout & Spacing
The system follows a strict **8px grid** (with 4px increments for micro-adjustments). 

- **Desktop:** 12-column fluid grid with a maximum container width of 1280px.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

Spacing should be generous to support the glassmorphic aesthetic; elements need "room to breathe" so that the background blurs and shadows don't feel cluttered or muddy.

## Elevation & Depth
Depth is the most critical component of this design system. It is achieved through three layers:

1.  **The Void (Base):** The #0f172a background.
2.  **The Glass (Floating):** Surfaces use a background blur (Backdrop Filter: blur(12px)) and a subtle 1px inner border (white at 10% opacity) to simulate the edge of the glass.
3.  **The Glow (Interaction):** Shadows are not pitch black. Instead, use high-spread, low-opacity shadows tinted with the primary blue color (e.g., `0 20px 40px rgba(59, 130, 246, 0.15)`) to create an "ambient glow" effect.

## Shapes
A **Rounded (0.5rem base)** shape language is used to soften the high-tech aesthetic, making it feel approachable. 

- **Cards/Modals:** Use `rounded-xl` (1.5rem / 24px) to create a clear container identity.
- **Buttons/Inputs:** Use `rounded-md` (0.5rem / 8px) for a precise, functional feel.
- **Status Tags:** Use fully pill-shaped (999px) containers to distinguish them from interactive buttons.

## Components
- **Buttons:** Primary buttons use a solid #3b82f6 fill with white text. Secondary buttons use the glassmorphic style (blur + thin border) with blue text.
- **On-Demand Tags:** Use the #f59e0b neon orange color. These should have a subtle outer glow (box-shadow) to make them appear self-illuminated.
- **Cards:** Must feature the glassmorphic backdrop filter. Borders should be a gradient from Top-Left (white, 15% opacity) to Bottom-Right (white, 5% opacity).
- **Input Fields:** Darker than the base surface (#020617) with a 1px border that glows primary blue upon focus.
- **Lists:** Separated by thin, low-contrast lines (white at 5% opacity) or subtle vertical spacing without lines to maintain the "clean" aesthetic.
- **Service Status:** Use a pulsing dot animation for "Live" or "On-demand" services to reinforce the dynamic nature of the platform.