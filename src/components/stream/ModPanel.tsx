import React, { useState } from 'react';
import { ShieldAlert, Check, X, Ban, History } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const FLAGGED_MESSAGES = [
  { id: 1, user: "Troll123", text: "Você é um ***** lixo!", reason: "Linguagem Ofensiva", time: "10s" },
  { id: 2, user: "SpammerBot", text: "Buy cheap followers at ...", reason: "Spam/Link", time: "1min" },
];

const BANNED_USERS = [
  { id: 1, user: "ToxicGuy", reason: "Hate speech", date: "Ontem" },
  { id: 2, user: "OldTroll", reason: "Spamming", date: "Semana passada" },
];

export function ModPanel() {
  const [flagged, setFlagged] = useState(FLAGGED_MESSAGES);
  const [banned, setBanned] = useState(BANNED_USERS);

  const handleAction = (id: number, action: 'approve' | 'deny') => {
    setFlagged(prev => prev.filter(m => m.id !== id));
    toast(action === 'approve' ? "Mensagem aprovada" : "Mensagem removida e usuário silenciado");
  };

  const handleUnban = (id: number) => {
    setBanned(prev => prev.filter(u => u.id !== id));
    toast.success("Usuário desbanido.");
  };

  return (
    <div className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
      <div className="flex items-center gap-2 mb-6">
        <ShieldAlert className="text-primary" size={20} />
        <h2 className="text-xl uppercase font-black italic">Moderação Avançada</h2>
      </div>

      <Tabs defaultValue="queue" className="w-full">
        <TabsList className="bg-black/40 border border-white/5 p-1 h-10 rounded-xl mb-4 w-fit">
          <TabsTrigger value="queue" className="h-8 text-[10px] uppercase font-black px-4">Fila de Moderação ({flagged.length})</TabsTrigger>
          <TabsTrigger value="banned" className="h-8 text-[10px] uppercase font-black px-4">Banidos ({banned.length})</TabsTrigger>
          <TabsTrigger value="logs" className="h-8 text-[10px] uppercase font-black px-4">Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="queue" className="space-y-3">
          {flagged.length === 0 ? (
             <p className="text-xs text-slate-500 italic">Fila limpa! Bom trabalho.</p>
          ) : (
            flagged.map(msg => (
              <div key={msg.id} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-center justify-between">
                <div>
                   <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black text-white">{msg.user}</span>
                      <span className="text-[9px] bg-red-500/20 text-red-400 px-1.5 rounded uppercase font-bold">{msg.reason}</span>
                      <span className="text-[9px] text-slate-500">{msg.time}</span>
                   </div>
                   <p className="text-sm text-slate-300 italic">"{msg.text}"</p>
                </div>
                <div className="flex gap-2">
                   <Button size="icon" className="h-8 w-8 bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white" onClick={() => handleAction(msg.id, 'approve')}>
                      <Check size={14} />
                   </Button>
                   <Button size="icon" className="h-8 w-8 bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white" onClick={() => handleAction(msg.id, 'deny')}>
                      <X size={14} />
                   </Button>
                </div>
              </div>
            ))
          )}
        </TabsContent>

        <TabsContent value="banned" className="space-y-3">
          {banned.map(user => (
            <div key={user.id} className="bg-black/20 border border-white/5 p-3 rounded-xl flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8"><AvatarFallback>{user.user[0]}</AvatarFallback></Avatar>
                  <div>
                     <p className="text-xs font-black text-white">{user.user}</p>
                     <p className="text-[10px] text-slate-500">Motivo: {user.reason}</p>
                  </div>
               </div>
               <Button size="sm" variant="outline" className="h-7 text-[9px] uppercase font-bold" onClick={() => handleUnban(user.id)}>
                  Desbanir
               </Button>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="logs">
           <div className="flex items-center gap-3 p-3 text-slate-500 text-xs italic">
              <History size={14} /> Histórico de ações de moderação aparecerá aqui.
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
