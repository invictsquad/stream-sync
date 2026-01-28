import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Heart, Share2, MessageSquare, Send, Bell, ThumbsUp, DollarSign, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { toast } from "sonner";

const MOCK_LIVES = [
  { id: 1, streamer: 'Gaules', title: 'Major de CS2 - Clutch Live Diamond Stream', viewers: '185k', category: 'Games', avatar: 'https://i.pravatar.cc/150?u=gaules', pix: 'gaules@clutch.live' },
  { id: 2, streamer: 'SmileyDev', title: 'Codando a Clutch Live Gold com IA', viewers: '2.3k', category: 'Tecnologia', avatar: 'https://i.pravatar.cc/150?u=dev', pix: 'dev@clutch.live' },
  { id: 3, streamer: 'Nobru', title: 'Final da Copa Free Fire - Exclusivo Clutch', viewers: '88k', category: 'Games', avatar: 'https://i.pravatar.cc/150?u=nobru', pix: 'nobru@clutch.live' },
];

export default function WatchStream() {
  const { id } = useParams();
  const stream = MOCK_LIVES.find(l => l.id === Number(id)) || MOCK_LIVES[0];
  const [likes, setLikes] = useState(Math.floor(Math.random() * 5000));
  const [hasLiked, setHasLiked] = useState(false);
  const [showPix, setShowPix] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl h-20 flex items-center px-6 justify-between sticky top-0 z-50">
        <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Modal PIX - Cores Consistentes */}
        {showPix && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-secondary border border-primary/30 rounded-[2.5rem] p-10 max-w-sm w-full text-center relative gold-glow">
              <button onClick={() => setShowPix(false)} className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors"><X size={24}/></button>
              <DollarSign size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-black italic mb-4 uppercase">Apoie o Canal</h3>
              <div className="bg-background p-5 rounded-2xl border border-white/5 mb-8">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Chave Diamond PIX</p>
                <p className="text-xs font-mono text-primary break-all">{stream.pix}</p>
              </div>
              <Button onClick={() => { navigator.clipboard.writeText(stream.pix); toast.success("Copiado!"); }} className="btn-gold w-full h-14 rounded-2xl">Copiar Chave</Button>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="aspect-video bg-black relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-secondary/20">
               <BrandLogo size={60} withText={false} className="opacity-10" />
            </div>
            <div className="absolute top-6 left-6 bg-primary text-black px-3 py-1 rounded-full font-black text-[10px] uppercase italic tracking-widest gold-glow">Live Elite</div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-[1.25rem] border-2 border-primary/40 p-0.5"><img src={stream.avatar} className="w-full h-full rounded-[1.1rem] object-cover" alt="" /></div>
                <div>
                  <h1 className="text-2xl font-black italic uppercase tracking-tighter mb-2">{stream.title}</h1>
                  <div className="flex items-center gap-3">
                    <p className="text-primary font-black text-xs uppercase italic tracking-widest">{stream.streamer}</p>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <p className="text-slate-500 text-xs font-black uppercase italic tracking-tighter">{stream.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button onClick={() => setShowPix(true)} className="bg-white/5 hover:bg-white/10 text-primary border border-primary/20 font-black text-[10px] rounded-2xl h-12 px-6 uppercase italic">
                  <DollarSign size={16} className="mr-2" /> Incentivar
                </Button>
                <Button className="btn-gold h-12 px-8 rounded-2xl text-[10px]">
                  <Bell size={16} className="mr-2" /> Inscrição Diamond
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-8 py-6 border-y border-white/5">
               <div className="flex items-center gap-2 text-primary font-black text-sm italic">
                 <Users size={18} /> {stream.viewers}
               </div>
               <button onClick={() => { setLikes(likes+1); setHasLiked(true); }} className={`flex items-center gap-2 text-xs font-black transition-all uppercase italic ${hasLiked ? 'text-primary scale-110' : 'text-slate-500 hover:text-primary'}`}>
                 <ThumbsUp size={18} fill={hasLiked ? "currentColor" : "none"} /> {likes.toLocaleString()}
               </button>
               <button onClick={() => toast.success("Link Diamond copiado!")} className="flex items-center gap-2 text-slate-500 text-xs font-black hover:text-primary transition-all uppercase italic">
                 <Share2 size={18} /> Compartilhar
               </button>
            </div>
          </div>
        </div>

        {/* Chat - Estilo Dark Premium */}
        <div className="w-full lg:w-80 xl:w-96 border-l border-white/5 flex flex-col bg-black/40">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-[10px] text-primary flex items-center gap-2 font-black italic uppercase tracking-widest">
              <MessageSquare size={14}/> Diamond Chat
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
             <div className="text-[10px] text-slate-700 font-bold uppercase tracking-[0.2em] mb-4">Início da transmissão segura</div>
             <div className="text-xs"><span className="text-primary font-black italic mr-2">MOD:</span> <span className="text-slate-400 font-medium">Respeite os membros Diamond.</span></div>
          </div>
          <form className="p-6 bg-black border-t border-white/5 flex gap-3">
            <Input placeholder="Escreva algo épico..." className="bg-secondary border-white/5 text-xs h-12 rounded-xl" />
            <Button size="icon" className="btn-gold h-12 w-12 rounded-xl shrink-0"><Send size={18}/></Button>
          </form>
        </div>
      </main>
    </div>
  );
}