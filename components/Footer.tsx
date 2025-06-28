
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} My EnglishBlog. William Alberto Merchan Lopez - ADSO 3070123.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
