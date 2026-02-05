import React, { useState } from 'react';
import { Smile, Upload, X, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const INITIAL_EMOTES = [
  { id: 1, name: "pog", url: "https://cdn.7tv.app/emote/60ae3e54259ac5a73e56a426/1x.webp", tier: 1 },
  { id: 2, name: "kekw", url: "https://cdn.7tv.app/emote/603cb219c20d020014423c34/1x.webp", tier: 1 },
  { id: 3, name: "omegalul", url: "https://cdn.7tv.app/emote/60ae3f56259ac5a73e56a658/1x.webp", tier: 1 },
  { id: 4, name: "monkaS", url: "https://cdn.7tv.app/emote/60ae4456259ac5a73e56b46c/1x.webp", tier: 2 },
  { id: 5, name: "peepoLove", url: "https://cdn.7tv.app/emote/60ae8d9ff39a7552b658b60d/1x.webp", tier: 3 },
];

export function EmoteManager() {
  const [emotes, setEmotes] = useState(INITIAL_EMOTES);

  const handleDelete = (id: number) => {
    setEmotes(emotes.filter(e => e.id !== id));
    toast.success("Emote removido.");
  };

  const handleUpload = () => {
    toast.info("Simulação: Janela de upload aberta.");
  };

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Smile size={16} /> Emotes do Canal
        </CardTitle>
        <Button size="sm" className="btn-gold h-7 text-[10px] uppercase font-black px-3" onClick={handleUpload}>
           <Upload size={12} className="mr-2" /> Upload
        </Button>
      </CardHeader>
      <CardContent>
         <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {emotes.map((emote) => (
               <div key={emote.id} className="relative group bg-black/40 p-2 rounded-xl border border-white/5 hover:border-primary/50 transition-all flex flex-col items-center">
                  <div className="h-10 w-10 flex items-center justify-center mb-2">
                     <img src={emote.url} alt={emote.name} className="max-h-full max-w-full" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 truncate w-full text-center">{emote.name}</span>

                  {emote.tier > 1 && (
                     <div className="absolute top-1 left-1 bg-yellow-500/20 text-yellow-500 p-0.5 rounded">
                        <Lock size={8} />
                     </div>
                  )}

                  <button
                    onClick={() => handleDelete(emote.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                     <X size={10} />
                  </button>
               </div>
            ))}

            <button onClick={handleUpload} className="bg-white/5 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-primary/30 transition-all">
               <Upload size={16} className="text-slate-500" />
               <span className="text-[8px] uppercase font-black text-slate-500">Adicionar</span>
            </button>
         </div>

         <div className="mt-4 pt-4 border-t border-white/5 flex gap-4 text-[10px] text-slate-500 font-bold uppercase">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-slate-500 rounded-full"/> Tier 1 (Livre)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-yellow-500 rounded-full"/> Tier 2 (Subs)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-fuchsia-500 rounded-full"/> Tier 3 (Elite)</span>
         </div>
      </CardContent>
    </Card>
  );
}
