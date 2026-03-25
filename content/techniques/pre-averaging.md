---
title: Pre-Averaging
tags: [fix]
---

Since merging averages the four nearest upper-cascade probes' rays, you can average them *before* storing — casting 4 rays, storing one averaged result. 75% memory reduction, texture lookups during merging drop from 16 to 4.

Combined with [[direction-first-probes]], enables an RC implementation in [[gmshaders-part2|under 100 lines of shader code]].

- Described in: [[gmshaders-part2|GM Shaders Part 2]]
- Origin: [Graphics Programming Discord](https://discord.com/channels/318590007881236480/1142751596858593372)

**Related:** [[direction-first-probes]]
