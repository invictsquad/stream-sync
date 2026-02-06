import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Users } from 'lucide-react';
import { toast } from "sonner";

export function RaidManager() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRaid = (channel: string) => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        toast.success(`Raid iniciada para ${channel}!`);
    }, 2000);
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader>
        <CardTitle className="text-lg font-black italic uppercase text-white">Iniciar Raid / Host</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
            <Input
                placeholder="Buscar canal para raid..."
                className="pl-10 bg-black/20 border-white/10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="space-y-2">
            <p className="text-xs font-bold text-zinc-500 uppercase">Canais Sugeridos</p>
            {["gaules", "alanzoka", "casimiro"].map((channel) => (
                <div key={channel} className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback>{channel[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-bold text-white capitalize">{channel}</p>
                            <p className="text-xs text-zinc-500">Valorant</p>
                        </div>
                    </div>
                    <Button size="sm" variant="secondary" onClick={() => handleRaid(channel)} disabled={loading}>
                        <Users size={14} className="mr-2" />
                        Raid
                    </Button>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
