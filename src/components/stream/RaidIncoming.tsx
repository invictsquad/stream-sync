import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export function RaidIncoming() {
  const [visible, setVisible] = useState(true);
  const [countdown, setCountdown] = useState(30);

  if (!visible) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-10 fade-in duration-500">
       <Card className="bg-primary border-4 border-black shadow-[0_0_20px_rgba(255,215,0,0.5)] w-[350px]">
          <CardContent className="p-4 relative">
             <button onClick={() => setVisible(false)} className="absolute top-2 right-2 text-black hover:bg-black/10 rounded-full p-1"><X size={16}/></button>

             <div className="flex items-center gap-4 mb-3">
                <Avatar className="w-12 h-12 border-2 border-black">
                   <AvatarImage src="https://i.pravatar.cc/150?u=raid" />
                   <AvatarFallback>RD</AvatarFallback>
                </Avatar>
                <div>
                   <h3 className="font-black italic uppercase text-black text-lg leading-none">Raid Incoming!</h3>
                   <p className="text-black/80 font-bold text-sm flex items-center gap-1"><Users size={14} /> 450 Raiders</p>
                </div>
             </div>

             <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-black uppercase text-black/60">
                   <span>Chegando em</span>
                   <span>{countdown}s</span>
                </div>
                <Progress value={(countdown / 30) * 100} className="h-2 bg-black/20" indicatorColor="bg-black" />
             </div>
          </CardContent>
       </Card>
    </div>
  );
}
