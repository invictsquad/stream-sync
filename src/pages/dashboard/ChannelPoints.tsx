import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Coins, Plus, Trash, Edit } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const DEFAULT_REWARDS = [
  { id: 1, title: "Destacar Mensagem", cost: 100, color: "bg-purple-500", enabled: true },
  { id: 2, title: "Desbloquear Emote", cost: 500, color: "bg-blue-500", enabled: true },
  { id: 3, title: "Modificar Emote", cost: 1000, color: "bg-green-500", enabled: false },
];

export default function ChannelPoints() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Pontos do Canal</h1>
            <p className="text-muted-foreground">Recompensas personalizadas para engajar sua comunidade.</p>
         </div>
         <div className="flex items-center gap-4">
             <div className="flex items-center gap-2">
                 <Switch defaultChecked />
                 <span className="text-sm font-bold uppercase">Habilitar</span>
             </div>
             <Dialog>
                 <DialogTrigger asChild>
                     <Button className="btn-gold font-black uppercase"><Plus size={16} className="mr-2"/> Criar Recompensa</Button>
                 </DialogTrigger>
                 <DialogContent className="bg-zinc-900 border-white/10 text-white">
                     <DialogHeader>
                         <DialogTitle className="font-black italic uppercase">Nova Recompensa</DialogTitle>
                     </DialogHeader>
                     <div className="space-y-4 py-4">
                         <div className="space-y-2">
                             <Label>Nome da Recompensa</Label>
                             <Input placeholder="Ex: Hidrate-se" className="bg-black/50 border-white/10" />
                         </div>
                         <div className="space-y-2">
                             <Label>Custo (Pontos)</Label>
                             <Input type="number" placeholder="500" className="bg-black/50 border-white/10" />
                         </div>
                         <div className="space-y-2">
                             <Label>Cor de Fundo</Label>
                             <div className="flex gap-2">
                                 {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500'].map(bg => (
                                     <div key={bg} className={`w-8 h-8 rounded-full cursor-pointer border-2 border-transparent hover:border-white ${bg}`} />
                                 ))}
                             </div>
                         </div>
                         <Button className="w-full btn-gold font-black uppercase">Salvar</Button>
                     </div>
                 </DialogContent>
             </Dialog>
         </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {DEFAULT_REWARDS.map(reward => (
            <Card key={reward.id} className="bg-card/30 border-white/5 group">
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                   <div className={`w-10 h-10 rounded-full ${reward.color} flex items-center justify-center`}>
                       <Coins size={20} className="text-white" />
                   </div>
                   <Switch checked={reward.enabled} />
               </CardHeader>
               <CardContent className="pt-4">
                   <h3 className="font-black italic uppercase text-lg">{reward.title}</h3>
                   <p className="text-sm text-primary font-bold">{reward.cost} Pontos</p>

                   <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Button size="sm" variant="outline" className="w-full text-xs font-black uppercase"><Edit size={12} className="mr-1"/> Editar</Button>
                       <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-400"><Trash size={14}/></Button>
                   </div>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
