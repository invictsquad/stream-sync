import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, FileClock } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function UserLog() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Histórico de Usuário</h1>
         <p className="text-muted-foreground">Busque logs de chat e moderação de um usuário específico.</p>
      </div>

      <div className="flex gap-4">
         <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
            <Input placeholder="Buscar por nick..." className="pl-10 bg-black/40" />
         </div>
         <Button className="btn-gold font-black uppercase">Buscar</Button>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardHeader>
            <CardTitle className="font-black italic uppercase text-lg flex items-center gap-2">
               <FileClock /> Últimas Mensagens
            </CardTitle>
         </CardHeader>
         <CardContent>
             <div className="text-center py-12 text-zinc-500 font-bold uppercase text-sm">
                 Nenhum usuário selecionado.
             </div>
         </CardContent>
      </Card>
    </div>
  );
}
