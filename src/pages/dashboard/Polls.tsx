import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PollCreator } from '@/components/stream/PollCreator';
import { BarChart2 } from 'lucide-react';

export default function Polls() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Enquetes</h1>
         <p className="text-muted-foreground">Gerencie e veja o histórico de suas enquetes.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
              <h2 className="text-xl font-black italic uppercase">Criar Nova</h2>
              <PollCreator />
          </div>

          <div className="space-y-6">
              <h2 className="text-xl font-black italic uppercase">Histórico</h2>
              <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                      <Card key={i} className="bg-card/30 border-white/5">
                          <CardContent className="p-4">
                              <div className="flex justify-between mb-2">
                                  <h3 className="font-bold text-white">Qual o próximo jogo?</h3>
                                  <span className="text-xs bg-black/40 px-2 py-1 rounded text-zinc-400">Encerrada</span>
                              </div>
                              <div className="space-y-2">
                                  <div className="flex justify-between text-xs text-zinc-400">
                                      <span>Valorant</span>
                                      <span>60%</span>
                                  </div>
                                  <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                                      <div className="h-full bg-primary w-[60%]" />
                                  </div>
                                  <div className="flex justify-between text-xs text-zinc-400">
                                      <span>CS2</span>
                                      <span>40%</span>
                                  </div>
                                  <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                                      <div className="h-full bg-zinc-600 w-[40%]" />
                                  </div>
                              </div>
                              <div className="mt-3 pt-3 border-t border-white/5 flex gap-4 text-xs text-zinc-500 font-bold uppercase">
                                  <span className="flex items-center gap-1"><BarChart2 size={12}/> 2.4k Votos</span>
                                  <span>24 Out</span>
                              </div>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
}
