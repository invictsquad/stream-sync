import React from 'react';
import { Users, DollarSign, TrendingUp, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function ReferralDashboard() {
  const code = "CLUTCH-JOHNDOE-2024";

  return (
    <Card className="bg-gradient-to-br from-secondary/50 to-purple-900/10 border-white/5 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-8 opacity-5"><DollarSign size={100} /></div>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <TrendingUp size={16} /> Programa de Afiliados
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
         <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/20 p-3 rounded-xl">
               <p className="text-[10px] uppercase font-black text-slate-500 mb-1">Convidados</p>
               <div className="text-xl font-black text-white flex items-center gap-2"><Users size={16} className="text-purple-400" /> 128</div>
            </div>
            <div className="bg-black/20 p-3 rounded-xl">
               <p className="text-[10px] uppercase font-black text-slate-500 mb-1">Ganhos (Mês)</p>
               <div className="text-xl font-black text-emerald-400 flex items-center gap-2">R$ 450,00</div>
            </div>
         </div>

         <div className="bg-black/30 p-4 rounded-xl border border-white/5 space-y-2">
            <p className="text-[10px] uppercase font-black text-slate-400">Seu Link de Convite</p>
            <div className="flex gap-2">
               <Input readOnly value={`clutch.live/register?ref=${code}`} className="h-9 bg-secondary border-none text-xs font-mono text-primary" />
               <Button size="icon" className="h-9 w-9 bg-primary/20 hover:bg-primary text-primary hover:text-black transition-colors" onClick={() => { navigator.clipboard.writeText(code); toast.success("Link copiado!"); }}>
                  <Copy size={14} />
               </Button>
            </div>
            <p className="text-[9px] text-slate-500 italic">Ganhe 10% da primeira subscrição de cada convidado.</p>
         </div>
      </CardContent>
    </Card>
  );
}
