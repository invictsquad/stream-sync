import React, { useState } from 'react';
import { Video, Copy, RefreshCcw, Eye, EyeOff, LayoutDashboard, Wallet, MessageSquare } from 'lucide-react';
import { INGEST_BASE_URL } from '../lib/config';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { toast } from "sonner";

export default function Dashboard() {
  const [streamKey] = useState("clutch_diamond_" + Math.random().toString(36).substring(2, 12));
  const [showKey, setShowKey] = useState(false);
  const [pixKey, setPixKey] = useState("");
  
  const chatOverlayUrl = `${window.location.origin}/overlay/chat/diamond-user`;

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copiado!`, {
      style: { background: '#0a0a0a', color: '#FFD700', border: '1px solid #FFD700' }
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
          <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.3em] italic">
            <LayoutDashboard size={14} /> Diamond Console
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] overflow-hidden gold-glow">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h2 className="text-sm flex items-center gap-2 text-primary">
                <Video size={18} /> Monitoramento Elite
              </h2>
              <div className="bg-background px-4 py-1 rounded-full text-[9px] font-black text-slate-500 tracking-widest border border-white/5">SINAL OFFLINE</div>
            </div>
            <div className="aspect-video bg-black flex flex-col items-center justify-center p-10 text-center">
              <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-4 animate-pulse">
                <Video size={32} className="text-primary/20" />
              </div>
              <p className="text-slate-600 font-bold text-xs uppercase tracking-widest">Aguardando Encoder (OBS/vMix)</p>
            </div>
          </section>

          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <h2 className="text-xl mb-6 flex items-center gap-2"><Wallet className="text-primary" /> Receber Apoio (PIX)</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Input 
                placeholder="Sua chave PIX" 
                value={pixKey}
                onChange={(e) => setPixKey(e.target.value)}
                className="bg-background border-white/10 h-14 rounded-2xl text-primary focus:border-primary"
              />
              <Button onClick={() => toast.success("PIX configurado!")} className="btn-gold h-14 px-10 rounded-2xl">Salvar</Button>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
            <h2 className="text-sm text-primary">Configurações OBS</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Ingest URL</label>
                <div className="flex gap-2">
                  <Input readOnly value={INGEST_BASE_URL} className="bg-background border-white/5 h-12 text-[10px] font-mono" />
                  <Button size="icon" variant="secondary" className="h-12 w-12 rounded-xl" onClick={() => copyToClipboard(INGEST_BASE_URL, "URL")}><Copy size={16} /></Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Stream Key</label>
                <div className="flex gap-2">
                  <Input type={showKey ? "text" : "password"} readOnly value={streamKey} className="bg-background border-white/5 h-12 text-[10px] font-mono" />
                  <Button size="icon" variant="ghost" onClick={() => setShowKey(!showKey)}>{showKey ? <EyeOff size={16} /> : <Eye size={16} />}</Button>
                  <Button size="icon" variant="secondary" className="h-12 w-12 rounded-xl" onClick={() => copyToClipboard(streamKey, "Chave")}><Copy size={16} /></Button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8">
            <h2 className="text-sm text-primary mb-4 flex items-center gap-2"><MessageSquare size={16}/> Chat Overlay</h2>
            <p className="text-[10px] text-slate-500 uppercase font-bold mb-4 leading-relaxed">Adicione este link no OBS como fonte de navegador (600x800).</p>
            <div className="flex gap-2">
              <Input readOnly value={chatOverlayUrl} className="bg-background border-white/5 h-10 text-[9px] font-mono" />
              <Button size="icon" variant="secondary" className="h-10 w-10 rounded-lg" onClick={() => copyToClipboard(chatOverlayUrl, "Link do Overlay")}><Copy size={14} /></Button>
            </div>
          </section>
        </div>
      </main>
      <div className="mt-10"><footer className="opacity-50 grayscale pointer-events-none"><BrandLogo className="justify-center" /></footer></div>
    </div>
  );
}