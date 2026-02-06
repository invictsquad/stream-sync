import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Terminal, BookOpen, Key } from 'lucide-react';

export default function Docs() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
         <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">Documentação da API</h1>
            <p className="text-muted-foreground">Construa ferramentas incríveis para a Clutch Live.</p>
         </div>
         <Button className="btn-gold font-black uppercase">Obter Chave de API</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
         <Card className="bg-card/30 border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
            <CardHeader>
               <CardTitle className="flex items-center gap-2"><BookOpen className="text-primary"/> Guia Rápido</CardTitle>
               <CardDescription>Aprenda os conceitos básicos da API em 5 minutos.</CardDescription>
            </CardHeader>
         </Card>
         <Card className="bg-card/30 border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
            <CardHeader>
               <CardTitle className="flex items-center gap-2"><Key className="text-primary"/> Autenticação</CardTitle>
               <CardDescription>Como usar OAuth2 para autenticar usuários.</CardDescription>
            </CardHeader>
         </Card>
         <Card className="bg-card/30 border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
            <CardHeader>
               <CardTitle className="flex items-center gap-2"><Terminal className="text-primary"/> Webhooks</CardTitle>
               <CardDescription>Receba eventos em tempo real do seu canal.</CardDescription>
            </CardHeader>
         </Card>
      </div>

      <div className="bg-zinc-900 rounded-xl border border-white/10 overflow-hidden">
         <div className="bg-zinc-950 px-4 py-2 border-b border-white/10 flex items-center gap-2">
            <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500"/>
               <div className="w-3 h-3 rounded-full bg-yellow-500"/>
               <div className="w-3 h-3 rounded-full bg-green-500"/>
            </div>
            <span className="text-xs text-zinc-500 font-mono ml-2">Exemplo de Request</span>
         </div>
         <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-zinc-300">
               <span className="text-purple-400">curl</span> -X GET https://api.clutch.live/v1/channels/clutch_official \<br/>
               &nbsp;&nbsp;-H <span className="text-green-400">"Authorization: Bearer YOUR_ACCESS_TOKEN"</span> \<br/>
               &nbsp;&nbsp;-H <span className="text-green-400">"Client-Id: YOUR_CLIENT_ID"</span>
            </pre>
         </div>
      </div>
    </div>
  );
}
