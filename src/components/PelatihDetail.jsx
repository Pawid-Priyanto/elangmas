import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/index';
import { ChevronLeft, Trophy, Users, BookOpen, Star, Calendar, ShieldCheck } from 'lucide-react';

const CoachDetail = () => {
  const { id } = useParams();
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await api.get(`/pelatih/${id}`);
        setCoach(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center italic text-blue-600">Loading Coach Data...</div>;
  if (!coach) return <div className="text-center py-20 font-bold">Pelatih tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Banner - Gold/Blue Theme for Coaches */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 h-60 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1600')" }}></div>
        <h1 className="relative text-white text-3xl font-black uppercase tracking-widest">Profil Pelatih</h1>
        <Link to="/" className="absolute top-8 left-8 text-white flex items-center gap-2 hover:text-yellow-400 transition-colors">
          <ChevronLeft size={20} /> Kembali
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Info Teks */}
          <div className="p-8 md:p-12 flex-1">
            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {coach.lisensi || 'Certified Coach'}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-2 uppercase">{coach.nama}</h2>
            <p className="text-blue-600 font-bold mb-8">ELANG MAS ACADEMY COACHING STAFF</p>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-gray-100 pt-8">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Lisensi Saat Ini</p>
                <p className="font-bold text-gray-800">{coach.lisensi || '-'}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Status</p>
                <p className="font-bold text-green-600 flex items-center gap-1">
                  <ShieldCheck size={16} /> Aktif
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Spesialisasi</p>
                <p className="font-bold text-gray-800">Tactical & Youth Development</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">Klub</p>
                <p className="font-bold text-gray-800">SSB Elang Mas Academy</p>
              </div>
            </div>
          </div>

          {/* Foto Pelatih */}
          <div className="w-full md:w-1/3 bg-gray-200 aspect-[3/4]">
            <img 
              src={coach.foto_url || 'https://via.placeholder.com/600x800?text=Coach+Photo'} 
              alt={coach.nama}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistik / Pencapaian Pelatih */}
        <div className="mt-12">
          <h3 className="text-center text-2xl font-black text-gray-800 mb-8 uppercase">Key Coaching Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CoachStat icon={<Calendar className="text-blue-600" />} label="Pengalaman" value="5+ Thn" />
            <CoachStat icon={<Users className="text-green-600" />} label="Siswa Dibina" value="100+" />
            <CoachStat icon={<BookOpen className="text-purple-600" />} label="Program" value="Modern" />
            <CoachStat icon={<Star className="text-yellow-600" />} label="Rating" value="4.9/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const CoachStat = ({ icon, label, value }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:border-blue-200 hover:shadow-md">
    <div className="mb-3 p-3 bg-blue-50 rounded-xl">{icon}</div>
    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">{label}</p>
    <p className="text-xl font-black text-gray-800">{value}</p>
  </div>
);

export default CoachDetail;