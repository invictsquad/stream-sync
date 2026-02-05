import React from 'react';
import { Ticket, Activity } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function DonationTicker() {
  return (
    <Card className="bg-secondary/30 border border-white/5 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Activity size={16} /> Ticker de Doações
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
         <div className="bg-black h-8 overflow-hidden relative rounded border border-white/10 flex items-center px-2">
            <div className="whitespace-nowrap animate-marquee text-[10px] font-mono text-emerald-400">
               USER1: R$ 50,00 • USER2: R$ 10,00 • USER3: R$ 100,00 •
            </div>
         </div>

         <div className="space-y-3">
             <div className="flex items-center justify-between">
                <Label className="text-[10px] font-black uppercase text-slate-400">Mostrar Últimos Subs</Label>
                <Switch defaultChecked />
             </div>
             <div className="flex items-center justify-between">
                <Label className="text-[10px] font-black uppercase text-slate-400">Mostrar Bits</Label>
                <Switch defaultChecked />
             </div>
         </div>
      </CardContent>
    </Card>
  );
}
