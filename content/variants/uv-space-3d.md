---
title: UV-Space RC (3D)
tags: [variant, implementation, glsl]
---

Suslik's Shadertoy (Nov 2024) — a uv-space implementation of RC. Multi-bounce lighting, BRDF integration.

- [Radiance Cascades 3D](https://www.shadertoy.com/view/X3XfRM)

Operates in texture coordinate space of surfaces rather than screen-space or world-space grids. Merging is temporal due to Shadertoy limitations, causing some light lag and flickering — a proper implementation could likely avoid this.

Notable as a proof-of-concept from the original RC author.

**Related:** [[variants/surfel-rc|Surfel RC]] · [[talks/sannikov-3d-demo|3D demo]]
