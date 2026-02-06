import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Users, Heart, Share2, MessageSquare, Send, Bell, ThumbsUp, 
  DollarSign, X, Gem, Gift, Star, Crown, Trophy, Sparkles, LucideIcon, Mic,
  Zap, Settings, Volume2, Maximize, Minimize, Clock, TrendingUp, Check,
  PictureInPicture, Info, Flag
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { toast } from "sonner";
import { motion, AnimatePresence } from 'framer-motion';
import { PollWidget } from '../components/stream/PollWidget';
import { PredictionWidget } from '../components/stream/PredictionWidget';
import { HypeTrainWidget } from '../components/stream/HypeTrainWidget';
import { MerchShelf } from '../components/stream/MerchShelf';
import { MusicOverlay } from '../components/stream/MusicOverlay';
import { GiveawayWidget } from '../components/stream/GiveawayWidget';
import { GoalProgressBar } from '../components/stream/GoalProgressBar';
import { ScheduleList } from '../components/stream/ScheduleList';
import { LeaderboardWidget } from '../components/stream/LeaderboardWidget';
import { ClipsGallery } from '../components/stream/ClipsGallery';
import { VodList } from '../components/stream/VodList';
import { RewardsShop } from '../components/stream/RewardsShop';
import { SocialShare } from '../components/stream/SocialShare';
import { PlayerSettings } from '../components/stream/PlayerSettings';
import { ChatSettings } from '../components/stream/ChatSettings';
import { ReportModal } from '@/components/ui/ReportModal';
import { ShareModal } from '@/components/ui/ShareModal';
import { NotificationCenter } from '@/components/layout/NotificationCenter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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

export default function WatchStream() {
  const { id } = useParams();
  const initialStream = MOCK_LIVES.find(l => l.id === Number(id)) || MOCK_LIVES[0];
  
  const [stream, setStream] = useState(initialStream);
  const [likes, setLikes] = useState(Math.floor(Math.random() * 5000));
  const [hasLiked, setHasLiked] = useState(false);
  const [showPix, setShowPix] = useState(false);
  const [showGiftShop, setShowGiftShop] = useState(false);
  const [showRewardsShop, setShowRewardsShop] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
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
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [mobileTab, setMobileTab] = useState<'chat' | 'info'>('chat');
  const [showReport, setShowReport] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    const savedBalance = localStorage.getItem('clutch_diamonds');
    if (savedBalance) setUserBalance(Number(savedBalance));

    const savedTheater = localStorage.getItem('theater_mode');
    if (savedTheater === 'true') setIsTheaterMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('theater_mode', String(isTheaterMode));
  }, [isTheaterMode]);

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
    if (text.startsWith('@')) text = `(Menção) ${text}`;

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
    setMessages(prev => [...prev, { id: Date.now() + 2, user: 'Sistema', text: `Obrigado por se inscrever no plano ${planName}!`, type: 'system', badge: 'subscriber' }]);
  };

  // --- SUB-COMPONENTS FOR CLEANER LAYOUT ---

  const StreamInfoSection = () => (
    <div className="p-4 md:p-8 pb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-[1.25rem] border-2 border-primary/40 p-0.5 shrink-0"><img src={stream.avatar} className="w-full h-full rounded-[1.1rem] object-cover" alt="" /></div>
                <div>
                    <h1 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-1 md:mb-2 line-clamp-1">{stream.title}</h1>
                    <div className="flex items-center gap-3">
                        <p className="text-primary font-black text-[10px] md:text-xs uppercase italic tracking-widest">{stream.streamer}</p>
                        <span className="w-1 h-1 bg-slate-800 rounded-full" />
                        <p className="text-slate-500 text-[10px] md:text-xs font-black uppercase italic tracking-tighter">{stream.category}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
                <Button onClick={handleFollow} className={`flex-1 md:flex-none font-black text-[10px] rounded-2xl h-10 md:h-12 px-6 uppercase italic transition-colors ${isFollowing ? 'bg-secondary border border-white/5 text-slate-400 hover:bg-secondary/80' : 'btn-gold'}`}>
                    <Bell size={16} className="mr-2" /> {isFollowing ? 'Seguindo' : 'Seguir'}
                </Button>
                <Button onClick={() => setShowSubscriptionModal(true)} className={`flex-1 md:flex-none font-black text-[10px] rounded-2xl h-10 md:h-12 px-6 uppercase italic transition-colors ${isSubscribed ? 'bg-fuchsia-600 hover:bg-fuchsia-700 text-white' : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20'}`}>
                    <Crown size={16} className="mr-2" /> {isSubscribed ? 'Elite' : 'Inscrever'}
                </Button>
                <Button onClick={() => setShowPix(true)} className="flex-1 md:flex-none font-black text-[10px] rounded-2xl h-10 md:h-12 px-6 uppercase italic transition-colors bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/20">
                    <DollarSign size={16} className="mr-2" /> PIX
                </Button>
            </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8 py-4 md:py-6 border-y border-white/5 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 text-primary font-black text-sm italic whitespace-nowrap">
                <Users size={18} /> {stream.viewers}
            </div>
            <button onClick={() => { setLikes(likes+1); setHasLiked(true); }} className={`flex items-center gap-2 text-xs font-black transition-all uppercase italic whitespace-nowrap ${hasLiked ? 'text-primary scale-110' : 'text-slate-500 hover:text-primary'}`}>
                <ThumbsUp size={18} fill={hasLiked ? "currentColor" : "none"} /> {likes.toLocaleString()}
            </button>
            <Button variant="ghost" size="sm" onClick={() => setShowShare(true)} className="text-slate-500 hover:text-primary text-xs font-black uppercase italic whitespace-nowrap">
                <Share2 size={16} className="mr-2" /> Compartilhar
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-primary text-xs font-black uppercase italic whitespace-nowrap">
                <Clock size={16} className="mr-2" /> Criar Clip
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowReport(true)} className="text-red-500/50 hover:text-red-500 text-xs font-black uppercase italic whitespace-nowrap">
                <Flag size={16} className="mr-2" /> Denunciar
            </Button>
        </div>

        <div className="mt-8">
            <div className="mb-8"><MerchShelf /></div>
            <Tabs defaultValue="about" className="w-full">
                <TabsList className="bg-black/40 border border-white/5 p-1 h-12 rounded-xl mb-6 flex overflow-x-auto">
                    <TabsTrigger value="about" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black flex-1">Sobre</TabsTrigger>
                    <TabsTrigger value="schedule" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black flex-1">Agenda</TabsTrigger>
                    <TabsTrigger value="ranking" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black flex-1">Ranking</TabsTrigger>
                    <TabsTrigger value="clips" className="h-10 rounded-lg text-[10px] font-black uppercase italic data-[state=active]:bg-primary data-[state=active]:text-black flex-1">Clips</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-4">
                    <div className="bg-secondary/30 border border-white/5 p-6 rounded-3xl">
                        <h3 className="text-lg font-black italic text-white mb-2">Sobre {stream.streamer}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">Bem-vindo à transmissão oficial!</p>
                    </div>
                </TabsContent>
                <TabsContent value="schedule"><ScheduleList /></TabsContent>
                <TabsContent value="ranking"><LeaderboardWidget /></TabsContent>
                <TabsContent value="clips"><ClipsGallery /></TabsContent>
            </Tabs>
        </div>
    </div>
  );

  const ChatSection = () => (
    <div className="flex flex-col h-full bg-black/40 border-l border-white/5">
        <div className="p-4 border-b border-white/5 flex items-center justify-between shrink-0">
            <h2 className="text-[10px] text-primary flex items-center gap-2 font-black italic uppercase tracking-widest"><MessageSquare size={14}/> Diamond Chat</h2>
            <div className="flex items-center gap-1">
                <ChatSettings />
                <Button size="sm" variant="ghost" onClick={() => setShowRewardsShop(true)} className="h-7 px-2 text-[9px] font-black uppercase text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400 hover:text-black rounded-lg transition-colors">
                    <Sparkles size={10} className="mr-1" /> {channelPoints} Pts
                </Button>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto min-h-0">
            <div className="px-6 pt-4 space-y-2">
                <HypeTrainWidget />
                <PredictionWidget />
                <GiveawayWidget />
                <PollWidget />
            </div>
            <div className="p-6 space-y-4">
                {messages.map((m) => <ChatMessage key={m.id} message={m} />)}
            </div>
        </div>

        <form onSubmit={handleSendMessage} className="p-4 bg-black border-t border-white/5 flex gap-3 shrink-0">
            <Input placeholder="Diga algo VIP (@menção)" className="bg-secondary border-white/5 text-xs h-10 rounded-xl" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} />
            <Button size="icon" className="btn-gold h-10 w-10 rounded-xl shrink-0"><Send size={16}/></Button>
            <Button type="button" size="icon" variant="secondary" className="h-10 w-10 rounded-xl shrink-0" onClick={handleSimulateVoiceMessage}><Mic size={16} className="text-red-500" /></Button>
        </form>
    </div>
  );

  return (
    <div className="h-full bg-background text-foreground font-sans flex flex-col overflow-hidden">
      {/* Header Fixed */}
      <header className="shrink-0 border-b border-white/5 bg-black/60 backdrop-blur-xl h-14 flex items-center px-4 justify-between sticky top-0 z-50">
        <Link to="/"><BrandLogo size={20} textSize="text-lg" /></Link>
        <div className="flex items-center gap-4">
          <NotificationCenter />
          <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-2xl border border-white/5">
             <Gem size={14} className="text-primary" />
             <span className="text-[10px] font-black italic">{userBalance.toLocaleString()}</span>
          </div>
        </div>
      </header>

      {/* Main Content: Mathematical Layout */}
      {/* Desktop: Flex Row | Mobile: Flex Col */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">

        {/* Modals */}
        <ReportModal open={showReport} onOpenChange={setShowReport} />
        <ShareModal open={showShare} onOpenChange={setShowShare} />
        <RewardsShop isOpen={showRewardsShop} onClose={() => setShowRewardsShop(false)} balance={channelPoints} onRedeem={(cost) => setChannelPoints(prev => prev - cost)} />
        <AnimatePresence>{activeGiftAlert && <motion.div className="absolute top-24 left-1/2 -translate-x-1/2 z-50 p-4 rounded-2xl bg-primary/90 text-black font-black uppercase"><div className="flex items-center gap-3"><activeGiftAlert.icon size={24} /> <span>Presente: {activeGiftAlert.name}!</span></div></motion.div>}</AnimatePresence>
        {showPix && <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"><div className="bg-secondary p-10 max-w-sm w-full text-center relative rounded-3xl"><button onClick={() => setShowPix(false)} className="absolute top-6 right-6 text-slate-500"><X size={24}/></button><DollarSign size={48} className="text-primary mx-auto mb-6" /><h3 className="text-2xl font-black italic mb-4">PIX</h3><p className="text-xs text-primary mb-8">{stream.pix}</p><Button onClick={() => {navigator.clipboard.writeText(stream.pix); toast.success("Copiado!");}} className="btn-gold w-full">Copiar</Button></div></div>}
        {showGiftShop && <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"><div className="bg-secondary p-8 max-w-md w-full relative rounded-3xl"><button onClick={() => setShowGiftShop(false)} className="absolute top-6 right-6 text-slate-500"><X size={24}/></button><h3 className="text-xl font-black italic uppercase mb-8">Shop</h3><div className="grid grid-cols-2 gap-4">{GIFTS.map(g => <button key={g.id} onClick={() => handleSendGift(g)} className="bg-background p-5 rounded-3xl border border-white/5 hover:border-primary"><g.icon className={`mx-auto mb-3 h-8 w-8 ${g.color}`} /><p className="text-[10px] font-black uppercase">{g.name}</p><span className="text-xs text-primary">{g.price}</span></button>)}</div></div></div>}
        {showSubscriptionModal && <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"><div className="bg-secondary p-8 max-w-3xl w-full relative rounded-3xl"><button onClick={() => setShowSubscriptionModal(false)} className="absolute top-6 right-6 text-slate-500"><X size={24}/></button><h3 className="text-2xl font-black italic uppercase mb-8 text-center">Planos</h3><div className="grid md:grid-cols-3 gap-6">{SUBSCRIPTION_PLANS.map(p => <div key={p.level} className="bg-background p-6 rounded-3xl border border-white/5"><h4 className="text-xl font-black italic uppercase mb-2">{p.name}</h4><p className="text-3xl font-black text-primary mb-4">${p.price}</p><Button onClick={() => handleSubscribe(p.name)} className="w-full btn-gold text-[10px]">Assinar</Button></div>)}</div></div></div>}

        {/* Left Column (Video + Info) */}
        {/* Mobile: Video (top fixed aspect) -> Info (hidden if chat tab) */}
        <div className={`flex-1 flex flex-col min-h-0 bg-black transition-all ${isTheaterMode ? 'w-full' : ''}`}>
             {/* Video Player - Always Visible */}
             <div className="w-full aspect-video bg-black relative group shrink-0">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-secondary/20"><BrandLogo size={60} withText={false} className="opacity-10" /></div>
                <div className="absolute top-6 left-6 bg-primary text-black px-3 py-1 rounded-full font-black text-[10px] uppercase italic tracking-widest gold-glow">Live Elite</div>
                <MusicOverlay />
                <div className="absolute top-6 right-6 z-10"><GoalProgressBar /></div>
                <div className="absolute bottom-0 inset-x-0 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-between px-4">
                    <div className="flex items-center gap-4"><Volume2 size={20} className="text-slate-400" /><span className="text-[10px] text-green-400 font-bold hidden sm:flex items-center gap-1"><Clock size={12} /> Latência: 1.8s</span></div>
                    <div className="flex items-center gap-4"><PlayerSettings /><Maximize size={20} className="text-slate-400 cursor-pointer" onClick={() => setIsTheaterMode(!isTheaterMode)} /></div>
                </div>
             </div>

             {/* Mobile Tabs Switcher */}
             <div className="flex lg:hidden h-12 border-b border-white/10 shrink-0">
                 <button onClick={() => setMobileTab('chat')} className={`flex-1 text-xs font-black uppercase ${mobileTab === 'chat' ? 'bg-primary text-black' : 'bg-secondary text-slate-400'}`}>Chat</button>
                 <button onClick={() => setMobileTab('info')} className={`flex-1 text-xs font-black uppercase ${mobileTab === 'info' ? 'bg-primary text-black' : 'bg-secondary text-slate-400'}`}>Info & Clips</button>
             </div>

             {/* Content Area */}
             <div className="flex-1 overflow-hidden relative">
                 {/* Desktop: StreamInfo always here. Mobile: Only if 'info' tab */}
                 <div className={`h-full overflow-y-auto ${mobileTab === 'chat' ? 'hidden lg:block' : 'block'}`}>
                     <StreamInfoSection />
                 </div>

                 {/* Mobile Chat View (Overlay or Separate?) - Here we swap views */}
                 <div className={`h-full ${mobileTab === 'chat' ? 'block lg:hidden' : 'hidden'}`}>
                     <ChatSection />
                 </div>
             </div>
        </div>

        {/* Right Column (Chat) - Desktop Only */}
        <div className={`w-80 xl:w-96 border-l border-white/5 hidden lg:flex flex-col bg-black/40 ${isTheaterMode ? '!hidden' : ''}`}>
           <ChatSection />
        </div>

      </div>
    </div>
  );
}
