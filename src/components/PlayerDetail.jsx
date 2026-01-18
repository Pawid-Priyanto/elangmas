import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/index';
import { ChevronLeft, Timer, Target, Users, ShieldAlert, Award, Footprints, Loader2 } from 'lucide-react';

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await api.get(`/pemain/${id}`);
        setPlayer(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center italic text-blue-600"><Loader2/></div>;
  if (!player) return <div className="text-center py-20 font-bold">Pemain tidak ditemukan.</div>;

  // Hitung Umur
  const age = new Date().getFullYear() - new Date(player.tanggal_lahir).getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Banner */}
      <div className="bg-blue-900 h-60 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600')" }}></div>
        <h1 className="relative text-white text-3xl font-black uppercase tracking-widest">Detail Pemain</h1>
        <Link to="/academy" className="absolute top-8 left-8 text-white flex items-center gap-2 hover:text-yellow-400 transition-colors">
          <ChevronLeft size={20} /> Kembali
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Main Card Profil */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Info Teks */}
          <div className="p-8 md:p-12 flex-1">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              {player.posisi}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-2 uppercase">{player.nama}</h2>
            <p className="text-gray-500 font-bold mb-8">ELANG MAS ACADEMY</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 border-t border-gray-100 pt-8">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Tanggal Lahir</p>
                <p className="font-bold text-gray-800">{new Date(player.tanggal_lahir).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Umur</p>
                <p className="font-bold text-gray-800">{age} Tahun</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Kewarganegaraan</p>
                <p className="font-bold text-gray-800 flex items-center gap-2">🇮🇩 Indonesia</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Menit Bermain</p>
                <p className="font-bold text-gray-800">{player.minutes_play || 0} Menit</p>
              </div>
            </div>
          </div>

          {/* Foto Pemain */}
          <div className="w-full md:w-1/3 bg-gray-200 aspect-[3/4]">
            <img 
              src={player.foto_url || 'https://via.placeholder.com/600x800?text=Player+Photo'} 
              alt={player.nama}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistik Section */}
        <div className="mt-12">
          <h3 className="text-center text-2xl font-black text-gray-800 mb-8 uppercase">Statistik Pemain</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatBox icon={<Timer className="text-blue-600" />} label="Menit Main" value={player.minutes_play || 0} />
            <StatBox icon={<Target className="text-green-600" />} label="Goals" value="-" />
            <StatBox icon={<Users className="text-purple-600" />} label="Assists" value="-" />
            <StatBox icon={<ShieldAlert className="text-yellow-600" />} label="Clean Sheets" value="-" />
            <StatBox icon={<Award className="text-orange-600" />} label="Kartu Kuning" value="0" />
            <StatBox icon={<Footprints className="text-red-600" />} label="Kartu Merah" value="0" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-komponen untuk kotak statistik
const StatBox = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-105">
    <div className="mb-3 p-3 bg-gray-50 rounded-full">{icon}</div>
    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter mb-1">{label}</p>
    <p className="text-2xl font-black text-gray-800">{value}</p>
  </div>
);

export default PlayerDetail;