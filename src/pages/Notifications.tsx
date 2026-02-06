import React from 'react';
import { Bell, Heart, Video, Star, DollarSign, MessageSquare } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const NOTIFICATIONS = [
  { id: 1, type: 'live', user: 'Gaules', avatar: 'https://i.pravatar.cc/150?u=gaules', text: 'entrou ao vivo: Major Final', time: '2m atrás', icon: Video, color: 'text-red-500' },
  { id: 2, type: 'sub', user: 'Sistema', avatar: '', text: 'Sua assinatura renovou com sucesso', time: '1h atrás', icon: Star, color: 'text-yellow-500' },
  { id: 3, type: 'follow', user: 'NewUser123', avatar: 'https://i.pravatar.cc/150?u=1', text: 'começou a te seguir', time: '5h atrás', icon: Heart, color: 'text-primary' },
  { id: 4, type: 'tip', user: 'Donator_King', avatar: 'https://i.pravatar.cc/150?u=2', text: 'enviou R$ 50,00', time: '1d atrás', icon: DollarSign, color: 'text-green-500' },
];

export default function Notifications() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto">
       <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
             <div className="p-3 bg-primary/10 rounded-2xl"><Bell className="text-primary" size={32} /></div>
             <div>
                <h1 className="text-3xl font-black italic uppercase tracking-tighter">Notificações</h1>
                <p className="text-slate-500 font-bold">Histórico de atividades</p>
             </div>
          </div>
          <Button variant="outline" className="text-xs uppercase font-black">Marcar todas como lidas</Button>
       </div>

       <div className="space-y-4">
          {NOTIFICATIONS.map(notif => (
             <div key={notif.id} className="bg-secondary/20 border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="relative">
                   <Avatar className="h-12 w-12 border border-white/10">
                      <AvatarImage src={notif.avatar} />
                      <AvatarFallback>SYS</AvatarFallback>
                   </Avatar>
                   <div className="absolute -bottom-1 -right-1 bg-secondary p-1 rounded-full border border-black">
                      <notif.icon size={12} className={notif.color} />
                   </div>
                </div>
                <div className="flex-1">
                   <p className="text-sm text-slate-200">
                      <span className="font-bold text-white">{notif.user}</span> {notif.text}
                   </p>
                   <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{notif.time}</p>
                </div>
                <div className="w-2 h-2 bg-primary rounded-full opacity-100 group-hover:scale-125 transition-transform" />
             </div>
          ))}
       </div>
    </div>
  );
}
