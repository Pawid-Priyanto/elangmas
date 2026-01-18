// ========================================
// COMPONENT: Match Section (Jadwal Terbaru)
// ========================================
import {useState, useEffect} from "react";
import  api  from "../api/index"
import { Menu, X, Mail, Instagram, Youtube, MapPin, ChevronDown } from 'lucide-react';



const MatchSection = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await api.get('/jadwal', { params: { pageSize: 3 } });
        // Ambil data yang sukses dan filter hanya jadwal mendatang
        setMatches(response.data.data || []);
      } catch (err) {
        console.error("Gagal ambil jadwal:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  if (loading || matches.length === 0) return null;

  return (
    <section className="py-12 bg-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold border-l-4 border-yellow-400 pl-4">JADWAL PERTANDINGAN</h2>
          <span className="animate-pulse flex items-center text-sm text-yellow-400">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span> Next Match
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div key={match.id} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="text-xs font-bold text-yellow-400 mb-2 uppercase tracking-widest">
                {match.tipe_pertandingan || 'Friendly Match'}
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-center flex-1">
                  <p className="font-bold text-lg">ELANG MAS</p>
                </div>
                <div className="px-4 text-xl font-black text-yellow-400">VS</div>
                <div className="text-center flex-1">
                  <p className="font-bold text-lg uppercase">{match.lawan}</p>
                </div>
              </div>
              <div className="space-y-2 border-t border-white/10 pt-4 text-sm text-blue-100">
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-yellow-400" /> {match.lokasi}</p>
                <p className="flex items-center"><ChevronDown className="w-4 h-4 mr-2 text-yellow-400 rotate-[-90deg]" /> {new Date(match.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
    </section>
  );
};

export default MatchSection;