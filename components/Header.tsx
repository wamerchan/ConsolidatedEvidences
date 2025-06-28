import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-slate-900 hover:text-slate-700 transition-colors">
            My English Blog - William Merchan - ADSO 3070123
          </Link>
          <nav>
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link to="/evidences" className="text-sm font-medium text-slate-600 hover:text-slate-900 ml-6">
              Consolidated Evidences
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;