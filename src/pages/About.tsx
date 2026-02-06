import React from 'react';
import { BrandLogo } from '@/components/BrandLogo';
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto space-y-12">
      <div className="flex flex-col items-center text-center space-y-6">
         <BrandLogo size={64} textSize="text-5xl" />
         <p className="text-2xl font-black italic text-muted-foreground max-w-2xl">
            A plataforma de streaming feita para criadores, por criadores.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-center">
         <div>
            <h3 className="text-4xl font-black text-primary mb-2">0%</h3>
            <p className="font-bold uppercase text-sm text-muted-foreground">Taxa para Streamers Pequenos</p>
         </div>
         <div>
            <h3 className="text-4xl font-black text-primary mb-2">10M+</h3>
            <p className="font-bold uppercase text-sm text-muted-foreground">Espectadores Mensais</p>
         </div>
         <div>
            <h3 className="text-4xl font-black text-primary mb-2">24/7</h3>
            <p className="font-bold uppercase text-sm text-muted-foreground">Suporte Especializado</p>
         </div>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-black italic uppercase">Nossa Missão</h2>
            <p className="text-slate-400 leading-relaxed">
               Democratizar o conteúdo ao vivo, oferecendo as melhores ferramentas de monetização e engajamento do mercado, sem as taxas abusivas das plataformas tradicionais. Acreditamos que o criador deve ser dono do seu conteúdo e da sua comunidade.
            </p>
         </CardContent>
      </Card>
    </div>
  );
}
