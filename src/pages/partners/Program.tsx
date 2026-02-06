import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnerProgram() {
  return (
    <div className="min-h-screen bg-background">
       <div className="bg-gradient-to-b from-yellow-500/20 to-background py-20 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">Programa de Parceiros</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-bold">
             Transforme sua paixão em carreira. Cresça, monetize e construa sua comunidade com as melhores ferramentas do mercado.
          </p>
          <div className="mt-8">
             <Link to="/partners/apply">
                <Button size="lg" className="btn-gold text-lg px-12 py-8 font-black uppercase tracking-widest">Inscreva-se Agora</Button>
             </Link>
          </div>
       </div>

       <div className="max-w-6xl mx-auto p-4 md:p-8 pb-24 grid md:grid-cols-3 gap-8">
          <Card className="bg-card/30 border-white/5">
             <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-4">
                   <Zap size={32} />
                </div>
                <h3 className="text-2xl font-black italic uppercase">Monetização Premium</h3>
                <p className="text-slate-400">Receba 70/30 em inscrições desde o primeiro dia. Acesso a ads premium e patrocínios exclusivos.</p>
             </CardContent>
          </Card>
          <Card className="bg-card/30 border-white/5">
             <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-4">
                   <Star size={32} />
                </div>
                <h3 className="text-2xl font-black italic uppercase">Ferramentas Exclusivas</h3>
                <p className="text-slate-400">Transcode garantido (1080p60), emotes personalizados ilimitados e badges de verificado.</p>
             </CardContent>
          </Card>
          <Card className="bg-card/30 border-white/5">
             <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-4">
                   <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-black italic uppercase">Suporte Dedicado</h3>
                <p className="text-slate-400">Gerente de conta pessoal para ajudar no crescimento do seu canal e resolver problemas rapidamente.</p>
             </CardContent>
          </Card>
       </div>
    </div>
  );
}
