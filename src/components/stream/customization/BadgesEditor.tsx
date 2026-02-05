import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Upload } from 'lucide-react';

const BADGES = [
  { month: 1, color: 'bg-slate-500' },
  { month: 3, color: 'bg-emerald-500' },
  { month: 6, color: 'bg-yellow-500' },
  { month: 12, color: 'bg-purple-500' },
];

export function BadgesEditor() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Shield size={16} className="text-primary" /> Emblemas de Fidelidade
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
             {BADGES.map(badge => (
                <div key={badge.month} className="flex flex-col items-center gap-2">
                   <div className={`w-10 h-10 rounded-lg ${badge.color} border-2 border-white/10 flex items-center justify-center shadow-lg`}>
                      <span className="text-[10px] font-black text-black">{badge.month}M</span>
                   </div>
                   <p className="text-[9px] text-slate-500 font-bold uppercase">{badge.month} Meses</p>
                   <Button variant="ghost" size="icon" className="h-6 w-6"><Upload size={12}/></Button>
                </div>
             ))}
          </div>
       </CardContent>
    </Card>
  );
}
