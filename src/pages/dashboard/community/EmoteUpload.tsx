import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Image as ImageIcon } from 'lucide-react';

export default function EmoteUpload() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Upload de Emotes</h1>
         <p className="text-muted-foreground">Adicione novos emotes para seus inscritos.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         <Card className="bg-card/30 border-white/5 h-fit">
            <CardHeader>
               <CardTitle className="font-black italic uppercase text-lg">Novo Emote</CardTitle>
               <CardDescription>Envie uma imagem quadrada (PNG/GIF) até 1MB.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="border-2 border-dashed border-zinc-700 bg-black/20 rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                  <Upload size={32} className="text-zinc-500 mb-2" />
                  <p className="text-sm font-bold text-zinc-400">Arraste ou clique para enviar</p>
               </div>

               <div className="space-y-2">
                  <Label>Código do Emote</Label>
                  <div className="flex items-center gap-2">
                     <span className="bg-black/40 px-3 py-2 rounded text-zinc-500 font-bold font-mono text-sm border border-white/10">PRO_</span>
                     <Input placeholder="Hype" className="bg-black/20 uppercase font-bold" />
                  </div>
               </div>

               <Button className="w-full btn-gold font-black uppercase">Enviar para Revisão</Button>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="font-black italic uppercase text-lg">Preview</CardTitle>
               <CardDescription>Como seu emote aparecerá no chat.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 flex flex-col items-center justify-center py-12">
               <div className="flex items-end gap-8 bg-zinc-950 p-8 rounded-xl border border-white/10">
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-[112px] h-[112px] bg-zinc-800 rounded flex items-center justify-center border border-white/5">
                        <ImageIcon className="text-zinc-600" size={40}/>
                     </div>
                     <span className="text-[10px] text-zinc-500 font-mono">112px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-[56px] h-[56px] bg-zinc-800 rounded flex items-center justify-center border border-white/5">
                        <ImageIcon className="text-zinc-600" size={24}/>
                     </div>
                     <span className="text-[10px] text-zinc-500 font-mono">56px</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-[28px] h-[28px] bg-zinc-800 rounded flex items-center justify-center border border-white/5">
                        <ImageIcon className="text-zinc-600" size={16}/>
                     </div>
                     <span className="text-[10px] text-zinc-500 font-mono">28px</span>
                  </div>
               </div>

               <div className="bg-black/40 w-full p-4 rounded text-sm flex gap-2 items-center">
                  <span className="font-bold text-primary">User123:</span>
                  <span className="text-white">Que jogada incrível!</span>
                  <div className="w-7 h-7 bg-zinc-700 rounded animate-pulse" />
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
