import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Crown, Medal } from 'lucide-react';

const TOP_STREAMERS = [
  { rank: 1, name: "Gaules", viewers: "150K", avatar: "https://i.pravatar.cc/150?u=gaules" },
  { rank: 2, name: "Alanzoka", viewers: "45K", avatar: "https://i.pravatar.cc/150?u=alanzoka" },
  { rank: 3, name: "PaulinhoLoko", viewers: "32K", avatar: "https://i.pravatar.cc/150?u=paulinho" },
];

export default function Leaderboards() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-center text-center mb-8">
         <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-sm">Rankings Globais</h1>
            <p className="text-slate-500 font-bold mt-2">Os maiores criadores da plataforma.</p>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 items-end mb-12">
         {/* Rank 2 */}
         <Card className="bg-secondary/30 border-white/5 relative order-2 md:order-1 transform md:translate-y-4">
            <CardContent className="p-6 flex flex-col items-center gap-4">
               <div className="relative">
                  <Avatar className="w-20 h-20 border-4 border-slate-400">
                     <AvatarImage src={TOP_STREAMERS[1].avatar} />
                     <AvatarFallback>{TOP_STREAMERS[1].name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-400 text-black px-2 py-0.5 rounded text-xs font-black uppercase">#2</div>
               </div>
               <div className="text-center">
                  <h3 className="font-black italic uppercase text-lg">{TOP_STREAMERS[1].name}</h3>
                  <p className="text-sm font-bold text-slate-500">{TOP_STREAMERS[1].viewers}</p>
               </div>
            </CardContent>
         </Card>

         {/* Rank 1 */}
         <Card className="bg-gradient-to-b from-yellow-500/20 to-transparent border-yellow-500/50 relative order-1 md:order-2 z-10 scale-110">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-yellow-500">
               <Crown size={32} fill="currentColor" />
            </div>
            <CardContent className="p-6 flex flex-col items-center gap-4 pt-10">
               <div className="relative">
                  <Avatar className="w-24 h-24 border-4 border-yellow-500 ring-4 ring-yellow-500/20">
                     <AvatarImage src={TOP_STREAMERS[0].avatar} />
                     <AvatarFallback>{TOP_STREAMERS[0].name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded text-sm font-black uppercase">#1</div>
               </div>
               <div className="text-center">
                  <h3 className="font-black italic uppercase text-xl text-yellow-500">{TOP_STREAMERS[0].name}</h3>
                  <p className="text-base font-bold text-white">{TOP_STREAMERS[0].viewers}</p>
               </div>
            </CardContent>
         </Card>

         {/* Rank 3 */}
         <Card className="bg-secondary/30 border-white/5 relative order-3 transform md:translate-y-8">
            <CardContent className="p-6 flex flex-col items-center gap-4">
               <div className="relative">
                  <Avatar className="w-20 h-20 border-4 border-orange-700">
                     <AvatarImage src={TOP_STREAMERS[2].avatar} />
                     <AvatarFallback>{TOP_STREAMERS[2].name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-700 text-white px-2 py-0.5 rounded text-xs font-black uppercase">#3</div>
               </div>
               <div className="text-center">
                  <h3 className="font-black italic uppercase text-lg">{TOP_STREAMERS[2].name}</h3>
                  <p className="text-sm font-bold text-slate-500">{TOP_STREAMERS[2].viewers}</p>
               </div>
            </CardContent>
         </Card>
      </div>

      <Card className="bg-secondary/10 border-white/5">
         <CardContent className="p-0">
            {[4, 5, 6, 7, 8, 9, 10].map((rank) => (
               <div key={rank} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                     <span className="font-black text-slate-500 w-6 text-center">{rank}</span>
                     <Avatar className="w-10 h-10 border border-white/10">
                        <AvatarFallback>U{rank}</AvatarFallback>
                     </Avatar>
                     <span className="font-bold text-slate-300">Streamer_{rank}</span>
                  </div>
                  <span className="font-mono text-sm text-slate-500">12K</span>
               </div>
            ))}
         </CardContent>
      </Card>
    </div>
  );
}
