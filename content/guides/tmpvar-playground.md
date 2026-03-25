---
title: "Building Intuition around Radiance Cascades — tmpvar"
tags: [guide, implementation, wgsl, webgpu]
---

- [2D playground](https://tmpvar.com/poc/radiance-cascades/) (WebGPU — Chrome/Edge)
- [3D playground](https://tmpvar.com/poc/radiance-cascades-3d/)
- [Implementation notes](https://tmpvar.com/articles/implementing-radiance-cascades/) (Oct 2023)

Interactive playground for exploring how cascades tile and merge. Adjustable probe spacing, ray counts, branching factors, cascade levels, and interval radius. Includes radiance interval visualisations, ray distribution demos, and probe interpolation examples.

The 3D playground is more experimental, with several probe distribution approaches (cube face subdivision, golden spiral, etc.).

The [implementation notes article](https://tmpvar.com/articles/implementing-radiance-cascades/) documents challenges encountered, particularly around 3D memory requirements.

**Related:** [[jason-today|jason.today]] · [[tools/legitscript|LegitScriptEditor]]
