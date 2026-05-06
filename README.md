# SvelteKit Todo App

A client-side todo application built with SvelteKit 2 and Svelte 5 runes. Todos are persisted to `localStorage` so they survive page refreshes without a backend.

## Tech Stack

- **Framework:** SvelteKit 2 / Svelte 5
- **Language:** JavaScript
- **Persistence:** localStorage (client-side)
- **Build tool:** Vite 6

## Key Features

- Add, toggle (complete/incomplete), and delete todo items
- State managed with Svelte 5 `$state` and `$effect` runes
- Automatic persistence to `localStorage` on every state change
- Componentized: `TodoForm`, `TodoItem`, `TodoList`

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

## Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open http://localhost:5173 in your browser.
