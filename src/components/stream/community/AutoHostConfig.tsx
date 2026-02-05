import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tv, Plus, X } from 'lucide-react';

export function AutoHostConfig() {
  const [channels, setChannels] = useState(['Gaules', 'Nobru']);
  const [input, setInput] = useState('');

  const addChannel = () => {
    if (input && !channels.includes(input)) {
      setChannels([...channels, input]);
      setInput('');
    }
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Tv size={16} className="text-primary" /> Auto-Host
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
             <div>
                <p className="text-xs font-bold text-slate-200">Hospedar Canais Automaticamente</p>
                <p className="text-[9px] text-slate-500 uppercase">Quando você estiver offline</p>
             </div>
             <Switch />
          </div>

          <div className="space-y-2">
             <p className="text-[9px] text-slate-500 font-bold uppercase">Lista de Prioridade</p>
             <div className="flex gap-2">
                <Input
                   placeholder="Nome do canal..."
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   className="h-8 text-xs bg-black/40 border-white/5"
                />
                <Button size="sm" className="h-8 w-8 p-0" onClick={addChannel}><Plus size={14} /></Button>
             </div>
             <div className="flex flex-wrap gap-2 mt-2">
                {channels.map(channel => (
                   <div key={channel} className="bg-primary/10 text-primary border border-primary/20 rounded-md px-2 py-1 text-[10px] font-bold uppercase flex items-center gap-2">
                      {channel}
                      <button onClick={() => setChannels(channels.filter(c => c !== channel))} className="hover:text-white"><X size={10} /></button>
                   </div>
                ))}
             </div>
          </div>
       </CardContent>
    </Card>
  );
}
