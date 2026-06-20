import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-display-lg font-display-lg mb-2">
            {isLogin ? 'Xush kelibsiz' : 'Ro\'yxatdan o\'tish'}
          </h1>
          <p className="text-body-base text-outline-variant">
            {isLogin ? 'Akkauntingizga kiring' : 'UstaTech platformasiga qo\'shiling'}
          </p>
        </div>

        <div className="glass-card p-10 rounded-[2rem]">
          <form className="space-y-6">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <label className="block text-label-md mb-2">Ismingiz</label>
                <input type="text" className="w-full bg-white/5 border border-outline/30 rounded-xl p-4 focus:outline-none focus:border-primary-container" placeholder="Ismingizni kiriting" />
              </motion.div>
            )}
            <div>
              <label className="block text-label-md mb-2">Telefon raqam yoki Email</label>
              <input type="text" className="w-full bg-white/5 border border-outline/30 rounded-xl p-4 focus:outline-none focus:border-primary-container" placeholder="example@mail.com" />
            </div>
            <div>
              <label className="block text-label-md mb-2">Parol</label>
              <input type="password" className="w-full bg-white/5 border border-outline/30 rounded-xl p-4 focus:outline-none focus:border-primary-container" placeholder="••••••••" />
            </div>
            
            <button className="w-full bg-primary-container text-white py-4 rounded-xl font-headline-md hover:scale-[1.02] transition-transform">
              {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-outline/20 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-body-sm text-outline-variant hover:text-primary-container transition-colors"
            >
              {isLogin ? "Akkauntingiz yo'qmi? Ro'yxatdan o'tingsh" : "Akkauntingiz bormi? Kirish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
