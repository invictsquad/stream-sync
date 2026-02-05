import React, { useState } from 'react';
import { Swords, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ONLINE_STREAMERS = [
  { id: 1, name: "Gaules", viewers: "150K", avatar: "https://i.pravatar.cc/150?u=gaules" },
  { id: 2, name: "Cellbit", viewers: "45K", avatar: "https://i.pravatar.cc/150?u=cellbit" },
  { id: 3, name: "Alanzoka", viewers: "80K", avatar: "https://i.pravatar.cc/150?u=alanzoka" },
];

export function RaidManager() {
  const [search, setSearch] = useState("");

  const handleRaid = (name: string) => {
    toast.success(`Raid iniciada para ${name}!`, {
      description: "Seus espectadores serão redirecionados em 10s.",
      icon: <Swords className="text-primary" />
    });
  };

  const filtered = ONLINE_STREAMERS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Swords size={16} /> Iniciar Raid
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
           <Search size={14} className="absolute left-3 top-3 text-slate-500" />
           <Input
             placeholder="Buscar streamer..."
             className="pl-9 bg-black/20 border-white/10 h-10 text-xs"
             value={search}
             onChange={e => setSearch(e.target.value)}
           />
        </div>

        <div className="space-y-2">
           {filtered.map(streamer => (
             <div key={streamer.id} className="flex items-center justify-between p-2 hover:bg-white/5 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                   <Avatar className="h-8 w-8"><AvatarImage src={streamer.avatar} /><AvatarFallback><User /></AvatarFallback></Avatar>
                   <div>
                      <p className="text-xs font-black text-white">{streamer.name}</p>
                      <p className="text-[10px] text-primary font-bold">{streamer.viewers} viewers</p>
                   </div>
                </div>
                <Button size="sm" onClick={() => handleRaid(streamer.name)} className="h-7 text-[10px] uppercase font-black bg-primary/20 hover:bg-primary text-primary hover:text-black">
                   Raid
                </Button>
             </div>
           ))}
        </div>
      </CardContent>
    </Card>
  );
}
