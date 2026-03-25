---
title: Holographic Radiance Cascades (HRC)
tags: [variant]
---

Modified probe structure that maintains high spatial resolution perpendicular to the sampling direction. Resolves hard shadows and volumetrics with similar computational cost to standard RC.

Main limitation: O(N × X²) memory, which is the primary barrier to 3D.

"Radial HRC" was an earlier community experiment testing whether small perpendicular probe spacing could resolve sharp shadows — a precursor to the ideas formalised in the paper.

- Paper: [[papers/holographic-rc]]
- Reference implementation (Rust/CUDA): [entropylost/amitabha](https://github.com/entropylost/amitabha)
- Volumetric HRC: [Yaazarai/Volumetric-HRC](https://github.com/Yaazarai/Volumetric-HRC)
- Shadertoy (Suslik): [Holographic Radiance Cascades](https://www.shadertoy.com/results?query=tag%3Dcascade)
- Ray visualiser: [[tools/hrc-ray-visualiser|Desmos]] by fad
