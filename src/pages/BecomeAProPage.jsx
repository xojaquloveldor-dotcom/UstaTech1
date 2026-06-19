import React from 'react';
import { motion } from 'framer-motion';

const BecomeAProPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-display-lg font-display-lg mb-4"
        >
          O'z daromadingizni <span className="text-primary-container">UstaTech</span> bilan oshiring
        </motion.h1>
        <p className="text-body-base text-outline-variant max-w-2xl mx-auto">
          Bizning platformaga qo'shiling va minglab mijozlarga o'z xizmatlaringizni taklif qiling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-headline-md font-bold mb-4">Nega aynan biz?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <p className="font-bold">Erkin grafik</p>
                  <p className="text-body-sm text-outline-variant">Qachon va qayerda ishlashni o'zingiz hal qilasiz.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <p className="font-bold">Ishonchli mijozlar</p>
                  <p className="text-body-sm text-outline-variant">Barcha buyurtmalar platforma orqali tekshiriladi.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <p className="font-bold">Tezkor to'lov</p>
                  <p className="text-body-sm text-outline-variant">Ishingiz uchun haqni kechiktirmasdan olasiz.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-card p-10 rounded-[2rem]">
          <h2 className="text-headline-md font-bold mb-8 text-center">Ro'yxatdan o'tish</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-label-md mb-2">To'liq ismingiz</label>
              <input type="text" className="w-full bg-white/5 border border-outline/30 rounded-xl p-4 focus:outline-none focus:border-primary-container" placeholder="Falonchi Pistonchiyev" />
            </div>
            <div>
              <label className="block text-label-md mb-2">Mutaxassisligingiz</label>
              <select className="w-full bg-white/5 border border-outline/30 rounded-xl p-4 focus:outline-none focus:border-primary-container text-white">
                <option value="plumbing" className="bg-background">Santexnik</option>
                <option value="electrical" className="bg-background">Elektrik</option>
                <option value="cleaning" className="bg-background">Tozalash bo'yicha usta</option>
                <option value="furniture" className="bg-background">Mebel ustasi</option>
              </select>
            </div>
            <div>
              <label className="block text-label-md mb-2">Telefon raqamingiz</label>
              <input type="tel" className="w-full bg-white/5 border border-outline/30 rounded-xl p-4 focus:outline-none focus:border-primary-container" placeholder="+998 90 123 45 67" />
            </div>
            <button className="w-full bg-primary-container text-white py-4 rounded-xl font-headline-md hover:scale-[1.02] transition-transform">
              Ariza yuborish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BecomeAProPage;
