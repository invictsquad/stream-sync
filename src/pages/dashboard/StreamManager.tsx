import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Radio, Mic, Video, Settings, Save, Lock, Eye, EyeOff, Copy } from 'lucide-react';
import { toast } from 'sonner';

export default function StreamManager() {
  const [streamKey, setStreamKey] = useState("live_key_sakjdh12893712893");
  const [showKey, setShowKey] = useState(false);

  const copyKey = () => {
    navigator.clipboard.writeText(streamKey);
    toast.success("Chave de transmissão copiada!");
  };

  return (
    <div className="p-4 md:p-8 space-y-8 pb-24 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Gerenciador de Transmissão</h1>
          <p className="text-muted-foreground">Configure seu software de transmissão (OBS, Streamlabs).</p>
        </div>
        <div className="flex items-center gap-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-full border border-red-500/20 animate-pulse">
           <div className="w-2 h-2 rounded-full bg-red-500"></div>
           <span className="text-xs font-black uppercase tracking-widest">Offline</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         {/* Main Config */}
         <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card/50 border-white/5">
               <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Settings className="text-primary" size={18}/> Configuração de Entrada (Ingest)</CardTitle>
               </CardHeader>
               <CardContent className="space-y-6">
                  <div className="space-y-2">
                     <Label>Servidor RTMP</Label>
                     <div className="flex gap-2">
                        <Input value="rtmp://ingest.streamsync.live/app" readOnly className="bg-background/50 font-mono text-sm" />
                        <Button variant="outline" size="icon" onClick={() => {
                           navigator.clipboard.writeText("rtmp://ingest.streamsync.live/app");
                           toast.success("URL copiada!");
                        }}>
                           <Copy size={14} />
                        </Button>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <Label>Chave de Transmissão</Label>
                     <div className="flex gap-2">
                        <Input
                           value={showKey ? streamKey : "•".repeat(streamKey.length)}
                           readOnly
                           className="bg-background/50 font-mono text-sm"
                        />
                        <Button variant="ghost" size="icon" onClick={() => setShowKey(!showKey)}>
                           {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
                        </Button>
                        <Button variant="outline" size="icon" onClick={copyKey}>
                           <Copy size={14} />
                        </Button>
                     </div>
                     <p className="text-xs text-red-400 font-bold uppercase tracking-wider flex items-center gap-1 mt-2">
                        <Lock size={10} /> Não compartilhe esta chave com ninguém
                     </p>
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/5">
               <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Video className="text-primary" size={18}/> Detalhes da Live</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                     <Label>Título</Label>
                     <Input placeholder="Digite um título chamativo..." defaultValue="Minha Gameplay de Alto Nível" />
                  </div>
                  <div className="space-y-2">
                     <Label>Notificação de Início</Label>
                     <Input placeholder="Texto que será enviado aos seguidores..." defaultValue="🔴 Estou AO VIVO! Corre pra cá!" />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                     <div className="space-y-0.5">
                        <Label className="text-base">Gravar Transmissão</Label>
                        <p className="text-xs text-muted-foreground">Salvar VOD automaticamente</p>
                     </div>
                     <Switch defaultChecked />
                  </div>
                  <Button className="w-full btn-gold font-black uppercase mt-4">
                     <Save size={16} className="mr-2" /> Salvar Alterações
                  </Button>
               </CardContent>
            </Card>
         </div>

         {/* Sidebar Controls */}
         <div className="space-y-6">
            <Card className="bg-secondary/30 border-white/5 h-64 flex flex-col items-center justify-center text-muted-foreground space-y-4">
               <div className="w-20 h-20 rounded-full bg-background border border-white/10 flex items-center justify-center">
                  <Video size={32} className="opacity-50" />
               </div>
               <p className="text-sm font-bold uppercase tracking-widest">Preview Offline</p>
            </Card>

            <Card className="bg-card/50 border-white/5">
               <CardHeader>
                  <CardTitle className="text-sm font-black italic uppercase">Qualidade</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs font-bold uppercase">
                        <span>Bitrate</span>
                        <span className="text-primary">6000 Kbps</span>
                     </div>
                     <Slider defaultValue={[60]} max={100} step={1} className="w-full" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-xs font-bold uppercase">
                        <span>Audio Delay</span>
                        <span className="text-primary">0ms</span>
                     </div>
                     <Slider defaultValue={[0]} max={1000} step={10} className="w-full" />
                  </div>
               </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-2">
               <Button variant="outline" className="border-red-500/20 hover:bg-red-500/10 text-red-500">
                  <Mic size={16} className="mr-2" /> Mute
               </Button>
               <Button variant="outline" className="border-blue-500/20 hover:bg-blue-500/10 text-blue-500">
                  <Settings size={16} className="mr-2" /> Setup
               </Button>
            </div>
         </div>
      </div>
    </div>
  );
}
