import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from 'lucide-react';

interface ChatRulesProps {
  isOpen: boolean;
  onAccept: () => void;
  streamerName: string;
}

export function ChatRules({ isOpen, onAccept, streamerName }: ChatRulesProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-zinc-900 border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-black italic uppercase text-primary">
             <ShieldAlert size={20} /> Regras do Chat de {streamerName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4 text-sm text-zinc-300">
           <p>Antes de enviar mensagens, por favor concorde com as seguintes regras:</p>
           <ul className="list-disc pl-5 space-y-2">
              <li>Seja gentil e respeitoso com todos.</li>
              <li>Não envie spam ou links maliciosos.</li>
              <li>Sem discurso de ódio, racismo ou discriminação.</li>
              <li>Respeite os moderadores.</li>
           </ul>
        </div>

        <DialogFooter>
           <Button onClick={onAccept} className="w-full btn-gold font-black uppercase">Eu Concordo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
