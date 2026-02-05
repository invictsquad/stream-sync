import React, { useState } from 'react';
import { Mic2, Volume2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function TTSConfig() {
  const [enabled, setEnabled] = useState(true);
  const [minAmount, setMinAmount] = useState("5.00");
  const [voice, setVoice] = useState("br-vitoria");

  const handleSave = () => {
    toast.success("Configuração de TTS salva!");
  };

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Mic2 size={16} /> Text-to-Speech (TTS)
        </CardTitle>
        <Switch checked={enabled} onCheckedChange={setEnabled} />
      </CardHeader>
      <CardContent className="space-y-4">
         <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase text-slate-500">Valor Mínimo (R$)</Label>
            <Input value={minAmount} onChange={e => setMinAmount(e.target.value)} className="h-9 bg-black/20 border-white/10 text-xs" />
         </div>
         <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase text-slate-500">Voz Padrão</Label>
            <Select value={voice} onValueChange={setVoice}>
               <SelectTrigger className="h-9 bg-black/20 border-white/10 text-xs"><SelectValue /></SelectTrigger>
               <SelectContent>
                  <SelectItem value="br-vitoria">Vitória (PT-BR)</SelectItem>
                  <SelectItem value="br-ricardo">Ricardo (PT-BR)</SelectItem>
                  <SelectItem value="us-google">Google (US)</SelectItem>
               </SelectContent>
            </Select>
         </div>
         <Button onClick={handleSave} className="w-full h-8 text-[10px] uppercase font-black btn-gold rounded-lg">
            <Volume2 size={12} className="mr-2" /> Testar Voz
         </Button>
      </CardContent>
    </Card>
  );
}
