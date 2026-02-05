import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Eye, EyeOff, Key } from 'lucide-react';
import { toast } from "sonner";
import { INGEST_BASE_URL } from '@/lib/config';

export function StreamKeyManager() {
  const [streamKey] = useState("clutch_diamond_" + Math.random().toString(36).substring(2, 12));
  const [showKey, setShowKey] = useState(false);

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copiado!`);
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Key size={16} className="text-primary" /> Configuração de Transmissão
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="space-y-2">
             <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Servidor (Ingest)</label>
             <div className="flex gap-2">
                <Input readOnly value={INGEST_BASE_URL} className="bg-background border-white/5 h-10 text-[10px] font-mono" />
                <Button size="icon" variant="secondary" className="h-10 w-10 shrink-0" onClick={() => copyToClipboard(INGEST_BASE_URL, "URL")}><Copy size={14} /></Button>
             </div>
          </div>
          <div className="space-y-2">
             <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Chave de Stream</label>
             <div className="flex gap-2">
                <Input type={showKey ? "text" : "password"} readOnly value={streamKey} className="bg-background border-white/5 h-10 text-[10px] font-mono" />
                <Button size="icon" variant="ghost" className="h-10 w-10 shrink-0" onClick={() => setShowKey(!showKey)}>{showKey ? <EyeOff size={14} /> : <Eye size={14} />}</Button>
                <Button size="icon" variant="secondary" className="h-10 w-10 shrink-0" onClick={() => copyToClipboard(streamKey, "Chave")}><Copy size={14} /></Button>
             </div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-xl">
             <p className="text-[9px] text-yellow-500 font-bold uppercase">Nunca compartilhe sua chave de transmissão com ninguém.</p>
          </div>
       </CardContent>
    </Card>
  );
}
