# ATLAS Dashboard

A premium, futuristic dashboard UI for the ATLAS Creator Economy Intelligence Platform.

## Features

- 🎨 **Dark Mode Design** - Sleek, minimal interface with violet accents
- 📊 **Analytics Dashboard** - KPI cards, growth charts, and platform distribution
- 🔍 **Creator Intelligence** - Comprehensive table with platform-aware metrics
- ✨ **Glassmorphism** - Subtle blur effects and glow animations
- 🎯 **Production Ready** - Clean code structure, optimized build

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion (minimal animations)
- Recharts (data visualization)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  ├── components/       # React components
  │   ├── Sidebar.jsx
  │   ├── TopBar.jsx
  │   ├── KPICard.jsx
  │   ├── GrowthChart.jsx
  │   ├── PlatformChart.jsx
  │   └── CreatorTable.jsx
  ├── data/            # Mock data
  │   └── mockData.js
  ├── lib/             # Utilities
  │   └── utils.js
  └── App.jsx          # Main component
```

## Design Principles

- **Minimal** - Clean, uncluttered interface
- **Intelligent** - Data-driven, not decorative
- **Premium** - High-quality visual design
- **Functional** - Every element serves a purpose

## Deployment

Ready for Vercel deployment:

```bash
# Build
npm run build

# Deploy to Vercel
vercel
```

The build output is in the `dist/` directory.
