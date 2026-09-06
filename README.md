# 💰 Financial Literacy Game

A decision-based game that teaches financial literacy concepts — saving, spending, and investing — through realistic everyday scenarios.

## 🎯 Current Status: Phase 2 Complete (React Architecture & UI)

Built as part of a 60-day MERN stack learning project (13 Aug – 11 Oct 2026).

## Features

- 6 financial decision scenarios
- Real-time money, savings, and score tracking
- Progress bar showing game completion
- Decision history log
- Persistent high score (localStorage)
- Multi-page app: Home, Game, Dashboard (React Router)
- Shared global state via React Context
- Responsive, mobile-friendly Tailwind UI
- Loading and empty states

## Tech Stack (so far)

- React (Vite)
- React Router
- Tailwind CSS
- React Context API + Custom Hooks

## Architecture Highlights

- `hooks/useGameState.js` — all game logic in one custom hook
- `context/GameContext.jsx` — shares game state across all pages
- `pages/` — Home, Game, Dashboard as separate routed pages
- `components/` — reusable UI pieces (Navbar, ProgressBar, EmptyState, LoadingSpinner)

## Coming Next (Phase 3+)

- Backend with Node.js, Express, MongoDB
- Real REST APIs for scenarios, users, and scores
- User authentication
- Leaderboard & achievements
- Full deployment

## Running Locally

\`\`\`bash
cd financeGame
npm install
npm run dev
\`\`\`