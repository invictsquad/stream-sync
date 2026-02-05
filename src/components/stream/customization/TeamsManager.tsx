import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Shield, Crown } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: 'Gaules', role: 'Líder', avatar: 'https://i.pravatar.cc/150?u=gaules' },
  { name: 'Fallen', role: 'Membro', avatar: 'https://i.pravatar.cc/150?u=fallen' },
  { name: 'Boltz', role: 'Membro', avatar: 'https://i.pravatar.cc/150?u=boltz' },
];

export function TeamsManager() {
  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Users size={16} className="text-primary" /> Squad / Time
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-primary/20 to-transparent p-4 rounded-xl border border-primary/20 mb-4">
             <div className="flex items-center justify-between">
                <div>
                   <h3 className="text-lg font-black italic uppercase text-white">Tribo Gaules</h3>
                   <p className="text-[10px] text-primary font-bold uppercase">Time Oficial</p>
                </div>
                <Crown className="text-primary" size={24} />
             </div>
          </div>

          <div className="space-y-2">
             {TEAM_MEMBERS.map((member, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/5">
                   <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                         <AvatarImage src={member.avatar} />
                         <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                         <p className="text-xs font-bold text-slate-200">{member.name}</p>
                         <p className="text-[9px] text-slate-500 uppercase">{member.role}</p>
                      </div>
                   </div>
                </div>
             ))}
          </div>
          <Button className="w-full btn-gold h-9 text-[10px]">Convidar Membro</Button>
       </CardContent>
    </Card>
  );
}
