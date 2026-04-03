# Flyhigh Design System

## Typography
* **Headline Font:** Space Grotesk
* **Body Font:** Manrope
* **Label Font:** Manrope

## Color Palette
### Core Colors
* **Primary:** `#ffb0ca` (Custom Override: `#FF1493`)
* **Secondary:** `#bcc7de` (Custom Override: `#1E293B`)
* **Tertiary:** `#00dbe9` (Custom Override: `#00F0FF`)
* **Background:** `#0f131e`
* **Surface:** `#0f131e`

### Complete Named Colors Palette
| Token | Color (Hex) | Token | Color (Hex) |
| :--- | :--- | :--- | :--- |
| `background` | `#0f131e` | `on_background` | `#dfe2f2` |
| `surface` | `#0f131e` | `on_surface` | `#dfe2f2` |
| `primary` | `#ffb0ca` | `on_primary` | `#640036` |
| `secondary` | `#bcc7de` | `on_secondary` | `#263143` |
| `tertiary` | `#00dbe9` | `on_tertiary` | `#00363a` |
| `error` | `#ffb4ab` | `on_error` | `#690005` |
| `outline` | `#909096` | `outline_variant` | `#45464c` |
| `surface_variant` | `#313441` | `on_surface_variant` | `#c6c6cc` |

---

# Design System Document: Cosmic Precision

## 1. Overview & Creative North Star: "The Celestial Architect"
This design system is not merely a collection of components; it is a vision of the future. Our Creative North Star is **"The Celestial Architect."** We move away from the flat, crowded dashboards of legacy SaaS and toward a high-end, editorial experience that feels like a command center for deep-space exploration.

To achieve this, we reject the "template" look. We embrace **intentional asymmetry**, large-scale typography, and **atmospheric depth**. The UI should feel like looking through the reinforced glass of a cockpit into the void—infinite, sophisticated, and impossibly clean. We prioritize "breathing room" (negative space) to ensure that when data does appear, it carries the weight of a mission-critical discovery.

---

## 2. Colors: The Midnight Spectrum
Our palette is anchored in the deep reaches of `background` (#0f131e) and punctuated by the high-energy pulse of `primary` (#ffb0ca).

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. We define boundaries through **tonal transitions**. To separate the sidebar from the main stage, use a shift from `surface` to `surface-container-low`. Use contrast, not lines, to guide the eye.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create "nested" depth:
- **Level 0 (Foundation):** `surface` (#0f131e) for the global backdrop.
- **Level 1 (Sub-Sections):** `surface-container-low` (#171b27) for large content areas.
- **Level 2 (Active Cards):** `surface-container-high` (#262a36) for interactive elements.

### The "Glass & Gradient" Rule
To capture the "Space-Tech" essence, floating elements (modals, dropdowns) must utilize **Glassmorphism**. Apply `surface-container-highest` at 60% opacity with a `24px` backdrop-blur. 

### Signature Textures
Main CTAs should never be a flat hex code. Use a subtle linear gradient (45 degrees) from `primary` (#ffb0ca) to `on-primary-container` (#f8048e) to give buttons a "glow-from-within" energy that mimics neon light.

---

## 3. Typography: Editorial Authority
We utilize a dual-typeface system to balance technical precision with human-centric readability.

*   **Display & Headlines:** `Space Grotesk`. This is our "Technical Soul." Use `display-lg` (3.5rem) for hero moments and key data points. The wide apertures and geometric curves feel engineered and futuristic.
*   **Body & Labels:** `Manrope`. This is our "Human Interface." It is highly legible at small sizes (`body-sm`) and provides a grounding, stable contrast to the expressive headlines.

**Hierarchy Tip:** Use extreme scale contrast. Pair a `display-md` headline with a `label-md` uppercase sub-header to create an editorial, high-fashion layout rather than a standard "Header-Body" stack.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows and lines are secondary to **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a natural "recessed" look without a single pixel of shadow.
*   **Ambient Shadows:** For floating elements, use "The Void Shadow": a diffused blur (40px+) with 6% opacity using the `on-primary-fixed` (#3e001f) color. This creates a subtle magenta-tinted ambient glow rather than a muddy grey shadow.
*   **The "Ghost Border" Fallback:** If a container requires more definition, use a "Ghost Border": `outline-variant` (#45464c) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism Depth:** Always use a 1px inner stroke of `surface-bright` (#353945) at 20% opacity on glass elements to simulate the "edge" of a glass pane.

---

## 5. Components: Precision Primitives

### Buttons
- **Primary:** Gradient fill (Primary to On-Primary-Container). Roundness: `md` (0.375rem). Text: `label-md` Bold.
- **Secondary:** `surface-container-highest` background with `primary` text. No border.
- **Tertiary:** Ghost style. No background; `primary` text; 10% opacity `primary` hover state.

### Input Fields
- **Style:** Underline-only or subtle `surface-container-high` fill. 
- **States:** On focus, the bottom border "ignites" with `tertiary` (#00dbe9) and a 4px outer glow.
- **Forbid:** Boxy, high-contrast borders.

### Cards & Tables
- **Execution:** Cards must use `surface-container-low`. For tables, **forbid divider lines.** 
- **Spacing:** Separate rows using `12px` of vertical white space. The "active" or "hovered" row should shift to `surface-container-highest`.
- **Glass Elements:** Use for side-panels or navigation overlays to maintain a sense of "Space" behind the UI.

### Data Visualization (Signature Component)
- **The "Nebula" Chart:** For SaaS metrics, use `tertiary` (#00dbe9) for data lines, but add a soft `primary` (#ffb0ca) glow underneath the stroke to create a multi-chromatic, high-tech aesthetic.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Align a headline to the far left and the CTA to the far right with significant white space between.
- **Use "Space" as a Material:** Treat the `background` color as the most important element on the screen.
- **Layer with Intent:** Ensure every "nested" container is at least one step higher or lower in the surface-container scale than its parent.

### Don't:
- **Don't use pure white (#FFFFFF):** Use `on-surface` (#dfe2f2) for text. It reduces eye strain against the midnight background.
- **Don't use 1px solid borders:** If you feel the need for a line, try a background color shift first.
- **Don't crowd the screen:** If a page feels "busy," increase the padding by two steps on the spacing scale. In space, there is always room to breathe.

---

**Director's Closing Note:**
Junior designers often fear empty space. In this design system, space is your strongest tool. It conveys luxury, power, and clarity. Build with restraint, and let the typography and the "neon pulse" of the pink accents do the heavy lifting.
