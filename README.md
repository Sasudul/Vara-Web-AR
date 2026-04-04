# Vara — The Future of Home

![Vara - Earth-Modern Minimalism](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

## Brand Concept
**Vara** is a high-end furniture and lifestyle brand defined by **Earth-Modern Minimalism**. Our digital experience is designed to feel architectural, serene, and premium, bridging the gap between digital gallery and physical reality.

## Technical Architecture: WebAR Integration
The core of the Vara experience is **"The Vara Lens"**, a seamless WebAR integration that allows customers to experience products in their own space without the need for additional apps.

### Core AR Features
- **Auto-Scale**: Forcing 1:1 real-world scaling upon placement for clinical accuracy.
- **Material Configurator**: Real-time texture swapping (e.g., Linen to Velvet) within the AR viewer.
- **Dimensions Overlay**: A toggleable HUD showing real-time measurements in the AR view.
- **Cross-Platform Support**: Powered by Google's `<model-viewer>`, supporting `.GLB` (Android/Desktop) and `.USDZ` (iOS Quick Look).

## Visual Identity
- **Palette**: Soft Cream (`#F5F5F0`), Deep Charcoal (`#2C2C2B`), and Muted Terracotta (`#B36A5E`) or Sage Green (`#87947E`).
- **Typography**: Geometric Sans-Serif (**Montserrat**) for UI; High-contrast Serif (**Playfair Display**) for editorial headings.
- **Micro-interactions**: Physical-weight animations with fluid grace using `motion`.

## Project Structure
- **Homepage**: Hero video/image background with clear CTA.
- **Product Pages**: Split-View Gallery (Photography on left, 3D Model on right).
- **Navigation**: Ghost header that transitions to solid on scroll.
- **Checkout**: Seamless, one-page mobile-optimized checkout.

## Technical Setup

### Prerequisites
- Node.js (Latest LTS recommended)
- NPM or PNPM

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

## SEO & Social
Optimized for high-end home goods and AR retail keywords. Features a "Share my Space" integration for social sharing on Instagram and Pinterest with `#VaraHome`.

---

*Designed for professional luxury and high-performance retail.*
