import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Copy, RefreshCw } from 'lucide-react';
import { toast } from "sonner";

export function StreamKeyManager() {
  const [showKey, setShowKey] = useState(false);
  const [key, setKey] = useState("live_54321_AbCdEfGhIjKlMnOpQrStUvWxYz");

  const copyKey = () => {
    navigator.clipboard.writeText(key);
    toast.success("Chave de transmissão copiada!");
  };

  const regenerateKey = () => {
    setKey("live_" + Math.floor(Math.random() * 100000) + "_" + Math.random().toString(36).substring(7));
    toast.success("Nova chave gerada!");
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader>
        <CardTitle className="text-lg font-black italic uppercase text-white">Chave de Transmissão</CardTitle>
        <CardDescription>Nunca compartilhe sua chave com ninguém.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type={showKey ? "text" : "password"}
              value={key}
              readOnly
              className="bg-black/20 border-white/10 pr-10 font-mono"
            />
            <button
              onClick={() => setShowKey(!showKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <Button variant="outline" size="icon" onClick={copyKey} title="Copiar">
            <Copy size={16} />
          </Button>
          <Button variant="destructive" size="icon" onClick={regenerateKey} title="Redefinir">
            <RefreshCw size={16} />
          </Button>
        </div>
        <div className="text-xs text-zinc-500">
          Servidor (URL): rtmp://live.clutch.tv/app
        </div>
      </CardContent>
    </Card>
  );
}
