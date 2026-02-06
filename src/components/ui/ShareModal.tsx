import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { toast } from "sonner";

export function ShareModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const url = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copiado para a área de transferência!");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-black italic uppercase">Compartilhar Transmissão</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-4 py-6">
           <Button size="icon" className="rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 h-12 w-12"><Twitter fill="white" size={24} /></Button>
           <Button size="icon" className="rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 h-12 w-12"><Facebook fill="white" size={24} /></Button>
           <Button size="icon" className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 h-12 w-12"><MessageCircle fill="white" size={24} /></Button>
        </div>
        <div className="flex items-center gap-2">
           <Input value={url} readOnly className="bg-black/50 border-white/10 text-slate-400" />
           <Button onClick={copyToClipboard} size="icon" variant="secondary"><Copy size={16} /></Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
