import React from 'react';
import { motion } from 'framer-motion';

const storySteps = [
  {
    id: '01',
    title: 'Kutilmagan Muammo',
    desc: 'Uyingizda to\'satdan nosozlik yuz berdimi? Santexnika, chiroq yoki maishiy texnika pand berdimi? Eski va ishonchsiz usta raqamlarini qidirishdan charchadingizmi?',
    icon: 'warning',
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800' // Broken/Messy theme
  },
  {
    id: '02',
    title: 'Tezkor Ilova',
    desc: 'UstaTech platformasiga kiring. Bor-yo\'g\'i bir necha soniya ichida muammoni tavsiflang va xizmat turini tanlang. Hech qanday ortiqcha qog\'ozbozlik yo\'q.',
    icon: 'smartphone',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' // App UI Theme
  },
  {
    id: '03',
    title: 'Gologramma Xarita',
    desc: 'Tizim aqlli lokatsiya orqali sizga eng yaqin (5-10 km radiusdagi) barcha mos ustalarni real-vaqtda ogohlantiradi. Ustalar radarda sizni ko\'rishadi.',
    icon: 'share_location',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800' // Map Theme
  },
  {
    id: '04',
    title: 'Oqilona Tanlov',
    desc: 'Atrofdagi eng malakali ustalar oʻz narxlarini taklif qilishadi. Siz ularning yulduzli reytingi, mijozlar sharhi va taklif qilingan narxini solishtirib tanlaysiz.',
    icon: 'thumbs_up_down',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' // Comparison / Data Theme
  },
  {
    id: '05',
    title: 'Sifat va Kafolat',
    desc: 'Professional usta kelib ishingizni bitiradi. Ish yakunlangachgina xavfsiz toʻlov qilasiz va ustaga o\'z xolis reytingingizni qoldirasiz!',
    icon: 'stars',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800' // Satisfaction / Shake hands Theme
  }
];

const PromoVision = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-surface dark:bg-dark-surface/50 font-body transition-colors duration-300" id="promo">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-5 py-2.5 rounded-full mb-6 border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            BIZ QANDAY ISHLAYMIZ?
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-on-surface dark:text-dark-on-surface tracking-tight mb-6">
            UstaTech <span className="text-primary">Ekotizimi</span>
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant dark:text-dark-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Muammodan yechimgacha bo'lgan yo'lni vizual va interaktiv tarzda ko'rib chiqing. Biz jarayonni maksimal darajada osonlashtirdik.
          </p>
        </div>

        <div className="space-y-32">
          {storySteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              {/* Text Content Area */}
              <div className="flex-1 w-full text-center lg:text-left space-y-6">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                  <span className={`text-6xl md:text-8xl font-black ${step.color} opacity-40 dark:opacity-60 select-none tracking-tighter`}>
                    {step.id}
                  </span>
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${step.bg} flex items-center justify-center border border-white/10 shadow-sm`}>
                    <span className={`material-symbols-outlined text-3xl md:text-4xl ${step.color}`}>
                      {step.icon}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-on-surface dark:text-dark-on-surface">
                  {step.title}
                </h3>
                <p className="text-lg text-on-surface-variant dark:text-dark-on-surface-variant leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0">
                  {step.desc}
                </p>
                
                <div className="pt-2 flex justify-center lg:justify-start">
                   <div className="h-1.5 w-16 bg-primary/20 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className={`h-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                      />
                   </div>
                </div>
              </div>
              
              {/* Image Area */}
              <div className="flex-1 w-full max-w-md lg:max-w-none relative">
                <div className={`absolute inset-0 ${step.bg} blur-[60px] md:blur-[100px] rounded-full scale-110 opacity-30`} />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10 w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl glass-card border border-white/20 dark:border-white/5"
                >
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-[2rem]"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoVision;
