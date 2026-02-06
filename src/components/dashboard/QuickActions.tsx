import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Mic, Video, Users, Gift, Share2 } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="bg-card/30 border-white/5">
       <CardHeader>
          <CardTitle className="font-black italic uppercase text-sm text-zinc-400">Ações Rápidas</CardTitle>
       </CardHeader>
       <CardContent className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/10 hover:text-primary border-dashed border-zinc-700">
             <Mic size={20} />
             <span className="text-[10px] uppercase font-bold">Mute Mic</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-red-500/10 hover:text-red-500 border-dashed border-zinc-700">
             <Video size={20} />
             <span className="text-[10px] uppercase font-bold">Stop Cam</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-green-500/10 hover:text-green-500 border-dashed border-zinc-700">
             <Users size={20} />
             <span className="text-[10px] uppercase font-bold">Run Ad</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-purple-500/10 hover:text-purple-500 border-dashed border-zinc-700">
             <Gift size={20} />
             <span className="text-[10px] uppercase font-bold">Gift Sub</span>
          </Button>
       </CardContent>
    </Card>
  );
}
