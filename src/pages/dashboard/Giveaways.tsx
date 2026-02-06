import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Users, Clock } from 'lucide-react';

export default function Giveaways() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Sorteios</h1>
            <p className="text-muted-foreground">Presenteie seus seguidores de forma justa.</p>
         </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-gradient-to-br from-green-900/40 to-black border-green-500/30">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-400 font-black italic uppercase"><Gift /> Novo Sorteio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                      <label className="text-sm font-bold">Prêmio</label>
                      <Input placeholder="Ex: Key do jogo X" className="bg-black/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                          <label className="text-sm font-bold">Tempo de Duração</label>
                          <Input type="number" placeholder="Minutos" className="bg-black/40" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-bold">Palavra-chave (Opcional)</label>
                          <Input placeholder="!sorteio" className="bg-black/40" />
                      </div>
                  </div>
                  <div className="pt-4">
                      <Button className="w-full btn-gold font-black uppercase h-12">Iniciar Sorteio</Button>
                  </div>
              </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/5">
              <CardHeader>
                  <CardTitle className="font-black italic uppercase text-sm">Últimos Ganhadores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                              <TrophyIcon size={14} />
                          </div>
                          <div className="flex-1">
                              <p className="text-sm font-bold text-white">User_Winner_{i}</p>
                              <p className="text-xs text-zinc-500">Ganhou: Skin CS2</p>
                          </div>
                          <span className="text-[10px] text-zinc-600">2d atrás</span>
                      </div>
                  ))}
              </CardContent>
          </Card>
      </div>
    </div>
  );
}

import { Trophy as TrophyIcon } from 'lucide-react';
