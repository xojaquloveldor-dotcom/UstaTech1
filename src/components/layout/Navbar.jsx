import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Arxitektura', path: '/architecture' },
    { name: 'Ustalar', path: '/masters' },
    { name: 'Orderlarim', path: '/my-orders' }
  ];

  return (
    <nav className="fixed top-0 w-full z-[60] glass-card dark:bg-dark-surface/80 border-b border-outline-variant/20 dark:border-white/5 h-16 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
        <Link to="/" className="headline-md font-black text-primary dark:text-dark-primary tracking-tighter flex items-center gap-2">
          <span className="material-symbols-outlined text-3xl">bolt</span>
          UstaTech
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`font-body text-sm font-semibold transition-all duration-200 hover:text-primary dark:hover:text-dark-primary ${
                location.pathname === item.path 
                  ? 'text-primary dark:text-dark-primary' 
                  : 'text-on-surface-variant dark:text-dark-on-surface-variant'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container dark:hover:bg-dark-surface-highest transition-all text-on-surface dark:text-dark-on-surface"
          >
            <span className="material-symbols-outlined text-[22px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <Link 
            className="hidden sm:flex bg-primary dark:bg-dark-primary-container text-white dark:text-dark-surface font-label text-xs font-bold px-7 py-2.5 rounded-xl glow-primary hover:scale-105 active:scale-95 transition-all shadow-lg" 
            to="/create-order"
          >
            BUYURTMA BERISH
          </Link>
          
          <button className="md:hidden w-10 h-10 flex items-center justify-center text-on-surface dark:text-dark-on-surface">
            <span className="material-symbols-outlined text-[28px]">menu_open</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
