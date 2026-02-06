import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, History } from 'lucide-react';

export default function Predictions() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Palpites</h1>
            <p className="text-muted-foreground">Engaje seus espectadores com apostas de pontos.</p>
         </div>
         <Button className="btn-gold font-black uppercase"><Trophy size={16} className="mr-2"/> Iniciar Palpite</Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="bg-gradient-to-br from-indigo-900/40 to-black border-indigo-500/30">
             <CardHeader>
                 <CardTitle className="flex items-center gap-2 text-indigo-400 font-black italic uppercase"><TrendingUp /> Palpite Ativo</CardTitle>
             </CardHeader>
             <CardContent className="text-center py-12">
                 <p className="text-zinc-500 font-bold uppercase mb-4">Nenhum palpite rolando agora.</p>
                 <Button variant="outline" className="border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10">Criar Novo</Button>
             </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
             <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-black italic uppercase"><History /> Histórico Recente</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                 {[1, 2, 3].map(i => (
                     <div key={i} className="flex justify-between items-center p-3 bg-black/20 rounded-lg border border-white/5">
                         <div>
                             <p className="font-bold text-sm text-white">Vou ganhar essa partida?</p>
                             <p className="text-xs text-zinc-500">Encerrado • Vitória "Sim"</p>
                         </div>
                         <div className="text-right">
                             <p className="font-bold text-primary text-sm">50K Pontos</p>
                             <p className="text-xs text-zinc-500">142 Participantes</p>
                         </div>
                     </div>
                 ))}
             </CardContent>
         </Card>
      </div>
    </div>
  );
}
