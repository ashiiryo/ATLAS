import { User } from 'lucide-react';

import atlasLogo from '../assets/atlas-logo.svg';

export function TopBar({ title, lastUpdated }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="sticky top-0 z-30 bg-dark-surface/80 backdrop-blur-xl border-b border-dark-border/50">
      <div className="flex items-center justify-between px-8 h-16">
        <div>
          <div className="flex items-center gap-3">
  <img
    src={atlasLogo}
    alt="ATLAS Logo"
    className="object-contain w-24 h-8 sm:w-32 sm:h-10 select-none drop-shadow-md hover:glow-violet rounded-md transition-all duration-200"
    style={{ filter: 'brightness(1.3)' }}
  />
  <h1 className="text-xl sm:text-2xl font-semibold text-gray-100">{title}</h1>
  <style>{`.hover\\:glow-violet:hover { box-shadow: 0 0 15px 2px #8b5cf666; }`}</style>
</div>
          {lastUpdated && (
            <p className="text-xs text-gray-500 mt-1">
              Last updated: {formatDate(lastUpdated)}
            </p>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-dark-card/50 rounded-lg border border-dark-border/50">
            <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
              <User size={16} className="text-violet-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


