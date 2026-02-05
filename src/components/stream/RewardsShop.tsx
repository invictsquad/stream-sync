import React, { useState } from 'react';
import { Sparkles, X, MessageSquare, Droplets, UserCheck, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { motion, AnimatePresence } from 'framer-motion';

const REWARDS = [
  { id: 1, title: "Destacar Mensagem", cost: 100, icon: MessageSquare, color: "text-blue-400" },
  { id: 2, title: "Hidrate-se!", cost: 500, icon: Droplets, color: "text-cyan-400" },
  { id: 3, title: "Mod por 24h", cost: 10000, icon: UserCheck, color: "text-emerald-400" },
  { id: 4, title: "Escolher Música", cost: 1500, icon: Zap, color: "text-yellow-400" },
];

interface RewardsShopProps {
  isOpen: boolean;
  onClose: () => void;
  balance: number;
  onRedeem: (cost: number) => void;
}

export function RewardsShop({ isOpen, onClose, balance, onRedeem }: RewardsShopProps) {
  const handleRedeem = (reward: typeof REWARDS[0]) => {
    if (balance >= reward.cost) {
      onRedeem(reward.cost);
      toast.success(`Resgatado: ${reward.title}!`, {
        icon: <reward.icon size={16} className={reward.color} />
      });
      onClose();
    } else {
      toast.error("Pontos insuficientes!");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-secondary border border-primary/30 rounded-[2.5rem] p-8 max-w-sm w-full relative shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors"><X size={24}/></button>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-3 rounded-2xl">
                <Sparkles size={24} className="text-primary" />
              </div>
              <div>
                 <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">Loja de Pontos</h3>
                 <p className="text-xs text-primary font-bold">{balance} Pontos</p>
              </div>
            </div>

            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-3">
                {REWARDS.map((reward) => (
                  <button
                    key={reward.id}
                    onClick={() => handleRedeem(reward)}
                    className="w-full flex items-center justify-between bg-background border border-white/5 p-4 rounded-2xl hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                       <div className={`bg-black/40 p-2 rounded-lg ${reward.color}`}>
                          <reward.icon size={18} />
                       </div>
                       <span className="text-xs font-black uppercase italic text-slate-300 group-hover:text-white text-left">{reward.title}</span>
                    </div>
                    <div className="bg-primary/10 px-2 py-1 rounded text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                       {reward.cost}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
