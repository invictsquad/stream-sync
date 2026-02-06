import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Mail, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Preferences() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Notificações</h1>
         <p className="text-muted-foreground">Escolha como e quando você quer ser avisado.</p>
      </div>

      <div className="space-y-6">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Mail /> Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between">
                  <Label>Resumo Semanal</Label>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between">
                  <Label>Novos Seguidores</Label>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between">
                  <Label>Atualizações de Produto</Label>
                  <Switch />
               </div>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Smartphone /> Push Mobile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between">
                  <Label>Canais que sigo entram ao vivo</Label>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between">
                  <Label>Menções no Chat</Label>
                  <Switch defaultChecked />
               </div>
               <div className="flex items-center justify-between">
                  <Label>Convites de Amizade</Label>
                  <Switch defaultChecked />
               </div>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Bell /> No Navegador</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between">
                  <Label>Sons de Notificação</Label>
                  <Switch defaultChecked />
               </div>
            </CardContent>
         </Card>

         <div className="flex justify-end">
            <Button onClick={() => toast.success("Preferências salvas!")} className="btn-gold font-black uppercase">Salvar Tudo</Button>
         </div>
      </div>
    </div>
  );
}
