---
name: Kinetic Professional
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#424754'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a high-end service platform that balances urgency with technical expertise. It targets a professional audience that values efficiency, clarity, and reliability. The aesthetic is rooted in **Modern Minimalism** with a **Corporate** edge—prioritizing functional clarity over decorative flair.

The emotional response should be one of "effortless precision." By utilizing generous whitespace and a restricted color palette, the UI directs focus toward decision-making and content. The style utilizes flat surfaces with intentional color accents to distinguish service tiers, maintaining a high-trust, institutional feel that remains approachable and contemporary.

## Colors

The palette is anchored by a sterile white background to maximize "airiness" and focus. 

- **Primary Blue (#3B82F6):** Reserved for "Full-stack" service indicators, primary actions, and navigational cues. It represents stability and professional depth.
- **Warm Orange (#F59E0B):** Dedicated to "On-demand" status, urgent notifications, and secondary highlights. It provides a high-visibility contrast that signals immediacy.
- **Neutral Gray (#1F2937):** Used for primary text and iconography to ensure high legibility and a grounded feel.
- **Surface Grays:** Soft grays (#F3F4F6 and #E5E7EB) are used for subtle UI boundaries and disabled states, maintaining the minimalist ethos.

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **Hanken Grotesk** is used for headlines to provide a sharp, contemporary corporate identity. Its tight apertures and geometric construction convey precision. **Inter** is utilized for body text and UI labels due to its exceptional legibility and systematic, neutral nature.

Headings should always be bold or semi-bold to create a clear visual hierarchy against the light UI. Use `display-lg` sparingly for hero sections. `label-md` is intended for small metadata and status tags, utilizing all-caps for distinct separation from body copy.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop and a **Fluid Grid** on mobile devices. 

- **Desktop:** A 12-column grid with a 1280px max-width, using 24px gutters. Elements should align strictly to the grid to maintain a structured, professional appearance.
- **Mobile:** A 4-column fluid grid with 16px side margins. 
- **Spacing Rhythm:** An 8px linear scale is the standard. Use `lg` (40px) and `xl` (64px) for vertical section spacing to maintain the "airy" feel requested. White space is treated as a functional element to prevent cognitive overload.

## Elevation & Depth

To maintain a flat, professional aesthetic, this design system avoids heavy drop shadows and complex gradients. Depth is communicated through:

1.  **Tonal Layering:** Using `#F9FAFB` surfaces against the white background to define card areas.
2.  **Subtle Outlines:** 1px borders in `#E5E7EB` are the primary method for defining UI boundaries.
3.  **Low-Opacity Shadows:** Where elevation is necessary (e.g., a hovered button or a floating modal), use a single, highly diffused shadow: `0px 4px 12px rgba(0, 0, 0, 0.05)`.
4.  **No Blurs:** Avoid glassmorphism or background blurs to keep the interface feeling fast, crisp, and standard-compliant.

## Shapes

The shape language is "Soft-Square." By using a consistent 0.25rem (4px) base radius, the UI feels modern and engineered without becoming overly "bubbly" or playful. 

- **Small Components (Buttons, Inputs):** 4px (Soft)
- **Medium Components (Cards, Modals):** 8px (Rounded-lg)
- **Status Tags:** 4px (Soft) to maintain a crisp, professional look. Avoid pill-shapes as they lean too heavily into consumer-social aesthetics.

## Components

### Buttons
Primary buttons use a solid fill (#3B82F6 or #1F2937) with white text. They are flat, using only a subtle color shift on hover. Secondary buttons use a 1px border with no fill.

### Status Tags
Small, rectangular tags with a light tinted background and dark text. For example, an "On-demand" tag would use a 10% opacity version of #F59E0B with a bold #B45309 text color.

### Input Fields
Minimalist 1px borders (#D1D5DB). On focus, the border transitions to Primary Blue (#3B82F6) with a 2px outer glow of 10% opacity.

### Cards
Cards are defined by a 1px border (#E5E7EB) rather than a shadow. This reinforces the "flat" design requirement. They should have a minimum of 24px internal padding.

### Lists & Sections
Use structured text sections with bold `headline-md` titles followed by 16px of spacing to the body text. List items should be separated by thin horizontal rules (#F3F4F6) to maintain vertical rhythm without adding visual weight.