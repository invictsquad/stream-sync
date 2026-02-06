import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Music } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Copyright() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Direitos Autorais</h1>
         <p className="text-muted-foreground">Status da sua conta e reivindicações de conteúdo.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
         <Card className="bg-green-500/10 border-green-500/20">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 text-green-500 font-black uppercase text-sm"><CheckCircle size={18}/> Status da Conta</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-2xl font-black text-white">Excelente</p>
               <p className="text-xs text-green-400/80 mt-1">Nenhum strike ativo.</p>
            </CardContent>
         </Card>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardHeader>
             <CardTitle className="font-black italic uppercase">Reivindicações Recentes</CardTitle>
         </CardHeader>
         <CardContent>
             <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                   <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500">
                      <Music size={20} />
                   </div>
                   <div className="flex-1">
                      <h4 className="font-bold text-sm text-white">Música Detectada: "Generic Pop Song"</h4>
                      <p className="text-xs text-slate-500">VOD: A Grande Final - 24 Out</p>
                   </div>
                   <div className="text-right">
                      <span className="text-xs font-black uppercase text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded">Áudio Mutado</span>
                   </div>
                   <Button variant="outline" size="sm">Contestar</Button>
                </div>
             </div>
         </CardContent>
      </Card>
    </div>
  );
}
