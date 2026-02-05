import React from 'react';
import { Gamepad2, Mic2, Music, Coffee, Code2, Trophy } from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { id: 1, name: "Games", icon: Gamepad2, color: "text-purple-400", bg: "bg-purple-500/10", count: "12.5K" },
  { id: 2, name: "Just Chatting", icon: Coffee, color: "text-emerald-400", bg: "bg-emerald-500/10", count: "8.2K" },
  { id: 3, name: "Música", icon: Music, color: "text-pink-400", bg: "bg-pink-500/10", count: "3.1K" },
  { id: 4, name: "Esports", icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-500/10", count: "150K" },
  { id: 5, name: "Tecnologia", icon: Code2, color: "text-blue-400", bg: "bg-blue-500/10", count: "1.2K" },
  { id: 6, name: "Podcast", icon: Mic2, color: "text-orange-400", bg: "bg-orange-500/10", count: "500" },
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
       <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
         <h1 className="text-2xl md:text-4xl font-black italic uppercase text-white mb-8">Navegar por <span className="text-primary">Categorias</span></h1>

         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((cat) => (
               <div key={cat.id} className={`${cat.bg} border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform cursor-pointer group`}>
                  <div className={`p-4 rounded-2xl bg-black/20 ${cat.color} group-hover:scale-110 transition-transform`}>
                     <cat.icon size={32} />
                  </div>
                  <div className="text-center">
                     <h3 className="font-black uppercase italic text-white">{cat.name}</h3>
                     <p className="text-[10px] text-slate-400 font-bold">{cat.count} viewers</p>
                  </div>
               </div>
            ))}
         </div>
      </main>
    </div>
  );
}
