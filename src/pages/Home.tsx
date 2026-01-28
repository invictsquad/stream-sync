import React, { useState } from 'react';
import { Radio, Gamepad2, Mic2, Music, Trophy, SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StreamCard } from '../components/StreamCard';
import { RankingSection } from '../components/RankingSection';
import { BrandLogo } from '../components/BrandLogo';
import Footer from '../components/Footer';

const CATEGORIES = [
  { name: 'Todos', icon: Radio },
  { name: 'Games', icon: Gamepad2 },
  { name: 'Conversa', icon: Mic2 },
  { name: 'Música', icon: Music },
  { name: 'Esportes', icon: Trophy },
];

const MOCK_LIVES = [
  { id: 1, streamer: 'Gaules', title: 'Major de CS2 - Clutch Live Diamond Stream', viewers: '185k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=gaules', isTrending: true },
  { id: 2, streamer: 'SmileyDev', title: 'Codando a Clutch Live Diamond com IA', viewers: '2.3k', category: 'Tecnologia', thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=dev' },
  { id: 3, streamer: 'Nobru', title: 'Final da Copa Free Fire - Exclusivo Clutch', viewers: '88k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=nobru', isTrending: true },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-6">
          <Link to="/">
            <BrandLogo size={28} textSize="text-2xl" />
          </Link>

          <div className="flex-1 max-w-xl relative group hidden md:block">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Pesquisar diamond streamers ou categorias..."
              className="w-full bg-secondary border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-6">
            <Link to="/login" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors italic">Login</Link>
            <Link to="/login" className="bg-primary hover:bg-primary-hover px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-glow-sm text-black italic">
              Começar Live
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        <section className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-xs font-black uppercase italic tracking-widest transition-all border-2 ${
                selectedCategory === cat.name 
                  ? 'bg-primary border-primary text-black shadow-glow-sm' 
                  : 'bg-secondary border-white/5 text-slate-500 hover:border-primary/30 hover:text-primary'
              }`}
            >
              <cat.icon size={16} />
              {cat.name}
            </button>
          ))}
        </section>

        <RankingSection />

        <section className="space-y-8 pb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            <h2 className="text-2xl font-black uppercase italic tracking-tighter">
              Destaques <span className="gradient-text">Clutch</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {MOCK_LIVES.map(live => (
              <StreamCard key={live.id} {...live} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}