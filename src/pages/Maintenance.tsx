import React from 'react';
import { AlertTriangle, Hammer, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandLogo } from '@/components/BrandLogo';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center space-y-8">
      <div className="animate-pulse">
         <BrandLogo size={64} textSize="text-5xl" />
      </div>

      <div className="max-w-md space-y-4">
         <div className="flex justify-center text-yellow-500 mb-4">
            <Hammer size={64} className="animate-bounce" />
         </div>
         <h1 className="text-4xl font-black italic uppercase text-white tracking-tighter">Em Manutenção</h1>
         <p className="text-zinc-400 text-lg">
            Estamos atualizando os servidores para trazer uma experiência ainda melhor. Voltaremos em breve!
         </p>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl border border-white/5 max-w-sm w-full">
         <h3 className="font-bold text-white mb-2 flex items-center justify-center gap-2">
            <AlertTriangle className="text-red-500" size={18} /> Status do Sistema
         </h3>
         <div className="space-y-2 text-sm text-left">
            <div className="flex justify-between text-zinc-400">
               <span>Website</span>
               <span className="text-green-500">Online</span>
            </div>
            <div className="flex justify-between text-zinc-400">
               <span>Streaming Ingest</span>
               <span className="text-red-500 font-bold">Offline</span>
            </div>
            <div className="flex justify-between text-zinc-400">
               <span>Chat API</span>
               <span className="text-yellow-500">Instável</span>
            </div>
         </div>
      </div>

      <Button variant="outline" className="gap-2" onClick={() => window.location.reload()}>
         <RefreshCcw size={16} /> Tentar Reconectar
      </Button>
    </div>
  );
}
