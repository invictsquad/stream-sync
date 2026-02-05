import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, Smartphone } from 'lucide-react';

export function NotificationSettings() {
  return (
    <Card className="bg-secondary/30 border-white/5">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Bell size={16} className="text-primary" /> Preferências de Notificação
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="bg-black/40 p-2 rounded-lg"><Smartphone size={16} className="text-slate-400"/></div>
                <div>
                   <Label className="text-xs font-bold text-slate-200">Push Mobile</Label>
                   <p className="text-[9px] text-slate-500 font-bold uppercase">Alertas no celular</p>
                </div>
             </div>
             <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="bg-black/40 p-2 rounded-lg"><Mail size={16} className="text-slate-400"/></div>
                <div>
                   <Label className="text-xs font-bold text-slate-200">Email Marketing</Label>
                   <p className="text-[9px] text-slate-500 font-bold uppercase">Resumo semanal</p>
                </div>
             </div>
             <Switch />
          </div>

          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="bg-black/40 p-2 rounded-lg"><Bell size={16} className="text-slate-400"/></div>
                <div>
                   <Label className="text-xs font-bold text-slate-200">Som de Notificação</Label>
                   <p className="text-[9px] text-slate-500 font-bold uppercase">Ao receber alertas</p>
                </div>
             </div>
             <Switch defaultChecked />
          </div>
       </CardContent>
    </Card>
  );
}
