import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Subtitles as SubtitlesIcon, Settings2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Subtitles() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Legendas (CC)</h1>
         <p className="text-muted-foreground">Configure as legendas automáticas para suas lives e VODs.</p>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardHeader>
            <CardTitle className="flex items-center gap-2 font-black italic uppercase"><SubtitlesIcon className="text-primary"/> Configuração Geral</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
               <div>
                  <Label className="text-base font-bold">Legendas ao Vivo (ASR)</Label>
                  <p className="text-xs text-slate-500">Gerar legendas automaticamente durante a transmissão.</p>
               </div>
               <Switch defaultChecked />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <Label>Idioma Principal</Label>
                  <Select defaultValue="pt-br">
                     <SelectTrigger className="bg-black/20">
                        <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                        <SelectItem value="en">Inglês</SelectItem>
                        <SelectItem value="es">Espanhol</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
               <div className="space-y-2">
                  <Label>Delay da Legenda</Label>
                  <Select defaultValue="low">
                     <SelectTrigger className="bg-black/20">
                        <SelectValue />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="low">Baixa Latência (Menos preciso)</SelectItem>
                        <SelectItem value="high">Alta Precisão (Mais delay)</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </div>
         </CardContent>
      </Card>

      <div className="bg-black/40 p-8 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center space-y-4">
         <h3 className="font-black uppercase italic text-lg text-white">Preview de Estilo</h3>
         <div className="w-full max-w-md bg-video-overlay aspect-video rounded bg-slate-900 relative flex items-end justify-center pb-8">
            <span className="bg-black/80 text-white px-2 py-1 rounded text-lg font-sans">
               [Aplausos] E essa foi a jogada da partida!
            </span>
         </div>
         <Button variant="outline" className="gap-2"><Settings2 size={14}/> Personalizar Fonte e Cor</Button>
      </div>
    </div>
  );
}
