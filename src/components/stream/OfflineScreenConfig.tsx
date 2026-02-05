import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, Upload, Eye } from 'lucide-react';
import { toast } from "sonner";

export function OfflineScreenConfig() {
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      toast.success("Imagem carregada com sucesso!");
    }
  };

  return (
    <Card className="bg-secondary/30 border-white/5 overflow-hidden">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Image size={16} className="text-primary" /> Tela Offline
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="aspect-video bg-black/50 rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center relative group overflow-hidden">
             {image ? (
                <img src={image} alt="Offline Preview" className="w-full h-full object-cover" />
             ) : (
                <div className="text-center p-6">
                   <Upload className="mx-auto text-slate-500 mb-2" size={24} />
                   <p className="text-[10px] text-slate-500 font-bold uppercase">Arraste ou clique para enviar (1920x1080)</p>
                </div>
             )}
             <Input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleUpload}
             />
             {image && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Button variant="secondary" size="sm">Alterar Imagem</Button>
                </div>
             )}
          </div>
          <div className="flex gap-2">
             <Button className="flex-1 btn-gold text-[10px] h-9">Salvar Alterações</Button>
             <Button variant="secondary" className="h-9 px-3"><Eye size={16} /></Button>
          </div>
       </CardContent>
    </Card>
  );
}
