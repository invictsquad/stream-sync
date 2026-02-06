import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Gem } from 'lucide-react';

export default function BadgeManager() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Emblemas de Inscrito</h1>
         <p className="text-muted-foreground">Recompense a lealdade dos seus fãs com badges exclusivos.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {[
            { label: "Base", months: 0, icon: Star, color: "text-zinc-400" },
            { label: "2 Meses", months: 2, icon: Star, color: "text-orange-400" },
            { label: "3 Meses", months: 3, icon: Star, color: "text-green-400" },
            { label: "6 Meses", months: 6, icon: Star, color: "text-blue-400" },
            { label: "9 Meses", months: 9, icon: Star, color: "text-purple-400" },
            { label: "1 Ano", months: 12, icon: Shield, color: "text-yellow-400" },
            { label: "2 Anos", months: 24, icon: Gem, color: "text-pink-400" },
            { label: "Moderador", months: -1, icon: Shield, color: "text-green-500", special: true },
         ].map((badge, i) => (
            <Card key={i} className="bg-card/30 border-white/5 relative overflow-hidden group">
               <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-black uppercase text-zinc-400">{badge.label}</CardTitle>
               </CardHeader>
               <CardContent className="flex flex-col items-center gap-4 py-6">
                  <div className="w-16 h-16 bg-black/40 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                     <badge.icon size={32} className={badge.color} fill="currentColor" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs font-bold uppercase">Alterar</Button>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
