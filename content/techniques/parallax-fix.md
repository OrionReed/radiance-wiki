---
title: Parallax Fix
tags: [fix]
---

Corrects artifacts from spatial offset between probes of different cascade levels. Probes at different levels contribute duplicate energy from the same source at different angles, causing ringing near light sources. The fix reprojects sampling rays to the bilinearly sampled probes' positions.

This is a different problem from the [[bilinear-fix]] — that fixes interpolation discontinuities; this fixes energy duplication from positional parallax.

- Formal treatment: [[papers/osborne-sannikov-2024|Osborne & Sannikov 2024]], Figure 8
- Shadertoy: [Parallax fix](https://www.shadertoy.com/view/XcfyDj) by mxacop
- Interactive toggle: [radiance-cascades.com](https://radiance-cascades.com/)

**Related:** [[bilinear-fix]] · [[nearest-fix]]
