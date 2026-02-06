import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, MessageSquare, Search } from 'lucide-react';

export default function Friends() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Amigos</h1>
            <p className="text-muted-foreground">Gerencie suas conexões e pedidos de amizade.</p>
         </div>
         <div className="relative w-full md:w-64">
             <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
             <Input placeholder="Buscar amigos..." className="pl-10 bg-black/40" />
         </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         {[1, 2, 3, 4, 5, 6].map(i => (
             <Card key={i} className="bg-card/30 border-white/5 group hover:border-primary/50 transition-colors">
                 <CardContent className="p-4 flex items-center gap-4">
                     <div className="relative">
                        <Avatar className="h-12 w-12 border-2 border-zinc-800">
                             <AvatarImage src={`https://i.pravatar.cc/150?u=friend${i}`} />
                             <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></span>
                     </div>
                     <div className="flex-1">
                         <h4 className="font-bold text-white">Friend_User_{i}</h4>
                         <p className="text-xs text-zinc-500">Jogando CS2</p>
                     </div>
                     <Button size="icon" variant="ghost" className="opacity-50 group-hover:opacity-100">
                         <MessageSquare size={16} />
                     </Button>
                 </CardContent>
             </Card>
         ))}
      </div>

      <div className="bg-black/20 p-6 rounded-xl border border-white/5 text-center">
          <h3 className="font-black italic uppercase text-lg text-zinc-400 mb-4">Adicionar Novo Amigo</h3>
          <div className="flex max-w-sm mx-auto gap-2">
              <Input placeholder="Nome de usuário..." className="bg-black/50" />
              <Button className="btn-gold"><UserPlus size={16} /></Button>
          </div>
      </div>
    </div>
  );
}
