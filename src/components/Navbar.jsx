import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 shadow-md font-sans">
      {/* Top Bar - Putih */}
      <div className="bg-white py-2 px-6 md:px-20 flex justify-between items-center text-[10px] md:text-[11px] font-bold text-gray-500 border-b border-gray-100">
        <div className="flex items-center gap-2 uppercase tracking-widest">
          <span className="text-blue-500">📍</span> Krida Lowonah
        </div>
        <div className="flex gap-4 items-center">
          <span className="cursor-pointer hover:text-blue-500">✉️</span>
          <span className="cursor-pointer hover:text-blue-500">📸</span>
          <span className="cursor-pointer hover:text-blue-500">🎥</span>
        </div>
      </div>

      {/* Main Bar - Biru */}
      <div className="bg-[#0099DD] text-white px-6 md:px-20 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full p-1.5 shadow-md">
            <img 
              src="https://papuafootballacademy.com/wp-content/uploads/2022/07/logo-pfa.png" 
              alt="Logo PFA" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="font-black uppercase tracking-tighter text-base md:text-xl italic">
            Elang Mas Academy
          </h1>
        </div>

        <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-black transition">Home</a>
          <div className="group relative cursor-pointer flex items-center gap-1">
            <span>Tentang PFA ▾</span>
          </div>
          <div className="relative cursor-pointer flex items-center gap-1 border-b-2 border-white pb-1">
            <span>Academy ▾</span>
          </div>
          <a href="#" className="hover:text-black transition">Artikel</a>
          <a href="#" className="hover:text-black transition">Hubungi Kami</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;