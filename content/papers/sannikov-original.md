---
title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
tags: [paper]
---

**Author:** Alexander Sannikov
**Status:** WIP / preprint (CC BY-ND 3.0)

- [Paper source (GitHub)](https://github.com/Raikiri/RadianceCascadesPaper)
- [PDF (Google Drive)](https://drive.google.com/file/d/1L6v1_7HY2X-LV3Ofb6oyTIxgEaP4LOI6/view)

The original paper. Introduces the penumbra hypothesis, the cascade data structure, flatland and 3D formulations, and interval extension for 3D grids. Shows that memory for all cascades in 2D is bounded by 2× the memory of cascade 0. Also covers the predecessor techniques (HSSVGI, hierarchical screenspace shadow cascades) from ExileCon 2019.

For a formal treatment of the [[bilinear-fix]] and [[parallax-fix]], see [[papers/osborne-sannikov-2024|Osborne & Sannikov 2024]]. For gentler introductions, see [[simondev|SimonDev]] or [[mxcop-fundamentals|mxcop]].

**Related:** [[exilecon-2023|ExileCon 2023 talk]] · [[implementations/shadertoys|Shadertoy implementations]]
