import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, UserPlus, Clock } from 'lucide-react';

export default function PublicProfile() {
  return (
    <div className="min-h-screen bg-background">
       {/* Header */}
       <div className="h-48 bg-gradient-to-r from-zinc-800 to-zinc-900 relative">
          <div className="absolute -bottom-16 left-8 flex items-end gap-6">
             <Avatar className="w-32 h-32 border-4 border-background">
                <AvatarImage src="https://i.pravatar.cc/300?u=public" />
                <AvatarFallback>USER</AvatarFallback>
             </Avatar>
             <div className="mb-4">
                <h1 className="text-3xl font-black italic uppercase text-white">Viewer_Pro_99</h1>
                <p className="text-zinc-400 font-bold text-sm">Membro desde Out 2023</p>
             </div>
          </div>
          <div className="absolute bottom-4 right-8 flex gap-2">
             <Button className="btn-gold font-black uppercase"><UserPlus size={16} className="mr-2"/> Adicionar</Button>
             <Button variant="secondary" size="icon"><MessageSquare size={16}/></Button>
          </div>
       </div>

       <div className="max-w-5xl mx-auto mt-24 p-4 grid md:grid-cols-3 gap-8">
          {/* Sidebar Info */}
          <div className="space-y-6">
             <Card className="bg-card/30 border-white/5">
                <CardContent className="p-6 space-y-4">
                   <div>
                      <h3 className="font-bold text-white uppercase text-sm mb-1">Sobre</h3>
                      <p className="text-zinc-400 text-sm">
                         Apaixonado por FPS e RPGs. Jogo casualmente nos finais de semana.
                      </p>
                   </div>
                   <div>
                      <h3 className="font-bold text-white uppercase text-sm mb-1">Seguindo</h3>
                      <p className="text-primary font-black text-xl">142</p>
                   </div>
                </CardContent>
             </Card>
          </div>

          {/* Activity */}
          <div className="md:col-span-2 space-y-6">
             <h2 className="font-black italic uppercase text-xl text-white">Atividade Recente</h2>
             <div className="space-y-4">
                {[1, 2, 3].map(i => (
                   <div key={i} className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex gap-4">
                      <div className="bg-zinc-800 p-3 rounded-full h-fit">
                         <Clock size={20} className="text-zinc-400" />
                      </div>
                      <div>
                         <p className="text-white text-sm">
                            Seguiu o canal <span className="font-bold text-primary">Streamer_Top_{i}</span>
                         </p>
                         <p className="text-xs text-zinc-500 mt-1">Há {i} dias</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
}
