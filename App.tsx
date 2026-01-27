import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { MANUAL_CONTENT } from './data';
import { ManualSection, SectionId } from './types';

// Generic Component to render a Manual Section
const SectionViewer: React.FC<{ section: ManualSection }> = ({ section }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="border-b border-slate-200 pb-6 mb-8">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
          {section.id.toUpperCase()}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          {section.title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-light">
          {section.description}
        </p>
      </header>

      <div className="space-y-10">
        {section.blocks.map((block, index) => (
          <div key={index} className="space-y-4">
            {block.title && (
              <h3 className="text-xl font-semibold text-slate-800 border-l-4 border-slate-200 pl-4">
                {block.title}
              </h3>
            )}
            
            {block.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-slate-700 leading-7 text-base md:text-lg max-w-prose">
                {paragraph}
              </p>
            ))}

            {block.list && (
              <ul className="space-y-2 ml-1 mt-2">
                {block.list.map((item, lIndex) => (
                  <li key={lIndex} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {block.warning && (
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-6 mt-6">
                <p className="text-amber-900 font-medium text-sm md:text-base italic">
                  "{block.warning}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="h-12" /> {/* Spacer */}
    </div>
  );
};

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    document.querySelector('main')?.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${SectionId.OATH}`} replace />} />
          
          {/* Generate routes dynamically from data */}
          {Object.values(MANUAL_CONTENT).map((section) => (
            <Route 
              key={section.id} 
              path={`/${section.id}`} 
              element={<SectionViewer section={section} />} 
            />
          ))}

          {/* Fallback */}
          <Route path="*" element={<Navigate to={`/${SectionId.OATH}`} replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;