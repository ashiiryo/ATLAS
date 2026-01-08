
# Atlas — Creator Intelligence Platform

Atlas is a lightweight creator intelligence platform that aggregates public creator data from multiple platforms into a single analytics dashboard.

This project is made to demonstrate real-world backend + frontend engineering, API integration, data normalization, and dashboard design.

---

## 🚀 Features

- 📊 Unified analytics dashboard
- 🔌 Multi-platform data fetching
  - GitHub (stars, repos, followers)
  - YouTube (subscribers, views, videos)
  - Dev.to (articles, reactions)
- 🕒 Automated data refresh (scheduled fetch)
- 📈 Platform-aware metrics (no fake/duplicated stats)
- 🧊 Modern UI
  - Dark futuristic theme
  - Glassmorphism
  - 3D / minimal aesthetic
- ⚙️ Production-ready architecture

---

## 🧱 Tech Stack

### Backend
- Node.js
- Google Sheets API (as datastore)
- GitHub API
- YouTube Data API
- Dev.to API

### Frontend
- React + Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons

---

## 📂 Project Structure



atlas/
├── backend/
│ ├── fetchers/
│ ├── scheduler/
│ ├── sheets/
│ └── index.js
├── dashboard/
│ ├── src/
│ ├── components/
│ └── pages/
└── README.md


---

## 🔐 Environment Variables

All secrets are stored securely using environment variables.

Example:
```env
GITHUB_TOKEN=your_token
YOUTUBE_API_KEY=your_key
GOOGLE_SHEETS_SPREADSHEET_ID=your_id
GOOGLE_SERVICE_ACCOUNT_KEY=base64_key


❌ Secrets are NOT committed to the repository.

🛠 Local Setup
npm install
npm run dev

🌍 Deployment

Frontend: Vercel

Backend: Serverless / Cron-based execution

📌 Disclaimer

This project is built for educational purposes.
All data is fetched from public APIs.

Built by rix

