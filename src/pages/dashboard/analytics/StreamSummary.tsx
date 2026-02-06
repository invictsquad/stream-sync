import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Heart, MessageSquare, Award } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export default function StreamSummary() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Resumo da Live</h1>
         <p className="text-muted-foreground">Relatório da transmissão de ontem (24/10).</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-6 flex flex-col items-center gap-2">
               <Clock className="text-primary" size={32} />
               <h3 className="text-2xl font-black italic">4h 12m</h3>
               <p className="text-xs uppercase font-bold text-muted-foreground">Duração</p>
            </CardContent>
         </Card>
         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-6 flex flex-col items-center gap-2">
               <Users className="text-blue-500" size={32} />
               <h3 className="text-2xl font-black italic">1.2K</h3>
               <p className="text-xs uppercase font-bold text-muted-foreground">Pico de Viewers</p>
            </CardContent>
         </Card>
         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-6 flex flex-col items-center gap-2">
               <Heart className="text-fuchsia-500" size={32} />
               <h3 className="text-2xl font-black italic">+45</h3>
               <p className="text-xs uppercase font-bold text-muted-foreground">Novos Seguidores</p>
            </CardContent>
         </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="font-black italic uppercase text-sm">Momentos Importantes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               {[
                  { time: "00:15", event: "Live Iniciada", icon: Clock },
                  { time: "01:30", event: "Raid de @Gaules (15K)", icon: Users },
                  { time: "02:45", event: "Novo Recorde de Subs", icon: Award },
                  { time: "04:12", event: "Live Encerrada", icon: Clock },
               ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <span className="font-mono text-xs text-muted-foreground">{item.time}</span>
                     <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        <item.icon size={14} />
                     </div>
                     <span className="font-bold text-sm">{item.event}</span>
                  </div>
               ))}
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="font-black italic uppercase text-sm">Engajamento do Chat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <MessageSquare className="text-slate-500" size={16} />
                     <span className="font-bold text-sm">Total de Mensagens</span>
                  </div>
                  <span className="font-black text-xl">15.4K</span>
               </div>
               <Separator className="bg-white/5" />
               <div>
                  <p className="text-xs font-bold uppercase text-muted-foreground mb-2">Emotes Mais Usados</p>
                  <div className="flex gap-2">
                     {['EZ', 'LUL', 'POG', 'Sadge'].map(emote => (
                        <div key={emote} className="bg-black/20 px-3 py-1 rounded text-xs font-mono border border-white/5">{emote}</div>
                     ))}
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
