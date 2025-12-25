import { KPICard } from '../components/KPICard';
import { GrowthChart } from '../components/GrowthChart';
import { PlatformChart } from '../components/PlatformChart';
import { CreatorTable } from '../components/CreatorTable';
import { Users, TrendingUp, Activity, Layers } from 'lucide-react';
import { mockData } from '../data/mockData';

export function OverviewPage() {
  const data = mockData;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard title="Total Reach" value={data.summary.totalReach} subtitle="Combined audience across platforms" icon={Users} />
        <KPICard title="Growth Signal" value={`+${data.summary.growthSignal}%`} subtitle="7-day growth rate" icon={TrendingUp} />
        <KPICard title="Active Creators" value={data.summary.activeCreators} subtitle="Currently tracked" icon={Activity} />
        <KPICard title="Platforms Tracked" value={data.summary.platformsTracked} subtitle="Data sources" icon={Layers} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <GrowthChart data={data.growthData} />
        <PlatformChart data={data.platformDistribution} />
      </div>
      <CreatorTable creators={data.creators} />
    </div>
  );
}


