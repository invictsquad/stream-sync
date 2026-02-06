import React, { useState } from 'react';
import { Home, Compass, Video, History, User, LogOut, Settings, Wallet, ChevronLeft, ChevronRight, LayoutDashboard, BarChart3, DollarSign, Trophy, Radio, Scissors, Smile, Calendar, Zap, Briefcase, Plug, Code, MessageSquare, Share2, Users, Heart, Package, ShoppingBag, Music2, Flame, ShieldAlert, Info, FileText, MessageSquarePlus } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useAuth } from '@/contexts/AuthContext';
import { BrandLogo } from '../BrandLogo';

const NAV_ITEMS = [
  { label: 'Home', icon: Home, path: '/' },
  { label: 'Descobrir', icon: Flame, path: '/discover' },
  { label: 'Navegar', icon: Compass, path: '/categories' },
  { label: 'Inscrições', icon: Heart, path: '/subscriptions' },
  { label: 'Inventário', icon: Package, path: '/inventory' },
  { label: 'Rankings', icon: Trophy, path: '/leaderboards' },
  { label: 'Loja', icon: ShoppingBag, path: '/merch' },
];

const CREATOR_ITEMS = [
  { label: 'Visão Geral', icon: LayoutDashboard, path: '/dashboard/overview' },
  { label: 'Gerenciador', icon: Radio, path: '/dashboard/stream-manager' },
  { label: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
  { label: 'Monetização', icon: DollarSign, path: '/dashboard/earnings' },
  { label: 'Conquistas', icon: Trophy, path: '/dashboard/achievements' },
];

const CONTENT_ITEMS = [
  { label: 'Clipes', icon: Scissors, path: '/dashboard/clips' },
  { label: 'Emotes', icon: Smile, path: '/dashboard/emotes' },
  { label: 'Agenda', icon: Calendar, path: '/dashboard/schedule' },
  { label: 'Interações', icon: Zap, path: '/dashboard/interactions' },
  { label: 'Patrocinadores', icon: Briefcase, path: '/dashboard/sponsors' },
];

const TOOLS_ITEMS = [
  { label: 'AutoMod', icon: ShieldAlert, path: '/dashboard/automod' },
  { label: 'Música', icon: Music2, path: '/dashboard/music' },
  { label: 'Chat', icon: MessageSquare, path: '/dashboard/chat-settings' },
  { label: 'Integrações', icon: Plug, path: '/dashboard/integrations' },
  { label: 'API / Dev', icon: Code, path: '/dashboard/developers' },
  { label: 'Indicações', icon: Share2, path: '/dashboard/referrals' },
  { label: 'Equipes', icon: Users, path: '/dashboard/teams' },
];

const RESOURCE_ITEMS = [
  { label: 'Sobre', icon: Info, path: '/about' },
  { label: 'Imprensa', icon: FileText, path: '/press' },
  { label: 'Feedback', icon: MessageSquarePlus, path: '/feedback' },
];

const FOLLOWING = [
  { name: 'Gaules', game: 'CS2', viewers: '150K', avatar: 'https://i.pravatar.cc/150?u=gaules', isLive: true },
  { name: 'Alanzoka', game: 'Horror', viewers: '45K', avatar: 'https://i.pravatar.cc/150?u=alanzoka', isLive: true },
  { name: 'Cellbit', game: 'RPG', viewers: 'Offline', avatar: 'https://i.pravatar.cc/150?u=cellbit', isLive: false },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col h-dvh bg-black/90 border-r border-white/5 transition-all duration-300 relative z-40",
        collapsed ? "w-20" : "w-64"
      )}
    >
       <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
          {!collapsed && <BrandLogo />}
          <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="ml-auto text-slate-500 hover:text-white">
             {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
       </div>

       <ScrollArea className="flex-1 py-4">
          <nav className="px-3 space-y-1">
             {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Tooltip key={item.path} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <NavLink to={item.path}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-4 mb-1 font-bold",
                            collapsed ? "px-0 justify-center" : "px-4",
                            isActive && "bg-secondary text-primary"
                          )}
                        >
                           <item.icon size={20} className={cn(isActive && "fill-current")} />
                           {!collapsed && <span className="uppercase text-xs tracking-wide">{item.label}</span>}
                        </Button>
                      </NavLink>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right" className="font-bold uppercase text-xs">{item.label}</TooltipContent>}
                  </Tooltip>
                )
             })}
          </nav>

          <div className="my-6 border-t border-white/5" />

          {/* Creator Tools */}
          <div className="px-3 mb-6">
             {!collapsed && <h3 className="px-4 text-[10px] font-black uppercase text-primary mb-2 tracking-widest">Estúdio</h3>}
             <div className="space-y-1">
             {CREATOR_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Tooltip key={item.path} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <NavLink to={item.path}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-4 mb-1 font-bold",
                            collapsed ? "px-0 justify-center" : "px-4",
                            isActive && "bg-secondary text-primary"
                          )}
                        >
                           <item.icon size={20} className={cn(isActive && "fill-current")} />
                           {!collapsed && <span className="uppercase text-xs tracking-wide">{item.label}</span>}
                        </Button>
                      </NavLink>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right" className="font-bold uppercase text-xs">{item.label}</TooltipContent>}
                  </Tooltip>
                )
             })}
             </div>
          </div>

          <div className="px-3 mb-6">
             {!collapsed && <h3 className="px-4 text-[10px] font-black uppercase text-primary mb-2 tracking-widest">Conteúdo</h3>}
             <div className="space-y-1">
             {CONTENT_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Tooltip key={item.path} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <NavLink to={item.path}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-4 mb-1 font-bold",
                            collapsed ? "px-0 justify-center" : "px-4",
                            isActive && "bg-secondary text-primary"
                          )}
                        >
                           <item.icon size={20} className={cn(isActive && "fill-current")} />
                           {!collapsed && <span className="uppercase text-xs tracking-wide">{item.label}</span>}
                        </Button>
                      </NavLink>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right" className="font-bold uppercase text-xs">{item.label}</TooltipContent>}
                  </Tooltip>
                )
             })}
             </div>
          </div>

          <div className="px-3 mb-6">
             {!collapsed && <h3 className="px-4 text-[10px] font-black uppercase text-primary mb-2 tracking-widest">Ferramentas</h3>}
             <div className="space-y-1">
             {TOOLS_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Tooltip key={item.path} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <NavLink to={item.path}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-4 mb-1 font-bold",
                            collapsed ? "px-0 justify-center" : "px-4",
                            isActive && "bg-secondary text-primary"
                          )}
                        >
                           <item.icon size={20} className={cn(isActive && "fill-current")} />
                           {!collapsed && <span className="uppercase text-xs tracking-wide">{item.label}</span>}
                        </Button>
                      </NavLink>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right" className="font-bold uppercase text-xs">{item.label}</TooltipContent>}
                  </Tooltip>
                )
             })}
             </div>
          </div>

          <div className="px-3 mb-6">
             {!collapsed && <h3 className="px-4 text-[10px] font-black uppercase text-primary mb-2 tracking-widest">Recursos</h3>}
             <div className="space-y-1">
             {RESOURCE_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Tooltip key={item.path} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <NavLink to={item.path}>
                        <Button
                          variant={isActive ? "secondary" : "ghost"}
                          className={cn(
                            "w-full justify-start gap-4 mb-1 font-bold",
                            collapsed ? "px-0 justify-center" : "px-4",
                            isActive && "bg-secondary text-primary"
                          )}
                        >
                           <item.icon size={20} className={cn(isActive && "fill-current")} />
                           {!collapsed && <span className="uppercase text-xs tracking-wide">{item.label}</span>}
                        </Button>
                      </NavLink>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right" className="font-bold uppercase text-xs">{item.label}</TooltipContent>}
                  </Tooltip>
                )
             })}
             </div>
          </div>

          <div className="my-6 border-t border-white/5" />

          <div className="px-3">
             {!collapsed && <h3 className="px-4 text-[10px] font-black uppercase text-slate-500 mb-2 tracking-widest">Seguindo</h3>}
             <div className="space-y-1">
                {FOLLOWING.map((channel, i) => (
                   <Tooltip key={i} delayDuration={0}>
                     <TooltipTrigger asChild>
                       <div className={cn(
                         "group flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors",
                         collapsed && "justify-center"
                       )}>
                          <div className="relative">
                             <Avatar className={cn("border-2 transition-all", channel.isLive ? "border-red-500 grayscale-0" : "border-slate-700 grayscale opacity-50")}>
                                <AvatarImage src={channel.avatar} />
                                <AvatarFallback>{channel.name[0]}</AvatarFallback>
                             </Avatar>
                             {channel.isLive && <span className="absolute -bottom-1 -right-1 flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span></span>}
                          </div>

                          {!collapsed && (
                             <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                   <p className="text-sm font-bold truncate text-slate-200 group-hover:text-primary transition-colors">{channel.name}</p>
                                   {channel.isLive && <span className="text-[10px] text-red-500 font-mono flex items-center gap-1">🔴 {channel.viewers}</span>}
                                </div>
                                <p className="text-[10px] text-slate-500 truncate">{channel.game}</p>
                             </div>
                          )}
                       </div>
                     </TooltipTrigger>
                     {collapsed && (
                        <TooltipContent side="right" className="flex flex-col gap-1">
                           <span className="font-bold">{channel.name}</span>
                           <span className="text-[10px] text-slate-400">{channel.game}</span>
                           {channel.isLive ? <span className="text-[10px] text-red-500 font-bold">🔴 AO VIVO</span> : <span className="text-[10px] text-slate-500">Offline</span>}
                        </TooltipContent>
                     )}
                   </Tooltip>
                ))}
             </div>
          </div>
       </ScrollArea>

       <div className="p-4 border-t border-white/5">
          {user ? (
             <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
                <Avatar className="h-10 w-10 border border-primary/20 bg-secondary">
                   <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                   <AvatarFallback>U</AvatarFallback>
                </Avatar>
                {!collapsed && (
                   <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate text-white">{user.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                         <NavLink to="/settings"><Settings size={14} className="text-slate-500 hover:text-white cursor-pointer" /></NavLink>
                         <NavLink to="/wallet"><Wallet size={14} className="text-slate-500 hover:text-white cursor-pointer" /></NavLink>
                         <button onClick={logout}><LogOut size={14} className="text-red-500 hover:text-red-400 cursor-pointer" /></button>
                      </div>
                   </div>
                )}
             </div>
          ) : (
             <NavLink to="/login">
                <Button className={cn("w-full btn-gold font-black uppercase text-xs", collapsed && "px-0")}>
                   {collapsed ? <User size={16} /> : "Entrar"}
                </Button>
             </NavLink>
          )}
       </div>
    </aside>
  );
}
