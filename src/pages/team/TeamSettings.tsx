import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Settings, Crown, MoreVertical } from 'lucide-react';

export default function TeamSettings() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border-2 border-primary">
               <Crown size={32} className="text-primary" />
            </div>
            <div>
               <h1 className="text-3xl font-black italic uppercase tracking-tighter">Team Alpha</h1>
               <p className="text-muted-foreground">Gerenciar membros e configurações.</p>
            </div>
         </div>
         <Button variant="outline" className="gap-2"><Settings size={16}/> Editar Perfil</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         <Card className="lg:col-span-2 bg-card/30 border-white/5">
            <CardHeader>
               <div className="flex justify-between items-center">
                  <CardTitle className="font-black italic uppercase">Membros (12/50)</CardTitle>
                  <Button size="sm" className="btn-gold font-black uppercase text-xs"><UserPlus size={14} className="mr-2"/> Convidar</Button>
               </div>
            </CardHeader>
            <CardContent className="space-y-2">
               {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                     <div className="flex items-center gap-3">
                        <Avatar>
                           <AvatarImage src={`https://i.pravatar.cc/150?u=tm${i}`} />
                           <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <div>
                           <p className="font-bold text-white text-sm">Member_User_{i}</p>
                           <p className="text-[10px] text-zinc-500 uppercase">{i === 1 ? 'Líder' : 'Membro'}</p>
                        </div>
                     </div>
                     <Button size="icon" variant="ghost"><MoreVertical size={16}/></Button>
                  </div>
               ))}
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5 h-fit">
            <CardHeader>
               <CardTitle className="font-black italic uppercase text-sm">Convites Pendentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex gap-2">
                  <Input placeholder="Email ou Usuário" className="bg-black/40 h-8 text-xs" />
                  <Button size="sm" className="h-8">Enviar</Button>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-zinc-400">
                     <span>Invited_User_99</span>
                     <span className="text-yellow-500">Pendente</span>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
