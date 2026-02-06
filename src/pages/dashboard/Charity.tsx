import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartHandshake, Plus } from 'lucide-react';

export default function Charity() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Campanhas de Caridade</h1>
         <p className="text-muted-foreground">Arrecade fundos para causas importantes.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-gradient-to-br from-pink-900/40 to-black border-pink-500/30">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-pink-400 font-black italic uppercase"><HeartHandshake /> Criar Campanha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                      <label className="text-sm font-bold">Instituição de Caridade</label>
                      <Input placeholder="Buscar instituição..." className="bg-black/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                          <label className="text-sm font-bold">Meta de Arrecadação</label>
                          <Input type="number" placeholder="R$ 10.000" className="bg-black/40" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-sm font-bold">Título da Campanha</label>
                          <Input placeholder="Live Solidária" className="bg-black/40" />
                      </div>
                  </div>
                  <div className="pt-4">
                      <Button className="w-full btn-gold font-black uppercase h-12">Iniciar Arrecadação</Button>
                  </div>
              </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/5">
              <CardHeader>
                  <CardTitle className="font-black italic uppercase text-sm">Instituições Parceiras</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  {['Médicos Sem Fronteiras', 'WWF Brasil', 'AACD', 'Cruz Vermelha'].map(org => (
                      <div key={org} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer">
                          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                              {org[0]}
                          </div>
                          <span className="text-sm font-bold text-zinc-300">{org}</span>
                      </div>
                  ))}
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
