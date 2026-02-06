import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Rocket, Zap } from 'lucide-react';

export default function HypeTrain() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Hype Train</h1>
         <p className="text-muted-foreground">Configure eventos de combo de doações e subs.</p>
      </div>

      <Card className="bg-card/30 border-white/5 max-w-3xl">
         <CardHeader>
            <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 font-black italic uppercase text-primary"><Rocket /> Configurações Gerais</CardTitle>
                <Switch defaultChecked />
            </div>
            <CardDescription>O Hype Train começa quando há um pico de suporte no canal.</CardDescription>
         </CardHeader>
         <CardContent className="space-y-6">
             <div className="space-y-4">
                 <Label>Dificuldade</Label>
                 <div className="grid grid-cols-3 gap-4">
                     {['Fácil', 'Médio', 'Difícil', 'Insano', 'Divino'].map(diff => (
                         <div key={diff} className="bg-black/20 border border-white/10 p-4 rounded-xl text-center hover:border-primary cursor-pointer transition-colors">
                             <span className="font-black uppercase text-sm">{diff}</span>
                         </div>
                     ))}
                 </div>
                 <p className="text-xs text-zinc-500">Determina a quantidade de eventos necessários para subir de nível.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                     <Label>Período de Resfriamento</Label>
                     <Select defaultValue="1h">
                         <SelectTrigger className="bg-black/20"><SelectValue /></SelectTrigger>
                         <SelectContent>
                             <SelectItem value="1h">1 Hora</SelectItem>
                             <SelectItem value="2h">2 Horas</SelectItem>
                             <SelectItem value="4h">4 Horas</SelectItem>
                         </SelectContent>
                     </Select>
                 </div>
                 <div className="space-y-2">
                     <Label>Emotes de Recompensa</Label>
                     <div className="p-3 bg-black/20 rounded border border-white/10 flex items-center justify-between">
                         <span className="text-sm font-bold">Pacote Padrão</span>
                         <Zap size={16} className="text-yellow-500" />
                     </div>
                 </div>
             </div>
         </CardContent>
      </Card>
    </div>
  );
}
