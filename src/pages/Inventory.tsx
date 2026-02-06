import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Gift, Shield } from 'lucide-react';

const DROPS = [
  { game: "CS2", name: "AK-47 | Slate", image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lYKah8j_Orlum25V4dB8xL2T8dvw2wXg-RJuZG_6LNKdIA49MwvVr1O6xObq0567vM_Bz3Qx7yQm4XnfzAv3309aLd0n6Q/360fx360f", rarity: "Roxo", status: "Resgatado" },
  { game: "Valorant", name: "Card: Clutch", image: "https://media.valorant-api.com/playercards/9fb348bc-4170-d333-1f8e-43869d066a33/smallart.png", rarity: "Comum", status: "Pendente" },
];

export default function Inventory() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
         <div className="p-3 bg-blue-500/10 rounded-2xl"><Package className="text-blue-500" size={32} /></div>
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Inventário</h1>
            <p className="text-slate-500 font-bold">Seus drops e recompensas digitais.</p>
         </div>
      </div>

      <Tabs defaultValue="drops" className="w-full">
         <TabsList className="bg-secondary/50 mb-8">
            <TabsTrigger value="drops" className="font-bold uppercase text-xs px-6">Drops</TabsTrigger>
            <TabsTrigger value="gifts" className="font-bold uppercase text-xs px-6">Presentes</TabsTrigger>
         </TabsList>

         <TabsContent value="drops">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {DROPS.map((item, i) => (
                  <Card key={i} className="bg-secondary/30 border-white/5 overflow-hidden group">
                     <div className="aspect-square bg-gradient-to-br from-black to-slate-900 flex items-center justify-center p-4 relative">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform" />
                        <span className="absolute top-2 right-2 text-[10px] font-black uppercase bg-black/50 px-2 py-0.5 rounded text-white border border-white/10">{item.game}</span>
                     </div>
                     <CardContent className="p-3">
                        <h4 className="font-bold text-sm truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground uppercase">{item.rarity}</p>
                        <div className="mt-2 text-[10px] font-black uppercase bg-green-500/10 text-green-500 text-center py-1 rounded">
                           {item.status}
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </TabsContent>
         <TabsContent value="gifts">
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-4">
               <Gift size={48} className="opacity-20" />
               <p>Você ainda não recebeu presentes.</p>
            </div>
         </TabsContent>
      </Tabs>
    </div>
  );
}
