import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 px-container-margin">
      <div className="max-w-4xl mx-auto glass-card p-12 rounded-[2rem] text-center relative overflow-hidden">
        <h2 className="text-display-lg font-display-lg mb-6 relative z-10">Bugunoq usta bo'ling yoki xizmatdan foydalaning</h2>
        <p className="text-body-base text-outline-variant mb-10 relative z-10">Biz bilan o'z daromadingizni oshiring yoki uyingizni obod qiling.</p>
        <div className="flex flex-wrap justify-center gap-stack-lg relative z-10">
          <Link className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-headline-md text-headline-md hover:scale-105 transition-transform text-center" to="/create-order">
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
