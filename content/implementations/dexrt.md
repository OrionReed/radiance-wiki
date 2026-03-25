---
title: DexRT — Astrophysical Radiative Transfer
tags: [implementation, cpp]
---

- [Goobley/DexRT](https://github.com/Goobley/DexRT) (C++20, Apache-2.0)
- [Presentation slides](https://goobley.github.io/RadianceCascadesSlides/)

![DexRT — Ly-beta J in a prominence model](https://raw.githubusercontent.com/Goobley/DexRT/main/Images/cocoplot_lyb_j.png)

RC applied to non-LTE radiative transfer for solar prominences and spectral lines. GPU-portable via [Kokkos](https://github.com/kokkos/kokkos) (migrated from YAKL in v0.4.0). Uses mipmapping for upper cascades, sparse VDB-like storage, [Morton order](https://en.wikipedia.org/wiki/Z-order_curve). v0.5.0 added 3D support.

Described in [[papers/osborne-sannikov-2024|Osborne & Sannikov 2024]].

**Related:** [[goobley-slides|DexRT slides]]
