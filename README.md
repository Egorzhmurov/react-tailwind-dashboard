# React Tailwind Dashboard

A Vite + React + TypeScript dashboard UI built with Tailwind CSS, including a sidebar, command menu, usage charts, and activity widgets.

## Step-by-step local run guide

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open the local URL displayed in the terminal. By default, Vite usually runs at:

http://localhost:5173

4. Build the project for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

## Available scripts

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## Project structure

- `src/components/dashbord` — dashboard widgets and UI sections
- `src/components/sidebar` — sidebar, search, and command menu components
- `public` — static assets
