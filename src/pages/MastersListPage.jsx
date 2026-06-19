import React from 'react';
import { Link } from 'react-router-dom';

const masters = [
  {
    id: 1,
    name: 'Rustam Qodirov',
    specialty: 'Electrician',
    rating: 4.9,
    reviews: 128,
    rate: 45,
    online: true,
    desc: 'Licensed master electrician with 10+ years experience in commercial and residential wiring, panel upgrades, and smart home installations.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY1ZQcGVGAqtmywWxNZdkEWdMaE1CyfLlSDWRZewjJMmWUoYatw0j_61LBTru5J8jTkssaCp8Zu-joeY4tsz_nyU6H7rxTI-03Fd3CG2AL6Bjmc1B-FaTR-_0WSoOhytHcFxjypDa-ZNFFYzkGjUSJHOVggvA8E8jBU5alqS26R6_K1dq957ymUYK0rDLrgSGSb8f4EGgvJmWlNW4S18cG7bIHOgc5Nq_OQVpfxHIRLG7gSJZZJByhoqtGkxfI-d5g4JRYf6G5gg'
  },
  {
    id: 2,
    name: 'Aziz Rahimov',
    specialty: 'Plumber',
    rating: 4.8,
    reviews: 95,
    rate: 40,
    online: true,
    desc: 'Specializing in emergency pipe repairs, water heater installation, and modern fixture fitting. Fast response times.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMXvOgkUzuWjJuAjRsgQRN-UIQTkxdABOGJq6KAR6aezZbMY3mCRpdSn188zXBWTLOA03IW-T_uOvyy3X7asqYoPLecyOiNXYylXlvslqMGndskeaqbkqcHGtzZHNI3pf2ONDG7LOMvmwn9l2jOyYlxZzUHEYAMneVYftXFg2BOS0KF5Wocx4gBdcUmI78fFVy1U0VZHhCEvZ1CFYwohb7n5AA7hW4Ne32dj2ZW5sABGsmBYyBL20qle6voHdZdHj48Ih4OjrEQ'
  },
  {
    id: 3,
    name: 'Dilshod Makhmudov',
    specialty: 'HVAC Tech',
    rating: 5.0,
    reviews: 42,
    rate: 60,
    online: false,
    desc: 'Expert in central air systems, ductless mini-splits, and smart thermostat integration. Certified Trane specialist.',
    img: null
  },
  {
    id: 4,
    name: 'Nilufar Usmanova',
    specialty: 'Carpenter',
    rating: 4.7,
    reviews: 210,
    rate: 35,
    online: true,
    desc: 'Custom cabinetry, furniture repair, and architectural woodworking. Detail-oriented professional with a workshop.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUPx4mzJ1Rgo3YBXK8TBL2j818K_VuvQYhO-MKXNc4qd7DM8Z4VGXJuCz5TeNBg3jDcw3G4kNQVw7V9tGGmswDepyOhifX-o-utJsl4ZHTqGxiifSPjcVTCio2BMW20bXg7RJwCNi77Qxn1m1BaLtLlf8jksZpOpq14QqwywHUfmFgWKCSv42MQfU_Ub0kCV4q3HwH10zLt4nUvhxuM7aQv-a3OMR1xEZ1NJWDAEd_dYBgj3jsy7iwpN8Vb9NEHWLaa3H2DveH9Q'
  }
];

const MastersListPage = () => {
  return (
    <main className="flex-grow pt-[88px] max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop w-full flex flex-col md:flex-row gap-lg pb-xl bg-surface dark:bg-dark-surface transition-colors duration-300">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
        <div className="glass-card p-6 rounded-2xl dark:bg-dark-surface-container shadow-sm border border-outline-variant/30 dark:border-dark-surface-highest">
          <h3 className="headline-md mb-6 dark:text-dark-on-surface text-lg">Filterlar</h3>
          <div className="mb-6">
            <label className="block label-md text-on-surface-variant dark:text-dark-on-surface-variant mb-4">Mutaxassislik</label>
            <div className="flex flex-col gap-3">
              {['Elektrik', 'Santexnik', 'Duradgor', 'HVAC tizmimi'].map((spec) => (
                <label key={spec} className="flex items-center gap-3 text-sm text-on-surface dark:text-dark-on-surface cursor-pointer group">
                  <input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4 transition-all" type="checkbox" />
                  <span className="group-hover:text-primary transition-colors">{spec}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <label className="block label-md text-on-surface-variant dark:text-dark-on-surface-variant mb-4">Soatbay narx</label>
            <input className="w-full h-1.5 bg-surface-container dark:bg-dark-surface-highest rounded-lg appearance-none cursor-pointer accent-primary dark:accent-dark-primary" max="150" min="10" type="range" defaultValue="50"/>
            <div className="flex justify-between mt-2 label-sm text-xs opacity-60">
              <span>$10</span>
              <span>$150+</span>
            </div>
          </div>
          <button className="w-full bg-surface-container dark:bg-dark-surface-highest text-on-surface dark:text-dark-on-surface font-semibold py-2.5 rounded-lg hover:opacity-80 transition-all">Filtrlarni tozalash</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <section className="flex-grow flex flex-col gap-8">
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
          <h1 className="headline-lg dark:text-dark-on-surface">Mavjud Ustalar</h1>
          <div className="flex items-center gap-3 pb-1">
            <span className="label-sm text-on-surface-variant dark:text-dark-on-surface-variant opacity-60">Saralash:</span>
            <select className="border-none bg-transparent font-semibold text-sm text-primary dark:text-dark-primary focus:ring-0 cursor-pointer">
              <option>Reyting bo'yicha</option>
              <option>Narx: Arzonroq</option>
              <option>Narx: Qimmatroq</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {masters.map((master) => (
            <div key={master.id} className="glass-card p-6 rounded-2xl flex flex-col hover:border-primary dark:hover:border-dark-primary transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-outline-variant/30 relative">
                  {master.img ? (
                    <img className="w-full h-full object-cover" src={master.img} alt={master.name} />
                  ) : (
                    <div className="w-full h-full bg-surface-container dark:bg-dark-surface-highest flex items-center justify-center text-outline font-bold">
                      {master.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  {master.online && <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-dark-surface" title="Online"></div>}
                </div>
                <div className="flex-grow">
                  <h2 className="font-bold text-lg text-on-surface dark:text-dark-on-surface leading-tight group-hover:text-primary transition-colors">{master.name}</h2>
                  <p className="label-sm text-on-surface-variant dark:text-dark-on-surface-variant mt-1">{master.specialty}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6 bg-surface-container/50 dark:bg-dark-surface-highest/50 p-2.5 rounded-xl border border-outline-variant/20">
                <div className="flex items-center gap-1.5 text-on-surface dark:text-dark-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span className="font-bold text-sm">{master.rating}</span>
                  <span className="text-xs opacity-60">({master.reviews})</span>
                </div>
                <div className="font-bold text-sm text-on-surface dark:text-dark-on-surface">
                  ${master.rate}<span className="text-xs font-normal opacity-60">/soat</span>
                </div>
              </div>
              <div className="mb-6 flex-grow">
                <p className="text-sm text-on-surface-variant dark:text-dark-on-surface-variant line-clamp-2 leading-relaxed">{master.desc}</p>
              </div>
              <Link className="w-full bg-primary dark:bg-dark-primary text-white dark:text-dark-surface font-semibold py-3 rounded-xl hover:shadow-lg transition-all text-center block active:scale-95" to="/create-order">Tanlash</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MastersListPage;
