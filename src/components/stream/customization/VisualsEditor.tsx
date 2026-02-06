import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Upload, User, LayoutTemplate } from 'lucide-react';
import { toast } from "sonner";

export function VisualsEditor() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
        toast.success("Imagem carregada com sucesso!");
    }
  };

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Image size={16} className="text-primary" /> Identidade Visual
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-6">
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
              <div className="w-16 h-16 rounded-full bg-secondary border-2 border-white/10 flex items-center justify-center cursor-pointer hover:border-primary transition-colors" onClick={handleUploadClick}>
                 <User size={24} className="text-slate-500" />
              </div>
              <div className="flex-1">
                 <h4 className="text-xs font-bold text-white uppercase">Avatar</h4>
                 <p className="text-[10px] text-slate-500 mb-2">Recomendado: 256x256 (PNG/JPG)</p>
                 <Button size="sm" variant="outline" className="h-7 text-[9px]" onClick={handleUploadClick}>Alterar</Button>
              </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
              <div className="w-24 h-14 rounded-lg bg-secondary border-2 border-white/10 flex items-center justify-center cursor-pointer hover:border-primary transition-colors" onClick={handleUploadClick}>
                 <LayoutTemplate size={24} className="text-slate-500" />
              </div>
              <div className="flex-1">
                 <h4 className="text-xs font-bold text-white uppercase">Banner do Perfil</h4>
                 <p className="text-[10px] text-slate-500 mb-2">Recomendado: 1200x480</p>
                 <Button size="sm" variant="outline" className="h-7 text-[9px]" onClick={handleUploadClick}>Alterar</Button>
              </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/20 border border-white/5">
              <div className="w-24 h-14 rounded-lg bg-secondary border-2 border-dashed border-white/10 flex items-center justify-center cursor-pointer hover:border-primary transition-colors" onClick={handleUploadClick}>
                 <Upload size={24} className="text-slate-500" />
              </div>
              <div className="flex-1">
                 <h4 className="text-xs font-bold text-white uppercase">Tela Offline</h4>
                 <p className="text-[10px] text-slate-500 mb-2">1920x1080 (Obrigatório)</p>
                 <Button size="sm" variant="outline" className="h-7 text-[9px]" onClick={handleUploadClick}>Alterar</Button>
              </div>
          </div>
       </CardContent>
    </Card>
  );
}
