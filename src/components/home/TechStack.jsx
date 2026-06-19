import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  return (
    <section className="py-24 overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-container-margin md:px-stack-lg">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-container text-label-md font-bold">
              TEXNOLOGIYALAR
            </div>
            <h2 className="text-display-lg font-display-lg">Yuqori ishonchlilik va xavfsizlik</h2>
            <p className="text-body-base text-outline-variant leading-relaxed">
              UstaTech platformasi eng zamonaviy texnologiyalar ustiga qurilgan. Biz foydalanuvchi ma'lumotlarini himoya qilish va real vaqtda uzluksiz xizmat ko'rsatishni ta'minlaymiz.
            </p>
            <ul className="space-y-4">
              {[
                { text: 'Real-time Socket.io chat', color: 'text-secondary' },
                { text: 'Xavfsiz JWT autentifikatsiya', color: 'text-primary-container' },
                { text: 'Geospatial qidiruv (PostGIS)', color: 'text-tertiary-fixed-dim' }
              ].map((item, id) => (
                <li key={id} className="flex items-center gap-3">
                  <span className={`material-symbols-outlined ${item.color}`}>check_circle</span>
                  <span className="font-medium text-on-surface dark:text-inverse-on-surface">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full" />
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2rem] border-primary/20 flex flex-col items-center justify-center gap-4 relative z-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container text-4xl">react</span>
              </div>
              <div className="text-center">
                <p className="font-bold">React 19</p>
                <p className="text-label-md text-outline">Frontend</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              style={{ marginTop: '2rem' }}
              className="glass-card p-8 rounded-[2rem] border-secondary/20 flex flex-col items-center justify-center gap-4 relative z-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-4xl">javascript</span>
              </div>
              <div className="text-center">
                <p className="font-bold">Node.js</p>
                <p className="text-label-md text-outline">Backend</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2rem] border-tertiary-fixed-dim/20 flex flex-col items-center justify-center gap-4 relative z-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl">hub</span>
              </div>
              <div className="text-center">
                <p className="font-bold">Socket.io</p>
                <p className="text-label-md text-outline">Real-time</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              style={{ marginTop: '2rem' }}
              className="glass-card p-8 rounded-[2rem] border-primary-fixed-dim/20 flex flex-col items-center justify-center gap-4 relative z-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl">database</span>
              </div>
              <div className="text-center">
                <p className="font-bold">PostgreSQL</p>
                <p className="text-label-md text-outline">Database</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
