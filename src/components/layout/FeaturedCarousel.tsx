import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FEATURED = [
  { id: 1, name: "Gaules", title: "Major CS2 - Final", image: "https://placehold.co/800x450/1a1a1a/FFF?text=Gaules+Live", tags: ["CS2", "FPS", "Pro"] },
  { id: 2, name: "Cellbit", title: "Enigma do Medo RPG", image: "https://placehold.co/800x450/2a2a2a/FFF?text=Cellbit+RPG", tags: ["RPG", "Terror"] },
  { id: 3, name: "Alanzoka", title: "Jogando Lançamentos", image: "https://placehold.co/800x450/3a3a3a/FFF?text=Alanzoka", tags: ["Variety", "Funny"] },
];

export function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4"
      >
        {FEATURED.map((stream) => (
           <div key={stream.id} className="min-w-[85vw] md:min-w-[600px] snap-center relative rounded-3xl overflow-hidden aspect-video border border-white/5 shadow-2xl">
              <img src={stream.image} alt={stream.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end items-start">
                 <div className="flex gap-2 mb-3">
                    {stream.tags.map(tag => (
                       <span key={tag} className="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider backdrop-blur-md">{tag}</span>
                    ))}
                 </div>
                 <h2 className="text-2xl md:text-4xl font-black italic uppercase text-white mb-2 leading-none">{stream.title}</h2>
                 <p className="text-slate-300 font-bold mb-6">Transmitido por <span className="text-primary">{stream.name}</span></p>
                 <Link to={`/watch/${stream.id}`}>
                    <Button className="btn-gold h-12 px-8 rounded-xl font-black uppercase tracking-widest hover:scale-105 transition-transform">
                       <Play fill="black" className="mr-2" /> Assistir Agora
                    </Button>
                 </Link>
              </div>
           </div>
        ))}
      </div>

      <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-primary hover:text-black">
         <ChevronLeft />
      </button>
      <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-primary hover:text-black">
         <ChevronRight />
      </button>
    </div>
  );
}
