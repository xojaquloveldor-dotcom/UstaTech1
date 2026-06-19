import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Muammoni yozing',
    desc: 'Qisqa vaqt ichida qanday xizmat kerakligini tushuntiring va rasm biriktiring.',
    icon: 'chat_bubble',
    color: 'text-primary-container',
    bg: 'bg-primary/10'
  },
  {
    id: 2,
    title: 'Ustalardan taklif oling',
    desc: 'Yaqin atrofdagi mutaxassislar o\'z narxlari bilan sizga taklif yuborishadi.',
    icon: 'explore',
    color: 'text-secondary',
    bg: 'bg-secondary/10'
  },
  {
    id: 3,
    title: 'Tanlov va To\'lov',
    desc: 'Reyting asosida yaxshisini tanlang va xavfsiz to\'lovni amalga oshiring.',
    icon: 'star',
    color: 'text-tertiary-fixed-dim',
    bg: 'bg-tertiary/10'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-container-margin md:px-stack-lg">
        <div className="text-center mb-20">
          <h2 className="text-display-lg font-display-lg mb-4">Atigi 3 qadamda yechim</h2>
          <p className="text-body-base text-outline">UstaTech bilan uyingizni obod qilish juda oson</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-28 h-28 rounded-[2rem] ${step.bg} flex items-center justify-center mb-8 relative`}>
                <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-[2.2rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`material-symbols-outlined text-5xl ${step.color} relative z-10`} style={{ fontVariationSettings: '"FILL" 1' }}>
                  {step.icon}
                </span>
                <div className="absolute -right-4 -top-4 w-10 h-10 bg-background rounded-full border border-outline/20 flex items-center justify-center font-bold text-primary-container shadow-lg">
                  {step.id}
                </div>
              </div>
              <h3 className="text-headline-md font-bold mb-4">{step.title}</h3>
              <p className="text-body-sm text-outline-variant leading-relaxed max-w-xs">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(33%+2rem)] w-[20%] border-t-2 border-dashed border-outline/20 h-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Storyboard-inspired call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 glass-card p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 space-y-6">
            <h3 className="text-headline-md font-bold">Har bir qadamda shaffoflik</h3>
            <p className="text-body-base text-outline-variant">
              Tizim barcha takliflarni sizga ko'rsatadi, siz esa usta reytingini va taklif qilgan narxini boshqalari bilan solishtira olasiz.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/assets/phone.png" alt="App interface" className="w-64 drop-shadow-2xl animate-float" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
