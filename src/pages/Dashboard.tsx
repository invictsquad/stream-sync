import React, { useState, useMemo } from 'react';
import { 
  Video, Copy, RefreshCcw, Eye, EyeOff, LayoutDashboard, Wallet, 
  MessageSquare, ShieldCheck, Lock, Globe, BarChart3, TrendingUp, Users, Clock, 
  X, UserPlus, Gamepad2, Settings, Zap, Loader2
} from 'lucide-react';
import { INGEST_BASE_URL } from '../lib/config';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PollCreator } from '../components/stream/PollCreator';
import { GoalConfig } from '../components/stream/GoalConfig';
import { ScheduleManager } from '../components/stream/ScheduleManager';
import { EmoteManager } from '../components/stream/EmoteManager';
import { ModPanel } from '../components/stream/ModPanel';
import { ActivityFeed } from '../components/stream/ActivityFeed';
import { GoLiveWizard } from '../components/stream/GoLiveWizard';
import { RaidManager } from '../components/stream/RaidManager';
import { SponsorManager } from '../components/stream/SponsorManager';
import { TTSConfig } from '../components/stream/TTSConfig';
import { StreamHealthOverlay } from '../components/stream/StreamHealthOverlay';
import { ReferralDashboard } from '../components/stream/ReferralDashboard';
import { NotificationCenter } from '../components/layout/NotificationCenter';

const GAME_CATEGORIES = [
  "Games", "CS2", "Valorant", "Free Fire", "League of Legends", "Just Chatting", "Música", "Tecnologia"
];

// Mock Data for Analytics
const ANALYTICS_DATA = [
  { name: '00:00', Views: 400, Retention: 90 },
  { name: '00:15', Views: 300, Retention: 85 },
  { name: '00:30', Views: 2000, Retention: 95 },
  { name: '00:45', Views: 2780, Retention: 92 },
  { name: '01:00', Views: 1890, Retention: 88 },
  { name: '01:15', Views: 2390, Retention: 91 },
  { name: '01:30', Views: 3490, Retention: 94 },
];

const KPIS = [
  { label: "Visualizações Atuais", value: "3.49K", icon: Users, trend: 15, color: "text-primary" },
  { label: "Novos Seguidores", value: "+120", icon: TrendingUp, trend: 25, color: "text-emerald-500" },
  { label: "Tempo Médio (min)", value: "18.5", icon: Clock, trend: 5, color: "text-yellow-500" },
  { label: "Taxa de Retenção", value: "94%", icon: BarChart3, trend: 10, color: "text-fuchsia-500" },
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
  const [streamTitle, setStreamTitle] = useState("Minha Live de Elite - Título Padrão");
  const [streamTags, setStreamTags] = useState("games, pro, diamond");
  const [slowMode, setSlowMode] = useState(false);
  const [bannedWords, setBannedWords] = useState("palavrão, spam, link");
  const [alertApiUrl, setAlertApiUrl] = useState("https://alerts.clutch.live/api/user/JD123");

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

  const handleUpdateStreamInfo = () => {
    toast.success("Informações da live atualizadas!", {
      description: `Título: ${streamTitle} | Categoria: ${selectedCategory}`
    });
  };

  const handleUpdateModeration = () => {
    toast.success("Configurações de moderação salvas!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
          <div className="flex items-center gap-4">
            <StreamHealthOverlay />
            <NotificationCenter />
            <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.3em] italic hidden md:flex">
              <LayoutDashboard size={14} /> Studio Pro Console
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-10 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna Principal - Gerenciamento e Analytics */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Gerenciamento de Transmissão (Título, Jogo, Tags) */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
               <Video size={120} />
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 relative z-10">
               <div className="flex items-center gap-2">
                  <Settings className="text-primary" size={20} />
                  <h2 className="text-xl uppercase font-black italic">Gerenciamento de Live</h2>
               </div>
               <GoLiveWizard />
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Título da Transmissão</label>
                <Input 
                  value={streamTitle}
                  onChange={(e) => setStreamTitle(e.target.value)}
                  className="bg-background border-white/10 h-12 rounded-xl text-sm focus:border-primary"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Tags (Separadas por vírgula)</label>
                <Input 
                  value={streamTags}
                  onChange={(e) => setStreamTags(e.target.value)}
                  placeholder="ex: cs2, ranked, pro, diamond"
                  className="bg-background border-white/10 h-12 rounded-xl text-sm focus:border-primary"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Categoria/Jogo</label>
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
                <Button onClick={handleUpdateStreamInfo} className="md:mt-6 btn-gold h-12 px-10 rounded-2xl">Atualizar Info</Button>
              </div>
            </div>
          </section>

          {/* Componente de Enquetes (Novo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PollCreator />
            <GoalConfig />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <RaidManager />
             <div className="space-y-6">
                <SponsorManager />
                <TTSConfig />
             </div>
          </div>

          <ScheduleManager />

          <EmoteManager />

          <ReferralDashboard />

          {/* Monetização PIX */}
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
            <p className="text-[10px] text-slate-500 mt-4 uppercase font-bold tracking-tighter italic">Esta chave será exibida para os espectadores na página da live.</p>
          </section>

          {/* Analytics - KPIs */}
          <section className="space-y-6">
            <h2 className="text-xl uppercase font-black italic flex items-center gap-2"><BarChart3 className="text-primary" /> Analytics Diamond</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {KPIS.map((kpi, index) => (
                <Card key={index} className="bg-secondary border border-white/5 rounded-2xl p-4 shadow-xl">
                  <CardTitle className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{kpi.label}</CardTitle>
                  <CardContent className="p-0">
                    <div className="text-2xl font-black italic text-white">{kpi.value}</div>
                    <div className={`text-[10px] font-bold flex items-center gap-1 mt-1 ${kpi.color}`}>
                      <TrendingUp size={10} /> {kpi.trend}%
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Analytics - Gráfico de Retenção */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <h3 className="text-lg font-black italic mb-6">Visualizações Simultâneas (Últimos 90 min)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ANALYTICS_DATA} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" tick={{ fontSize: 10 }} />
                  <YAxis stroke="#666" tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #FFD700', borderRadius: '8px', color: '#FFD700' }}
                    labelStyle={{ color: '#FFF' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="Views" stroke="#FFD700" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Moderação do Chat */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="text-primary" size={20} />
              <h2 className="text-xl uppercase font-black italic">Moderação e Filtros</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-background p-4 rounded-xl border border-white/5">
                <div>
                  <p className="text-xs font-black uppercase italic">Slow Mode (30s)</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">Limita a frequência de mensagens</p>
                </div>
                <Switch checked={slowMode} onCheckedChange={setSlowMode} />
              </div>

              <div>
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Palavras Proibidas (Ban/Timeout)</label>
                <Input 
                  value={bannedWords}
                  onChange={(e) => setBannedWords(e.target.value)}
                  placeholder="ex: palavrão, spam, link"
                  className="bg-background border-white/10 h-12 rounded-xl text-sm focus:border-primary"
                />
                <Button onClick={handleUpdateModeration} size="sm" className="btn-gold mt-3 h-8 px-6 rounded-lg">Salvar Filtros</Button>
              </div>
            </div>
          </section>

          {/* Painel Avançado de Moderação */}
          <ModPanel />
        </div>

        {/* Barra Lateral - Configurações OBS e Monetização */}
        <div className="space-y-8">
          
          <ActivityFeed />

          {/* Configurações OBS */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
            <h2 className="text-sm text-primary uppercase font-black italic">Configurações OBS</h2>
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

          {/* Alertas Integrados */}
          <section className="bg-primary/5 border border-primary/20 rounded-[2.5rem] p-8 space-y-6">
            <h2 className="text-sm text-primary uppercase font-black italic flex items-center gap-2"><Zap size={16}/> Alertas de Eventos</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed">Use esta URL para integrar alertas de Seguidores e Presentes em ferramentas como StreamElements/Labs.</p>
            <div className="space-y-2">
              <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Webhook URL</label>
              <div className="flex gap-2">
                <Input readOnly value={alertApiUrl} className="bg-background border-white/5 h-10 text-[9px] font-mono" />
                <Button size="icon" variant="secondary" className="h-10 w-10 rounded-lg" onClick={() => copyToClipboard(alertApiUrl, "URL de Alerta")}><Copy size={14} /></Button>
              </div>
            </div>
          </section>

          {/* Opções Pro (Teste/Privada) */}
          <section className="bg-secondary/30 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
            <h2 className="text-sm text-primary uppercase font-black italic">Studio Configs</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase italic">Transmissão de Teste</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">A live não será listada</p>
                </div>
                <Switch checked={isTestMode} onCheckedChange={setIsTestMode} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase italic">Live Privada</p>
                  <p className="text-[9px] text-slate-500 font-bold uppercase">Acesso apenas por link</p>
                </div>
                <Switch checked={isPrivate} onCheckedChange={setIsPrivate} />
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="mt-10"><footer className="opacity-30 grayscale pointer-events-none pb-10"><BrandLogo className="justify-center" /></footer></div>
    </div>
  );
}