import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface PollOption {
  id: number;
  text: string;
  votes: number;
}

export function PollWidget() {
  const [isActive, setIsActive] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);
  const [options, setOptions] = useState<PollOption[]>([
    { id: 1, text: "CS2", votes: 45 },
    { id: 2, text: "Valorant", votes: 32 },
    { id: 3, text: "GTA RP", votes: 12 }
  ]);

  const totalVotes = options.reduce((acc, curr) => acc + curr.votes, 0);

  const handleVote = (id: number) => {
    setHasVoted(true);
    setOptions(prev => prev.map(opt =>
      opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
    ));
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setIsActive(false);
    }
  }, [timeLeft]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="bg-secondary/90 backdrop-blur-md border border-primary/20 p-4 rounded-xl shadow-xl w-full max-w-xs mb-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 45, ease: "linear" }}
            className="h-full bg-primary"
          />
        </div>

        <div className="flex items-center justify-between mb-3 mt-2">
          <h3 className="text-xs font-black uppercase italic text-white flex items-center gap-2">
            <BarChart2 size={14} className="text-primary" /> Enquete Ativa
          </h3>
          <span className="text-[10px] font-mono text-slate-400">{timeLeft}s</span>
        </div>

        <p className="text-sm font-bold text-white mb-4 leading-tight">
          Qual jogo devo jogar a seguir?
        </p>

        <div className="space-y-2">
          {options.map((opt) => {
            const percentage = totalVotes > 0 ? Math.round((opt.votes / totalVotes) * 100) : 0;

            return (
              <div key={opt.id} className="relative">
                {hasVoted ? (
                  <div className="bg-black/40 rounded-lg p-2 relative overflow-hidden border border-white/5">
                     <div className="flex justify-between items-center relative z-10 text-xs font-bold mb-1">
                        <span>{opt.text}</span>
                        <span>{percentage}%</span>
                     </div>
                     <Progress value={percentage} className="h-1.5 bg-white/10" />
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full justify-between h-9 text-xs font-bold border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all"
                    onClick={() => handleVote(opt.id)}
                  >
                    {opt.text}
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-3 text-[9px] text-center text-slate-500 uppercase font-black tracking-widest">
          {totalVotes} Votos computados
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
