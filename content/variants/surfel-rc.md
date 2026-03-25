---
title: Surfel Radiance Cascades (3D)
tags: [variant, implementation, rust]
---

Experimental 3D approach using [surfel](https://en.wikipedia.org/wiki/Surfel) probes instead of screen-space or volumetric grids.

- [mxcop/src-dgi](https://github.com/mxcop/src-dgi) by mxacop

Two-part pipeline: surfel maintenance (spawning/recycling with camera movement) + radiance gathering (ray-tracing probe rays, then merging cascades top-to-bottom). Surfels avoid some volumetric memory issues (they only exist on surfaces) but introduce challenges around distribution, coverage gaps, and temporal stability.

Research-stage work. 3D RC remains largely an open problem.

**Related:** [[variants/uv-space-3d|UV-space RC]] · [[guides/bevy-overview|Bevy 3D challenges]]
