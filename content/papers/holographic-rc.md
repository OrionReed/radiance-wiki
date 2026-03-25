---
title: "Holographic Radiance Cascades for 2D Global Illumination"
tags: [paper, variant]
---

**Authors:** Rouli Freeman, Alexander Sannikov, Adrian Margel (2025)

- [arXiv:2505.02041](https://arxiv.org/abs/2505.02041)
- [Emergent Mind summary](https://www.emergentmind.com/papers/2505.02041)

Introduces **[[variants/holographic-rc|Holographic Radiance Cascades (HRC)]]**: a modified probe structure that maintains high spatial resolution perpendicular to the sampling direction. Single-shot, noiseless, and reports results close to the 2D reference solution. ~1.85ms at 512×512, ~7.67ms at 1024×1024 on RTX 3080 Laptop.

Main limitation: O(N × X²) memory, which is the primary barrier to scaling to 3D.

**Implementations:** [amitabha](https://github.com/entropylost/amitabha) (Rust/CUDA) · [Volumetric-HRC](https://github.com/Yaazarai/Volumetric-HRC) · [[tools/hrc-ray-visualiser|Ray visualiser]]
