import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, Heart, Star, MessageSquare } from 'lucide-react';

export function NotificationCenter() {
  const notifications = [
    { type: 'follow', user: 'Joaozinho123', time: '2 min', icon: Heart, color: 'text-red-500' },
    { type: 'sub', user: 'MariaGamer', time: '15 min', icon: Star, color: 'text-yellow-500' },
    { type: 'mention', user: 'Mod_Cleber', time: '1h', icon: MessageSquare, color: 'text-blue-500' },
  ];

  return (
    <Card className="bg-zinc-900 border-zinc-800 w-[300px]">
      <CardHeader className="pb-3 border-b border-white/5">
        <CardTitle className="text-sm font-bold uppercase text-zinc-400 flex items-center gap-2">
            <Bell size={14} /> Notificações
        </CardTitle>
      </CardHeader>
      <ScrollArea className="h-[300px]">
        <div className="p-2 space-y-1">
            {notifications.map((notif, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded hover:bg-white/5 transition-colors cursor-pointer">
                    <div className={`mt-1 ${notif.color}`}>
                        <notif.icon size={16} />
                    </div>
                    <div>
                        <p className="text-sm text-white">
                            <span className="font-bold">{notif.user}</span>
                            {notif.type === 'follow' && ' começou a te seguir.'}
                            {notif.type === 'sub' && ' se inscreveu no canal!'}
                            {notif.type === 'mention' && ' te mencionou no chat.'}
                        </p>
                        <p className="text-[10px] text-zinc-500 mt-1">{notif.time}</p>
                    </div>
                </div>
            ))}
        </div>
      </ScrollArea>
      <div className="p-2 border-t border-white/5">
        <Button variant="ghost" size="sm" className="w-full text-xs text-zinc-500">
            Marcar todas como lidas
        </Button>
      </div>
    </Card>
  );
}
