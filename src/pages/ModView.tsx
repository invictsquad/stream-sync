import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, MessageSquare, Users, Ban, Clock, Search, Settings } from 'lucide-react';

export default function ModView() {
  const [chatInput, setChatInput] = useState("");

  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-zinc-900">
         <div className="flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            <h1 className="font-black italic uppercase text-lg text-white">Mod View</h1>
            <span className="text-xs text-zinc-500 font-bold uppercase ml-2">Canal: StreamerPro</span>
         </div>
         <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="h-8 text-xs font-bold uppercase"><Settings size={12} className="mr-1"/> Layout</Button>
            <Button size="sm" variant="destructive" className="h-8 text-xs font-bold uppercase">Sair</Button>
         </div>
      </header>

      {/* Grid Layout */}
      <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-1 p-1">
         {/* Video Player Placeholder */}
         <div className="col-span-1 row-span-1 bg-zinc-950 border border-white/5 relative flex items-center justify-center">
            <span className="text-zinc-700 font-bold uppercase">Player Feed</span>
         </div>

         {/* AutoMod Queue */}
         <div className="col-span-1 row-span-1 bg-zinc-900 border border-white/5 flex flex-col">
            <div className="p-2 border-b border-white/5 font-black uppercase text-xs flex items-center gap-2 text-yellow-500">
               <Shield size={12} /> Fila de Revisão (AutoMod)
            </div>
            <div className="flex-1 flex items-center justify-center text-zinc-600 text-xs font-bold">
               Fila vazia. Bom trabalho!
            </div>
         </div>

         {/* User Activity / Unban Requests */}
         <div className="col-span-1 row-span-1 bg-zinc-900 border border-white/5 flex flex-col">
            <div className="p-2 border-b border-white/5 font-black uppercase text-xs flex items-center gap-2 text-blue-500">
               <Ban size={12} /> Pedidos de Desbanimento
            </div>
            <ScrollArea className="flex-1">
               {[1, 2].map(i => (
                  <div key={i} className="p-2 border-b border-white/5 hover:bg-white/5">
                     <div className="flex justify-between text-xs mb-1">
                        <span className="font-bold text-white">BannedUser_{i}</span>
                        <span className="text-zinc-500">Há 2h</span>
                     </div>
                     <p className="text-[10px] text-zinc-400 italic">"Foi mal admin, não vou fazer de novo..."</p>
                     <div className="flex gap-2 mt-2">
                        <Button size="sm" variant="outline" className="h-6 text-[10px] w-full text-green-500 border-green-500/20 hover:bg-green-500/10">Aceitar</Button>
                        <Button size="sm" variant="outline" className="h-6 text-[10px] w-full text-red-500 border-red-500/20 hover:bg-red-500/10">Negar</Button>
                     </div>
                  </div>
               ))}
            </ScrollArea>
         </div>

         {/* Chat */}
         <div className="col-span-1 row-span-2 bg-zinc-900 border border-white/5 flex flex-col">
            <div className="p-2 border-b border-white/5 font-black uppercase text-xs flex items-center gap-2 text-white">
               <MessageSquare size={12} /> Chat ao Vivo
            </div>
            <ScrollArea className="flex-1 p-2 space-y-1">
               {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="text-xs hover:bg-white/5 p-1 rounded">
                     <span className="font-bold text-zinc-400 mr-1">14:3{i}</span>
                     <span className="font-bold text-primary mr-1">Viewer_{i}:</span>
                     <span className="text-zinc-300">Mensagem de teste no chat {i}</span>
                  </div>
               ))}
            </ScrollArea>
            <div className="p-2 border-t border-white/5">
               <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Enviar mensagem..."
                  className="bg-black/50 border-white/10 h-8 text-xs"
               />
            </div>
         </div>

         {/* Action Log */}
         <div className="col-span-2 row-span-1 bg-zinc-900 border border-white/5 flex flex-col">
            <div className="p-2 border-b border-white/5 font-black uppercase text-xs flex items-center gap-2 text-zinc-400">
               <Clock size={12} /> Log de Ações
            </div>
            <ScrollArea className="flex-1 p-2">
               {[1, 2, 3, 4].map(i => (
                  <div key={i} className="text-xs text-zinc-500 py-0.5 border-b border-white/5 last:border-0">
                     <span className="font-bold text-zinc-300">Mod_Admin</span> baniu <span className="text-red-400">Troll_{i}</span> por 10min.
                  </div>
               ))}
            </ScrollArea>
         </div>

         {/* User Search */}
         <div className="col-span-1 row-span-1 bg-zinc-900 border border-white/5 p-2 space-y-2">
            <div className="font-black uppercase text-xs flex items-center gap-2 text-white">
               <Users size={12} /> Info do Usuário
            </div>
            <div className="relative">
               <Search className="absolute left-2 top-2 h-3 w-3 text-zinc-500" />
               <Input placeholder="Buscar usuário..." className="pl-7 h-8 text-xs bg-black/50 border-white/10" />
            </div>
            <div className="flex-1 flex items-center justify-center text-zinc-600 text-[10px] uppercase font-bold mt-8">
               Selecione um usuário para ver o histórico.
            </div>
         </div>
      </div>
    </div>
  );
}
