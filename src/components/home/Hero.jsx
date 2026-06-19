import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroScene from './HeroScene';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-container-margin md:px-stack-lg max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center w-full z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-stack-lg"
        >
          <h1 className="display-lg text-on-surface dark:text-dark-on-surface">
            Uyingizdagi har qanday muammoga <span className="text-primary dark:text-dark-primary">10 daqiqada</span> yechim toping
          </h1>
          <p className="body-lg text-on-surface-variant dark:text-dark-on-surface-variant max-w-lg">
            UstaTech — bu ishonchli ustalar va sifatli xizmat ko'rsatuvchilar platformasi. Shaffof narxlar, tekshirilgan mutaxassislar va kafolatlangan natija.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link className="bg-primary dark:bg-dark-primary-container text-white dark:text-dark-surface font-semibold px-8 py-4 rounded-xl shadow-lg glow-primary hover:scale-105 transition-all text-center" to="/create-order">
              Usta chaqirish
            </Link>
            <Link className="glass-card dark:text-dark-on-surface px-8 py-4 rounded-xl font-semibold border border-outline/30 hover:bg-white/10 dark:hover:bg-white/5 transition-all text-center" to="/architecture">
              Loyihalar
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface dark:border-dark-surface overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant">
              <span className="font-bold text-on-surface dark:text-dark-on-surface">500+</span> usta sizning xizmatingizda
            </p>
          </div>
        </motion.div>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 dark:opacity-20">
            <HeroScene />
          </div>

          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            src="/assets/handyman.png" 
            alt="3D Handyman" 
            className="relative w-[85%] drop-shadow-2xl z-10 animate-float"
          />

          {/* Floating UI Bubbles */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-0 glass-card p-4 rounded-xl z-20 shadow-xl opacity-90"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary dark:text-dark-primary" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
              <div>
                <p className="label-sm text-xs text-primary dark:text-dark-primary opacity-70">AKTIV SO'ROV</p>
                <p className="font-bold text-sm text-on-surface dark:text-dark-on-surface">Santexnik kerak</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
