---
title: "Radiance Cascades 3D — DexRT Presentation Slides"
tags: [talk]
---

**Speaker:** Christopher Osborne (Goobley)

- [Slides](https://goobley.github.io/RadianceCascadesSlides/)

Covers the [[implementations/dexrt|DexRT]] astrophysics implementation. Topics: GPU-first design via [Kokkos](https://github.com/kokkos/kokkos), atmospheric sparsity, mipmapping for upper cascades, [Morton order](https://en.wikipedia.org/wiki/Z-order_curve) storage (inspired by [OpenVDB](https://www.openvdb.org/)), ~40× perf/Watt GPU vs CPU.

The astrophysical context differs from game rendering, but the implementation techniques — sparse storage, mipmapping, memory layout — transfer to other domains.

**Related:** [[implementations/dexrt|DexRT]] · [[papers/osborne-sannikov-2024|Osborne & Sannikov 2024]]
