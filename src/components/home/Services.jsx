import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Santexnika', 
    desc: 'Trubalar ta\'miri, smesitel o\'rnatish va kafel ishlari.', 
    icon: 'plumbing',
    color: 'bg-blue-500/10 text-blue-500'
  },
  { 
    title: 'Elektrika', 
    desc: 'Chiroqlar, rozetkalar va xavfsizlik tizimlari o\'rnatish.', 
    icon: 'bolt',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  { 
    title: 'Maishiy texnika', 
    desc: 'Xolodilnik va konditsionerlarni ta\'mirlash.', 
    icon: 'hvac',
    color: 'bg-green-500/10 text-green-500'
  },
  { 
    title: 'Ta\'mirlash', 
    desc: 'Uy va ofislar uchun kompleks ta\'mirlash xizmatlari.', 
    icon: 'handyman',
    color: 'bg-purple-500/10 text-purple-500'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-surface dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
        <h2 className="headline-lg text-on-surface dark:text-dark-on-surface">Bizning Xizmatlar</h2>
        <p className="body-lg text-on-surface-variant dark:text-dark-on-surface-variant mt-4 opacity-80">
          Malakali ustalarimiz uyingizdagi har qanday muammoni hal qilishga tayyor.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="glass-card p-10 rounded-3xl dark:bg-dark-surface-container border border-outline-variant/20 dark:border-dark-surface-highest transition-all group"
          >
            <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 border border-white/10`}>
              <span className="material-symbols-outlined text-4xl">{service.icon}</span>
            </div>
            <h3 className="headline-md text-on-surface dark:text-dark-on-surface mb-4">{service.title}</h3>
            <p className="text-on-surface-variant dark:text-dark-on-surface-variant text-sm leading-relaxed opacity-70">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
