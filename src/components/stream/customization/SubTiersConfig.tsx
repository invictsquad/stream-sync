import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Crown, Check } from 'lucide-react';

const TIERS = [
  { level: 1, name: 'Bronze', price: 9.99, benefits: ['Chat Exclusivo', 'Emblema de Sub'] },
  { level: 2, name: 'Silver', price: 19.99, benefits: ['Emotes Animados', 'Prioridade'] },
  { level: 3, name: 'Gold', price: 49.99, benefits: ['Acesso a VODs', 'Discord VIP'] },
];

export function SubTiersConfig() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Crown size={16} className="text-primary" /> Planos de Inscrição
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {TIERS.map(tier => (
                <div key={tier.level} className="bg-black/40 border border-white/5 rounded-xl p-4">
                   <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-black uppercase italic text-white">{tier.name}</p>
                      <span className="text-primary text-xs font-black">${tier.price}</span>
                   </div>
                   <div className="space-y-2">
                      {tier.benefits.map((b, i) => (
                         <div key={i} className="flex items-center gap-2 text-[9px] text-slate-400 uppercase font-bold">
                            <Check size={10} className="text-green-500" /> {b}
                         </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full mt-2 h-7 text-[9px] border-white/10 hover:bg-white/5">Editar</Button>
                   </div>
                </div>
             ))}
          </div>
       </CardContent>
    </Card>
  );
}
