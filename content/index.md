---
title: Radiance Cascades
---

Radiance Cascades is a data structure and algorithm for real-time [global illumination](https://en.wikipedia.org/wiki/Global_illumination), created by **Alexander Sannikov** (Suslik) at [Grinding Gear Games](https://www.grindinggear.com/) for [Path of Exile 2](https://pathofexile2.com/). First presented at [[exilecon-2023|ExileCon 2023]].

The core insight — the **penumbra hypothesis** — is that resolving light from an object requires higher spatial resolution nearby and higher angular resolution far away. RC exploits this inverse relationship: each cascade level doubles the ray count while halving the probe density, and merging reconstructs a full radiance field cheaply.

The technique is geometry-agnostic (constant cost regardless of scene complexity) and produces noiseless results in 2D. Extending RC to 3D remains an open problem — see [[tags/variant|variants]].

## Start Here

1. [[simondev|SimonDev's video]] — accessible introduction
2. [[jason-today|jason.today]] — interactive step-by-step walkthrough
3. [[mxcop-fundamentals|Fundamentals of RC]] — clear diagrams
4. [[papers/sannikov-original|The original paper]]

## Browse

- **Research:** [[tags/paper|Papers]]
- **Learning:** [[tags/guide|Guides]] · [[tags/talk|Talks]]
- **Code:** [[tags/implementation|Implementations]] · [[tags/tool|Tools]]
- **Techniques:** [[tags/fix|Fixes & Optimizations]] · [[tags/variant|Variants]]
- **Language:** [[tags/glsl|GLSL]] · [[tags/hlsl|HLSL]] · [[tags/wgsl|WGSL]] · [[tags/rust|Rust]] · [[tags/cpp|C++]] · [[tags/javascript|JavaScript]] · [[tags/cuda|CUDA]]

## Community

- [Dedicated RC Discord](https://discord.gg/CdYqehej2a)
- [Graphics Programming Discord — RC thread](https://discord.com/channels/318590007881236480/1142751596858593372)
- [radiance-cascades.com](https://radiance-cascades.com/) — interactive playground with fix toggles

Many [[tags/fix|fixes]] and [[tags/variant|variants]] on this wiki originated from these communities.

*This wiki is easy to contribute to. See [[contributing|How to Contribute]].*
