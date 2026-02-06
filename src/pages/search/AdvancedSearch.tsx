import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Tag } from 'lucide-react';

export default function AdvancedSearch() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center bg-zinc-900 p-6 rounded-2xl border border-white/5">
         <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-zinc-500" />
            <Input placeholder="Buscar por canais, jogos ou tags..." className="pl-12 h-12 text-lg bg-black/40 border-white/10" />
         </div>
         <Button className="btn-gold font-black uppercase h-12 px-8 w-full md:w-auto">Buscar</Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
         {/* Filters Sidebar */}
         <div className="space-y-6">
            <div className="flex items-center gap-2 font-black italic uppercase text-lg text-primary">
               <Filter size={20} /> Filtros
            </div>

            <div className="space-y-4">
               <Label className="text-sm font-bold uppercase text-zinc-400">Tipo</Label>
               <div className="space-y-2">
                  <div className="flex items-center gap-2"><Checkbox id="live" defaultChecked /><Label htmlFor="live">Ao Vivo</Label></div>
                  <div className="flex items-center gap-2"><Checkbox id="vod" /><Label htmlFor="vod">Vídeos (VOD)</Label></div>
                  <div className="flex items-center gap-2"><Checkbox id="clip" /><Label htmlFor="clip">Clipes</Label></div>
                  <div className="flex items-center gap-2"><Checkbox id="user" /><Label htmlFor="user">Canais</Label></div>
               </div>
            </div>

            <div className="space-y-4">
               <Label className="text-sm font-bold uppercase text-zinc-400">Idioma</Label>
               <div className="space-y-2">
                  <div className="flex items-center gap-2"><Checkbox id="pt" defaultChecked /><Label htmlFor="pt">Português</Label></div>
                  <div className="flex items-center gap-2"><Checkbox id="en" /><Label htmlFor="en">Inglês</Label></div>
                  <div className="flex items-center gap-2"><Checkbox id="es" /><Label htmlFor="es">Espanhol</Label></div>
               </div>
            </div>

            <div className="space-y-4">
               <Label className="text-sm font-bold uppercase text-zinc-400">Tags Populares</Label>
               <div className="flex flex-wrap gap-2">
                  {['FPS', 'RPG', 'MOBA', 'Speedrun', 'Casual'].map(tag => (
                     <span key={tag} className="text-xs bg-zinc-800 px-2 py-1 rounded cursor-pointer hover:bg-zinc-700">{tag}</span>
                  ))}
               </div>
            </div>
         </div>

         {/* Results */}
         <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
               <div key={i} className="group cursor-pointer">
                  <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden mb-3 relative group-hover:ring-2 ring-primary transition-all">
                     <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">Ao Vivo</div>
                     <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">1.2K Viewers</div>
                  </div>
                  <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full bg-zinc-800" />
                     <div>
                        <h3 className="font-bold text-white text-sm line-clamp-1 group-hover:text-primary">Resultado da Busca {i}</h3>
                        <p className="text-xs text-zinc-500">StreamerName</p>
                        <div className="flex gap-1 mt-1">
                           <span className="text-[10px] bg-zinc-800 text-zinc-400 px-1 rounded font-bold">FPS</span>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
