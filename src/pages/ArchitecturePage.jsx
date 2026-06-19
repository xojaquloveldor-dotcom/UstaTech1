import React from 'react';
import { motion } from 'framer-motion';

const ArchitecturePage = () => {
  return (
    <main className="bg-surface dark:bg-dark-surface min-h-screen pt-24 pb-32 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-6 pt-12">
          <div className="flex items-center gap-4">
            <span className="label-md text-outline dark:text-dark-on-surface/40">04</span>
            <div className="h-px w-12 bg-outline/20 dark:bg-white/10"></div>
            <span className="material-symbols-outlined text-primary dark:text-dark-primary">architecture</span>
          </div>
          <h1 className="display-lg text-on-surface dark:text-dark-on-surface max-w-3xl">
            Usta va xizmatchi buyurtma tizimi <span className="text-primary dark:text-dark-primary">Arxitekturasi</span>
          </h1>
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Google Maps API'].map(tech => (
              <span key={tech} className="bg-surface-container dark:bg-dark-surface-highest text-on-surface-variant dark:text-dark-on-surface-variant label-md text-[10px] px-3 py-1.5 rounded-full border border-outline-variant/10">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Technical Visualization */}
        <section>
          <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden glass-card dark:border-dark-surface-highest relative group">
            <div className="absolute inset-0 bg-primary/5 dark:bg-dark-primary/5 group-hover:bg-transparent transition-all duraton-500"></div>
            <div 
              className="w-full h-full bg-cover bg-center filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxs1oRkLvSf1eZ-Gk2msJLtwEq0Y6Jk2PdBpH9oGsXoJZfWYWVwfyS8AxdbUTSEghxKReNjF9jgj_XbOZIH_m8PSwsvOggef9C4Vl6yMQ8wAmmRCwwOCZwrylS_J4TqBE9Hf-IUhmy8rIxzkxA6DRAN8VriEM3hVd4W6IoDm1rDXPxO0Rfo17Ej4I7dPMOJ-PN8_AojoEla0rmTH26pmFgl1rHPgVwkSCEGjtU4gw0g_TyWgzjLVQGHZ5iENTxVGQ9gmdODEFRNA')" }}
            ></div>
            <div className="absolute bottom-8 left-8 glass-card p-6 rounded-2xl border-white/10">
                <p className="label-md text-xs text-primary dark:text-dark-primary mb-1">SYSTEM NODES</p>
                <p className="headline-md text-on-surface dark:text-dark-on-surface">Digital Ekotizim</p>
            </div>
          </div>
        </section>

        {/* Problem & Solution Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-5 glass-card dark:bg-dark-surface-low border-outline-variant/30 dark:border-dark-surface-highest rounded-[2rem] p-10 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 text-red-500">
              <span className="material-symbols-outlined">warning</span>
              <h3 className="label-md tracking-widest text-xs">ASOSIY MUAMMO</h3>
            </div>
            <p className="body-lg text-on-surface dark:text-dark-on-surface leading-relaxed italic">
              "Uyda ta'mirot kerak bo'lganda ishonchli usta raqamini topish qiyin, narxlar shaffof emas va sifatga kafolat yo'q."
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-7 bg-primary dark:bg-dark-primary-container rounded-[2rem] p-10 text-white dark:text-dark-surface shadow-2xl glow-primary"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined">lightbulb</span>
              <h3 className="label-md tracking-widest text-xs">YEGIM / PROSESS</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { n: '01', t: 'So\'rov', i: 'edit_document' },
                { n: '02', t: 'Xabar', i: 'notifications_active' },
                { n: '03', t: 'Tanlov', i: 'touch_app' },
                { n: '04', t: 'Bitim', i: 'task_alt' }
              ].map(step => (
                <div key={step.n} className="bg-white/10 border border-white/10 rounded-2xl p-4 flex flex-col gap-4 backdrop-blur-sm">
                  <span className="font-display font-bold text-lg opacity-40">{step.n}</span>
                  <span className="material-symbols-outlined">{step.i}</span>
                  <p className="text-xs font-bold">{step.t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default ArchitecturePage;
