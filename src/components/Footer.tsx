import React from 'react';
import { Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandLogo } from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <Link to="/">
              <BrandLogo size={24} textSize="text-xl" />
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs italic font-medium">
              "Lapidando o seu talento para brilhar na maior rede de transmissão de elite do mundo."
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 italic">Plataforma</h4>
            <ul className="space-y-4">
              <li><Link to="/dashboard" className="text-xs text-slate-400 hover:text-primary transition-colors font-black uppercase italic">Dashboard</Link></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors font-black uppercase italic">Leaderboard</a></li>
              <li><a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors font-black uppercase italic">Clutch Diamond</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 italic">Social</h4>
            <div className="flex gap-4">
              {['instagram', 'x', 'discord', 'github'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-2xl bg-secondary border border-white/5 flex items-center justify-center hover:border-primary transition-all group">
                  <img 
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social}.svg`} 
                    className="w-5 h-5 invert group-hover:brightness-50 transition-all" 
                    alt={social} 
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 italic">Newsletter</h4>
            <div className="relative">
              <input 
                type="text" 
                placeholder="E-mail diamond" 
                className="w-full bg-secondary border border-white/5 rounded-2xl py-4 px-5 text-xs focus:outline-none focus:border-primary transition-all text-white"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-600 text-[9px] uppercase font-black tracking-widest">
            © 2024 CLUTCH LIVE DIAMOND INC. PRECISION & LUXURY.
          </p>
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-700 italic">
            Developed in <Globe size={12} className="text-primary" /> Brasil <Heart size={12} className="text-primary fill-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;