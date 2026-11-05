# SMOPAJ Caves - Interactive Karst Fluid Simulation

An interactive 2D viscoelastic fluid simulation designed for children and museum visitors to explore hydrogeological cave processes and groundwater flow through karst limestone formations.

🌐 **Live Demo (GitHub Pages):** [https://work2survive.github.io/smopajcaves/](https://work2survive.github.io/smopajcaves/)

---

## 🏛️ About the Exhibition Installation

This application was created for an interactive kiosk installation designed for children at **Slovenské múzeum ochrany prírody a jaskyniarstva** ([SMOPAJ](https://www.smopaj.sk/)) — the Slovak Museum of Nature Protection and Speleology, located in Liptovský Mikuláš, Slovakia.

### Educational Goal
The installation introduces young visitors to speleology and karst hydrology:
- **Surface to Underground:** Children drag a rain cloud across the landscape to make it rain over surface dolines, sinkholes, and limestone fractures.
- **Subterranean Flow:** Simulated water particles seep through porous rocks and fissure systems into underground chambers, waterfalls, and cave conduits.
- **Speleothem & Karst Formation:** Shows how continuous water percolation and mineral deposition sculpt cave systems over geological timescales.

---

## 🎮 Features & Interaction

- **Touchscreen & Mouse Support:** Intuitive single-finger drag and mouse tracking to move the cloud emitter across the screen.
- **Real-Time Viscoelastic Fluid Dynamics:** High-performance particle physics simulating liquid flow, surface tension, viscosity, and collisions against intricate cave boundary polygons.
- **Kiosk Auto-Reset:** When left untouched for 60 seconds, the simulation gently fades out and restarts with a clean slate for the next visitor.
- **Responsive Aspect Scaling:** Scales dynamically to fit 16:9 displays, touch kiosks, desktops, and mobile devices while preserving pixel-accurate physics coordinates (1920×1080).

### Keyboard Controls (Museum Staff & Operators)
| Key | Action |
|-----|--------|
| `D` | Toggle Debug HUD (Emitter position, elapsed time, FPS counter, active particle count) |
| `G` | Toggle Geometry (Renders internal cave collision polygons) |
| `F` | Toggle Foreground Rock Layer |

---

## 👨‍💻 Credits & Attributions

### Particle System & Fluid Physics
The core 2D viscoelastic particle simulation engine is developed by **Marcel K.**:
- **GitLab Repository:** [Marcel.K / tutorials - 2D Particle Based Viscoelastic Fluid Simulation](https://gitlab.com/Marcel.K/tutorials/-/tree/main/2D%20Particle%20Based%20Viscoelastic%20Fluid%20Simulation)
- **Tutorial & Video:** [Fluid Simulations made easy (YouTube)](https://www.youtube.com/watch?v=AUZIYQFYkBo)

The algorithm is based on the computer graphics research paper:
> Simon Clavet, Philippe Beaudoin, and Pierre Poulin.  
> *"Particle-based Viscoelastic Fluid Simulation"*, ACM SIGGRAPH / Eurographics Symposium on Computer Animation (SCA).

### Museum & Exhibition Concept
- **Museum:** [Slovenské múzeum ochrany prírody a jaskyniarstva (SMOPAJ)](https://www.smopaj.sk/)
- **Project:** Interactive Kids' Kiosk Installation, 2025–2026

---

## 🚀 Running Locally

You can open `index.html` (or `Main.html`) directly in any modern browser, or serve it using any lightweight local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

Then visit `http://localhost:8000/`.

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0** - see the [LICENSE](LICENSE) file for details.
