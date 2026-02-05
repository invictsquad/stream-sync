import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserX, Search, Undo2 } from 'lucide-react';
import { toast } from "sonner";

const MOCK_BANS = [
  { id: 1, user: 'Troll_Master', reason: 'Discurso de ódio', date: '05/10/2023' },
  { id: 2, user: 'SpamBot_9000', reason: 'Links suspeitos', date: '01/10/2023' },
  { id: 3, user: 'Hater_Sem_Futuro', reason: 'Assédio', date: '28/09/2023' },
];

export function BannedUsers() {
  const [bans, setBans] = useState(MOCK_BANS);
  const [search, setSearch] = useState('');

  const handleUnban = (id: number, name: string) => {
    setBans(bans.filter(b => b.id !== id));
    toast.success(`${name} foi desbanido.`);
  };

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <UserX size={16} className="text-red-500" /> Usuários Banidos
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="relative">
             <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
             <Input
                placeholder="Buscar usuário..."
                className="pl-9 bg-black/40 border-white/5 h-9 text-xs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
             />
          </div>
          <div className="space-y-2">
             {bans.filter(b => b.user.toLowerCase().includes(search.toLowerCase())).map(ban => (
                <div key={ban.id} className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/5">
                   <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                         <AvatarImage src={`https://i.pravatar.cc/150?u=${ban.user}`} />
                         <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                         <p className="text-xs font-bold text-slate-200">{ban.user}</p>
                         <p className="text-[9px] text-slate-500 uppercase">{ban.reason}</p>
                      </div>
                   </div>
                   <Button size="icon" variant="secondary" className="h-7 w-7 text-green-500 hover:text-green-400" onClick={() => handleUnban(ban.id, ban.user)}>
                      <Undo2 size={14} />
                   </Button>
                </div>
             ))}
             {bans.length === 0 && <p className="text-xs text-slate-500 text-center py-4">Nenhum banimento ativo.</p>}
          </div>
       </CardContent>
    </Card>
  );
}
