import { Github, Youtube, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
const platformIcons = {
  github: Github,
  youtube: Youtube,
  devto: FileText,
};
const platformLabels = {
  github: { followers: 'Followers', impact: 'Stars', content: 'Repos', growth: 'Stars (7d)' },
  youtube: { followers: 'Subscribers', impact: 'Views', content: 'Videos', growth: 'Views (7d)' },
  devto: { followers: 'Followers', impact: 'Reactions', content: 'Articles', growth: 'Reactions (7d)' },
};
export function CreatorTable({ creators, platform }) {
  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toLocaleString();
  };
  const getLabel = (key) => (platform ? platformLabels[platform]?.[key] : key.charAt(0).toUpperCase() + key.slice(1));
  return (
    <div className="glass rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-100 mb-6">Creator Intelligence</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-dark-border/50">
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Creator</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">{getLabel('followers')}</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">{getLabel('impact')}</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">Activity</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">{getLabel('growth')}</th>
              <th className="text-right py-3 px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">{getLabel('content')}</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((creator, index) => {
              const Icon = platformIcons[creator.platform] || FileText;
              const rowLabels = platformLabels[creator.platform] || platformLabels.github;
              return (
                <tr
                  key={`${creator.platform}-${creator.creatorId}`}
                  className={cn(
                    'border-b border-dark-border/30 hover:bg-dark-card/50 transition-colors',
                    index === creators.length - 1 && 'border-b-0'
                  )}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                        <Icon size={16} className="text-violet-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-300 capitalize">{creator.platform}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-200">{creator.username}</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm text-gray-200">{formatNumber(creator.followers)}</span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm font-medium text-gray-200">{formatNumber(creator.totalStars)}</span>
                    <p className="text-xs text-gray-500 mt-1">{rowLabels.impact}</p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm font-medium text-gray-200">{creator.recentActivityScore}</span>
                      <div className="w-16 h-2 bg-dark-border rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-violet-600" style={{ width: `${creator.recentActivityScore}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm font-medium text-violet-400">+{formatNumber(creator.growthSignals.stars7d)}</span>
                    <p className="text-xs text-gray-500 mt-1">7d {rowLabels.impact}</p>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <span className="text-sm font-medium text-gray-200">{formatNumber(creator.reposCount)}</span>
                    <p className="text-xs text-gray-500 mt-1">{rowLabels.content}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
