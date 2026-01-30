import React, { useState } from 'react';
import { 
  Video, Copy, RefreshCcw, Eye, EyeOff, LayoutDashboard, Wallet, 
  MessageSquare, ShieldCheck, Lock, Globe, Beaker, Plus, X, UserPlus, Gamepad2 
} from 'lucide-react';
import { INGEST_BASE_URL } from '../lib/config';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GAME_CATEGORIES = [
  "Games", "CS2", "Valorant", "Free Fire", "League of Legends", "Just Chatting", "Música", "Tecnologia"
];

export default function Dashboard() {
  const [streamKey] = useState("clutch_diamond_" + Math.random().toString(36).substring(2, 12));
  const [showKey, setShowKey] = useState(false);
  const [pixKey, setPixKey] = useState("");
  
  const [isTestMode, setIsTestMode] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [newModName, setNewModName] = useState("");
  const [moderators, setModerators] = useState(['ClutchBot', 'Admin_Elite']);
  const [selectedCategory, setSelectedCategory] = useState(GAME_CATEGORIES[0]);

  const chatOverlayUrl = `${window.location.origin}/overlay/chat/diamond-user`;

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copiado!`, {
      style: { background: '#0a0a0a', color: '#FFD700', border: '1px solid #FFD700' }
    });
  };

  const handleAddModerator = () => {
    if (!newModName.trim()) return;
    if (moderators.includes(newModName)) {
      toast.error("Usuário já é moderador.");
      return;
    }
    setModerators([...moderators, newModName]);
    setNewModName("");
    toast.success(`${newModName} agora é um moderador diamond!`);
  };

  const handleRemoveMod = (name: string) => {
    setModerators(moderators.filter(m => m !== name));
    toast.info("Moderador removido.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
          <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.3em] italic">
            <LayoutDashboard size={14} /> Studio Pro Console
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna Principal */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Monitoramento com Status de Teste */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] overflow-hidden gold-glow">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h2 className="text-sm flex items-center gap-2 text-primary uppercase font-black italic">
                <Video size={18} /> Monitoramento {isTestMode ? 'TESTE' : 'ELITE'}
              </h2>
              <div className="flex items-center gap-4">
                 {isTestMode && <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-[9px] font-black tracking-widest border border-blue-500/20 animate-pulse">MODO TESTE ATIVO</span>}
                 <div className="bg-background px-4 py-1 rounded-full text-[9px] font-black text-slate-500 tracking-widest border border-white/5 uppercase">SINAL OFFLINE</div>
              </div>
            </div>
            <div className="aspect-video bg-black flex flex-col items-center justify-center p-10 text-center relative">
              {isPrivate && (
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full border border-primary/20">
                  <Lock size={12} className="text-primary" />
                  <span className="text-[9px] font-black text-primary uppercase italic">Link Privado</span>
                </div>
              )}
              <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center mb-4 animate-pulse">
                <Video size={32} className="text-primary/20" />
              </div>
              <p className="text-slate-600 font-bold text-xs uppercase tracking-widest italic">Aguardando Conexão OBS</p>
            </div>
          </section>

          {/* Seleção de Categoria/Jogo */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-2 mb-6">
              <Gamepad2 className="text-primary" size={20} />
              <h2 className="text-xl uppercase font-black italic">Categoria da Live</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Selecione o Jogo/Tópico</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full bg-background border-white/10 h-12 rounded-xl text-sm focus:border-primary">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border-white/10">
                    {GAME_CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="md:mt-6 btn-gold h-12 px-10 rounded-2xl">Atualizar</Button>
            </div>
            <p className="text-[10px] text-slate-500 mt-4 uppercase font-bold tracking-tighter italic">Categoria atual: {selectedCategory}</p>
          </section>

          {/* Gerenciamento de Moderadores */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl flex items-center gap-2 uppercase font-black italic"><ShieldCheck className="text-primary" /> Moderadores Diamond</h2>
              <span className="text-[10px] text-slate-500 font-bold uppercase">{moderators.length} ativos</span>
            </div>
            
            <div className="flex gap-4 mb-6">
              <Input 
                placeholder="Username do moderador..." 
                value={newModName}
                onChange={(e) => setNewModName(e.target.value)}
                className="bg-background border-white/10 h-12 rounded-xl text-sm focus:border-primary"
              />
              <Button onClick={handleAddModerator} className="btn-gold h-12 px-6 rounded-xl"><UserPlus size={18} /></Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {moderators.map((mod) => (
                <div key={mod} className="bg-background border border-white/5 px-4 py-2 rounded-full flex items-center gap-3 group hover:border-primary/40 transition-all">
                  <span className="text-xs font-black uppercase italic text-slate-300">{mod}</span>
                  <button onClick={() => handleRemoveMod(mod)} className="text-slate-600 hover:text-red-500 transition-colors">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <h2 className="text-xl mb-6 flex items-center gap-2 uppercase font-black italic"><Wallet className="text-primary" /> Receber Apoio (PIX)</h2>
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

        {/* Barra Lateral de Configurações */}
        <div className="space-y-8">
          
          {/* Opções Pro */}
          <section className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 space-y-6">
            <h2 className="text-sm text-primary uppercase font-black italic">Studio Configs</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase italic">Transmissão de Teste</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">A live não será listada</p>
                </div>
                <Switch 
                  checked={isTestMode} 
                  onCheckedChange={(val) => {
                    setIsTestMode(val);
                    toast(val ? "Modo Teste Iniciado" : "Voltando ao Modo Público");
                  }} 
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase italic">Live Privada</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">Acesso apenas por link</p>
                </div>
                <Switch 
                  checked={isPrivate} 
                  onCheckedChange={(val) => {
                    setIsPrivate(val);
                    toast.warning(val ? "Sua live agora é privada!" : "Sua live está pública!");
                  }} 
                />
              </div>
            </div>
          </section>

          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
            <h2 className="text-sm text-primary uppercase font-black italic">Configurações OBS</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Ingest URL {isTestMode && '(TEST)'}</label>
                <div className="flex gap-2">
                  <Input readOnly value={isTestMode ? INGEST_BASE_URL + "/test" : INGEST_BASE_URL} className="bg-background border-white/5 h-12 text-[10px] font-mono" />
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

          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <h2 className="text-sm text-primary mb-4 flex items-center gap-2 uppercase font-black italic"><MessageSquare size={16}/> Chat Overlay</h2>
            <div className="flex gap-2">
              <Input readOnly value={chatOverlayUrl} className="bg-background border-white/5 h-10 text-[9px] font-mono" />
              <Button size="icon" variant="secondary" className="h-10 w-10 rounded-lg" onClick={() => copyToClipboard(chatOverlayUrl, "Link do Overlay")}><Copy size={14} /></Button>
            </div>
          </section>
        </div>
      </main>
      <div className="mt-10"><footer className="opacity-30 grayscale pointer-events-none pb-10"><BrandLogo className="justify-center" /></footer></div>
    </div>
  );
}