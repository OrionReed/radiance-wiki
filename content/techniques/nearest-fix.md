---
title: Nearest Fix
tags: [fix]
---

Cheaper alternative to the [[bilinear-fix]]. Reprojects to only the nearest cN+1 bilinear probe instead of all four. Some pixelation (2×2 groups of cN probes share the same cN+1 probe) but much lower cost.

![Nearest fix comparison](https://github.com/user-attachments/assets/343a0882-617e-4c9a-b8b9-2ea6667f84b0)

- Implementation: [Yaazarai's repo](https://github.com/Yaazarai/GMShaders-Radiance-Cascades) (nearest-fix branch)
- Interactive toggle: [radiance-cascades.com](https://radiance-cascades.com/)

**Related:** [[bilinear-fix]] · [[parallax-fix]]
