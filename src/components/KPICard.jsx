import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function KPICard({ title, value, subtitle, icon: Icon, className }) {
  const formatValue = (val) => {
    if (typeof val === 'number') {
      if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
      if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
      return val.toLocaleString();
    }
    return val;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'glass rounded-xl p-6 relative overflow-hidden group cursor-pointer',
        className
      )}
    >
      {/* Violet accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-violet-600" />
      
      {/* Icon */}
      {Icon && (
        <div className="mb-4 w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
          <Icon size={20} className="text-violet-400" />
        </div>
      )}

      {/* Content */}
      <div>
        <p className="text-sm text-gray-400 mb-2">{title}</p>
        <p className="text-3xl font-bold text-gray-100 mb-1">{formatValue(value)}</p>
        {subtitle && (
          <p className="text-xs text-gray-500">{subtitle}</p>
        )}
      </div>

      {/* Subtle glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 glow-violet-sm rounded-xl" />
      </div>
    </motion.div>
  );
}



