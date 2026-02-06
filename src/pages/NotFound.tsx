import React from 'react';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
       <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <AlertTriangle size={80} className="text-primary relative z-10 mx-auto" />
       </div>
       <h1 className="text-6xl font-black italic uppercase text-white tracking-tighter mb-4">404</h1>
       <p className="text-xl text-slate-400 font-bold uppercase tracking-widest mb-8">Página não encontrada</p>
       <p className="text-slate-500 max-w-md mb-8">
          Parece que você se perdeu no mapa. A página que você está procurando pode ter sido movida ou deletada.
       </p>
       <Link to="/">
          <Button className="btn-gold font-black uppercase px-8 h-12 rounded-xl">
             <Home size={18} className="mr-2" /> Voltar para o Início
          </Button>
       </Link>
    </div>
  );
}
