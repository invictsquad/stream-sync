import React, { useState } from 'react';
import {
  Facebook, Twitter, Linkedin, Copy, Check, MessageCircle, Share2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function SocialShare({ url, title }: { url: string, title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Link copiado!");
  };

  const share = (platform: string) => {
    // Simulação
    toast.info(`Compartilhando no ${platform}...`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-slate-500 text-xs font-black hover:text-primary transition-all uppercase italic">
           <Share2 size={18} /> Compartilhar
        </button>
      </DialogTrigger>
      <DialogContent className="bg-secondary border border-white/10 sm:max-w-md">
        <DialogHeader>
           <DialogTitle className="text-xl font-black italic uppercase text-white">Compartilhar Stream</DialogTitle>
           <div className="sr-only">Opções de compartilhamento</div>
        </DialogHeader>

        <div className="grid grid-cols-4 gap-4 py-4">
           <Button variant="outline" className="flex flex-col h-20 gap-2 border-white/10 hover:bg-blue-600 hover:text-white transition-colors" onClick={() => share('Facebook')}>
              <Facebook size={24} /> <span className="text-[9px] uppercase font-black">Facebook</span>
           </Button>
           <Button variant="outline" className="flex flex-col h-20 gap-2 border-white/10 hover:bg-sky-500 hover:text-white transition-colors" onClick={() => share('Twitter')}>
              <Twitter size={24} /> <span className="text-[9px] uppercase font-black">Twitter</span>
           </Button>
           <Button variant="outline" className="flex flex-col h-20 gap-2 border-white/10 hover:bg-green-500 hover:text-white transition-colors" onClick={() => share('WhatsApp')}>
              <MessageCircle size={24} /> <span className="text-[9px] uppercase font-black">WhatsApp</span>
           </Button>
           <Button variant="outline" className="flex flex-col h-20 gap-2 border-white/10 hover:bg-blue-700 hover:text-white transition-colors" onClick={() => share('LinkedIn')}>
              <Linkedin size={24} /> <span className="text-[9px] uppercase font-black">LinkedIn</span>
           </Button>
        </div>

        <div className="flex gap-2 bg-black/40 p-2 rounded-xl border border-white/10">
           <Input readOnly value={url} className="border-none bg-transparent h-10 text-xs" />
           <Button size="icon" onClick={handleCopy} className="h-10 w-10 shrink-0 btn-gold rounded-lg">
              {copied ? <Check size={16} /> : <Copy size={16} />}
           </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
