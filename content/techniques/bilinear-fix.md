---
title: Bilinear Fix
tags: [fix]
---

Addresses interpolation artifacts during cascade merging. The four bilinearly sampled upper-cascade probes have spatial offsets, causing discontinuities at probe boundaries. The fix casts 4× rays — one reprojected to each upper-cascade bilinear probe — before merging, making merged rays continuous.

Tradeoff: 4× ray cost. For a cheaper alternative, see the [[nearest-fix]].

| Without fix | With bilinear fix |
|---|---|
| ![Vanilla — no fix](https://github.com/user-attachments/assets/045dc791-e237-4746-a8bf-63c4c5b7e78e) | ![Bilinear fix](https://github.com/user-attachments/assets/b117e3ec-65f9-4565-886b-7a1df3b34b9d) |

*Images from [Yaazarai's GMShaders repo](https://github.com/Yaazarai/GMShaders-Radiance-Cascades).*

- Formal treatment: [[papers/osborne-sannikov-2024|Osborne & Sannikov 2024]], Appendix A
- Shadertoy: [Radiance Cascades V2](https://www.shadertoy.com/view/4clcWn) by MytinoDev
- Implementation: [Yaazarai's repo](https://github.com/Yaazarai/GMShaders-Radiance-Cascades) (bilinear-fix branch)
- Interactive toggle: [radiance-cascades.com](https://radiance-cascades.com/)

**Related:** [[nearest-fix]] · [[parallax-fix]] (different artifact)
