import React from 'react';
import { Users, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StreamCardProps {
  id: number;
  streamer: string;
  title: string;
  viewers: string;
  category: string;
  thumbnail: string;
  avatar: string;
  isTrending?: boolean;
}

export const StreamCard = ({ id, streamer, title, viewers, category, thumbnail, avatar, isTrending }: StreamCardProps) => {
  return (
    <Link to={`/watch/${id}`} className="group cursor-pointer space-y-4 block">
      <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border-2 border-transparent group-hover:border-primary/50 transition-all shadow-2xl">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="bg-primary text-black text-[10px] font-black px-3 py-1 rounded-full uppercase flex items-center gap-1.5 shadow-glow-sm italic">
            <Zap size={10} fill="black" /> Ao Vivo
          </div>
          {isTrending && (
            <div className="bg-black/60 backdrop-blur-md text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase border border-primary/20 italic">
              Trending
            </div>
          )}
        </div>
        
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-2 border border-white/10 italic">
          <Users size={12} className="text-primary" /> {viewers}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-primary p-4 rounded-full shadow-glow transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play size={32} fill="black" className="ml-1" />
          </div>
        </div>
      </div>

      <div className="flex gap-4 px-2">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 rounded-2xl border-2 border-primary/30 p-0.5 bg-slate-900 overflow-hidden group-hover:border-primary transition-colors">
            <img src={avatar} className="w-full h-full object-cover" alt={streamer} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-black text-sm text-slate-100 truncate group-hover:text-primary transition-colors uppercase italic tracking-tight leading-none mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{streamer}</p>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <p className="text-[10px] font-black text-primary uppercase italic tracking-tighter">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};