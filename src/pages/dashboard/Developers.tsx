import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Copy, RefreshCcw, Code } from 'lucide-react';
import { toast } from "sonner";

export default function Developers() {
  const [apiKey, setApiKey] = useState("sk_live_9823498234...");
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Desenvolvedores</h1>
         <p className="text-muted-foreground">API Keys e Webhooks para criar ferramentas personalizadas.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Code className="text-primary"/> Credenciais da API</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                  <Label>Client ID</Label>
                  <div className="flex gap-2">
                     <Input value="client_89234789234" readOnly className="bg-black/20 font-mono" />
                     <Button size="icon" variant="outline"><Copy size={14}/></Button>
                  </div>
               </div>
               <div className="space-y-2">
                  <Label>Client Secret</Label>
                  <div className="flex gap-2">
                     <Input type={showKey ? "text" : "password"} value={apiKey} readOnly className="bg-black/20 font-mono" />
                     <Button size="icon" variant="ghost" onClick={() => setShowKey(!showKey)}>
                        {showKey ? <EyeOff size={14}/> : <Eye size={14}/>}
                     </Button>
                     <Button size="icon" variant="outline"><Copy size={14}/></Button>
                  </div>
                  <Button variant="link" className="text-red-400 p-0 text-xs h-auto"><RefreshCcw size={10} className="mr-1"/> Gerar nova chave</Button>
               </div>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase">Webhooks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <p className="text-sm text-muted-foreground">Receba notificações em tempo real sobre eventos do canal.</p>
               <Button className="w-full border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary">
                  + Adicionar Endpoint
               </Button>
               <div className="space-y-2">
                  <div className="bg-black/20 p-3 rounded-lg flex justify-between items-center border border-white/5">
                     <div>
                        <p className="text-xs font-mono">https://api.meubot.com/events</p>
                        <div className="flex gap-2 mt-1">
                           <span className="text-[10px] bg-primary/10 text-primary px-1 rounded">subscription</span>
                           <span className="text-[10px] bg-primary/10 text-primary px-1 rounded">follow</span>
                        </div>
                     </div>
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
