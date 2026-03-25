---
title: Skybox Integral
tags: [fix]
---

Integrates environmental lighting into RC by merging the sky integral into the outermost cascade, which covers the farthest intervals. The low probe density of that cascade is acceptable because skyboxes have negligible spatial variation. Does not affect occlusion.

Sky integral formula by Mathis: [Analytic Direct Illumination](https://www.shadertoy.com/view/NttSW7).

- First included in [fad's original Shadertoy](https://www.shadertoy.com/view/mtlBzX)
- Discussed in: [[gmshaders-part1|GM Shaders Part 1]]
