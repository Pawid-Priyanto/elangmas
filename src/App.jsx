import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Instagram, Youtube, MapPin, ChevronDown } from 'lucide-react';
import logoElangMas from "./assets/logo/logo.png"
import Academy from "./components/AcademySection"
import JadwalSection from "./components/MatchSection"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import PlayerDetail from './components/PlayerDetail';
import PelatihDetail from './components/PelatihDetail'


// ========================================
// COMPONENT 1: Header Component
// ========================================
const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'TENTANG ELANG MAS', href: '#about' },
    { name: 'ACADEMY', href: '#academy' },
    // { name: 'ARTIKEL', href: '#articles' },
    { name: 'HUBUNGI KAMI', href: '#footer' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      // Jika sudah di Home, langsung scroll
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Jika di halaman Detail, pindah ke Home dulu dengan state
      navigate('/', { state: { scrollTo: targetId } });
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
         <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center space-x-3">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-transparant rounded-lg flex items-center justify-center shadow-lg">
              <img 
                src={logoElangMas} 
                alt="Logo Elang Mas"
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Krida Lowonah</span>
              </div>
              <h1 className="text-lg font-bold text-gray-800">Elang Mas Academy</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                // onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="#" className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-pink-600 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200 rounded-full hover:bg-gray-100">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a href="#" className="p-2 text-gray-600 hover:text-blue-600">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-pink-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-600 hover:text-red-600">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// ========================================
// COMPONENT 2: Hero Section Component
// ========================================
const HeroSection = () => {
  return (
    <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden" id="home">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1600&q=80')",
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
            PEMAIN KAMI
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 font-light">
            Membangun Generasi Pemain Sepak Bola Berkualitas
          </p>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};



// ========================================
// COMPONENT 5: About Section Component
// ========================================
const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Tentang Elang Mas Academy
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-base sm:text-lg">
              Elang Mas Academy adalah akademi sepak bola yang berfokus pada pengembangan talenta muda Pageralang dan Sekitarnya. Kami berkomitmen untuk membentuk pemain-pemain berkualitas dengan pendekatan profesional dan modern.
            </p>
            <p className="text-base sm:text-lg">
              Dengan fasilitas yang memadai dan pelatih berpengalaman, kami membimbing setiap pemain untuk mencapai potensi terbaik mereka baik dalam aspek teknik, taktik, fisik, maupun mental.
            </p>
            <p className="text-base sm:text-lg">
              Misi kami adalah melahirkan pemain-pemain sepak bola Pageralang dan sekitarnya yang dapat bersaing di tingkat nasional dan internasional, sekaligus menjadi kebanggaan daerah dan inspirasi bagi generasi muda Pageralang.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Pelatih Profesional</h3>
              <p className="text-sm text-gray-600">Dibimbing oleh pelatih bersertifikat dan berpengalaman</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Fasilitas Lengkap</h3>
              <p className="text-sm text-gray-600">Lapangan dan peralatan training yang memadai</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Program Terstruktur</h3>
              <p className="text-sm text-gray-600">Kurikulum training yang sistematis dan terukur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// ==================================
// Scrool TOP
// ==================================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const LandingPage = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const { state } = useLocation();

  useEffect(() => {
    // Cek apakah ada request scroll dari halaman lain
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        // Beri sedikit delay agar halaman render sempurna dulu
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Bersihkan state agar tidak scroll terus saat refresh
      window.history.replaceState({}, document.title);
    }
  }, [state]);

  return (
    <>
      <div id="home"><HeroSection /></div>
      <JadwalSection />
      <div id="academy"><Academy /></div>
      <div id="about"><AboutSection /></div>
    </>
  );
};


// ========================================
// MAIN APP COMPONENT
// ========================================
const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header tetap di luar Routes agar selalu muncul di semua halaman */}
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />

        <Routes>
          {/* Halaman Utama */}
          
          <Route path="/" element={
            <LandingPage 
              mobileMenuOpen={mobileMenuOpen} 
              setMobileMenuOpen={setMobileMenuOpen} 
            />
          } />

          {/* Halaman Detail Pemain & Pelatih - ID diambil secara dinamis */}
          <Route path="/pemain/:id" element={<PlayerDetail />} />
          <Route path="/pelatih/:id" element={<PelatihDetail />} />
        </Routes>

        {/* Footer tetap di luar agar selalu muncul */}
        <Footer/>
      </div>
    </Router>
  );
};


export default App;