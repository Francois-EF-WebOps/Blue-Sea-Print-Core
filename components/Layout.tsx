import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Anchor, BookOpen, Fish, Hammer, Container, RefreshCw } from 'lucide-react';
import { SectionId, NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { id: SectionId.OATH, label: 'The Oath', icon: Anchor },
  { id: SectionId.DOCTRINE, label: 'Doctrine', icon: BookOpen },
  { id: SectionId.NUTRITION, label: 'Nutrition', icon: Fish },
  { id: SectionId.TOOLS, label: 'Tools', icon: Hammer },
  { id: SectionId.PRESERVATION, label: 'Preservation', icon: Container },
  { id: SectionId.LEARNING, label: 'Learning Loop', icon: RefreshCw },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  const closeNav = () => setIsMobileNavOpen(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans text-slate-800 bg-[#fdfbf7]">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 bg-white sticky top-0 z-50">
        <h1 className="font-bold text-lg tracking-tight text-slate-900">Blue Sea Print<span className="text-slate-400 font-normal">.core</span></h1>
        <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="p-2 text-slate-600">
          {isMobileNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation (Desktop & Mobile Overlay) */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out
        md:translate-x-0 md:static md:h-screen md:overflow-y-auto
        ${isMobileNavOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
      `}>
        <div className="p-6 md:p-8">
          <h1 className="hidden md:block font-bold text-xl tracking-tight text-slate-900 mb-2">
            Blue Sea Print
            <span className="block text-sm font-normal text-slate-400 font-mono">.core</span>
          </h1>
          <p className="hidden md:block text-xs text-slate-500 mb-8 leading-relaxed">
            Irreducible foundation for sea-based food autonomy.
          </p>

          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.id}`}
                onClick={closeNav}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-slate-100 text-slate-900' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <item.icon size={18} className="opacity-70" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Status</div>
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-mono bg-emerald-50 px-2 py-1 rounded w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              V0 STABLE
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto h-[calc(100vh-65px)] md:h-screen relative">
        <div className="max-w-3xl mx-auto px-4 py-8 md:px-12 md:py-16">
          {children}
        </div>
      </main>

      {/* Overlay backdrop for mobile */}
      {isMobileNavOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={closeNav}
        />
      )}
    </div>
  );
};

export default Layout;