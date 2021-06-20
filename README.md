# WebAssembly markdown parser

## Build wasm

```sh
cd wasm
cargo install wrangler wasm-pack
wasm-pack build --scope ecpplus
```
## Start frontend

```sh
yarn install
yarn run serve
```

