import { KPICard } from '../components/KPICard';
import { CreatorTable } from '../components/CreatorTable';
import { Users, TrendingUp, Layers, Activity } from 'lucide-react';
import { mockData } from '../data/mockData';

const platformConfigs = {
  github: {
    title: 'GitHub Analytics',
    kpis: [
      { title: 'Total Followers', key: 'totalFollowers', icon: Users, subtitle: 'GitHub users' },
      { title: 'Total Stars', key: 'totalStars', icon: TrendingUp, subtitle: 'Across all repos' },
      { title: 'Repos Tracked', key: 'reposCount', icon: Layers, subtitle: 'Total repos' },
      { title: 'Growth Signal', key: 'growthSignal', icon: Activity, subtitle: '7-day trend' },
    ],
    tableColumns: {
      followers: 'Followers',
      impact: 'Stars',
      activity: 'Activity',
      growth: 'Stars (7d)',
      content: 'Repos',
    },
  },
  youtube: {
    title: 'YouTube Analytics',
    kpis: [
      { title: 'Total Subscribers', key: 'totalFollowers', icon: Users, subtitle: 'All channels' },
      { title: 'Total Views', key: 'totalStars', icon: TrendingUp, subtitle: 'Across all videos' },
      { title: 'Videos Tracked', key: 'reposCount', icon: Layers, subtitle: 'Total videos' },
      { title: 'Growth Signal', key: 'growthSignal', icon: Activity, subtitle: '7-day trend' },
    ],
    tableColumns: {
      followers: 'Subscribers',
      impact: 'Views',
      activity: 'Activity',
      growth: 'Views (7d)',
      content: 'Videos',
    },
  },
  devto: {
    title: 'Dev.to Analytics',
    kpis: [
      { title: 'Total Followers', key: 'totalFollowers', icon: Users, subtitle: 'Dev.to users' },
      { title: 'Total Reactions', key: 'totalStars', icon: TrendingUp, subtitle: 'Across articles' },
      { title: 'Articles Tracked', key: 'reposCount', icon: Layers, subtitle: 'Total articles' },
      { title: 'Growth Signal', key: 'growthSignal', icon: Activity, subtitle: '7-day trend' },
    ],
    tableColumns: {
      followers: 'Followers',
      impact: 'Reactions',
      activity: 'Activity',
      growth: 'Reactions (7d)',
      content: 'Articles',
    },
  },
};

function getPlatformStats(creators, platform) {
  const items = creators.filter((c) => c.platform === platform);
  return {
    totalFollowers: items.reduce((a, b) => a + (b.followers || 0), 0),
    totalStars: items.reduce((a, b) => a + (b.totalStars || 0), 0),
    reposCount: items.reduce((a, b) => a + (b.reposCount || 0), 0),
    growthSignal: items.reduce((a, b) => a + (b.growthSignals.stars7d || 0), 0),
    creators: items,
  };
}

export function PlatformPage({ platform }) {
  const { kpis, title } = platformConfigs[platform];
  const stats = getPlatformStats(mockData.creators, platform);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-100 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={stats[kpi.key]}
            subtitle={kpi.subtitle}
            icon={kpi.icon}
          />
        ))}
      </div>
      <CreatorTable creators={stats.creators} platform={platform} />
    </div>
  );
}


