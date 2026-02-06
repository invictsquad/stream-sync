import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Scissors, Share2 } from 'lucide-react';
import { toast } from "sonner";

export function ClipButton() {
  const handleClip = () => {
     toast.success("Clipe criado!", { description: "Disponível em sua biblioteca." });
  };

  return (
    <Dialog>
       <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
             <Scissors size={20} />
          </Button>
       </DialogTrigger>
       <DialogContent className="bg-zinc-900 border-white/10 text-white">
          <DialogHeader>
             <DialogTitle className="font-black italic uppercase flex items-center gap-2">
                <Scissors className="text-primary" /> Criar Clipe
             </DialogTitle>
          </DialogHeader>

          <div className="aspect-video bg-black rounded-xl border border-white/10 relative overflow-hidden">
             {/* Mock Video Preview */}
             <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xs text-zinc-500 font-mono">PREVIEW DO CLIPE (30s)</p>
             </div>
          </div>

          <div className="space-y-4">
             <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-zinc-400">Título</label>
                <Input placeholder="Jogada insana!" className="bg-black/40 border-white/10" />
             </div>
             <div className="flex gap-2">
                <Button onClick={handleClip} className="flex-1 btn-gold font-black uppercase">Publicar</Button>
                <Button variant="outline" size="icon"><Share2 size={18}/></Button>
             </div>
          </div>
       </DialogContent>
    </Dialog>
  );
}
