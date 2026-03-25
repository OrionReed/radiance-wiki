---
title: Radiance Cascades
---

Radiance Cascades is an approach to real-time [global illumination](https://en.wikipedia.org/wiki/Global_illumination), created by **Alexander Sannikov** at [Grinding Gear Games](https://www.grindinggear.com/) for [Path of Exile 2](https://pathofexile2.com/). First presented at [[exilecon-2023|ExileCon 2023]]. It has since been extended and modified in a variety of ways by an active community of developers and researchers.

The core insight — the **penumbra hypothesis** — is that resolving light from an object requires higher spatial resolution nearby and higher angular resolution far away. RC exploits this inverse relationship: each cascade level doubles the ray count while halving the probe density, and merging reconstructs a full radiance field cheaply.

The technique is geometry-agnostic (constant cost regardless of scene complexity) and produces noiseless results in 2D. Extending RC to 3D remains an open problem — see [[tags/variant|variants]].

<style>
#rc-demo { display:flex; flex-direction:column; width:fit-content; position:relative; z-index:10; }
#rc-demo button { border:none; cursor:pointer; }
#rc-demo .color { max-width:20px; width:20px; height:20px; position:relative; }
#rc-demo canvas { image-rendering:auto; width:fit-content; display:block; }
#rc-demo .iconButton { margin-left:-1px; padding:0; width:24px; height:24px; padding-top:4px; }
#rc-demo .erase { position:absolute; top:2px; left:1px; }
#rc-demo .arrow { border:none; position:absolute; top:0; right:-17px; left:auto; cursor:auto; color:white; transform:rotate(180deg); }
#rc-demo .hidden { display:none; }
#rc-canvas > div { gap:8px !important; }
#rc-demo label, #rc-demo summary, #rc-demo span, #rc-demo div { color: var(--darkgray); }
#rc-demo .slider { flex: 1; }
#rc-demo label { display: flex; align-items: center; gap: 6px; line-height: 1.8; }
#rc-demo-controls {
  font-size: 0.85rem;
  margin-top: 0;
  padding: 6px 10px;
  background: var(--lightgray);
  border-radius: 0 0 6px 6px;
  box-sizing: border-box;
}
#rc-demo-controls-bottom { display: flex; align-items: baseline; justify-content: space-between; margin-top: 2px; }
#rc-demo details summary { cursor: pointer; font-size: 0.8rem; color: var(--gray); }
#rc-demo details summary:hover { color: var(--secondary); }
#additional-controls-container > div { margin-top: 1px; }
</style>

<div id="rc-demo">
<div id="rc-canvas"></div>
<div id="rc-demo-controls">
<div id="outer-container">
<label style="display:flex; align-items:center; gap:6px; cursor:pointer">
<span>2D SRGB Falloff</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="enable-srgb" checked>
</label>
</div>
<div id="rc-demo-controls-bottom">
<details style="cursor:pointer">
<summary>Additional Controls</summary>
<label style="display:none; align-items:center; gap:6px; cursor:pointer">
<span>Bilinear Fix</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="bilinear-fix">
</label>
<label style="display:flex; align-items:center; gap:6px; cursor:pointer">
<span>Disable Mips</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="disable-mips">
</label>
<label style="display:flex; align-items:center; gap:6px; cursor:pointer">
<span>Non-Linear Accumulation</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="nonlinear-accumulation">
</label>
<label style="display:flex; align-items:center; gap:6px; cursor:pointer">
<span>Naive GI Noise</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="add-noise">
</label>
<label style="display:flex; align-items:center; gap:6px; cursor:pointer">
<span>Reduce Demand (Calculate over 2 frames)</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="reduce-demand">
</label>
<label style="display:none; align-items:center; gap:6px; cursor:pointer">
<span>Ringing Fix</span> <input style="margin:0;appearance:auto;width:auto;height:auto;position:static;transform:none;cursor:pointer" type="checkbox" id="ringing-fix">
</label>
<div id="additional-controls-container"></div>
<div style="display:flex; align-items:center; gap:8px">
Sun Angle
<input id="rc-sun-angle-slider" class="slider" type="range" min="0" max="6.2" step="0.1" value="2.0">
</div>
</details>
</div>
</div>
</div>

<script src="/static/rc-demo/rc.js"></script>
<script>
requestAnimationFrame(() => {
  const c = document.querySelector('#rc-canvas-canvas-container');
  const ctrl = document.querySelector('#rc-demo-controls');
  if (!c || !ctrl) return;
  const sync = () => { ctrl.style.width = c.offsetWidth + 'px'; };
  new ResizeObserver(sync).observe(c);
  sync();
});
</script>

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
