import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, Heart, Share2, MessageSquare, Send, Bell, ThumbsUp, 
  DollarSign, X, Gem, Gift, Star, Crown, Trophy, Sparkles, LucideIcon, Mic,
  Zap, Settings, Volume2, Maximize, Minimize, Clock, TrendingUp, Check
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { toast } from "sonner";
import { motion, AnimatePresence } from 'framer-motion';
import { PollWidget } from '../components/stream/PollWidget';
import { GoalProgressBar } from '../components/stream/GoalProgressBar';
import { ScheduleList } from '../components/stream/ScheduleList';
import { LeaderboardWidget } from '../components/stream/LeaderboardWidget';
import { ClipsGallery } from '../components/stream/ClipsGallery';
import { VodList } from '../components/stream/VodList';
import { RewardsShop } from '../components/stream/RewardsShop';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MOCK_LIVES = [
  { id: 1, streamer: 'Gaules', title: 'Major de CS2 - Clutch Live Diamond Stream', viewers: '185k', category: 'Games', avatar: 'https://i.pravatar.cc/150?u=gaules', pix: 'gaules@clutch.live', isFollowing: true, isSubscribed: false },
  { id: 2, streamer: 'SmileyDev', title: 'Codando a Clutch Live Gold com IA', viewers: '2.3k', category: 'Tecnologia', avatar: 'https://i.pravatar.cc/150?u=dev', pix: 'dev@clutch.live', isFollowing: false, isSubscribed: true },
  { id: 3, streamer: 'Nobru', title: 'Final da Copa Free Fire - Exclusivo Clutch', viewers: '88k', category: 'Games', avatar: 'https://i.pravatar.cc/150?u=nobru', pix: 'nobru@clutch.live', isFollowing: false, isSubscribed: false },
];

const GIFTS = [
  { id: 'g1', name: 'Mini Diamond', price: 50, icon: Gem, color: 'text-blue-400' },
  { id: 'g2', name: 'Golden Star', price: 200, icon: Star, color: 'text-yellow-400' },
  { id: 'g3', name: 'Elite Trophy', price: 1000, icon: Trophy, color: 'text-orange-500' },
  { id: 'g4', name: 'Clutch Crown', price: 5000, icon: Crown, color: 'gradient-text' },
];

const SUBSCRIPTION_PLANS = [
  { level: 1, name: 'Bronze', price: 9.99, benefits: ['Chat Exclusivo', 'Emblema de Sub', 'Sem Anúncios'] },
  { level: 2, name: 'Silver', price: 19.99, benefits: ['Todos do Bronze', 'Emotes Animados', 'Prioridade no Chat'] },
  { level: 3, name: 'Gold', price: 49.99, benefits: ['Todos do Silver', 'Acesso a VODs', 'Grupo Exclusivo Discord'] },
];

interface Message {
  id: number;
  user: string;
  text: string;
  type: 'system' | 'gift' | 'chat' | 'voice';
  giftIcon?: LucideIcon;
  badge?: 'streamer' | 'mod' | 'subscriber';
}

// --- CHAT COMPONENTS ---

const ChatMessage = ({ message }: { message: Message }) => {
  const isGift = message.type === 'gift';
  const isVoice = message.type === 'voice';

  const getBadge = (badge?: Message['badge']) => {
    switch (badge) {
      case 'streamer': return <span className="bg-primary text-black px-1 rounded text-[8px] font-black uppercase italic mr-1">Streamer</span>;
      case 'mod': return <span className="bg-blue-500 text-white px-1 rounded text-[8px] font-black uppercase italic mr-1">Mod</span>;
      case 'subscriber': return <span className="bg-fuchsia-500 text-white px-1 rounded text-[8px] font-black uppercase italic mr-1">Sub</span>;
      default: return null;
    }
  };

  return (
    <div key={message.id} className={`text-xs leading-relaxed ${isGift ? 'bg-primary/10 border border-primary/20 p-3 rounded-xl gold-glow animate-in zoom-in-95 duration-300' : ''} ${isVoice ? 'bg-secondary/50 border border-white/10 p-2 rounded-lg' : ''}`}>
      {isGift && message.giftIcon && (
        <div className="flex items-center gap-2 mb-1">
           <message.giftIcon size={14} className="text-primary" />
           <span className="text-[9px] font-black uppercase text-primary tracking-widest">Presente Elite</span>
        </div>
      )}
      {isVoice && <Mic size={12} className="text-red-500 mr-1 inline" />}
      
      {getBadge(message.badge)}
      
      <span className={`${isGift ? 'text-white' : 'text-primary'} font-black italic mr-2`}>{message.user}:</span> 
      <span className={isGift ? 'text-slate-200 font-bold' : 'text-slate-400 font-medium'}>{message.text}</span>
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function WatchStream() {
  const { id } = useParams();
  const initialStream = MOCK_LIVES.find(l => l.id === Number(id)) || MOCK_LIVES[0];
  
  const [stream, setStream] = useState(initialStream);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 5000));
  const [hasLiked, setHasLiked] = useState(false);
  const [showPix, setShowPix] = useState(false);
  const [showGiftShop, setShowGiftShop] = useState(false);
  const [showRewardsShop, setShowRewardsShop] = useState(false); // Shop de Pontos
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false); // Novo Modal
  const [userBalance, setUserBalance] = useState(1500);
  const [channelPoints, setChannelPoints] = useState(2500);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: 'Sistema', text: 'Respeite a comunidade Diamond.', type: 'system', giftIcon: undefined },
    { id: 2, user: 'Streamer', text: 'Bem-vindos à live!', type: 'chat', badge: 'streamer' },
    { id: 3, user: 'Moderador', text: 'Lembrem-se das regras!', type: 'chat', badge: 'mod' },
  ]);
  const [activeGiftAlert, setActiveGiftAlert] = useState<{ name: string, icon: LucideIcon } | null>(null);
  const [isFollowing, setIsFollowing] = useState(stream.isFollowing);
  const [isSubscribed, setIsSubscribed] = useState(stream.isSubscribed);

  useEffect(() => {
    const savedBalance = localStorage.getItem('clutch_diamonds');
    if (savedBalance) setUserBalance(Number(savedBalance));
  }, []);

  const updateBalance = (newBalance: number) => {
    setUserBalance(newBalance);
    localStorage.setItem('clutch_diamonds', String(newBalance));
  };

  const handleSendGift = (gift: typeof GIFTS[0]) => {
    if (userBalance < gift.price) {
      toast.error("Saldo insuficiente de Diamonds!");
      return;
    }

    const newBalance = userBalance - gift.price;
    updateBalance(newBalance);

    const newMessage: Message = {
      id: Date.now(),
      user: 'Você',
      text: `enviou um ${gift.name.toUpperCase()}! 💎`,
      type: 'gift',
      giftIcon: gift.icon
    };

    setMessages(prev => [...prev, newMessage]);
    setShowGiftShop(false);
    
    setActiveGiftAlert({ name: gift.name, icon: gift.icon });
    setTimeout(() => setActiveGiftAlert(null), 5000);

    toast.success(`${gift.name} enviado!`, {
      style: { background: '#D4AF37', color: '#000' },
      icon: <gift.icon size={16} />
    });
  };

  const handleSimulateVoiceMessage = () => {
    const voiceMessage: Message = {
      id: Date.now() + 1,
      user: 'VoiceUser',
      text: 'Isso é uma transcrição de voz em tempo real!',
      type: 'voice'
    };
    setMessages(prev => [...prev, voiceMessage]);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    let text = chatMessage;
    // Simulação de menção (@usuário)
    if (text.startsWith('@')) {
      text = `(Menção) ${text}`;
    }

    const newMessage: Message = {
      id: Date.now(),
      user: 'Espectador',
      text: text,
      type: 'chat'
    };
    setMessages(prev => [...prev, newMessage]);
    setChatMessage('');
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.info(isFollowing ? `Você deixou de seguir ${stream.streamer}.` : `Você está seguindo ${stream.streamer}! Ative as notificações.`);
  };

  const handleSubscribe = (planName: string) => {
    setIsSubscribed(true);
    setShowSubscriptionModal(false);
    toast.success(`Inscrição ${planName} ativada!`, {
      description: `Você agora é um membro Elite do canal ${stream.streamer}.`
    });
    // Simular mensagem de sub no chat
    setMessages(prev => [...prev, { id: Date.now() + 2, user: 'Sistema', text: `Obrigado por se inscrever no plano ${planName}!`, type: 'system', badge: 'subscriber' }]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl h-20 flex items-center px-6 justify-between sticky top-0 z-50">
        <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
        <div className="flex items-center gap-4 bg-secondary/50 px-4 py-2 rounded-2xl border border-white/5">
           <div className="flex items-center gap-2">
              <Gem size={16} className="text-primary animate-pulse" />
              <span className="text-xs font-black italic">{userBalance.toLocaleString()}</span>
           </div>
           <Button size="sm" className="h-7 px-3 bg-primary text-black font-black text-[9px] rounded-lg uppercase">Recarregar</Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Gift Alert Banner */}
        <AnimatePresence>
          {activeGiftAlert && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="absolute top-24 left-1/2 -translate-x-1/2 z-50 p-4 rounded-2xl bg-primary/90 backdrop-blur-md text-black font-black uppercase italic shadow-glow-lg border border-primary"
            >
              <div className="flex items-center gap-3">
                <activeGiftAlert.icon size={24} className="text-black fill-black" />
                <span className="text-sm">Presente Recebido: {activeGiftAlert.name}!</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modais de Interação (PIX e Shop) */}
        <RewardsShop
          isOpen={showRewardsShop}
          onClose={() => setShowRewardsShop(false)}
          balance={channelPoints}
          onRedeem={(cost) => setChannelPoints(prev => prev - cost)}
        />

        {showPix && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-secondary border border-primary/30 rounded-[2.5rem] p-10 max-w-sm w-full text-center relative gold-glow">
              <button onClick={() => setShowPix(false)} className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors"><X size={24}/></button>
              <DollarSign size={48} className="text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-black italic mb-4 uppercase">Apoio Direto</h3>
              <div className="bg-background p-5 rounded-2xl border border-white/5 mb-8">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Chave Diamond PIX</p>
                <p className="text-xs font-mono text-primary break-all">{stream.pix}</p>
              </div>
              <Button onClick={() => { navigator.clipboard.writeText(stream.pix); toast.success("Copiado!"); }} className="btn-gold w-full h-14 rounded-2xl">Copiar Chave</Button>
            </div>
          </div>
        )}

        {showGiftShop && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-secondary border border-primary/30 rounded-[2.5rem] p-8 max-w-md w-full relative gold-glow">
              <button onClick={() => setShowGiftShop(false)} className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors"><X size={24}/></button>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/20 p-3 rounded-2xl">
                  <Gift size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-black italic uppercase tracking-tighter">Diamond Shop</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {GIFTS.map((gift) => (
                  <button 
                    key={gift.id}
                    onClick={() => handleSendGift(gift)}
                    className="bg-background border border-white/5 p-5 rounded-3xl hover:border-primary/50 transition-all group relative overflow-hidden"
                  >
                    <gift.icon className={`mx-auto mb-3 h-8 w-8 ${gift.color} group-hover:scale-110 transition-transform`} />
                    <p className="text-[10px] font-black uppercase text-slate-300">{gift.name}</p>
                    <div className="flex items-center justify-center gap-1 mt-1 text-primary">
                      <Gem size={10} />
                      <span className="text-xs font-bold">{gift.price}</span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="bg-black/40 p-4 rounded-2xl flex items-center justify-between">
                <p className="text-[9px] font-black text-slate-500 uppercase">Seu Saldo</p>
                <div className="flex items-center gap-2 text-primary font-black italic">
                  <Gem size={14} /> {userBalance}
                </div>
              </div>
            </div>
          </div>
        )}

        {showSubscriptionModal && (
          <div className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-secondary border border-primary/30 rounded-[2.5rem] p-8 max-w-3xl w-full relative gold-glow">
              <button onClick={() => setShowSubscriptionModal(false)} className="absolute top-6 right-6 text-slate-500 hover:text-primary transition-colors"><X size={24}/></button>
              <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-8 text-center">
                Inscreva-se no Canal <span className="gradient-text">{stream.streamer}</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {SUBSCRIPTION_PLANS.map((plan) => (
                  <div key={plan.level} className={`bg-background border border-white/5 p-6 rounded-3xl flex flex-col ${plan.level === 3 ? 'border-primary shadow-glow-sm' : ''}`}>
                    <h4 className="text-xl font-black italic uppercase mb-2">{plan.name}</h4>
                    <p className="text-3xl font-black italic text-primary mb-4">${plan.price.toFixed(2)} <span className="text-sm text-slate-500 font-medium">/ mês</span></p>
                    
                    <ul className="space-y-2 text-sm text-slate-300 flex-1 mb-6">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check size={16} className="text-emerald-500" /> {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => handleSubscribe(plan.name)}
                      className={`w-full h-12 rounded-xl font-black uppercase text-[10px] ${plan.level === 3 ? 'btn-gold' : 'bg-slate-700 hover:bg-slate-600'}`}
                    >
                      {isSubscribed ? 'Mudar Plano' : 'Assinar Agora'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Player e Controles */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="aspect-video bg-black relative">
            {/* Player Mock */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-secondary/20">
               <BrandLogo size={60} withText={false} className="opacity-10" />
            </div>
            <div className="absolute top-6 left-6 bg-primary text-black px-3 py-1 rounded-full font-black text-[10px] uppercase italic tracking-widest gold-glow">Live Elite</div>
            
            <div className="absolute top-6 right-6 z-10">
              <GoalProgressBar />
            </div>

            {/* Player Controls (Simulação de Baixa Latência) */}
            <div className="absolute bottom-0 inset-x-0 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Volume2 size={20} className="text-slate-400 hover:text-primary cursor-pointer" />
                    <div className="w-20 h-1 bg-slate-700 rounded-full relative">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-primary rounded-full" />
                    </div>
                    <span className="text-[10px] text-green-400 font-bold flex items-center gap-1">
                        <Clock size={12} /> Latência: <span className="font-mono">1.8s</span>
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <Settings size={20} className="text-slate-400 hover:text-primary cursor-pointer" />
                    <Maximize size={20} className="text-slate-400 hover:text-primary cursor-pointer" />
                </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-[1.25rem] border-2 border-primary/40 p-0.5"><img src={stream.avatar} className="w-full h-full rounded-[1.1rem] object-cover" alt="" /></div>
                <div>
                  <h1 className="text-2xl font-black italic uppercase tracking-tighter mb-2">{stream.title}</h1>
                  <div className="flex items-center gap-3">
                    <p className="text-primary font-black text-xs uppercase italic tracking-widest">{stream.streamer}</p>
                    <span className="w-1 h-1 bg-slate-800 rounded-full" />
                    <p className="text-slate-500 text-xs font-black uppercase italic tracking-tighter">{stream.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button onClick={handleFollow} className={`font-black text-[10px] rounded-2xl h-12 px-6 uppercase italic transition-colors ${isFollowing ? 'bg-secondary border border-white/5 text-slate-400 hover:bg-secondary/80' : 'btn-gold'}`}>
                  <Bell size={16} className="mr-2" /> {isFollowing ? 'Seguindo' : 'Seguir'}
                </Button>
                <Button onClick={() => setShowSubscriptionModal(true)} className={`font-black text-[10px] rounded-2xl h-12 px-6 uppercase italic transition-colors ${isSubscribed ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20'}`}>
                  <Crown size={16} className="mr-2" /> {isSubscribed ? 'Membro Elite' : 'Inscrever-se'}
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-8 py-6 border-y border-white/5">
               <div className="flex items-center gap-2 text-primary font-black text-sm italic">
                 <Users size={18} /> {stream.viewers}
               </div>
               <button onClick={() => { setLikes(likes+1); setHasLiked(true); }} className={`flex items-center gap-2 text-xs font-black transition-all uppercase italic ${hasLiked ? 'text-primary scale-110' : 'text-slate-500 hover:text-primary'}`}>
                 <ThumbsUp size={18} fill={hasLiked ? "currentColor" : "none"} /> {likes.toLocaleString()}
               </button>
               <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success("Link copiado!"); }} className="flex items-center gap-2 text-slate-500 text-xs font-black hover:text-primary transition-all uppercase italic">
                 <Share2 size={18} /> Compartilhar
               </button>
               <Button variant="ghost" size="sm" className="text-slate-500 hover:text-primary text-xs font-black uppercase italic">
                 <Clock size={16} className="mr-2" /> Criar Clip
               </Button>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="bg-black/40 border border-white/5 p-1 h-12 rounded-xl mb-6">
                  <TabsTrigger value="about" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black">Sobre</TabsTrigger>
                  <TabsTrigger value="schedule" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black">Agenda</TabsTrigger>
                  <TabsTrigger value="ranking" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black">Ranking</TabsTrigger>
                  <TabsTrigger value="clips" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black">Clips</TabsTrigger>
                  <TabsTrigger value="vods" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black">Videos</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="space-y-4">
                  <div className="bg-secondary/30 border border-white/5 p-6 rounded-3xl">
                    <h3 className="text-lg font-black italic text-white mb-2">Sobre {stream.streamer}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Bem-vindo à transmissão oficial! Aqui jogamos em alto nível e buscamos sempre o topo do ranking.
                      Acompanhe as lives diárias e participe do chat. Não esqueça de seguir e se inscrever!
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="schedule">
                  <ScheduleList />
                </TabsContent>

                <TabsContent value="ranking">
                  <LeaderboardWidget />
                </TabsContent>

                <TabsContent value="clips">
                  <ClipsGallery />
                </TabsContent>

                <TabsContent value="vods">
                  <VodList />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Chat - Estilo Premium com Mensagens de Presente */}
        <div className="w-full lg:w-80 xl:w-96 border-l border-white/5 flex flex-col bg-black/40">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="text-[10px] text-primary flex items-center gap-2 font-black italic uppercase tracking-widest">
              <MessageSquare size={14}/> Diamond Chat
            </h2>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowRewardsShop(true)}
              className="h-7 px-2 text-[9px] font-black uppercase text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400 hover:text-black rounded-lg transition-colors"
            >
              <Sparkles size={10} className="mr-1" /> {channelPoints} Pts
            </Button>
          </div>

          <div className="px-6 pt-4">
            <PollWidget />
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
             {messages.map((m) => (
               <ChatMessage key={m.id} message={m} />
             ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-6 bg-black border-t border-white/5 flex gap-3">
            <Input 
              placeholder="Diga algo VIP (@menção, :emoji:)" 
              className="bg-secondary border-white/5 text-xs h-12 rounded-xl" 
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
            />
            <Button size="icon" className="btn-gold h-12 w-12 rounded-xl shrink-0"><Send size={18}/></Button>
            <Button type="button" size="icon" variant="secondary" className="h-12 w-12 rounded-xl shrink-0" onClick={handleSimulateVoiceMessage}>
              <Mic size={18} className="text-red-500" />
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}