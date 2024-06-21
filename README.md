# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

## Run Locally

Install dependencies

```bash
docker run --rm --interactive --tty -w /app -u node --volume ${PWD}:/app node:20.14-alpine npm run install
```

Start the server

```bash
docker run --rm --interactive --tty -w /app -u node --volume ${PWD}:/app node:20.14-alpine npm run dev
```
