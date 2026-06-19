import React from 'react';
import { motion } from 'framer-motion';

const orders = [
  { id: 1, service: 'Santexnika', date: '20.06.2024', status: 'Jarayonda', price: '150,000 so\'m', usta: 'Jasurbek O.' },
  { id: 2, service: 'Elektr', date: '18.06.2024', status: 'Bajarildi', price: '80,000 so\'m', usta: 'Alijon T.' },
];

const MyOrdersPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-display-lg font-display-lg">Mening buyurtmalarim</h1>
        <button className="bg-primary/20 text-primary-fixed-dim px-6 py-2 rounded-full font-label-md">
          Hammasi (2)
        </button>
      </div>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div 
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-primary-container">
                  {order.service === 'Santexnika' ? 'plumbing' : 'electrical_services'}
                </span>
              </div>
              <div>
                <p className="text-headline-md font-bold">{order.service}</p>
                <p className="text-body-sm text-outline-variant">{order.date}</p>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end">
              <p className="text-headline-md font-bold text-primary-container">{order.price}</p>
              <p className="text-body-sm text-outline-variant">Usta: {order.usta}</p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className={`px-4 py-1 rounded-full text-label-md font-bold ${
                order.status === 'Jarayonda' ? 'bg-primary/20 text-primary-container' : 'bg-secondary/20 text-secondary'
              }`}>
                {order.status}
              </span>
              <button className="material-symbols-outlined text-outline-variant hover:text-white transition-colors">
                more_vert
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">history</span>
          <p className="text-body-base text-outline-variant">Hozircha buyurtmalar yo'q.</p>
        </div>
      )}
    </div>
  );
};

export default MyOrdersPage;
