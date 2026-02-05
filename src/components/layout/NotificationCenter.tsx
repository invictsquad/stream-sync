import React from 'react';
import { Bell, Radio, Clock } from 'lucide-react';
import {
  Popover, PopoverContent, PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NOTIFICATIONS = [
  { id: 1, user: "Gaules", action: "está ao vivo:", context: "Major CS2 - Final", time: "2 min", avatar: "https://i.pravatar.cc/150?u=gaules" },
  { id: 2, user: "Alanzoka", action: "está ao vivo:", context: "Terror Indie", time: "15 min", avatar: "https://i.pravatar.cc/150?u=alanzoka" },
  { id: 3, user: "System", action: "Sua assinatura", context: "expira em 3 dias", time: "1h", avatar: "" },
];

export function NotificationCenter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost" className="relative text-slate-400 hover:text-primary transition-colors">
           <Bell size={20} />
           <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-background"></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-secondary/95 backdrop-blur-xl border-white/10 w-80 p-0 rounded-2xl overflow-hidden shadow-2xl">
         <div className="p-4 border-b border-white/5 bg-black/20 flex justify-between items-center">
            <h4 className="text-sm font-black italic uppercase text-white">Notificações</h4>
            <span className="text-[10px] text-primary font-bold cursor-pointer hover:underline">Marcar como lidas</span>
         </div>

         <div className="max-h-[300px] overflow-y-auto">
            {NOTIFICATIONS.map((notif) => (
               <div key={notif.id} className="p-4 hover:bg-white/5 transition-colors flex gap-3 border-b border-white/5 last:border-0 cursor-pointer group">
                  <div className="relative shrink-0">
                     <Avatar className="h-10 w-10 border border-white/10"><AvatarImage src={notif.avatar} /><AvatarFallback>SYS</AvatarFallback></Avatar>
                     <div className="absolute -bottom-1 -right-1 bg-secondary p-0.5 rounded-full">
                        {notif.avatar ? <Radio size={12} className="text-red-500 fill-red-500" /> : <Clock size={12} className="text-blue-500" />}
                     </div>
                  </div>
                  <div>
                     <p className="text-xs text-slate-300 leading-tight">
                        <span className="font-black text-white">{notif.user}</span> {notif.action} <span className="text-primary font-bold italic">{notif.context}</span>
                     </p>
                     <p className="text-[10px] text-slate-500 mt-1 font-mono">{notif.time} atrás</p>
                  </div>
               </div>
            ))}
         </div>
      </PopoverContent>
    </Popover>
  );
}
