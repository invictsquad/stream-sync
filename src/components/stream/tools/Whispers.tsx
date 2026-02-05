import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const CONVERSATIONS = [
  { id: 1, user: 'Mod_Chief', lastMsg: 'Tudo certo com o bot?', time: '2m', avatar: 'https://i.pravatar.cc/150?u=mod' },
  { id: 2, user: 'Sponsor_Rep', lastMsg: 'Podemos falar sobre a ação?', time: '1h', avatar: 'https://i.pravatar.cc/150?u=sponsor' },
];

export function Whispers() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full flex flex-col">
       <CardHeader className="pb-3 shrink-0">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <MessageCircle size={16} className="text-primary" /> Mensagens Diretas
          </CardTitle>
       </CardHeader>
       <CardContent className="flex-1 flex flex-col min-h-0 space-y-4">
          <ScrollArea className="flex-1 -mr-3 pr-3">
             <div className="space-y-2">
                {CONVERSATIONS.map(chat => (
                   <div key={chat.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                      <Avatar className="h-10 w-10">
                         <AvatarImage src={chat.avatar} />
                         <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                         <div className="flex justify-between items-center mb-0.5">
                            <p className="text-xs font-bold text-slate-200">{chat.user}</p>
                            <span className="text-[9px] text-slate-600">{chat.time}</span>
                         </div>
                         <p className="text-[10px] text-slate-500 truncate">{chat.lastMsg}</p>
                      </div>
                   </div>
                ))}
             </div>
          </ScrollArea>
          <div className="relative shrink-0">
             <Input placeholder="Buscar ou iniciar conversa..." className="h-9 text-xs pr-8 bg-black/40 border-white/5" />
             <Send size={12} className="absolute right-3 top-2.5 text-slate-500" />
          </div>
       </CardContent>
    </Card>
  );
}
