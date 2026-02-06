import React from 'react';
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Lock, Eye, Database } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Política de Privacidade</h1>
        <p className="text-muted-foreground">Sua privacidade é nossa prioridade.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
         <div className="bg-card border border-border/50 p-6 rounded-2xl space-y-2">
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2">
                <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-lg">Proteção de Dados</h3>
            <p className="text-sm text-muted-foreground">Utilizamos criptografia de ponta a ponta para garantir que seus dados permaneçam seguros.</p>
         </div>
         <div className="bg-card border border-border/50 p-6 rounded-2xl space-y-2">
            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-2">
                <Lock size={20} />
            </div>
            <h3 className="font-bold text-lg">Acesso Restrito</h3>
            <p className="text-sm text-muted-foreground">Apenas pessoal autorizado tem acesso aos dados sensíveis, sob rígidos protocolos.</p>
         </div>
      </div>

      <div className="bg-card/50 border border-border/50 rounded-3xl p-6 md:p-10 space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Eye className="text-primary" size={20} />
            Coleta de Informações
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Coletamos informações pessoais que você nos fornece voluntariamente ao se registrar na Plataforma, expressar interesse em obter informações sobre nós ou nossos produtos e serviços, ao participar de atividades na Plataforma ou de outra forma ao entrar em contato conosco.
          </p>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Database className="text-primary" size={20} />
            Uso das Informações
          </h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
             <li>Para facilitar a criação de conta e o processo de login.</li>
             <li>Para enviar informações administrativas para você.</li>
             <li>Para proteger nossos Serviços.</li>
             <li>Para fazer cumprir nossos termos, condições e políticas.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
