import React from 'react';
import { Button } from "@/components/ui/button";
import { ServerCrash, RefreshCcw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Error500() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center space-y-6">
      <div className="relative">
         <ServerCrash size={120} className="text-zinc-800" />
         <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-4xl font-black text-white">500</span>
         </div>
      </div>

      <div className="max-w-md space-y-2">
         <h1 className="text-3xl font-black italic uppercase text-white tracking-tighter">Erro Interno do Servidor</h1>
         <p className="text-zinc-400">
            Ops! Algo deu errado do nosso lado. Nossos engenheiros (e hamsters) já foram notificados.
         </p>
      </div>

      <div className="flex gap-4">
         <Button onClick={() => window.location.reload()} className="gap-2 btn-gold font-black uppercase">
            <RefreshCcw size={16} /> Tentar Novamente
         </Button>
         <Link to="/">
             <Button variant="outline" className="gap-2 font-black uppercase">
                <Home size={16} /> Voltar ao Início
             </Button>
         </Link>
      </div>
    </div>
  );
}
