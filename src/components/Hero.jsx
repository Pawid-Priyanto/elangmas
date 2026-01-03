import React from 'react';

const Hero = () => (
  <section className="relative h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
    <div className="absolute inset-0 bg-black/40 z-10" />
    <img 
      src="https://papuafootballacademy.com/wp-content/uploads/2022/08/header-pemain.jpg" 
      className="absolute inset-0 w-full h-full object-cover"
      alt="Hero Background"
    />
    <h2 className="relative z-20 text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter drop-shadow-2xl">
      PEMAIN KAMI
    </h2>
  </section>
);

export default Hero;