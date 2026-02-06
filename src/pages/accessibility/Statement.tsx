import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accessibility } from 'lucide-react';

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
         <div className="p-3 bg-blue-500/10 rounded-2xl"><Accessibility className="text-blue-500" size={32} /></div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Declaração de Acessibilidade</h1>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardContent className="p-8 space-y-6 text-zinc-300 leading-relaxed">
             <p>
                 A <strong>Stream Sync (Clutch Live)</strong> está comprometida em garantir a acessibilidade digital para pessoas com deficiência. Estamos continuamente melhorando a experiência do usuário para todos e aplicando os padrões de acessibilidade relevantes.
             </p>

             <h3 className="text-xl font-black text-white uppercase italic">Medidas de Apoio</h3>
             <ul className="list-disc pl-5 space-y-2">
                 <li>Incluímos acessibilidade como parte de nossa missão.</li>
                 <li>Integramos recursos de acessibilidade em nossas práticas de aquisição.</li>
                 <li>Nomeamos um responsável pela acessibilidade.</li>
                 <li>Fornecemos treinamento contínuo de acessibilidade para nossa equipe.</li>
             </ul>

             <h3 className="text-xl font-black text-white uppercase italic">Conformidade</h3>
             <p>
                 As Diretrizes de Acessibilidade de Conteúdo da Web (WCAG) definem requisitos para designers e desenvolvedores melhorarem a acessibilidade para pessoas com deficiência. Nosso objetivo é atingir a conformidade <strong>Nível AA</strong>.
             </p>

             <h3 className="text-xl font-black text-white uppercase italic">Feedback</h3>
             <p>
                 Agradecemos seus comentários sobre a acessibilidade da Clutch Live. Por favor, deixe-nos saber se você encontrar barreiras de acessibilidade:
             </p>
             <p className="font-bold text-white">Email: acessibilidade@clutch.live</p>
         </CardContent>
      </Card>
    </div>
  );
}
