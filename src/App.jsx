import React, { useState } from 'react';
import { Menu, X, Mail, Instagram, Youtube, MapPin, ChevronDown } from 'lucide-react';
import logoElangMas from "./assets/logo/logo.png"

// ========================================
// COMPONENT 1: Header Component
// ========================================
const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'TENTANG ELANG MAS', href: '#about', dropdown: true },
    { name: 'ACADEMY', href: '#academy', dropdown: true },
    { name: 'ARTIKEL', href: '#articles' },
    { name: 'HUBUNGI KAMI', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
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
// COMPONENT 3: Players Filter Component
// ========================================
const PlayersFilter = ({ selectedAcademy, setSelectedAcademy, selectedPosition, setSelectedPosition }) => {
  const academyOptions = [
    'U-10 Academy',
    'U-12 Academy',
    'U-14 Academy',
    'U-16 Academy',
    'U-18 Academy',
  ];

  const positionOptions = [
    'Goalkeeper',
    'Defender',
    'Midfielder',
    'Forward',
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto px-4">
      <div className="flex-1">
        <select
          value={selectedAcademy}
          onChange={(e) => setSelectedAcademy(e.target.value)}
          className="w-full px-5 py-4 bg-white border-2 border-blue-500 rounded-lg text-blue-600 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
        >
          <option value="">Semua Akademi</option>
          {academyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="w-full px-5 py-4 bg-white border-2 border-blue-500 rounded-lg text-blue-600 font-semibold text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-600 transition-all cursor-pointer shadow-sm hover:shadow-md"
        >
          <option value="">Semua Posisi</option>
          {positionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// ========================================
// COMPONENT 4: Players Section Component
// ========================================
// const PlayersSection = ({ selectedAcademy, setSelectedAcademy, selectedPosition, setSelectedPosition }) => {
//   return (
//     <section className="py-16 sm:py-20 bg-white" id="academy">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <p className="text-gray-500 text-sm sm:text-base uppercase tracking-widest mb-3 font-semibold">
//             Elang Mas Academy
//           </p>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-8">
//             PEMAIN KAMI
//           </h2>
//         </div>

//         {/* Filter Dropdowns */}
//         <div className="mb-12">
//           <PlayersFilter 
//             selectedAcademy={selectedAcademy}
//             setSelectedAcademy={setSelectedAcademy}
//             selectedPosition={selectedPosition}
//             setSelectedPosition={setSelectedPosition}
//           />
//         </div>

//         {/* No Players Message */}
//         <div className="text-center py-16">
//           <div className="inline-block p-8 sm:p-12 bg-gray-50 rounded-2xl shadow-lg">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//               </svg>
//             </div>
//             <p className="text-xl sm:text-2xl text-gray-700 font-bold mb-2">
//               Player tidak ditemukan
//             </p>
//             <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
//               Silakan coba filter lain atau hubungi kami untuk informasi lebih lanjut tentang pemain kami
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// ========================================

// COMPONENT 3: Player Card Component

// ========================================

const PlayerCard = ({ player }) => {

  return (

    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">

      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">

        <img 

          src={player.image} 

          alt={player.name}

          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"

        />

      </div>

      <div className="p-4 text-center">

        <h3 className="font-bold text-gray-900 text-lg mb-1">{player.name}</h3>

        <p className="text-sm text-gray-600">{player.academy}</p>

      </div>

    </div>

  );

};



// ========================================

// COMPONENT 4: Coach Card Component

// ========================================

const CoachCard = ({ coach }) => {

  return (

    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">

      <div className="aspect-[3/4] bg-gray-100 overflow-hidden">

        <img 

          src={coach.image} 

          alt={coach.name}

          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"

        />

      </div>

      <div className="p-4 text-center">

        <h3 className="font-bold text-gray-900 text-lg mb-1">{coach.name}</h3>

        <p className="text-sm text-gray-600 mb-1">{coach.position}</p>

        <p className="text-xs text-gray-500">{coach.license}</p>

      </div>

    </div>

  );

};



// ========================================

// COMPONENT 5: Academy Section Component

// ========================================

const AcademySection = () => {

  const [activeTab, setActiveTab] = useState('pemain');

  const [selectedAcademy, setSelectedAcademy] = useState('');

  const [selectedPosition, setSelectedPosition] = useState('');



  const academyOptions = [

    'Semua Akademi',

    'U-10 Academy',

    'U-12 Academy',

    'U-14 Academy',

    'U-16 Academy',

    'U-18 Academy',

  ];



  const positionOptions = [

    'Goal Keeper',

    'Defender',

    'Midfielder',

    'Forward',

  ];



  // Sample Players Data

  const players = [

    {

      id: 1,

      name: 'PEREZ VALENTINO IMANUEL',

      academy: 'ELANG MASCENDERAWASIH 2009',

      image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=80',

    },

    {

      id: 2,

      name: 'ALESANDRO BERNARD A',

      academy: 'ELANG MASCENDERAWASIH 2009',

      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',

    },

    {

      id: 3,

      name: 'RAUL DAVID JAMES ALVARO',

      academy: 'ELANG MASCENDERAWASIH 2009',

      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',

    },

    {

      id: 4,

      name: 'ALEXANDRO DANIELLO',

      academy: 'ELANG MASKAKATUA 2010',

      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80',

    },

    {

      id: 5,

      name: 'MICHAEL JORDAN',

      academy: 'ELANG MASCENDERAWASIH 2009',

      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80',

    },

    {

      id: 6,

      name: 'RAFAEL SANTOS',

      academy: 'ELANG MASKAKATUA 2010',

      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80',

    },

    {

      id: 7,

      name: 'DIEGO MARTINEZ',

      academy: 'ELANG MASCENDERAWASIH 2009',

      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',

    },

    {

      id: 8,

      name: 'LUCAS FERNANDEZ',

      academy: 'ELANG MASKAKATUA 2010',

      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&q=80',

    },

  ];



  // Sample Coaches Data

  const coaches = [

    {

      id: 1,

      name: 'JOHN ANDERSON',

      position: 'Head Coach',

      license: 'UEFA Pro License',

      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',

    },

    {

      id: 2,

      name: 'ROBERT WILLIAMS',

      position: 'Assistant Coach',

      license: 'AFC A License',

      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',

    },

    {

      id: 3,

      name: 'DAVID MARTINEZ',

      position: 'Goalkeeper Coach',

      license: 'AFC B License',

      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',

    },

    {

      id: 4,

      name: 'JAMES TAYLOR',

      position: 'Fitness Coach',

      license: 'Certified Fitness Trainer',

      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',

    },

  ];



  return (

    <section className="py-16 bg-gray-50" id="academy">

      <div className="container mx-auto px-4">

        

        {/* Tabs */}

        <div className="flex justify-center mb-8">

          <div className="bg-white rounded-lg shadow-md p-1 inline-flex">

            <button

              onClick={() => setActiveTab('pemain')}

              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${

                activeTab === 'pemain'

                  ? 'bg-blue-600 text-white'

                  : 'text-gray-600 hover:text-blue-600'

              }`}

            >

              Pemain

            </button>

            <button

              onClick={() => setActiveTab('coach')}

              className={`px-8 py-3 rounded-md font-semibold transition-all duration-200 ${

                activeTab === 'coach'

                  ? 'bg-blue-600 text-white'

                  : 'text-gray-600 hover:text-blue-600'

              }`}

            >

              Coach

            </button>

          </div>

        </div>



        {/* Filters - Only show for Pemain tab */}

        {activeTab === 'pemain' && (

          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-12">

            <select

              value={selectedAcademy}

              onChange={(e) => setSelectedAcademy(e.target.value)}

              className="flex-1 px-5 py-3 bg-white border-2 border-blue-500 rounded-lg text-blue-600 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer shadow-sm hover:shadow-md transition-all"

            >

              {academyOptions.map((option) => (

                <option key={option} value={option}>

                  {option}

                </option>

              ))}

            </select>

            

            <select

              value={selectedPosition}

              onChange={(e) => setSelectedPosition(e.target.value)}

              className="flex-1 px-5 py-3 bg-white border-2 border-blue-500 rounded-lg text-blue-600 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer shadow-sm hover:shadow-md transition-all"

            >

              <option value="">Semua Posisi</option>

              {positionOptions.map((option) => (

                <option key={option} value={option}>

                  {option}

                </option>

              ))}

            </select>

          </div>

        )}



        {/* Content */}

        {activeTab === 'pemain' ? (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

            {players.map((player) => (

              <PlayerCard key={player.id} player={player} />

            ))}

          </div>

        ) : (

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">

            {coaches.map((coach) => (

              <CoachCard key={coach.id} coach={coach} />

            ))}

          </div>

        )}

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

// ========================================
// COMPONENT 6: Footer Component
// ========================================
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-transparant rounded-lg flex items-center justify-center">
              <img 
                src={logoElangMas} 
                alt="Logo Elang Mas"
                className="w-full h-full object-contain" 
              />
              </div>
              <h3 className="text-xl font-bold">Elang Mas Academy</h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Membangun generasi pemain sepak bola Pageralang yang berkualitas dan berprestasi di tingkat lokal, nasional maupun internasional.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <div className="space-y-3 text-blue-200 text-sm">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Krida Lowonah Pageralang, Banyumas, Jawa Tengah</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>info@elangmasfootballacademy.com</span>
              </p>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
            <p className="text-blue-200 text-sm mb-4">
              Dapatkan update terbaru tentang aktivitas dan prestasi pemain kami
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-6 mt-6">
          <p className="text-center text-blue-300 text-sm">
            &copy; 2026 Elang Mas Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// ========================================
// MAIN APP COMPONENT
// ========================================
const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAcademy, setSelectedAcademy] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <HeroSection />
      <AcademySection />

      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;