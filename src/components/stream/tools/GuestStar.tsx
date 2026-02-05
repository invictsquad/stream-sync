import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Video, Copy, Mic, Plus } from 'lucide-react';
import { toast } from "sonner";

export function GuestStar() {
  const inviteLink = "https://guest.clutch.live/invite/abc-123";

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Users size={16} className="text-primary" /> Convidar Participante
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="bg-black/40 p-4 rounded-xl text-center space-y-2">
             <div className="flex justify-center -space-x-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-black flex items-center justify-center"><Mic size={16}/></div>
                <div className="w-10 h-10 rounded-full bg-slate-700 border-2 border-black flex items-center justify-center border-dashed border-slate-500"><Plus size={16} className="text-slate-500"/></div>
             </div>
             <p className="text-[10px] text-slate-500 uppercase font-bold">Slot de Convidado Disponível</p>
          </div>

          <div className="space-y-2">
             <p className="text-[9px] text-slate-500 font-bold uppercase">Link de Convite (Válido por 30min)</p>
             <div className="flex gap-2">
                <div className="flex-1 bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-[10px] font-mono text-slate-300 truncate">
                   {inviteLink}
                </div>
                <Button size="icon" variant="secondary" className="h-8 w-8" onClick={() => toast.success("Link copiado!")}>
                   <Copy size={14} />
                </Button>
             </div>
          </div>
       </CardContent>
    </Card>
  );
}
