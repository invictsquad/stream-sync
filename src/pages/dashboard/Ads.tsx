import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Megaphone, Play, Clock } from 'lucide-react';

export default function Ads() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Gerenciador de Anúncios</h1>
         <p className="text-muted-foreground">Configure a frequência e duração dos anúncios no seu canal.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="bg-card/30 border-white/5">
             <CardHeader>
                 <div className="flex justify-between items-center">
                     <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Clock /> Cronograma Automático</CardTitle>
                     <Switch defaultChecked />
                 </div>
                 <CardDescription>O sistema rodará anúncios automaticamente para remover o pre-roll.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-8">
                 <div className="space-y-4">
                     <div className="flex justify-between font-bold text-sm">
                         <span>Densidade de Anúncios</span>
                         <span className="text-primary">3 min / hora</span>
                     </div>
                     <Slider defaultValue={[3]} max={10} step={0.5} />
                     <p className="text-xs text-zinc-500">Isso desativa o pre-roll por 45 minutos a cada bloco.</p>
                 </div>

                 <div className="space-y-4">
                     <div className="flex justify-between font-bold text-sm">
                         <span>Duração do Bloco</span>
                         <span className="text-primary">1:30 min</span>
                     </div>
                     <Slider defaultValue={[90]} max={180} step={30} />
                 </div>
             </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
             <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Play /> Comandos Manuais</CardTitle>
             </CardHeader>
             <CardContent>
                 <p className="text-sm text-zinc-400 mb-6">Rode anúncios manualmente durante pausas no conteúdo.</p>
                 <div className="grid grid-cols-2 gap-4">
                     {[30, 60, 90, 120, 150, 180].map(sec => (
                         <Button key={sec} variant="outline" className="h-16 flex flex-col gap-1 border-zinc-700 hover:border-primary hover:bg-primary/10">
                             <Megaphone size={20} />
                             <span className="font-black uppercase">{sec} Segundos</span>
                         </Button>
                     ))}
                 </div>
             </CardContent>
         </Card>
      </div>
    </div>
  );
}
