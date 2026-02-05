import React, { useState } from 'react';
import { Megaphone, Upload, Trash2, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function SponsorManager() {
  const [isActive, setIsActive] = useState(true);

  const handleUpload = () => {
    toast.success("Banner enviado com sucesso!");
  };

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Megaphone size={16} /> Patrocinadores
        </CardTitle>
        <Switch checked={isActive} onCheckedChange={setIsActive} />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border border-dashed border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors cursor-pointer" onClick={handleUpload}>
           <Upload size={24} className="text-slate-500" />
           <p className="text-[10px] text-slate-500 font-bold uppercase">Upload Banner (300x600)</p>
        </div>

        <div className="space-y-2">
           <p className="text-[10px] text-slate-500 font-black uppercase mb-2">Ativos Agora</p>
           <div className="relative group rounded-lg overflow-hidden">
              <img src="https://placehold.co/300x100/1a1a1a/FFF?text=Sponsor+1" alt="Sponsor" className="w-full h-16 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
              <button className="absolute top-1 right-1 bg-red-500 p-1 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={12} /></button>
              {isActive && <div className="absolute bottom-1 right-1 bg-green-500 text-black text-[8px] font-black px-1 rounded flex items-center gap-1"><CheckCircle2 size={8} /> LIVE</div>}
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
