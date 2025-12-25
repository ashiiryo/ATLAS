import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Youtube, FileText, LayoutDashboard, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { NavLink } from 'react-router-dom';
import atlasLogo from '../assets/atlas-logo.svg';

const navigation = [
  { name: 'Overview', href: '/overview', icon: LayoutDashboard },
  { name: 'GitHub', href: '/github', icon: Github },
  { name: 'YouTube', href: '/youtube', icon: Youtube },
  { name: 'Dev.to', href: '/devto', icon: FileText },
];

export function Sidebar({ currentPath = '/', onCollapseChange }) {
  const [collapsed, setCollapsed] = useState(false);
  
  const handleCollapse = (value) => {
    setCollapsed(value);
    if (onCollapseChange) {
      onCollapseChange(value);
    }
  };

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'fixed left-0 top-0 h-full z-40 bg-dark-surface/95 backdrop-blur-xl border-r border-dark-border/50',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-dark-border/50">
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className={cn(
    'transition-all',
    !collapsed ? 'w-28 h-10' : 'w-10 h-10',
    'flex items-center justify-center cursor-pointer relative'
  )}
>
  <img
    src={atlasLogo}
    alt="ATLAS Logo"
    className={cn(
      'object-contain select-none drop-shadow-md',
      'transition-all duration-200',
      !collapsed ? 'w-28 h-10' : 'w-10 h-10',
      'hover:glow-violet',
      'rounded-md'
    )}
    style={{ filter: 'brightness(1.3)' }}
  />
  <style>{`.hover\\:glow-violet:hover { box-shadow: 0 0 15px 2px #8b5cf666; }`}</style>
</motion.div>
          <button
            onClick={() => handleCollapse(!collapsed)}
            className="p-2 hover:bg-dark-card/50 rounded-lg transition-colors"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                  isActive
                    ? 'bg-dark-card border border-violet-500/30 glow-violet-sm text-violet-400'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-dark-card/50'
                )}
                end={item.href === '/overview'}
              >
                <Icon size={20} />
                {!collapsed && <span>{item.name}</span>}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}
