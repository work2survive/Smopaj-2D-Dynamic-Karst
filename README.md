# Smopaj 2D Dynamic Karst - Interactive Cave Fluid Simulation

An interactive 2D viscoelastic fluid simulation running on a museum touchscreen installation designed for kids and young visitors to explore how rainwater filters through limestone, sculpts underground cavern systems, and creates unique subterranean hydrological features.

🌐 **Live Demo (GitHub Pages):** [https://work2survive.github.io/Smopaj-2D-Dynamic-Karst/](https://work2survive.github.io/Smopaj-2D-Dynamic-Karst/)

---

## 🏛️ About the Exhibition Installation

This project is a dedicated interactive touchscreen installation created for children visiting **Slovenské múzeum ochrany prírody a jaskyniarstva** ([SMOPAJ](https://www.smopaj.sk/)) — the Slovak Museum of Nature Protection and Speleology, located in Liptovský Mikuláš, Slovakia.

### Educational Mission: How Water Shapes the Underworld
The exhibition brings speleology and karst hydrology to life through interactive play:
- **Rain & Surface Infiltration:** Kids interact with the touchscreen by dragging a rain cloud across the sky to trigger rainfall over sinkholes, karst fissures, and porous limestone strata.
- **Percolation & Leakage:** Children observe how rainwater leaks deep through narrow fractures into the dark interior of the cave.
- **Dynamic Karst Features:** As water travels through the bedrock, the particle simulation vividly illustrates how real geological phenomena form:
  - 🌊 **Siphons (Cave Sumps):** Fully submerged conduits where water fills passages up to the ceiling before finding an exit.
  - 💧 **Underground Waterfalls:** Torrents tumbling over subterranean cliffs and ledges into deeper chambers.
  - 🏞️ **Subterranean Lakes & Pools:** Still underground water reservoirs accumulating in natural rock basins.
  - 🪨 **Cave Sculpting:** Visual demonstration of how flowing water chemically dissolves and mechanically erodes rock to carve out and shape the cave interior over geological epochs.

---

## 🎮 Features & Technical Design

- **Kid-Friendly Touchscreen Interface:** Highly intuitive touch-and-drag controls configured specifically for kiosk touch displays (with full mouse support for desktop browsers).
- **2D Viscoelastic Fluid Particle System:** Simulates real-time fluid mechanics—surface tension, viscosity, inertia, and elastic interactions—allowing fluid to splash, cling to rock walls, pool into lakes, and squeeze through tight siphon bends.
- **Custom Cave Collider Architecture:** Custom-mapped polygon colliders matching the museum's geological illustration, directing fluid along realistic subterranean paths.
- **Public Kiosk Auto-Reset:** An automatic inactivity timer detects when a child walks away (60 seconds idle), smoothly fading out and resetting the cave state so the next visitor gets a fresh experience.
- **Responsive 16:9 Display:** Dynamically fits touch kiosks, full-screen museum monitors, desktop browsers, and tablets while preserving internal 1920×1080 physics simulation precision.

### Keyboard Shortcuts (Museum Staff & Operators)
| Key | Action |
|-----|--------|
| `D` | Toggle Debug HUD (FPS, active particle count, emitter coordinates, elapsed time) |
| `G` | Toggle Geometry (Renders internal cave collision polygons and boundary lines) |
| `F` | Toggle Foreground Rock Layer |

---

## 👨‍💻 Credits & Attributions

### Particle System & Fluid Physics
The core 2D viscoelastic particle simulation engine was created by **Marcel K.**:
- **GitLab Repository:** [Marcel.K / tutorials - 2D Particle Based Viscoelastic Fluid Simulation](https://gitlab.com/Marcel.K/tutorials/-/tree/main/2D%20Particle%20Based%20Viscoelastic%20Fluid%20Simulation)
- **Tutorial & Video:** [Fluid Simulations made easy (YouTube)](https://www.youtube.com/watch?v=AUZIYQFYkBo)

Based on the foundational computer graphics paper:
> Simon Clavet, Philippe Beaudoin, and Pierre Poulin.  
> *"Particle-based Viscoelastic Fluid Simulation"*, ACM SIGGRAPH / Eurographics Symposium on Computer Animation (SCA).

### Museum & Exhibition Concept
- **Museum:** [Slovenské múzeum ochrany prírody a jaskyniarstva (SMOPAJ)](https://www.smopaj.sk/)
- **Project:** Interactive Kids' Touchscreen Exhibition Installation, 2025–2026

---

## 🚀 Running Locally

Open `index.html` (or `Main.html`) directly in any modern browser, or run a local HTTP server:

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
