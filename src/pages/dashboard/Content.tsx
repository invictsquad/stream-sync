import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Clock, Calendar, MoreVertical, Film, Download, Trash2, Edit } from 'lucide-react';

const VODS = [
  { id: 1, title: "A Grande Final - Clutch Pro League", duration: "4h 12m", views: 12500, date: "24 Out, 2023", thumb: "https://i.pravatar.cc/300?u=vod1" },
  { id: 2, title: "Ranked com a galera", duration: "2h 30m", views: 4200, date: "23 Out, 2023", thumb: "https://i.pravatar.cc/300?u=vod2" },
  { id: 3, title: "Just Chatting e Reacts", duration: "1h 45m", views: 8900, date: "22 Out, 2023", thumb: "https://i.pravatar.cc/300?u=vod3" },
];

export default function Content() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Gerenciador de Vídeo</h1>
            <p className="text-muted-foreground">Gerencie seus VODs, Clipes e Uploads.</p>
         </div>
         <Button className="btn-gold font-black uppercase"><Film size={16} className="mr-2"/> Upload Novo Vídeo</Button>
      </div>

      <Tabs defaultValue="vods" className="w-full">
         <TabsList className="bg-secondary/50 mb-6">
            <TabsTrigger value="vods" className="font-bold uppercase px-6">Transmissões Passadas</TabsTrigger>
            <TabsTrigger value="uploads" className="font-bold uppercase px-6">Uploads</TabsTrigger>
            <TabsTrigger value="stories" className="font-bold uppercase px-6">Stories</TabsTrigger>
         </TabsList>

         <TabsContent value="vods" className="space-y-4">
            <div className="flex gap-4 mb-4">
               <Input placeholder="Buscar vídeos..." className="max-w-md bg-black/20" />
               <Button variant="outline">Filtros</Button>
            </div>

            <div className="bg-card/30 border border-white/5 rounded-xl overflow-hidden">
               <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 bg-black/20 text-xs font-black uppercase text-slate-500">
                  <div className="col-span-6">Vídeo</div>
                  <div className="col-span-2">Visualizações</div>
                  <div className="col-span-2">Data</div>
                  <div className="col-span-2 text-right">Ações</div>
               </div>
               {VODS.map(vod => (
                  <div key={vod.id} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 last:border-0 items-center hover:bg-white/5 transition-colors group">
                     <div className="col-span-6 flex gap-4">
                        <div className="w-32 aspect-video bg-black rounded relative overflow-hidden">
                           <img src={vod.thumb} alt={vod.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                           <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded font-bold">{vod.duration}</span>
                        </div>
                        <div className="flex flex-col justify-center">
                           <h3 className="font-bold text-sm text-white group-hover:text-primary transition-colors">{vod.title}</h3>
                           <p className="text-xs text-slate-500 line-clamp-1">Descrição do vídeo que pode ser longa...</p>
                        </div>
                     </div>
                     <div className="col-span-2 flex items-center gap-2 text-sm text-slate-400">
                        <Eye size={14} /> {vod.views.toLocaleString()}
                     </div>
                     <div className="col-span-2 flex items-center gap-2 text-sm text-slate-400">
                        <Calendar size={14} /> {vod.date}
                     </div>
                     <div className="col-span-2 flex items-center justify-end gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-white"><Edit size={14}/></Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-white"><Download size={14}/></Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-red-500"><Trash2 size={14}/></Button>
                     </div>
                  </div>
               ))}
            </div>
         </TabsContent>
      </Tabs>
    </div>
  );
}
