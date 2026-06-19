import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low dark:bg-dark-surface-lowest border-t border-outline-variant/30 dark:border-dark-surface-highest w-full transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-display font-bold text-xl text-primary dark:text-dark-primary">UstaTech</span>
          <span className="hidden md:inline text-outline-variant">|</span>
          <span className="label-sm text-xs text-on-surface-variant dark:text-dark-on-surface-variant opacity-60">
            © 2024 UstaTech Professional Services.
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {['Biz haqimizda', 'Maxfiylik', 'Yordam', 'Bog\'lanish'].map(link => (
            <Link key={link} to="#" className="label-sm text-xs text-on-surface-variant dark:text-dark-on-surface-variant hover:text-primary dark:hover:text-dark-primary transition-colors hover:underline">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
