import React, { useState } from 'react';
import { Gift, Clock, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function GiveawayWidget() {
  const [hasJoined, setHasJoined] = useState(false);
  const [entries, setEntries] = useState(1243);

  const handleJoin = () => {
     setHasJoined(true);
     setEntries(e => e + 1);
     toast.success("Você entrou no sorteio! Boa sorte.");
  };

  return (
    <Card className="bg-gradient-to-br from-emerald-900/40 to-black border border-emerald-500/30 mb-4 overflow-hidden relative">
       <div className="absolute top-0 right-0 p-4 opacity-20">
          <Sparkles size={64} className="text-emerald-400" />
       </div>

       <CardContent className="p-4 relative z-10">
          <div className="flex items-start gap-4">
             <div className="bg-emerald-500/20 p-3 rounded-xl border border-emerald-500/30">
                <Gift size={24} className="text-emerald-400" />
             </div>
             <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                   <h3 className="text-sm font-black italic uppercase text-white">Sorteio: Mouse Gamer Logitech</h3>
                   <span className="bg-black/40 px-2 py-1 rounded text-[9px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <Clock size={10} /> 04:59
                   </span>
                </div>
                <p className="text-[10px] text-slate-400 mb-3">Participe gratuitamente. Subs tem 2x mais chance.</p>

                <div className="flex items-center gap-3">
                   <Button
                      onClick={handleJoin}
                      disabled={hasJoined}
                      className={`h-8 text-[10px] font-black uppercase flex-1 ${hasJoined ? 'bg-emerald-900/50 text-emerald-400 border border-emerald-500/30' : 'bg-emerald-500 hover:bg-emerald-600 text-black'}`}
                   >
                      {hasJoined ? 'Participando' : 'Entrar Agora'}
                   </Button>
                   <div className="text-[9px] font-bold text-slate-500 uppercase">
                      {entries} Entradas
                   </div>
                </div>
             </div>
          </div>
       </CardContent>
    </Card>
  );
}
