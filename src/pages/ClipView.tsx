import React from 'react';
import { Play, Share2, Heart, User, MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useParams } from 'react-router-dom';

export default function ClipView() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
       <Link to="/" className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
          <X size={32} />
       </Link>

       <div className="w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">
          {/* Player Area */}
          <div className="flex-1 bg-black relative group aspect-video md:aspect-auto">
             <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="w-20 h-20 rounded-full bg-primary/90 text-black hover:scale-110 transition-transform">
                   <Play size={32} fill="black" className="ml-1" />
                </Button>
             </div>
             {/* Mock Video UI */}
             <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-black/60 px-3 py-1 rounded-lg text-white text-xs font-mono">0:15 / 0:30</div>
             </div>
          </div>

          {/* Sidebar Info */}
          <div className="w-full md:w-96 bg-secondary/50 p-6 flex flex-col">
             <div className="flex items-start justify-between mb-6">
                <div>
                   <h1 className="text-xl font-black italic uppercase text-white leading-tight mb-2">Clutch Round 1v5!</h1>
                   <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                         <AvatarImage src="https://i.pravatar.cc/150?u=gaules" />
                         <AvatarFallback>G</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-bold text-slate-300">Gaules</span>
                   </div>
                </div>
             </div>

             <div className="flex items-center gap-4 mb-8 border-y border-white/5 py-4">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                   <Play size={16} /> 125K
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                   <Heart size={16} /> 12K
                </div>
                <div className="flex-1" />
                <Button size="sm" variant="secondary" className="h-8"><Share2 size={14} className="mr-2"/> Compartilhar</Button>
             </div>

             <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                <h3 className="text-xs font-black uppercase text-slate-500">Comentários</h3>
                {[1,2,3,4].map(i => (
                   <div key={i} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                         <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                         <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                         <p className="text-xs font-bold text-white">User{i} <span className="text-[10px] text-slate-500 font-normal ml-1">2h</span></p>
                         <p className="text-xs text-slate-300">Que jogada insana! 🔥</p>
                      </div>
                   </div>
                ))}
             </div>

             <div className="relative">
                <input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white" placeholder="Adicionar comentário..." />
             </div>
          </div>
       </div>
    </div>
  );
}
