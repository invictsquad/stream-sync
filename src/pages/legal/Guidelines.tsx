import React from 'react';
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, UserCheck, MessageCircle, HeartOff } from 'lucide-react';

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Diretrizes da Comunidade</h1>
        <p className="text-muted-foreground">Regras para manter a comunidade segura e divertida.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
         <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
            <AlertTriangle className="text-red-500" />
            <span className="font-bold text-sm">Sem Violência</span>
         </div>
         <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
            <UserCheck className="text-green-500" />
            <span className="font-bold text-sm">Respeito Mútuo</span>
         </div>
         <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
            <MessageCircle className="text-blue-500" />
            <span className="font-bold text-sm">Sem Spam</span>
         </div>
         <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-2xl flex flex-col items-center text-center gap-2">
            <HeartOff className="text-purple-500" />
            <span className="font-bold text-sm">Sem Assédio</span>
         </div>
      </div>

      <div className="bg-card/50 border border-border/50 rounded-3xl p-6 md:p-10 space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Comportamento Esperado</h2>
          <p className="text-muted-foreground leading-relaxed">
            Esperamos que todos os usuários da Stream Sync tratem uns aos outros com dignidade e respeito. Não toleramos assédio, discurso de ódio ou qualquer forma de discriminação.
          </p>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Conteúdo Proibido</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
             <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <h4 className="font-bold mb-2 text-red-400">Conteúdo Ilegal</h4>
                <p className="text-sm text-slate-500">Qualquer conteúdo que viole leis locais, estaduais, nacionais ou internacionais.</p>
             </div>
             <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <h4 className="font-bold mb-2 text-red-400">Nudez e Pornografia</h4>
                <p className="text-sm text-slate-500">Conteúdo sexualmente explícito não é permitido na plataforma pública.</p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
