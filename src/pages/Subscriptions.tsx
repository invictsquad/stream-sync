import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, UserCheck } from 'lucide-react';

const SUBS = [
  { name: "Gaules", tier: "Tier 1", since: "3 meses", status: "Ativo", avatar: "https://i.pravatar.cc/150?u=gaules" },
  { name: "Alanzoka", tier: "Tier 1", since: "1 ano", status: "Renova em 2 dias", avatar: "https://i.pravatar.cc/150?u=alanzoka" },
  { name: "YoDa", tier: "Prime", since: "5 meses", status: "Ativo", avatar: "https://i.pravatar.cc/150?u=yoda" },
];

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
         <div className="p-3 bg-fuchsia-500/10 rounded-2xl"><Heart className="text-fuchsia-500" size={32} /></div>
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Inscrições</h1>
            <p className="text-slate-500 font-bold">Gerencie seu apoio aos criadores.</p>
         </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {SUBS.map((sub, i) => (
            <Card key={i} className="bg-secondary/30 border-white/5 overflow-hidden hover:border-fuchsia-500/50 transition-colors">
               <div className="h-24 bg-gradient-to-r from-fuchsia-900/50 to-purple-900/50 relative">
                  {sub.tier === 'Prime' && <Badge className="absolute top-2 right-2 bg-blue-500 text-white border-0 font-black italic">Prime</Badge>}
               </div>
               <CardContent className="pt-0 relative">
                  <Avatar className="w-20 h-20 border-4 border-background -mt-10 mb-3">
                     <AvatarImage src={sub.avatar} />
                     <AvatarFallback>{sub.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="mb-4">
                     <h3 className="text-xl font-black italic uppercase">{sub.name}</h3>
                     <p className="text-xs text-muted-foreground font-bold uppercase">{sub.tier} • {sub.since}</p>
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-center justify-between text-sm bg-black/20 p-2 rounded">
                        <span className="text-muted-foreground">Status</span>
                        <span className="font-bold text-green-500">{sub.status}</span>
                     </div>
                     <div className="flex gap-2">
                        <Button className="w-full btn-gold font-black uppercase text-xs">Renovar</Button>
                        <Button variant="outline" size="icon"><UserCheck size={16}/></Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
