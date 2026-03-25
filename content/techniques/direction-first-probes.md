---
title: Direction-First Probes
tags: [fix]
---

Alternative memory layout: rays grouped by direction rather than by probe position. Improves GPU texture cache coherence during merging (reads for same-direction rays across neighbouring probes become spatially contiguous). Also enables hardware bilinear interpolation during merging.

Combined with [[pre-averaging]], allows the entire RC implementation in [[gmshaders-part2|under 100 lines of shader code]].

- Described in: [[gmshaders-part2|GM Shaders Part 2]]
- Origin: [Graphics Programming Discord](https://discord.com/channels/318590007881236480/1142751596858593372)

**Related:** [[pre-averaging]]
