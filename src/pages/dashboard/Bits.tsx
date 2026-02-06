import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gem, Smile } from 'lucide-react';

export default function Bits() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Bits & Cheering</h1>
         <p className="text-muted-foreground">Personalize a experiência de doação de Bits.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card/30 border-white/5">
              <CardHeader>
                  <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Gem className="text-purple-500"/> Configurações de Bits</CardTitle>
                      <Switch defaultChecked />
                  </div>
              </CardHeader>
              <CardContent className="space-y-6">
                  <div className="space-y-2">
                      <Label>Mínimo de Bits para Cheer</Label>
                      <Input type="number" defaultValue="1" className="bg-black/40" />
                  </div>
                  <div className="space-y-2">
                      <Label>Mínimo de Bits para Emote</Label>
                      <Input type="number" defaultValue="100" className="bg-black/40" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                      <Label>Fixar Cheers no Topo do Chat</Label>
                      <Switch defaultChecked />
                  </div>
              </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/5">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Smile className="text-primary"/> Emotes de Bits</CardTitle>
                  <CardDescription>Desbloqueie emotes exclusivos para doadores.</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                      {[100, 1000, 5000, 10000].map(tier => (
                          <div key={tier} className="bg-black/20 p-4 rounded-xl border border-white/5 flex flex-col items-center gap-2 opacity-50 cursor-not-allowed">
                              <div className="w-12 h-12 bg-zinc-800 rounded-lg" />
                              <span className="text-xs font-black text-purple-400">{tier} Bits</span>
                          </div>
                      ))}
                  </div>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
