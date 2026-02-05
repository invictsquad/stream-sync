import React from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LeaderboardUser {
  rank: number;
  name: string;
  amount: number; // Value in Diamonds/Points
  avatar: string;
}

const MOCK_LEADERBOARD: LeaderboardUser[] = [
  { rank: 1, name: "KillerQueen", amount: 50000, avatar: "https://i.pravatar.cc/150?u=1" },
  { rank: 2, name: "ProGamer99", amount: 25000, avatar: "https://i.pravatar.cc/150?u=2" },
  { rank: 3, name: "RichDude", amount: 10000, avatar: "https://i.pravatar.cc/150?u=3" },
  { rank: 4, name: "FanBoy", amount: 5000, avatar: "https://i.pravatar.cc/150?u=4" },
  { rank: 5, name: "Lurker", amount: 1000, avatar: "https://i.pravatar.cc/150?u=5" },
];

export function LeaderboardWidget() {
  const renderList = (users: LeaderboardUser[]) => (
    <div className="space-y-3 mt-4">
      {users.map((user) => (
        <div key={user.rank} className="flex items-center justify-between bg-black/40 p-3 rounded-xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all">
          <div className="flex items-center gap-4 relative z-10">
            <div className="font-black italic text-lg w-6 text-center text-slate-500 group-hover:text-white transition-colors">
              {user.rank === 1 ? <Crown size={20} className="text-yellow-400 mx-auto" /> :
               user.rank === 2 ? <Medal size={20} className="text-slate-300 mx-auto" /> :
               user.rank === 3 ? <Medal size={20} className="text-amber-600 mx-auto" /> :
               `#${user.rank}`}
            </div>
            <Avatar className="h-10 w-10 border-2 border-white/10 group-hover:border-primary transition-colors">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xs font-black uppercase italic text-white">{user.name}</p>
              <p className="text-[10px] text-primary font-bold">{user.amount.toLocaleString()} Diamonds</p>
            </div>
          </div>
          {user.rank === 1 && <div className="absolute inset-0 bg-yellow-400/5 blur-xl" />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-secondary/30 border border-white/5 p-6 rounded-3xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-yellow-400/10 p-3 rounded-xl">
           <Trophy size={20} className="text-yellow-400" />
        </div>
        <h3 className="text-lg font-black italic text-white uppercase">Top Apoiadores</h3>
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="bg-black/40 border border-white/5 p-1 h-10 rounded-lg w-full justify-start">
          <TabsTrigger value="weekly" className="flex-1 h-8 text-[9px] uppercase font-black">Semanal</TabsTrigger>
          <TabsTrigger value="monthly" className="flex-1 h-8 text-[9px] uppercase font-black">Mensal</TabsTrigger>
          <TabsTrigger value="alltime" className="flex-1 h-8 text-[9px] uppercase font-black">Geral</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly">
          {renderList(MOCK_LEADERBOARD)}
        </TabsContent>
        <TabsContent value="monthly">
          {renderList([...MOCK_LEADERBOARD].reverse())}
        </TabsContent>
        <TabsContent value="alltime">
           {renderList(MOCK_LEADERBOARD)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
