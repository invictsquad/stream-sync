import React, { useState } from 'react';
import { History as HistoryIcon, Clock, X, Play, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const WATCH_HISTORY = [
  { id: 1, title: 'Major de CS2 - Final', streamer: 'Gaules', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', progress: 80, date: 'Há 2 horas' },
  { id: 2, title: 'Speedrun Minecraft Any%', streamer: 'SpeedDemon', thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80', progress: 30, date: 'Ontem' },
  { id: 3, title: 'React do Casimiro', streamer: 'Casimiro', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80', progress: 100, date: '3 dias atrás' },
  { id: 4, title: 'Podcast Flow #300', streamer: 'Flow', thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80', progress: 10, date: 'Semana passada' },
];

export default function History() {
  const [history, setHistory] = useState(WATCH_HISTORY);
  const [search, setSearch] = useState('');

  const handleRemove = (id: number) => {
    setHistory(history.filter(h => h.id !== id));
  };

  const handleClearAll = () => {
    if (confirm("Tem certeza que deseja limpar todo o histórico?")) {
       setHistory([]);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 space-y-8 max-w-6xl mx-auto">
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="p-3 bg-primary/10 rounded-2xl"><HistoryIcon className="text-primary" size={32} /></div>
             <div>
                <h1 className="text-3xl font-black italic uppercase tracking-tighter">Histórico</h1>
                <p className="text-slate-500 font-bold">Continue de onde parou</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="relative">
                <Input
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder="Buscar no histórico..."
                   className="pl-10 bg-secondary/50 border-white/10 w-64"
                />
                <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
             </div>
             <Button onClick={handleClearAll} variant="destructive" className="font-black uppercase text-xs">
                Limpar Histórico
             </Button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {history.filter(h => h.title.toLowerCase().includes(search.toLowerCase()) || h.streamer.toLowerCase().includes(search.toLowerCase())).map(item => (
             <div key={item.id} className="group relative bg-secondary/30 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="aspect-video relative">
                   <img src={item.thumbnail} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play className="text-primary fill-primary" size={48} />
                   </div>
                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/50">
                      <div className="h-full bg-primary" style={{ width: `${item.progress}%` }} />
                   </div>
                   <button onClick={() => handleRemove(item.id)} className="absolute top-2 right-2 bg-black/60 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500">
                      <X size={14} />
                   </button>
                   <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[9px] font-black uppercase px-2 py-1 rounded">
                      {item.date}
                   </div>
                </div>
                <div className="p-4">
                   <h3 className="font-bold text-white leading-tight mb-1 truncate">{item.title}</h3>
                   <p className="text-xs text-slate-500 font-bold uppercase">{item.streamer}</p>
                </div>
             </div>
          ))}
          {history.length === 0 && (
             <div className="col-span-full py-20 text-center text-slate-500">
                <Clock size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-bold uppercase">Nenhum histórico encontrado.</p>
             </div>
          )}
       </div>
    </div>
  );
}
