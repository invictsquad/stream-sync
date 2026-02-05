import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AutoModConfig() {
  return (
    <Card className="bg-secondary/30 border border-white/5 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <ShieldAlert size={16} /> AutoMod Avançado
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
         <div className="space-y-4">
            <div className="flex items-center justify-between">
               <Label className="text-[10px] font-black uppercase text-slate-400">Bloquear Links Externos</Label>
               <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
               <Label className="text-[10px] font-black uppercase text-slate-400">Bloquear CAPS LOCK Excessivo</Label>
               <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
               <Label className="text-[10px] font-black uppercase text-slate-400">Bloquear Repetição (Spam)</Label>
               <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
               <Label className="text-[10px] font-black uppercase text-slate-400">Moderação de I.A. (Beta)</Label>
               <Switch />
            </div>
         </div>

         <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-xl space-y-2">
             <div className="flex items-center gap-2 text-red-400 mb-2">
                <AlertTriangle size={14} />
                <span className="text-[10px] font-black uppercase">Nível de Rigidez</span>
             </div>
             <Slider defaultValue={[70]} max={100} step={1} className="py-2" />
             <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase">
                <span>Baixo</span>
                <span>Médio</span>
                <span>Alto</span>
             </div>
         </div>
      </CardContent>
    </Card>
  );
}
