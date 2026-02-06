import React, { useState } from 'react';
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

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    username: "@johndoe_tv",
    bio: "Apaixonado por jogos competitivos e tecnologia. Faço lives todos os dias a partir das 18h. Junte-se à nossa comunidade no Discord!",
    location: "São Paulo, BR",
    website: "johndoe.com",
    avatar: "https://github.com/shadcn.png",
    banner: "https://www.transparenttextures.com/patterns/cubes.png"
  });

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Perfil atualizado com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24 font-sans">
       <header className="border-b border-border bg-background/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/"><BrandLogo size={20} textSize="text-lg" /></Link>
          <div className="flex gap-2">
             <Button variant="ghost" size="icon"><Bell size={20} /></Button>
             <Button variant="ghost" size="icon"><Settings size={20} /></Button>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="h-40 md:h-64 bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/10 relative overflow-hidden group">
         <div className="absolute inset-0 bg-repeat opacity-20" style={{ backgroundImage: `url(${user.banner})` }}></div>
         {isEditing && (
             <Button variant="secondary" size="sm" className="absolute top-4 right-4 text-xs font-bold uppercase cursor-pointer">
                <Camera size={14} className="mr-2" /> Alterar Capa
             </Button>
         )}
      </div>

      <main className="max-w-5xl mx-auto px-4 -mt-16 md:-mt-20 relative z-10">
         <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8 text-center md:text-left">
            <div className="relative group">
               <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-2xl">
                  <AvatarImage src={user.avatar} className="object-cover" />
                  <AvatarFallback>JD</AvatarFallback>
               </Avatar>
               {isEditing && (
                 <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" />
                 </div>
               )}
               <div className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-background"></div>
            </div>

            <div className="flex-1 pb-2 space-y-2 w-full">
               {isEditing ? (
                 <div className="space-y-2 max-w-md mx-auto md:mx-0">
                    <Input value={user.name} onChange={e => setUser({...user, name: e.target.value})} className="h-8 font-black text-lg bg-black/20" />
                    <Input value={user.username} onChange={e => setUser({...user, username: e.target.value})} className="h-7 text-sm bg-black/20" />
                 </div>
               ) : (
                 <>
                   <h1 className="text-3xl font-black italic uppercase text-foreground">{user.name} <span className="text-primary text-lg align-top">★</span></h1>
                   <p className="text-muted-foreground font-medium">{user.username}</p>
                 </>
               )}
            </div>

            <div className="pb-4 flex gap-3">
               {isEditing ? (
                 <>
                   <Button onClick={handleSave} className="btn-gold font-black uppercase text-xs h-10 px-6 rounded-xl"><Save size={14} className="mr-2"/> Salvar</Button>
                   <Button onClick={() => setIsEditing(false)} variant="secondary" className="font-black uppercase text-xs h-10 px-4 rounded-xl"><X size={14} className="mr-2"/> Cancelar</Button>
                 </>
               ) : (
                   <Button onClick={() => setIsEditing(true)} className="btn-gold font-black uppercase text-xs h-10 px-6 rounded-xl">Editar Perfil</Button>
               )}
               <Button variant="secondary" size="icon" className="h-10 w-10 rounded-xl"><LinkIcon size={16} /></Button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
               <section className="bg-card p-6 rounded-3xl border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-lg font-black italic uppercase text-foreground">Sobre</h3>
                     {isEditing && <span className="text-[10px] text-muted-foreground uppercase">Markdown Suportado</span>}
                  </div>
                  {isEditing ? (
                     <Textarea value={user.bio} onChange={e => setUser({...user, bio: e.target.value})} className="bg-black/20 border-border min-h-[120px]" />
                  ) : (
                     <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-wrap">{user.bio}</p>
                  )}
               </section>

               <Tabs defaultValue="achievements" className="w-full">
                  <TabsList className="bg-secondary/50 w-full justify-start h-12 p-1 rounded-2xl mb-6">
                     <TabsTrigger value="achievements" className="rounded-xl font-bold uppercase text-xs">Conquistas</TabsTrigger>
                     <TabsTrigger value="videos" className="rounded-xl font-bold uppercase text-xs">Vídeos</TabsTrigger>
                     <TabsTrigger value="schedule" className="rounded-xl font-bold uppercase text-xs">Agenda</TabsTrigger>
                     <TabsTrigger value="stats" className="rounded-xl font-bold uppercase text-xs">Estatísticas</TabsTrigger>
                     <TabsTrigger value="settings" className="rounded-xl font-bold uppercase text-xs">Configurações</TabsTrigger>
                  </TabsList>

                  <TabsContent value="achievements">
                    <section className="bg-card p-6 rounded-3xl border border-border">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="bg-secondary/20 p-4 rounded-xl flex flex-col items-center gap-2 border border-transparent hover:border-primary/50 transition-all cursor-help group">
                                <div className="bg-primary/20 p-3 rounded-full text-primary group-hover:scale-110 transition-transform"><Trophy size={20} /></div>
                                <span className="text-[10px] font-bold uppercase text-muted-foreground text-center">Streamer Elite Lvl {i}</span>
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
                     <section className="bg-card p-6 rounded-3xl border border-border grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                           <p className="text-2xl font-black text-foreground">12.5K</p>
                           <p className="text-[10px] uppercase font-bold text-muted-foreground">Seguidores</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-2xl font-black text-primary">850</p>
                           <p className="text-[10px] uppercase font-bold text-muted-foreground">Média Viewers</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-2xl font-black text-emerald-500">R$ 4.2k</p>
                           <p className="text-[10px] uppercase font-bold text-muted-foreground">Receita (Mês)</p>
                        </div>
                     </section>
                  </TabsContent>

                  <TabsContent value="settings">
                      <section className="bg-card p-6 rounded-3xl border border-border space-y-6">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                               <Bell className="text-primary" size={20} />
                               <div>
                                  <p className="text-sm font-bold text-foreground">Notificações Push</p>
                                  <p className="text-[10px] text-muted-foreground">Receber alertas de lives</p>
                               </div>
                            </div>
                            <Switch defaultChecked />
                         </div>
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                               <Moon className="text-primary" size={20} />
                               <div>
                                  <p className="text-sm font-bold text-foreground">Modo Escuro</p>
                                  <p className="text-[10px] text-muted-foreground">Ajustar aparência</p>
                               </div>
                            </div>
                            <Switch defaultChecked />
                         </div>
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                               <Shield className="text-primary" size={20} />
                               <div>
                                  <p className="text-sm font-bold text-foreground">Privacidade</p>
                                  <p className="text-[10px] text-muted-foreground">Ocultar status online</p>
                               </div>
                            </div>
                            <Switch />
                         </div>
                         <div className="pt-4 border-t border-border">
                            <Button variant="destructive" className="w-full text-xs font-black uppercase">Excluir Conta</Button>
                         </div>
                      </section>
                  </TabsContent>
               </Tabs>
            </div>

            <aside className="space-y-6">
               <div className="bg-card p-6 rounded-3xl border border-border space-y-4">
                  <h3 className="text-sm font-black italic uppercase text-foreground">Redes Sociais</h3>
                  <div className="space-y-3">
                     <div className="flex items-center gap-3 text-muted-foreground hover:text-[#1DA1F2] transition-colors cursor-pointer"><Twitter size={18} /> <span className="text-xs font-bold">@johndoe</span></div>
                     <div className="flex items-center gap-3 text-muted-foreground hover:text-[#E1306C] transition-colors cursor-pointer"><Instagram size={18} /> <span className="text-xs font-bold">@john.doe</span></div>
                     <div className="flex items-center gap-3 text-muted-foreground hover:text-[#FF0000] transition-colors cursor-pointer"><Youtube size={18} /> <span className="text-xs font-bold">/johndoeTV</span></div>
                     {isEditing && <Button variant="outline" className="w-full text-[10px] uppercase font-bold h-8 border-dashed">Adicionar Link</Button>}
                  </div>
               </div>

               <div className="bg-card p-6 rounded-3xl border border-border space-y-4">
                  <h3 className="text-sm font-black italic uppercase text-foreground">Detalhes</h3>
                  <div className="space-y-3 text-xs text-muted-foreground">
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
