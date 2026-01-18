// ========================================
// COMPONENT 6: Footer Component
// ========================================
import React from "react";
import logoElangMas from "../assets/logo/logo.png"
import { Mail, Instagram, Youtube, MapPin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-12 pb-6" id="footer">
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

export default Footer