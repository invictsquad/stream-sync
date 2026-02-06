import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldAlert, Trash2, Plus } from 'lucide-react';
import { toast } from "sonner";

const MOCK_MODS = [
  { id: 1, user: 'Mod_Alfa', date: '01/01/2023' },
  { id: 2, user: 'CleanChat', date: '15/06/2023' },
];

export function Moderators() {
  const [mods, setMods] = useState(MOCK_MODS);
  const [newMod, setNewMod] = useState('');

  const handleRemove = (id: number, name: string) => {
    setMods(mods.filter(m => m.id !== id));
    toast.success(`${name} removido da moderação.`);
  };

  const handleAdd = () => {
    if (!newMod) return;
    setMods([...mods, { id: Date.now(), user: newMod, date: new Date().toLocaleDateString() }]);
    setNewMod('');
    toast.success(`${newMod} adicionado como moderador!`);
  };

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <ShieldAlert size={16} className="text-blue-500" /> Moderadores
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="flex gap-2">
             <Input
                placeholder="Nome do usuário..."
                className="bg-black/40 border-white/5 h-9 text-xs"
                value={newMod}
                onChange={(e) => setNewMod(e.target.value)}
             />
             <Button size="icon" className="h-9 w-9 bg-blue-500 hover:bg-blue-600" onClick={handleAdd}>
                <Plus size={16} />
             </Button>
          </div>
          <div className="space-y-2">
             {mods.map(mod => (
                <div key={mod.id} className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/5">
                   <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-blue-500/30">
                         <AvatarImage src={`https://i.pravatar.cc/150?u=${mod.user}`} />
                         <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <div>
                         <p className="text-xs font-bold text-slate-200">{mod.user}</p>
                         <p className="text-[9px] text-slate-500 uppercase">Desde: {mod.date}</p>
                      </div>
                   </div>
                   <Button size="icon" variant="secondary" className="h-7 w-7 text-red-500 hover:text-red-400" onClick={() => handleRemove(mod.id, mod.user)}>
                      <Trash2 size={14} />
                   </Button>
                </div>
             ))}
          </div>
       </CardContent>
    </Card>
  );
}
