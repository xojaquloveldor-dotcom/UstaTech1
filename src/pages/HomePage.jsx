import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import PromoVision from '../components/home/PromoVision';
import HowItWorks from '../components/home/HowItWorks';
import TechStack from '../components/home/TechStack';
import CTA from '../components/home/CTA';

const HomePage = () => {
  return (
    <div className="bg-surface dark:bg-dark-surface min-h-screen pt-16">
      <Hero />
      <div id="services">
        <Services />
      </div>
      <PromoVision />
      <HowItWorks />
      <TechStack />
      <CTA />
    </div>
  );
};

export default HomePage;
