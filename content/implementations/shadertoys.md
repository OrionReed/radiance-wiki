---
title: Shadertoy Implementations
tags: [implementation, glsl]
---

[Shadertoy](https://www.shadertoy.com/) has been a major proving ground for RC ideas. Many [[tags/fix|fixes]] and [[tags/variant|variants]] were first prototyped here.

## fad's Original (Sep 2023)

[shadertoy.com/view/mtlBzX](https://www.shadertoy.com/view/mtlBzX) — the first public implementation. Includes the [[skybox-integral]]. Merging is temporal due to Shadertoy's buffer limitations.

**Fork tree:** fad (Sep 2023) → Quinchilion (Nov 2023) → Suslik (Apr 2024) → RC Experimental Testbed (Suslik, Apr 2024)

## Notable Shadertoys

| Shadertoy | Author | Topic |
|-----------|--------|-------|
| [RC V2 / bilinear fix](https://www.shadertoy.com/view/4clcWn) | MytinoDev | [[bilinear-fix]] |
| [Parallax fix](https://www.shadertoy.com/view/XcfyDj) | mxacop | [[parallax-fix]] |
| [RC / gear fix](https://www.shadertoy.com/view/XffcD7) | kornelski | |
| [Holographic RC](https://www.shadertoy.com/results?query=tag%3Dcascade) | Suslik | [[variants/holographic-rc\|HRC]] |
| [Radiance Cascades 3D](https://www.shadertoy.com/view/X3XfRM) | Suslik | [[variants/uv-space-3d\|UV-space RC]] |
| [Analytic Direct Illumination](https://www.shadertoy.com/view/NttSW7) | Mathis | [[skybox-integral\|Sky integral]] formula |
| [RC Diagram](https://www.shadertoy.com/results?query=tag%3Dcascade) | Mytino | Visualisation |
| [RC - Screen Space Probes](https://www.shadertoy.com/results?query=tag%3Dcascade) | Mathis | |

**Related:** [[tools/legitscript|LegitScriptEditor]] (more flexible multi-pass setup)
