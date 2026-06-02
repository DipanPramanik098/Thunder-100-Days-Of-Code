# WebAssembly (Wasm) – Short Note

**WebAssembly** is a binary instruction format that runs in browsers (and other environments) at near-native speed.  
It serves as a **compilation target** for languages like C, C++, Rust, and Go.

## Why Wasm?

- Solves JavaScript’s performance limits for compute-heavy tasks (games, video editors, CAD, simulations).
- Compact binary → fast download and decode.
- Safe sandboxed execution (same security as JavaScript).

## How It Works

1. Write in C++/Rust → compile to `.wasm`.
2. Load `.wasm` in JavaScript.
3. Browser’s Wasm VM compiles to machine code and executes.

## Example (JavaScript side)

```javascript
const module = await WebAssembly.instantiateStreaming(fetch('app.wasm'));
module.instance.exports.myFunction();
Key Features
Feature	Description
Speed	10–20% slower than native C++.
Portability	Runs on any modern browser, server (via WASI), or embedded device.
Language agnostic	Not tied to JavaScript.
No DOM access	Must call JavaScript to change the page.
Real-World Uses
Figma, Google Earth, Photoshop Web, AutoCAD Web

Game engines (Unity, Unreal)

Cloudflare Workers, database plugins (WASI)

Limitations
No direct DOM/GC (garbage collection proposal in progress)

Debugging tooling still maturing

Bottom line: Wasm brings high-performance, polyglot computing to the web without sacrificing security.
```
