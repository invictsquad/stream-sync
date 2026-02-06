import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, HeartOff, AlertTriangle } from 'lucide-react';

export default function CommunityStandards() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4 py-8">
         <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Padrões da Comunidade</h1>
         <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nosso compromisso em manter a Clutch Live um lugar seguro e inclusivo para todos.
         </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-8 space-y-4">
               <div className="bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-500">
                  <AlertTriangle size={24} />
               </div>
               <h3 className="text-xl font-black italic uppercase">Violência e Ameaças</h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Tolerância zero para ameaças de violência, promoção de terrorismo ou extremismo violento. Qualquer conteúdo que incite ódio ou violência física será removido e as contas envolvidas serão banidas permanentemente.
               </p>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-8 space-y-4">
               <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-purple-500">
                  <HeartOff size={24} />
               </div>
               <h3 className="text-xl font-black italic uppercase">Assédio e Bullying</h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Não permitimos assédio, cyberbullying ou qualquer comportamento destinado a humilhar ou envergonhar outros usuários. Isso inclui ataques baseados em raça, etnia, identidade de gênero, orientação sexual ou religião.
               </p>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-8 space-y-4">
               <div className="bg-blue-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-500">
                  <Shield size={24} />
               </div>
               <h3 className="text-xl font-black italic uppercase">Segurança e Privacidade</h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                  É proibido compartilhar informações pessoais de terceiros sem consentimento (doxxing). Também proibimos a invasão de contas ou qualquer tentativa de comprometer a segurança da plataforma.
               </p>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardContent className="p-8 space-y-4">
               <div className="bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-green-500">
                  <Users size={24} />
               </div>
               <h3 className="text-xl font-black italic uppercase">Integridade</h3>
               <p className="text-slate-400 text-sm leading-relaxed">
                  Spam, golpes e bots são estritamente proibidos. Trapaças em jogos online (cheating/hacking) transmitidas ao vivo também resultarão em suspensão.
               </p>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
