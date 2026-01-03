import React from 'react';

const FilterSection = () => (
  <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 max-w-4xl mx-auto px-4">
    <div className="relative flex-1">
      <select className="w-full bg-white border-2 border-[#0099DD] text-[#0099DD] px-5 py-3 rounded-lg font-bold text-xs outline-none appearance-none cursor-pointer hover:bg-blue-50 transition shadow-sm">
        <option>Semua Akademi</option>
        <option>Batch 1 (2022)</option>
        <option>Batch 2 (2023)</option>
      </select>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0099DD] pointer-events-none text-[8px]">▼</span>
    </div>

    <div className="relative flex-1">
      <select className="w-full bg-white border-2 border-[#0099DD] text-[#0099DD] px-5 py-3 rounded-lg font-bold text-xs outline-none appearance-none cursor-pointer hover:bg-blue-50 transition shadow-sm">
        <option>Semua Posisi</option>
        <option>Penyerang</option>
        <option>Gelandang</option>
        <option>Bertahan</option>
      </select>
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0099DD] pointer-events-none text-[8px]">▼</span>
    </div>
  </div>
);

export default FilterSection;