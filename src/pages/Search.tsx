import React, { useState } from 'react';
import { Search as SearchIcon, Filter, Video, Users, Tag, Clapperboard, MonitorPlay, Globe } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StreamCard } from '@/components/StreamCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ALL_DATA = [
  { id: 1, streamer: 'Gaules', title: 'Major CS2 - Final', viewers: '185k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=gaules', isTrending: true, tags: ['CS2', 'FPS'], type: 'live' },
  { id: 2, streamer: 'Alanzoka', title: 'Jogando Terror', viewers: '45k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=alanzoka', isTrending: false, tags: ['Horror', 'Indie'], type: 'live' },
  { id: 3, streamer: 'Cellbit', title: 'Enigma RPG', viewers: '32k', category: 'RPG', thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=cellbit', isTrending: true, tags: ['RPG', 'Tabletop'], type: 'live' },
  { id: 4, streamer: 'Nobru', title: 'Copa Free Fire', viewers: '88k', category: 'Games', thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80', avatar: 'https://i.pravatar.cc/150?u=nobru', isTrending: true, tags: ['Free Fire', 'Mobile'], type: 'live' },
];

export default function Search() {
  const [query, setQuery] = useState('');
  const [filterLang, setFilterLang] = useState('all');

  const filtered = ALL_DATA.filter(item => {
      const matchText = item.title.toLowerCase().includes(query.toLowerCase()) ||
                        item.streamer.toLowerCase().includes(query.toLowerCase()) ||
                        item.tags.some(t => t.toLowerCase().includes(query.toLowerCase()));
      return matchText;
  });

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
       <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 relative">
             <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
             <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar canais, jogos ou vídeos..."
                className="h-12 pl-11 bg-secondary border-white/10 text-sm rounded-xl"
                autoFocus
             />
          </div>
          <div className="flex gap-3">
              <Select value={filterLang} onValueChange={setFilterLang}>
                <SelectTrigger className="h-12 w-36 bg-secondary border-white/10 rounded-xl text-xs font-bold uppercase">
                   <div className="flex items-center gap-2"><Globe size={14} /><SelectValue /></div>
                </SelectTrigger>
                <SelectContent>
                   <SelectItem value="all">Global</SelectItem>
                   <SelectItem value="pt">Português</SelectItem>
                   <SelectItem value="en">Inglês</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary" className="h-12 px-4 rounded-xl font-black uppercase text-[10px]">
                 <Filter size={14} className="mr-2" /> Filtros
              </Button>
          </div>
       </div>

       <Tabs defaultValue="live" className="w-full">
          <TabsList className="bg-transparent p-0 gap-2 mb-6 overflow-x-auto w-full justify-start h-auto">
             <TabsTrigger value="live" className="rounded-lg border border-white/10 bg-black/40 px-4 h-9 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-[10px] italic">
                <MonitorPlay size={12} className="mr-2" /> Ao Vivo
             </TabsTrigger>
             <TabsTrigger value="vods" className="rounded-lg border border-white/10 bg-black/40 px-4 h-9 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-[10px] italic">
                <Video size={12} className="mr-2" /> Vídeos
             </TabsTrigger>
             <TabsTrigger value="clips" className="rounded-lg border border-white/10 bg-black/40 px-4 h-9 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-[10px] italic">
                <Clapperboard size={12} className="mr-2" /> Clips
             </TabsTrigger>
             <TabsTrigger value="users" className="rounded-lg border border-white/10 bg-black/40 px-4 h-9 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-[10px] italic">
                <Users size={12} className="mr-2" /> Canais
             </TabsTrigger>
             <TabsTrigger value="tags" className="rounded-lg border border-white/10 bg-black/40 px-4 h-9 data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase text-[10px] italic">
                <Tag size={12} className="mr-2" /> Tags
             </TabsTrigger>
          </TabsList>

          <TabsContent value="live" className="space-y-4">
             {query && <h2 className="text-sm font-black italic uppercase text-white">Resultados para "{query}"</h2>}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map(res => (
                   <StreamCard key={res.id} {...res} />
                ))}
                {filtered.length === 0 && (
                    <div className="col-span-full py-20 text-center text-slate-500">
                        <MonitorPlay size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="text-sm font-bold uppercase">Nenhum canal ao vivo encontrado.</p>
                    </div>
                )}
             </div>
          </TabsContent>

          <TabsContent value="vods">
             <div className="py-20 text-center text-slate-500">
                <Video size={48} className="mx-auto mb-4 opacity-20" />
                <p className="text-sm font-bold uppercase">Nenhum vídeo encontrado.</p>
             </div>
          </TabsContent>
       </Tabs>
    </div>
  );
}
