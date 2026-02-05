import React, { useState, useEffect } from 'react';
import { Trophy, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function PredictionWidget() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [bluePoints, setBluePoints] = useState(25000);
  const [pinkPoints, setPinkPoints] = useState(15000);
  const [userVoted, setUserVoted] = useState<'blue' | 'pink' | null>(null);

  const totalPoints = bluePoints + pinkPoints;
  const bluePercentage = Math.round((bluePoints / totalPoints) * 100);
  const pinkPercentage = 100 - bluePercentage;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleVote = (team: 'blue' | 'pink') => {
    if (userVoted) return;
    setUserVoted(team);
    if (team === 'blue') setBluePoints(p => p + 1000);
    else setPinkPoints(p => p + 1000);
    toast.success(`Voto confirmado na opção ${team === 'blue' ? 'AZUL' : 'ROSA'}!`);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <Card className="bg-secondary/30 border border-white/5 mb-4 overflow-hidden">
      <CardHeader className="bg-black/20 pb-2 pt-3 px-4">
        <div className="flex justify-between items-start">
           <div>
              <p className="text-[10px] font-black uppercase text-slate-500 mb-1">Prediction em andamento</p>
              <h3 className="text-sm font-black italic uppercase text-white leading-tight">Quem fará mais kills no próximo round?</h3>
           </div>
           <div className="flex items-center gap-1 text-primary font-mono text-xs font-bold bg-primary/10 px-2 py-1 rounded">
              <Clock size={12} /> {formatTime(timeLeft)}
           </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
         <div className="flex h-32">
            {/* Blue Side */}
            <div className="flex-1 bg-blue-600/20 relative group hover:bg-blue-600/30 transition-colors cursor-pointer p-4 flex flex-col justify-between border-r border-white/5" onClick={() => handleVote('blue')}>
               <div className="flex justify-between items-center text-blue-400">
                  <span className="font-black text-xl italic">GAULES</span>
                  <span className="font-bold text-xs">{bluePercentage}%</span>
               </div>
               <div className="text-blue-300">
                  <div className="text-[10px] uppercase font-bold mb-1">Total Points</div>
                  <div className="font-mono text-sm">{bluePoints.toLocaleString()}</div>
               </div>
               {userVoted === 'blue' && <div className="absolute inset-0 border-2 border-blue-500 bg-blue-500/10 z-10 flex items-center justify-center"><CheckBadge color="blue" /></div>}
            </div>

            {/* Pink Side */}
            <div className="flex-1 bg-pink-600/20 relative group hover:bg-pink-600/30 transition-colors cursor-pointer p-4 flex flex-col justify-between" onClick={() => handleVote('pink')}>
               <div className="flex justify-between items-center text-pink-400">
                  <span className="font-black text-xl italic">FALLEN</span>
                  <span className="font-bold text-xs">{pinkPercentage}%</span>
               </div>
               <div className="text-pink-300 text-right">
                  <div className="text-[10px] uppercase font-bold mb-1">Total Points</div>
                  <div className="font-mono text-sm">{pinkPoints.toLocaleString()}</div>
               </div>
               {userVoted === 'pink' && <div className="absolute inset-0 border-2 border-pink-500 bg-pink-500/10 z-10 flex items-center justify-center"><CheckBadge color="pink" /></div>}
            </div>
         </div>

         {userVoted && (
            <div className="bg-black/40 p-2 text-center text-[10px] text-slate-400 font-bold uppercase">
               Voto registrado • Retorno potencial: <span className="text-primary">1:1.5</span>
            </div>
         )}
      </CardContent>
    </Card>
  );
}

const CheckBadge = ({ color }: { color: string }) => (
   <div className={`bg-black/50 backdrop-blur rounded-full px-3 py-1 text-xs font-black uppercase text-${color}-400 border border-${color}-400`}>
      Votado
   </div>
);
