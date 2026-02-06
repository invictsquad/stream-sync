import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Wifi, Cpu, AlertCircle } from 'lucide-react';

export default function Realtime() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
         <div>
            <div className="flex items-center gap-3 mb-1">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
               </span>
               <h1 className="text-3xl font-black italic uppercase tracking-tighter">Saúde da Live</h1>
            </div>
            <p className="text-muted-foreground">Monitoramento técnico em tempo real.</p>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
         <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
               <CardTitle className="flex items-center gap-2 text-sm font-black uppercase text-zinc-400">
                  <Wifi size={16} className="text-green-500" /> Bitrate
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-bold text-white">6000 <span className="text-sm text-zinc-500">kbps</span></div>
               <div className="h-1 w-full bg-zinc-800 mt-2 rounded overflow-hidden">
                  <div className="h-full bg-green-500 w-[98%]"></div>
               </div>
               <p className="text-xs text-green-500 mt-1 font-bold">Estável</p>
            </CardContent>
         </Card>

         <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
               <CardTitle className="flex items-center gap-2 text-sm font-black uppercase text-zinc-400">
                  <Activity size={16} className="text-blue-500" /> FPS
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-bold text-white">60 <span className="text-sm text-zinc-500">fps</span></div>
               <div className="h-1 w-full bg-zinc-800 mt-2 rounded overflow-hidden">
                  <div className="h-full bg-blue-500 w-full"></div>
               </div>
               <p className="text-xs text-zinc-500 mt-1">0 frames perdidos</p>
            </CardContent>
         </Card>

         <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-2">
               <CardTitle className="flex items-center gap-2 text-sm font-black uppercase text-zinc-400">
                  <Cpu size={16} className="text-purple-500" /> Keyframe Interval
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-mono font-bold text-white">2.0 <span className="text-sm text-zinc-500">s</span></div>
               <div className="h-1 w-full bg-zinc-800 mt-2 rounded overflow-hidden">
                  <div className="h-full bg-purple-500 w-full"></div>
               </div>
               <p className="text-xs text-green-500 mt-1 font-bold">Perfeito</p>
            </CardContent>
         </Card>
      </div>

      <Card className="bg-yellow-500/5 border-yellow-500/20">
         <CardContent className="p-4 flex gap-4 items-start">
            <AlertCircle className="text-yellow-500 shrink-0" />
            <div>
               <h4 className="font-bold text-yellow-500 uppercase">Aviso de Configuração</h4>
               <p className="text-sm text-yellow-200/80">Recomendamos configurar seu intervalo de keyframe para exatos 2 segundos para melhor compatibilidade com dispositivos móveis.</p>
            </div>
         </CardContent>
      </Card>
    </div>
  );
}
