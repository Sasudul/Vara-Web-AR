<br />
<div align="center">
  <h1 align="center">Vara | Earth-Modern WebAR Architecture</h1>
  <p align="center">
    A high-end, architectural digital gallery bridging the gap between digital retail and physical reality.
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Google_<model--viewer>-WebAR-EA4335?style=for-the-badge&logo=google&logoColor=white" alt="Model-Viewer" />
</div>

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#design-system">Design System</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## 🛋️ About The Project

**Vara** is a conceptual high-end furniture and lifestyle brand defined by **Earth-Modern Minimalism**. 

Traditional furniture e-commerce often feels cluttered and transactional. Vara aims to bypass that by offering a "Museum-Grade" digital experience. The platform prioritizes serene aesthetics, fluid animations, and a seamless **WebAR** integration that redefines how customers interact with spatial products online, directly from their mobile browser without native apps.

## ✨ Key Features

* **The Vara Lens (WebAR Core):**
    * **Absolute Scaling:** Forces 1:1 real-world scaling upon placement for clinical measurement accuracy.
    * **Material Configurator:** Instantly swap textures (e.g., Linen to Velvet) within the AR viewer.
    * **Dimensions HUD:** A toggleable Heads-Up Display showing real-time physical measurements ($L \times W \times H$).
    * **Cross-Platform:** Powered by Google's `<model-viewer>`, supporting `.GLB` for Android/Desktop and `.USDZ` for iOS Quick Look.
* **Earth-Modern Interface:** A clean, minimal layout focused on high-definition photography and architectural whitespace.
* **Fluid Micro-Interactions:** Subtle parallax effects and "soft-spring" animations mimic physical weight and elegance using the `motion` API.
* **Ghost Navigation:** Transparent header that transitions elegantly into a frosted glass state upon scrolling.

## 🛠 Tech Stack

The platform is built on modern, scalable web technologies designed for high performance and seamless WebXR context handoffs:

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **AR Engine** | [Google <model-viewer>](https://modelviewer.dev/) |
| **Animations** | [Motion (Framer Motion API)](https://motion.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

##
