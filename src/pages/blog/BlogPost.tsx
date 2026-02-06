import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-3xl mx-auto space-y-8">
      <Link to="/blog">
         <Button variant="ghost" className="gap-2 text-slate-400 hover:text-white pl-0">
            <ArrowLeft size={16} /> Voltar para o Blog
         </Button>
      </Link>

      <article className="space-y-6">
         <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">Atualização da Plataforma v2.0</h1>
         <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="text-sm font-bold text-slate-500">
               Postado por <span className="text-primary">DevTeam</span> em 25 Out 2023
            </div>
            <Button size="icon" variant="ghost"><Share2 size={18}/></Button>
         </div>

         <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-slate-300">
               Hoje estamos lançando a maior atualização da história da Clutch Live. Ouvimos o feedback da comunidade e trabalhamos duro para trazer recursos que vocês pediram.
            </p>
            <h3 className="text-2xl font-black italic uppercase text-white mt-8 mb-4">O que há de novo?</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
               <li>Novo Dashboard de Analytics com dados em tempo real.</li>
               <li>Sistema de Pontos do Canal totalmente customizável.</li>
               <li>Melhorias na estabilidade do servidor de ingest (RTMP).</li>
               <li>Modo Teatro e suporte a 4K.</li>
            </ul>
            <p className="text-slate-300 mt-6">
               Estamos ansiosos para ver como vocês usarão essas novas ferramentas para criar conteúdo incrível.
            </p>
         </div>
      </article>
    </div>
  );
}
