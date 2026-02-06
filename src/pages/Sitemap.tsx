import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '@/components/BrandLogo';

const SECTIONS = [
  {
    title: "Geral",
    links: [
      { name: "Home", path: "/" },
      { name: "Login", path: "/login" },
      { name: "Registrar", path: "/register" },
      { name: "Recuperar Senha", path: "/forgot-password" },
      { name: "Descobrir", path: "/discover" },
    ]
  },
  {
    title: "Dashboard",
    links: [
      { name: "Visão Geral", path: "/dashboard/overview" },
      { name: "Analytics", path: "/dashboard/analytics" },
      { name: "Gerenciador de Stream", path: "/dashboard/stream-manager" },
      { name: "Monetização", path: "/dashboard/earnings" },
      { name: "Conteúdo", path: "/dashboard/content" },
    ]
  },
  {
    title: "Comunidade",
    links: [
      { name: "Times", path: "/dashboard/teams" },
      { name: "Amigos", path: "/friends" },
      { name: "Rankings", path: "/leaderboards" },
      { name: "Fórum", path: "/community" },
    ]
  },
  {
    title: "Legal & Suporte",
    links: [
      { name: "Termos de Uso", path: "/terms" },
      { name: "Privacidade", path: "/privacy" },
      { name: "Diretrizes", path: "/guidelines" },
      { name: "Contato", path: "/contact" },
      { name: "Ajuda", path: "/help" },
      { name: "Acessibilidade", path: "/accessibility" },
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col items-center gap-4 py-8">
         <BrandLogo size={48} textSize="text-4xl" />
         <h1 className="text-2xl font-black italic uppercase tracking-tighter text-zinc-500">Mapa do Site</h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
         {SECTIONS.map((section, i) => (
             <div key={i} className="space-y-4">
                 <h2 className="text-xl font-black text-primary border-b border-white/10 pb-2 uppercase italic">{section.title}</h2>
                 <ul className="space-y-2">
                     {section.links.map(link => (
                         <li key={link.path}>
                             <Link to={link.path} className="text-zinc-400 hover:text-white hover:underline block py-1 text-sm font-bold">
                                 {link.name}
                             </Link>
                         </li>
                     ))}
                 </ul>
             </div>
         ))}
      </div>
    </div>
  );
}
