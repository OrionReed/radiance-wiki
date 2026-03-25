---
title: Radiance Cascades — Bevy/Rust
tags: [implementation, rust, wgsl, bevy]
---

- [kornelski/bevy_flatland_radiance_cascades](https://github.com/kornelski/bevy_flatland_radiance_cascades) — [[pre-averaging]], improved storage layout. Kornelski also made the [[tools/interval-calculator|interval calculator]].
- [nixonyh/bevy_radiance_cascades](https://github.com/nixonyh/bevy_radiance_cascades)

JMS55's [Solari](https://jms55.github.io/posts/2025-09-20-solari-bevy-0-17/) tried RC in 3D for Bevy but found artifacts and performance costs difficult, pivoting to [ReSTIR](https://research.nvidia.com/publication/2020-07_spatiotemporal-reservoir-resampling-real-time-ray-tracing-dynamic-direct). One data point, not a definitive verdict on 3D RC.

**Related:** [[guides/bevy-overview|Bevy overview]] · [[variants/surfel-rc|Surfel RC]] (also Rust)
