import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Plus, Trash2, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const COMMANDS = [
  { id: 1, trigger: '!discord', response: 'Entre no nosso discord: discord.gg/clutch' },
  { id: 2, trigger: '!loja', response: 'Confira nossos produtos: loja.clutch.live' },
];

export function ChatBotManager() {
  const [commands, setCommands] = useState(COMMANDS);
  const [active, setActive] = useState(true);

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Bot size={16} className="text-primary" /> ClutchBot
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-6">
          <div className="flex items-center justify-between bg-black/20 p-3 rounded-xl border border-white/5">
             <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <div>
                   <p className="text-xs font-bold text-slate-200">Status do Bot</p>
                   <p className="text-[9px] text-slate-500 uppercase">{active ? 'Online e Respondendo' : 'Offline'}</p>
                </div>
             </div>
             <Switch checked={active} onCheckedChange={setActive} />
          </div>

          <div className="space-y-3">
             <div className="flex items-center justify-between">
                <p className="text-[10px] text-slate-500 font-bold uppercase">Comandos Personalizados</p>
                <Button size="sm" variant="ghost" className="h-6 px-2 text-[9px] uppercase hover:bg-white/5 text-primary">
                   <Plus size={12} className="mr-1" /> Novo
                </Button>
             </div>

             <div className="space-y-2">
                {commands.map(cmd => (
                   <div key={cmd.id} className="p-3 rounded-lg bg-black/40 border border-white/5 group hover:border-primary/30 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                         <Badge variant="outline" className="text-primary border-primary/20 text-[10px] font-black">{cmd.trigger}</Badge>
                         <button className="text-slate-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><Trash2 size={12}/></button>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-1">{cmd.response}</p>
                   </div>
                ))}
             </div>
          </div>
       </CardContent>
    </Card>
  );
}
