import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, Shield, X } from 'lucide-react';

export default function Editors() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Editores de Vídeo</h1>
         <p className="text-muted-foreground">Dê permissão para outras pessoas gerenciarem seu conteúdo.</p>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardHeader>
            <CardTitle className="font-black italic uppercase">Adicionar Editor</CardTitle>
            <CardDescription>Editores podem fazer upload, cortar vídeos e gerenciar playlists.</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="flex gap-4">
               <Input placeholder="Digite o nome do usuário..." className="bg-black/20" />
               <Button className="btn-gold font-black uppercase"><UserPlus size={16} className="mr-2"/> Convidar</Button>
            </div>
         </CardContent>
      </Card>

      <div className="space-y-4">
         <h3 className="font-black italic uppercase text-lg">Editores Ativos</h3>
         {[1, 2].map(i => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl border border-white/5">
               <div className="flex items-center gap-4">
                  <Avatar>
                     <AvatarImage src={`https://i.pravatar.cc/150?u=editor${i}`} />
                     <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div>
                     <p className="font-bold text-white">Editor_Pro_{i}</p>
                     <p className="text-xs text-slate-500 flex items-center gap-1"><Shield size={10} className="text-green-500"/> Acesso total ao conteúdo</p>
                  </div>
               </div>
               <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10"><X size={16} className="mr-2"/> Remover</Button>
            </div>
         ))}
      </div>
    </div>
  );
}
