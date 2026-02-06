import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSTS = [
  { id: 1, title: "Atualização da Plataforma v2.0", excerpt: "Confira as novidades no dashboard e ferramentas de monetização.", date: "25 Out 2023", author: "DevTeam" },
  { id: 2, title: "Destaques da Comunidade", excerpt: "Os melhores clipes e momentos da semana passada.", date: "22 Out 2023", author: "CommunityMgr" },
  { id: 3, title: "Parceria com Novos Patrocinadores", excerpt: "Grandes marcas chegando para apoiar nossos criadores.", date: "18 Out 2023", author: "Sales" },
];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4 py-8">
         <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Blog & Novidades</h1>
         <p className="text-xl text-muted-foreground">Fique por dentro de tudo que acontece na Clutch Live.</p>
      </div>

      <div className="grid gap-6">
         {POSTS.map(post => (
            <Card key={post.id} className="bg-card/30 border-white/5 hover:border-primary/50 transition-colors group">
               <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-3">
                     <div className="flex items-center gap-4 text-xs font-bold uppercase text-slate-500">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                        <span className="flex items-center gap-1"><User size={12}/> {post.author}</span>
                     </div>
                     <h2 className="text-2xl font-black italic uppercase text-white group-hover:text-primary transition-colors">{post.title}</h2>
                     <p className="text-slate-400">{post.excerpt}</p>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                     <Button className="btn-gold font-black uppercase">Ler Mais <ArrowRight size={16} className="ml-2"/></Button>
                  </Link>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
