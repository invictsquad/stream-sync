import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const SERVICES = [
  { name: "Website UI", status: "operational", uptime: "99.9%" },
  { name: "API v1", status: "operational", uptime: "99.9%" },
  { name: "Chat Systems", status: "degraded", uptime: "98.5%" },
  { name: "Video Ingest (RTMP)", status: "operational", uptime: "99.99%" },
  { name: "Video Playback (CDN)", status: "operational", uptime: "99.95%" },
  { name: "Notifications", status: "operational", uptime: "100%" },
];

export default function Status() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Status da Plataforma</h1>
         <div className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
            <AlertTriangle size={16} /> Alguns sistemas apresentam instabilidade
         </div>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardContent className="p-0">
            {SERVICES.map((service, i) => (
               <div key={i} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0">
                  <span className="font-bold text-lg text-white">{service.name}</span>
                  <div className="flex items-center gap-6">
                     <span className="text-sm text-zinc-500 font-mono hidden md:inline">{service.uptime} uptime</span>
                     <div className="flex items-center gap-2 w-32 justify-end">
                        {service.status === 'operational' && (
                           <>
                              <span className="text-green-500 font-bold uppercase text-xs">Operacional</span>
                              <CheckCircle size={20} className="text-green-500" />
                           </>
                        )}
                        {service.status === 'degraded' && (
                           <>
                              <span className="text-yellow-500 font-bold uppercase text-xs">Lentidão</span>
                              <AlertTriangle size={20} className="text-yellow-500" />
                           </>
                        )}
                        {service.status === 'down' && (
                           <>
                              <span className="text-red-500 font-bold uppercase text-xs">Offline</span>
                              <XCircle size={20} className="text-red-500" />
                           </>
                        )}
                     </div>
                  </div>
               </div>
            ))}
         </CardContent>
      </Card>

      <div className="space-y-4">
         <h3 className="font-black italic uppercase text-xl">Incidentes Recentes</h3>
         <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2">
               <span className="text-yellow-500 font-bold">Investigando</span>
               <span className="text-zinc-500 text-sm">• Há 45 minutos</span>
            </div>
            <h4 className="font-bold text-white">Latência elevada no Chat</h4>
            <p className="text-zinc-400 text-sm">Nossa equipe de engenharia está investigando relatos de atraso no envio de mensagens em alguns canais da região BR.</p>
         </div>
         <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2">
               <span className="text-green-500 font-bold">Resolvido</span>
               <span className="text-zinc-500 text-sm">• 24 Out</span>
            </div>
            <h4 className="font-bold text-white">Falha no Login Social</h4>
            <p className="text-zinc-400 text-sm">O problema com a autenticação via Google foi corrigido.</p>
         </div>
      </div>
    </div>
  );
}
