import React from 'react';

const CreateOrderPage = () => {
  return (
    <main className="flex-grow pt-32 pb-xl px-gutter max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-lg relative font-body bg-surface dark:bg-dark-surface transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 dark:bg-dark-primary/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 dark:bg-dark-secondary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
      </div>

      {/* Left Column: Form & Map */}
      <div className="lg:col-span-8 z-10 flex flex-col gap-lg">
        {/* Page Title */}
        <div className="mb-md">
          <h1 className="display-lg text-on-surface dark:text-dark-on-surface mb-sm">Yangi Buyurtma</h1>
          <p className="body-lg text-on-surface-variant dark:text-dark-on-surface-variant">Muammoni batafsil ta'riflang va mutaxassis chaqiring.</p>
        </div>

        {/* Order Form Card */}
        <div className="glass-card rounded-[1.5rem] p-lg glow-primary border-outline-variant/30 dark:border-dark-surface-highest">
          <form className="flex flex-col gap-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="label-md text-on-surface-variant dark:text-dark-on-surface-variant text-xs">Xizmat Turi</label>
                <select className="bg-surface-lowest dark:bg-dark-surface-highest border border-outline-variant/30 dark:border-transparent text-on-surface dark:text-dark-on-surface rounded-lg p-sm focus:border-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-primary h-12 outline-none">
                  <option>Santexnika</option>
                  <option>Elektrika</option>
                  <option>Tozalash</option>
                  <option>Ta'mirlash</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="label-md text-on-surface-variant dark:text-dark-on-surface-variant text-xs">Shoshilinchlik</label>
                <select className="bg-surface-lowest dark:bg-dark-surface-highest border border-outline-variant/30 dark:border-transparent text-on-surface dark:text-dark-on-surface rounded-lg p-sm focus:border-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-primary h-12 outline-none">
                  <option>Darhol (1-2 soat)</option>
                  <option>Bugun</option>
                  <option>Ertaga</option>
                  <option>Kelishilgan vaqtda</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <label className="label-md text-on-surface-variant dark:text-dark-on-surface-variant text-xs">Muammo ta'rifi</label>
              <textarea className="bg-surface-lowest dark:bg-dark-surface-highest border border-outline-variant/30 dark:border-transparent text-on-surface dark:text-dark-on-surface rounded-lg p-sm focus:border-primary dark:focus:border-dark-primary focus:ring-1 focus:ring-primary h-32 resize-none outline-none" placeholder="Muammoni batafsil yozing..."></textarea>
            </div>

            {/* Map Integration Area */}
            <div className="flex flex-col gap-xs mt-sm">
              <label className="label-md text-on-surface-variant dark:text-dark-on-surface-variant text-xs flex justify-between">
                <span>Manzil</span>
                <span className="text-primary dark:text-dark-primary cursor-pointer hover:underline">Xaritadan tanlash</span>
              </label>
              <div className="h-48 rounded-xl overflow-hidden border border-outline-variant/30 dark:border-dark-surface-highest relative">
                <img className="w-full h-full object-cover dark:opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfjYPAZteB4HmnxgxMekDvKDH36Sp6K5tDFOpEn9xM0jIZKPhmMirS-UsDhXl9YY_j8mwTwDH6YDJW9rBUXE36D3Op7dQnXFd_WnFjsBKJa8W-daM0fUkfmzIQsoTRtxE4HObSn5KyYy0Tedptb6HVLl7iBRXIRRzVF0heUQcviDD4k84l_JzOQk4eWmWbC9F2T6lE8XWqRLs4cmwNEr-KuzNySqBVTNbKgCixpB5KFrTwC2cCRongixJMZhaGbjoDrM9gCdA-9Q" alt="Map" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 dark:from-dark-surface to-transparent flex items-end p-sm">
                  <div className="flex items-center gap-xs glass-card px-3 py-1.5 rounded-full text-on-surface dark:text-dark-on-surface text-sm font-medium shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary dark:text-dark-primary">location_on</span>
                    Chilonzor tumani, Muqimiy ko'chasi, 42-uy
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-md flex justify-end">
              <button type="button" className="bg-primary dark:bg-dark-primary-container text-white dark:text-dark-surface font-bold px-12 py-3 rounded-xl hover:opacity-90 shadow-lg glow-primary active:scale-95 transition-all">
                Buyurtma berish
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column: Status & Sidebar */}
      <div className="lg:col-span-4 z-10 flex flex-col gap-lg">
        {/* Real-time Status Tracker */}
        <div className="glass-card rounded-xl p-md shadow-lg border border-outline-variant/20 dark:border-dark-surface-highest">
          <div className="flex justify-between items-center mb-md border-b border-outline-variant/10 pb-sm">
            <h3 className="headline-md text-on-surface dark:text-dark-on-surface text-base">Joriy Holat</h3>
            <div className="flex items-center gap-xs">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-500 label-md text-[10px] tracking-widest">LIVE</span>
            </div>
          </div>
          <div className="flex flex-col gap-md relative">
            <div className="absolute left-[11px] top-2 bottom-6 w-0.5 bg-outline-variant/20"></div>
            
            <div className="flex gap-md relative">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center z-10 ring-4 ring-surface dark:ring-dark-surface-highest">
                <span className="material-symbols-outlined text-[14px] text-white">check</span>
              </div>
              <div className="flex flex-col pb-sm">
                <span className="text-on-surface dark:text-dark-on-surface font-medium">Buyurtma qabul qilindi</span>
                <span className="text-xs text-on-surface-variant dark:text-dark-on-surface-variant opacity-60">10:42</span>
              </div>
            </div>
            
            <div className="flex gap-md relative">
              <div className="w-6 h-6 rounded-full bg-primary dark:bg-dark-primary flex items-center justify-center z-10 ring-4 ring-surface dark:ring-dark-surface-highest shadow-lg glow-primary">
                <span className="material-symbols-outlined text-[14px] text-white">sync</span>
              </div>
              <div className="flex flex-col pb-sm">
                <span className="text-primary dark:text-dark-primary font-bold">Usta qidirilmoqda...</span>
                <span className="text-xs text-on-surface-variant dark:text-dark-on-surface-variant opacity-60">Tizim mos mutaxassislarni izlamoqda</span>
              </div>
            </div>
          </div>
        </div>

        {/* Active Requests Sidebar */}
        <div className="glass-card rounded-xl p-md shadow-lg flex-grow border border-outline-variant/20 dark:border-dark-surface-highest">
          <h3 className="headline-md text-on-surface dark:text-dark-on-surface mb-md text-base uppercase tracking-tighter">Faol Buyurtmalar</h3>
          <div className="flex flex-col gap-sm">
            <div className="bg-surface-container/30 dark:bg-dark-surface-highest p-4 rounded-xl border border-outline-variant/10 hover:border-primary transition-all group cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-on-surface dark:text-dark-on-surface group-hover:text-primary transition-colors">Santexnika ta'miri</span>
                <span className="text-amber-500 dark:text-dark-secondary label-md text-[10px]">KUTILMOQDA</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant dark:text-dark-on-surface-variant text-xs opacity-70">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                Bugun, 14:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateOrderPage;
