import { useState, useEffect } from "react";
import api from "../api/index";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Link } from 'react-router-dom';

const AcademySection = () => {
  const [activeTab, setActiveTab] = useState('pemain');
  const [players, setPlayers] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Filter & Pagination States
  const [selectedAcademy, setSelectedAcademy] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPemain = async () => {
    setLoading(true);
    try {
      const response = await api.get('/pemain', {
        params: {
          akademi: selectedAcademy,
          posisi: selectedPosition,
          page: currentPage,
          pageSize: 12 // Kita gunakan 12 agar rata di grid 2, 3, atau 4 kolom
        }
      });
      setPlayers(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPelatih = async () => {
    setLoading(true);
    try {
      const response = await api.get('/pelatih');
      setCoaches(response.data.data || []);
      // Jika pelatih tidak banyak, pagination bisa diabaikan atau disesuaikan
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Reset page ke 1 jika filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedAcademy, selectedPosition, activeTab]);

  useEffect(() => {
    if (activeTab === 'pemain') fetchPemain();
    else fetchPelatih();
  }, [activeTab, selectedAcademy, selectedPosition, currentPage]);

  return (
    <section className="py-16 bg-gray-50" id="academy">
      <div className="container mx-auto px-4">
        
        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 inline-flex">
            {['pemain', 'coach'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-2.5 rounded-lg font-bold transition-all uppercase text-sm ${
                  activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Filters for Pemain */}
        {activeTab === 'pemain' && (
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-12">
            <select
              value={selectedAcademy}
              onChange={(e) => setSelectedAcademy(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-600 outline-none font-semibold text-blue-900"
            >
              <option value="">Semua Akademi (Umur)</option>
              <option value="U-10">U-10 Academy</option>
              <option value="U-12">U-12 Academy</option>
              <option value="U-14">U-14 Academy</option>
              <option value="U-16">U-16 Academy</option>
            </select>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-600 outline-none font-semibold text-blue-900"
            >
              <option value="">Semua Posisi</option>
              <option value="Kiper">Goalkeeper</option>
              <option value="Bek">Defender</option>
              <option value="Gelandang">Midfielder</option>
              <option value="Penyerang">Forward</option>
            </select>
          </div>
        )}

        {/* Content Area - Added justify-items-center to center cards */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-blue-600">
            <Loader2 className="w-10 h-10 animate-spin mb-2" />
            <p className="font-medium">Memuat data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {activeTab === 'pemain' ? (
              players.map((p) => (
                <Link key={p.id} to={`/pemain/${p.id}`} className="group">
                <div key={p.id} className="w-full max-w-[280px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={p.foto_url || 'https://via.placeholder.com/400x500?text=No+Photo'} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      alt={p.nama}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-800 uppercase text-sm truncate">{p.nama}</h3>
                    <p className="text-xs text-blue-600 font-bold mt-1 uppercase">{p.posisi}</p>
                  </div>
                </div>
                </Link>
              ))
            ) : (
              coaches.map((c) => (
                 <Link key={c.id} to={`/pelatih/${c.id}`} className="group">
                <div key={c.id} className="w-full max-w-[280px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={c.foto_url || 'https://via.placeholder.com/400x500?text=Coach'} 
                      className="w-full h-full object-cover" 
                      alt={c.nama}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-800 uppercase text-sm">{c.nama}</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase">{c.lisensi}</p>
                  </div>
                </div>
                </Link>
              ))
            )}
          </div>
        )}

        {/* Pagination - Show only for Pemain and if totalPages > 1 */}
        {activeTab === 'pemain' && totalPages > 1 && !loading && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-600 transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-700">Halaman</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-bold shadow-md">
                {currentPage}
              </span>
              <span className="text-sm font-bold text-gray-700">dari {totalPages}</span>
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-600 transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AcademySection;