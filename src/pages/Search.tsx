import React, { useState } from 'react';
import { Search as SearchIcon, Filter, Video, Users, Tag, Clapperboard, MonitorPlay } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StreamCard } from '@/components/StreamCard';

const MOCK_RESULTS = [
  { id: 1, streamer: 'Gaules', title: 'Major CS2 - Final', viewers: '185k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=gaules', isTrending: true, tags: ['CS2', 'FPS'] },
  { id: 2, streamer: 'Alanzoka', title: 'Jogando Terror', viewers: '45k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=alanzoka', isTrending: false, tags: ['Horror', 'Indie'] },
];

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 space-y-8 max-w-7xl mx-auto">
       <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1 relative">
             <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
             <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar canais, jogos ou vídeos..."
                className="h-14 pl-12 bg-secondary border-white/10 text-lg rounded-2xl"
                autoFocus
             />
          </div>
          <Button variant="secondary" className="h-14 px-6 rounded-2xl font-black uppercase text-xs">
             <Filter size={16} className="mr-2" /> Filtros
          </Button>
       </div>

       <Tabs defaultValue="live" className="w-full">
          <TabsList className="bg-transparent p-0 gap-4 mb-8">
             <TabsTrigger value="live" className="rounded-xl border border-white/10 bg-black/40 px-6 h-10 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-xs italic">
                <MonitorPlay size={14} className="mr-2" /> Canais Ao Vivo
             </TabsTrigger>
             <TabsTrigger value="vods" className="rounded-xl border border-white/10 bg-black/40 px-6 h-10 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-xs italic">
                <Video size={14} className="mr-2" /> Vídeos (VODs)
             </TabsTrigger>
             <TabsTrigger value="clips" className="rounded-xl border border-white/10 bg-black/40 px-6 h-10 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-xs italic">
                <Clapperboard size={14} className="mr-2" /> Clips
             </TabsTrigger>
             <TabsTrigger value="users" className="rounded-xl border border-white/10 bg-black/40 px-6 h-10 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-xs italic">
                <Users size={14} className="mr-2" /> Canais
             </TabsTrigger>
             <TabsTrigger value="tags" className="rounded-xl border border-white/10 bg-black/40 px-6 h-10 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-xs italic">
                <Tag size={14} className="mr-2" /> Tags
             </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-6">
             <h2 className="text-xl font-black italic uppercase text-white">Resultados para "{query || '...'}"</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_RESULTS.map(res => (
                   <StreamCard key={res.id} {...res} />
                ))}
             </div>
          </TabsContent>

          <TabsContent value="vods">
             <div className="py-20 text-center text-slate-500">
                <Video size={48} className="mx-auto mb-4 opacity-20" />
                <p>Nenhum vídeo encontrado.</p>
             </div>
          </TabsContent>
       </Tabs>
    </div>
  );
}
