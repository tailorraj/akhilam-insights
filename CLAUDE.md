# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:5173
npm run build     # Type-check (tsc -b) then bundle for production
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint
```

## Stack

- **React 19** with **TypeScript 5.9**
- **Vite 7** as the build tool and dev server
- **ESLint 9** with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- Two separate tsconfig files: `tsconfig.app.json` (src code) and `tsconfig.node.json` (vite config)

## Architecture

This is a freshly scaffolded Vite + React + TypeScript app. The entry point is `src/main.tsx`, which mounts `src/App.tsx` into `index.html`. No routing, state management, or additional libraries have been added yet.
