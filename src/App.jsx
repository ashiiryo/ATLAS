import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { OverviewPage } from './pages/Overview';
import { PlatformPage } from './pages/PlatformPage';
import './App.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <Sidebar currentPath={window.location.pathname} onCollapseChange={setSidebarCollapsed} />
        <main className={`${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
          <TopBar title={getTitle(window.location.pathname)} />
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Navigate to="/overview" />} />
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/github" element={<PlatformPage platform="github" />} />
                <Route path="/youtube" element={<PlatformPage platform="youtube" />} />
                <Route path="/devto" element={<PlatformPage platform="devto" />} />
                <Route path="*" element={<Navigate to="/overview" />} />
              </Routes>
            </motion.div>
      </div>
        </main>
      </div>
    </Router>
  );
}

function getTitle(path) {
  if (path.startsWith('/github')) return 'GitHub';
  if (path.startsWith('/youtube')) return 'YouTube';
  if (path.startsWith('/devto')) return 'Dev.to';
  return 'Overview';
}

export default App;
