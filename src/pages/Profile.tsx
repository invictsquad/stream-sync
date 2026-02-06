import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Youtube, MapPin, Link as LinkIcon, Edit3, Trophy, Settings, Camera, Save, X, Bell, Moon, Shield, Key } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BrandLogo } from '../components/BrandLogo';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { VodList } from '@/components/stream/VodList';
import { ScheduleList } from '@/components/stream/ScheduleList';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { storage } from '@/lib/storage';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(storage.user.get());

  useEffect(() => {
      // Sync with storage on mount/updates
      setUser(storage.user.get());
  }, []);

  const handleSave = () => {
    storage.user.update(user);
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-sans">
       <header className="border-b border-border bg-background/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/"><BrandLogo size={18} textSize="text-base" /></Link>
          <div className="flex gap-2">
             <Button variant="ghost" size="icon" className="h-8 w-8"><Bell size={16} /></Button>
             <Link to="/settings">
                <Button variant="ghost" size="icon" className="h-8 w-8"><Settings size={16} /></Button>
             </Link>
          </div>
        </div>
      </header>

      {/* Banner - Compact Height */}
      <div className="h-32 md:h-48 bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/10 relative overflow-hidden group">
         <div className="absolute inset-0 bg-repeat opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${user.banner})` }}></div>
         {isEditing && (
             <Button variant="secondary" size="sm" className="absolute top-4 right-4 text-[10px] font-bold uppercase cursor-pointer h-7">
                <Camera size={12} className="mr-2" /> Alterar Capa
             </Button>
         )}
      </div>

      <main className="max-w-5xl mx-auto px-4 -mt-12 md:-mt-16 relative z-10">
         <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 mb-6 text-center md:text-left">
            <div className="relative group shrink-0">
               <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-background shadow-2xl">
                  <AvatarImage src={user.avatar} className="object-cover" />
                  <AvatarFallback>JD</AvatarFallback>
               </Avatar>
               {isEditing && (
                 <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={20} />
                 </div>
               )}
               <div className="absolute bottom-1 right-1 bg-green-500 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-background"></div>
            </div>

            <div className="flex-1 pb-1 space-y-1 w-full">
               {isEditing ? (
                 <div className="space-y-2 max-w-md mx-auto md:mx-0">
                    <Input value={user.name} onChange={e => setUser({...user, name: e.target.value})} className="h-8 font-black text-lg bg-black/20" />
                    <Input value={user.username} onChange={e => setUser({...user, username: e.target.value})} className="h-7 text-xs bg-black/20" />
                 </div>
               ) : (
                 <>
                   <h1 className="text-2xl md:text-3xl font-black italic uppercase text-foreground leading-none">{user.name} <span className="text-primary text-sm align-top">★</span></h1>
                   <p className="text-muted-foreground font-medium text-xs md:text-sm">{user.username}</p>
                 </>
               )}
            </div>

            <div className="pb-2 flex gap-2 w-full md:w-auto justify-center md:justify-end">
               {isEditing ? (
                 <>
                   <Button onClick={handleSave} className="btn-gold font-black uppercase text-[10px] h-8 px-4 rounded-lg"><Save size={12} className="mr-2"/> Salvar</Button>
                   <Button onClick={() => setIsEditing(false)} variant="secondary" className="font-black uppercase text-[10px] h-8 px-4 rounded-lg"><X size={12} className="mr-2"/> Cancelar</Button>
                 </>
               ) : (
                   <Button onClick={() => setIsEditing(true)} className="btn-gold font-black uppercase text-[10px] h-8 px-4 rounded-lg">Editar Perfil</Button>
               )}
               <Button variant="secondary" size="icon" className="h-8 w-8 rounded-lg"><LinkIcon size={14} /></Button>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
               <section className="bg-card/50 p-4 rounded-xl border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                     <h3 className="text-sm font-black italic uppercase text-foreground">Sobre</h3>
                     {isEditing && <span className="text-[9px] text-muted-foreground uppercase">Markdown</span>}
                  </div>
                  {isEditing ? (
                     <Textarea value={user.bio} onChange={e => setUser({...user, bio: e.target.value})} className="bg-black/20 border-border min-h-[100px] text-xs" />
                  ) : (
                     <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-wrap">{user.bio}</p>
                  )}
               </section>

               <Tabs defaultValue="achievements" className="w-full">
                  <TabsList className="bg-secondary/50 w-full justify-start h-10 p-1 rounded-xl mb-4 overflow-x-auto">
                     <TabsTrigger value="achievements" className="rounded-lg font-bold uppercase text-[10px] h-8">Conquistas</TabsTrigger>
                     <TabsTrigger value="videos" className="rounded-lg font-bold uppercase text-[10px] h-8">Vídeos</TabsTrigger>
                     <TabsTrigger value="schedule" className="rounded-lg font-bold uppercase text-[10px] h-8">Agenda</TabsTrigger>
                     <TabsTrigger value="stats" className="rounded-lg font-bold uppercase text-[10px] h-8">Stats</TabsTrigger>
                  </TabsList>

                  <TabsContent value="achievements">
                    <section className="bg-card/50 p-4 rounded-xl border border-border">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="bg-secondary/20 p-3 rounded-lg flex flex-col items-center gap-2 border border-transparent hover:border-primary/50 transition-all cursor-help group">
                                <div className="bg-primary/20 p-2 rounded-full text-primary group-hover:scale-110 transition-transform"><Trophy size={16} /></div>
                                <span className="text-[9px] font-bold uppercase text-muted-foreground text-center">Nível {i}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                  </TabsContent>

                  <TabsContent value="videos">
                     <VodList />
                  </TabsContent>

                  <TabsContent value="schedule">
                     <ScheduleList />
                  </TabsContent>

                  <TabsContent value="stats">
                     <section className="bg-card/50 p-4 rounded-xl border border-border grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-0.5">
                           <p className="text-xl font-black text-foreground">12.5K</p>
                           <p className="text-[9px] uppercase font-bold text-muted-foreground">Seguidores</p>
                        </div>
                        <div className="space-y-0.5">
                           <p className="text-xl font-black text-primary">850</p>
                           <p className="text-[9px] uppercase font-bold text-muted-foreground">Média Viewers</p>
                        </div>
                        <div className="space-y-0.5">
                           <p className="text-xl font-black text-emerald-500">R$ 4.2k</p>
                           <p className="text-[9px] uppercase font-bold text-muted-foreground">Receita</p>
                        </div>
                     </section>
                  </TabsContent>
               </Tabs>
            </div>

            <aside className="space-y-6">
               <div className="bg-card/50 p-4 rounded-xl border border-border space-y-3">
                  <h3 className="text-xs font-black italic uppercase text-foreground">Redes Sociais</h3>
                  <div className="space-y-2">
                     <div className="flex items-center gap-3 text-muted-foreground hover:text-[#1DA1F2] transition-colors cursor-pointer group">
                        <Twitter size={16} />
                        <span className="text-xs font-bold group-hover:text-white">@johndoe</span>
                     </div>
                     <div className="flex items-center gap-3 text-muted-foreground hover:text-[#E1306C] transition-colors cursor-pointer group">
                        <Instagram size={16} />
                        <span className="text-xs font-bold group-hover:text-white">@john.doe</span>
                     </div>
                     <div className="flex items-center gap-3 text-muted-foreground hover:text-[#FF0000] transition-colors cursor-pointer group">
                        <Youtube size={16} />
                        <span className="text-xs font-bold group-hover:text-white">/johndoeTV</span>
                     </div>
                     {isEditing && <Button variant="outline" className="w-full text-[9px] uppercase font-bold h-7 border-dashed">Adicionar Link</Button>}
                  </div>
               </div>

               <div className="bg-card/50 p-4 rounded-xl border border-border space-y-3">
                  <h3 className="text-xs font-black italic uppercase text-foreground">Detalhes</h3>
                  <div className="space-y-2 text-xs text-muted-foreground">
                     <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        {isEditing ? <Input value={user.location} onChange={e => setUser({...user, location: e.target.value})} className="h-6 text-xs bg-black/20" /> : user.location}
                     </div>
                     <div className="flex items-center gap-2">
                        <LinkIcon size={14} />
                        {isEditing ? <Input value={user.website} onChange={e => setUser({...user, website: e.target.value})} className="h-6 text-xs bg-black/20" /> : <a href={`https://${user.website}`} target="_blank" className="hover:text-primary transition-colors">{user.website}</a>}
                     </div>
                  </div>
               </div>
            </aside>
         </div>
      </main>
    </div>
  );
}
