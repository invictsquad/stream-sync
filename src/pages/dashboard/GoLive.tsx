import React, { useState } from 'react';
import { Radio, Video, Mic, Hash, ArrowRight, Save, Layout, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StreamKeyManager } from '@/components/stream/StreamKeyManager';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function GoLive() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Minha Nova Transmissão");
  const [category, setCategory] = useState("games");
  const [tags, setTags] = useState("#fps #ranked");
  const [isSaving, setIsSaving] = useState(false);

  const handleStart = () => {
    setIsSaving(true);
    setTimeout(() => {
        setIsSaving(false);
        toast.success("Informações da live atualizadas!");
        toast.info("Conecte seu software de transmissão (OBS) para iniciar.");
        navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="space-y-6 p-4 md:p-8 pb-24 max-w-5xl mx-auto">
       <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
             <Radio className="text-red-500 animate-pulse" size={24} />
             <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Iniciar Transmissão</h1>
          </div>
          <Button onClick={handleStart} disabled={isSaving} className="btn-gold font-black uppercase tracking-wider">
             {isSaving ? "Salvando..." : "Atualizar Informações"}
          </Button>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
             <Card className="bg-secondary/30 border-white/5">
                <CardHeader>
                   <CardTitle className="text-lg font-black italic uppercase text-white">Detalhes da Transmissão</CardTitle>
                   <CardDescription>Configure como sua live aparecerá para os espectadores.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="space-y-2">
                      <Label>Título da Live</Label>
                      <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-black/20 border-white/10 h-12 text-lg font-bold"
                        maxLength={140}
                      />
                      <p className="text-[10px] text-slate-500 text-right">{title.length}/140</p>
                   </div>

                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <Label>Categoria</Label>
                         <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="bg-black/20 border-white/10">
                               <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                               <SelectItem value="games">Games</SelectItem>
                               <SelectItem value="irl">Conversa (IRL)</SelectItem>
                               <SelectItem value="music">Música</SelectItem>
                               <SelectItem value="creative">Criativo</SelectItem>
                               <SelectItem value="esports">Esports</SelectItem>
                            </SelectContent>
                         </Select>
                      </div>
                      <div className="space-y-2">
                         <Label>Idioma</Label>
                         <Select defaultValue="pt-br">
                            <SelectTrigger className="bg-black/20 border-white/10">
                               <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                               <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                               <SelectItem value="en">English</SelectItem>
                               <SelectItem value="es">Español</SelectItem>
                            </SelectContent>
                         </Select>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <Label>Tags</Label>
                      <Textarea
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="#tags #separadas #por #espaço"
                        className="bg-black/20 border-white/10 min-h-[80px]"
                      />
                      <p className="text-[10px] text-slate-500">Ajude os espectadores a encontrar seu conteúdo.</p>
                   </div>
                </CardContent>
             </Card>

             <Card className="bg-secondary/30 border-white/5">
                 <CardHeader>
                    <CardTitle className="text-lg font-black italic uppercase text-white">Notificação de Live</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <div className="space-y-2">
                       <Label>Texto da Notificação</Label>
                       <Textarea
                         placeholder="Entrei ao vivo! Venha conferir..."
                         className="bg-black/20 border-white/10"
                       />
                    </div>
                 </CardContent>
             </Card>
          </div>

          <div className="space-y-6">
             <StreamKeyManager />

             <Card className="bg-secondary/30 border-white/5">
                <CardHeader>
                   <CardTitle className="text-sm font-black italic uppercase text-slate-300">Checklist</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                   {[
                     { label: "Título Definido", done: title.length > 5 },
                     { label: "Categoria Selecionada", done: !!category },
                     { label: "Tags Adicionadas", done: tags.length > 3 },
                     { label: "Software Conectado", done: false },
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded bg-black/20">
                         <div className={`w-2 h-2 rounded-full ${item.done ? 'bg-green-500' : 'bg-red-500'}`} />
                         <span className="text-xs font-bold text-slate-300">{item.label}</span>
                      </div>
                   ))}
                </CardContent>
             </Card>
          </div>
       </div>
    </div>
  );
}
