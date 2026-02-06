import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plug, Check, ExternalLink } from 'lucide-react';

const INTEGRATIONS = [
  { name: "Discord", icon: "https://simpleicons.org/icons/discord.svg", description: "Notifique seu servidor quando entrar ao vivo e sincronize cargos.", connected: true },
  { name: "Spotify", icon: "https://simpleicons.org/icons/spotify.svg", description: "Mostre a música que está tocando na sua live.", connected: false },
  { name: "StreamElements", icon: "https://simpleicons.org/icons/streamelements.svg", description: "Alertas, overlay e chat bot integrados.", connected: false },
  { name: "OBS Studio", icon: "https://simpleicons.org/icons/obsstudio.svg", description: "Controle sua live direto do painel.", connected: true },
  { name: "TikTok", icon: "https://simpleicons.org/icons/tiktok.svg", description: "Envie clipes automaticamente para o TikTok.", connected: false },
];

export default function Integrations() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Integrações</h1>
         <p className="text-muted-foreground">Conecte ferramentas externas para turbinar sua live.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {INTEGRATIONS.map((item, i) => (
            <Card key={i} className="bg-card/30 border-white/5 overflow-hidden">
               <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center p-2">
                     <Plug className="text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                     <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
                     <CardDescription className="text-xs">{item.description}</CardDescription>
                  </div>
               </CardHeader>
               <CardContent className="bg-black/20 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full ${item.connected ? 'bg-green-500' : 'bg-slate-500'}`} />
                     <span className={`text-xs font-bold uppercase ${item.connected ? 'text-green-500' : 'text-muted-foreground'}`}>
                        {item.connected ? "Conectado" : "Desconectado"}
                     </span>
                  </div>
                  <Button variant={item.connected ? "secondary" : "default"} size="sm" className={item.connected ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : "btn-gold"}>
                     {item.connected ? <span className="flex items-center gap-2"><Check size={14}/> Configurar</span> : "Conectar"}
                  </Button>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
