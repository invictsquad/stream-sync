import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Ban, Check, X } from 'lucide-react';

export default function UnbanRequests() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Pedidos de Desbanimento</h1>
         <p className="text-muted-foreground">Gerencie as apelações de usuários banidos.</p>
      </div>

      <Card className="bg-card/30 border-white/5 h-[600px] flex flex-col">
         <CardHeader>
            <CardTitle className="font-black italic uppercase text-lg flex items-center gap-2">
               <Ban className="text-red-500" /> 12 Pedidos Pendentes
            </CardTitle>
         </CardHeader>
         <CardContent className="flex-1 overflow-hidden">
            <ScrollArea className="h-full pr-4">
               <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map(i => (
                     <div key={i} className="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div className="flex-1 space-y-2">
                           <div className="flex items-center gap-2">
                              <span className="font-bold text-white">BannedUser_{i}</span>
                              <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded">Banido há 2 dias</span>
                           </div>
                           <p className="text-sm text-zinc-300 italic">"Gostaria de pedir desculpas pelo comportamento. Eu estava exaltado e não vai se repetir. Prometo seguir as regras."</p>
                           <p className="text-xs text-red-400 font-mono">Motivo do Ban: Discurso de ódio (Automod)</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                           <Button className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/50 border font-bold uppercase text-xs">
                              <Check size={14} className="mr-1"/> Aceitar
                           </Button>
                           <Button className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/50 border font-bold uppercase text-xs">
                              <X size={14} className="mr-1"/> Recusar
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </ScrollArea>
         </CardContent>
      </Card>
    </div>
  );
}
