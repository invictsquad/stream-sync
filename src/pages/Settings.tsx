import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Shield, Lock, Bell, Link as LinkIcon, Smartphone, LogOut, Eye, EyeOff, Monitor, Ban, QrCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';
import { storage } from '@/lib/storage';

export default function Settings() {
  const { logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState(storage.settings.get());

  useEffect(() => {
      setSettings(storage.settings.get());
  }, []);

  const handleUpdate = (key: keyof typeof settings, value: any) => {
      const newSettings = { ...settings, [key]: value };
      setSettings(newSettings);
      storage.settings.update(newSettings);
      toast.success("Preferência atualizada!");
  };

  return (
    <div className="min-h-screen bg-background space-y-6 max-w-4xl mx-auto">
       <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-xl"><SettingsIcon className="text-primary" size={24} /></div>
          <div>
             <h1 className="text-2xl font-black italic uppercase tracking-tighter">Configurações</h1>
             <p className="text-slate-500 font-bold text-xs">Gerencie sua conta e preferências</p>
          </div>
       </div>

       <Tabs defaultValue="general" className="w-full">
          <TabsList className="bg-secondary/50 p-1 rounded-xl h-auto flex-wrap justify-start mb-6 gap-1 w-full overflow-x-auto">
             <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-[10px] uppercase h-8 px-4 flex-1 md:flex-none">Geral</TabsTrigger>
             <TabsTrigger value="privacy" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-[10px] uppercase h-8 px-4 flex-1 md:flex-none">Privacidade</TabsTrigger>
             <TabsTrigger value="security" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-[10px] uppercase h-8 px-4 flex-1 md:flex-none">Segurança</TabsTrigger>
             <TabsTrigger value="connections" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-[10px] uppercase h-8 px-4 flex-1 md:flex-none">Conexões</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
             <Card className="bg-secondary/30 border-white/5 compact-card">
                <CardHeader className="p-0 mb-4">
                   <CardTitle className="text-sm font-black italic uppercase text-white">Preferências</CardTitle>
                   <CardDescription className="text-xs">Ajuste sua experiência na plataforma.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                      <div className="flex items-center gap-3">
                         <Bell size={18} className="text-slate-400" />
                         <div>
                            <p className="font-bold text-white text-xs">Notificações por Email</p>
                            <p className="text-[9px] text-slate-500">Receba resumos semanais e alertas.</p>
                         </div>
                      </div>
                      <Switch checked={settings.emailNotifications} onCheckedChange={(c) => handleUpdate('emailNotifications', c)} className="scale-75" />
                   </div>
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                      <div className="flex items-center gap-3">
                         <Smartphone size={18} className="text-slate-400" />
                         <div>
                            <p className="font-bold text-white text-xs">Notificações Push</p>
                            <p className="text-[9px] text-slate-500">Alertas quando streamers entram ao vivo.</p>
                         </div>
                      </div>
                      <Switch checked={settings.pushNotifications} onCheckedChange={(c) => handleUpdate('pushNotifications', c)} className="scale-75" />
                   </div>
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                      <div className="flex items-center gap-3">
                         <Monitor size={18} className="text-slate-400" />
                         <div>
                            <p className="font-bold text-white text-xs">Tema Escuro</p>
                            <p className="text-[9px] text-slate-500">Alternar entre claro e escuro.</p>
                         </div>
                      </div>
                      <Switch checked={settings.theme === 'dark'} onCheckedChange={(c) => handleUpdate('theme', c ? 'dark' : 'light')} className="scale-75" />
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="privacy">
             <Card className="bg-secondary/30 border-white/5 compact-card">
                <CardHeader className="p-0 mb-4">
                   <CardTitle className="text-sm font-black italic uppercase text-white">Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-0">
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                      <div>
                         <p className="font-bold text-white text-xs">Mostrar Status Online</p>
                         <p className="text-[9px] text-slate-500">Permitir que amigos vejam quando você está online.</p>
                      </div>
                      <Switch checked={settings.showOnlineStatus} onCheckedChange={(c) => handleUpdate('showOnlineStatus', c)} className="scale-75" />
                   </div>
                   <div className="flex items-center justify-between p-3 bg-black/20 rounded-lg">
                      <div>
                         <p className="font-bold text-white text-xs">Mensagens Diretas</p>
                         <p className="text-[9px] text-slate-500">Permitir mensagens de qualquer pessoa.</p>
                      </div>
                      <Switch checked={settings.allowDM} onCheckedChange={(c) => handleUpdate('allowDM', c)} className="scale-75" />
                   </div>

                   <div className="border-t border-white/5 pt-4">
                      <h4 className="font-black italic uppercase text-slate-400 mb-2 flex items-center gap-2 text-xs"><Ban size={14} /> Usuários Bloqueados</h4>
                      <div className="space-y-2">
                         <div className="flex justify-between items-center bg-black/40 p-2 rounded-lg">
                            <span className="text-xs font-bold text-slate-300">Troll_User_99</span>
                            <Button size="sm" variant="ghost" className="text-[9px] text-red-500 hover:text-red-400 h-5 px-2">Desbloquear</Button>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="security">
             <Card className="bg-secondary/30 border-white/5 compact-card">
                <CardHeader className="p-0 mb-4">
                   <CardTitle className="text-sm font-black italic uppercase text-white">Segurança</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-0">
                   <div className="space-y-3 max-w-md">
                      <div className="space-y-1">
                         <Label className="text-xs">Senha Atual</Label>
                         <Input type="password" className="bg-black/20 border-white/10 h-8 text-xs" />
                      </div>
                      <div className="space-y-1">
                         <Label className="text-xs">Nova Senha</Label>
                         <div className="relative">
                            <Input type={showPassword ? "text" : "password"} className="bg-black/20 border-white/10 pr-8 h-8 text-xs" />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                               {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                         </div>
                      </div>
                      <Button variant="secondary" className="font-black uppercase text-[10px] w-full h-8">Alterar Senha</Button>
                   </div>

                   <div className="p-3 bg-black/20 rounded-lg border border-white/5 flex items-center justify-between">
                      <div>
                         <h4 className="font-black italic uppercase text-white flex items-center gap-2 text-xs"><QrCode size={14} className="text-primary"/> Autenticação em 2 Fatores</h4>
                         <p className="text-[9px] text-slate-500">Proteja sua conta com uma camada extra de segurança.</p>
                      </div>
                      <Dialog>
                         <DialogTrigger asChild>
                            <Button size="sm" className="btn-gold text-[9px] font-black uppercase h-7 px-3">Ativar</Button>
                         </DialogTrigger>
                         <DialogContent className="bg-zinc-900 border-white/10 text-white">
                            <DialogHeader>
                               <DialogTitle className="font-black italic uppercase">Configurar 2FA</DialogTitle>
                            </DialogHeader>
                            <div className="py-6 flex flex-col items-center gap-4 text-center">
                               <div className="w-32 h-32 bg-white p-2 rounded-xl">
                                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ClutchLiveSecretKey" className="w-full h-full" alt="QR Code" />
                               </div>
                               <p className="text-xs text-slate-400">Escaneie o código com seu app autenticador.</p>
                               <Input placeholder="000 000" className="bg-black/50 border-white/10 text-center tracking-[0.5em] font-mono text-lg h-10" maxLength={6} />
                               <Button onClick={() => toast.success("2FA Ativado com sucesso!")} className="w-full btn-gold font-black uppercase h-9">Confirmar</Button>
                            </div>
                         </DialogContent>
                      </Dialog>
                   </div>

                   <div className="border-t border-white/5 pt-4">
                      <h4 className="font-black italic uppercase text-red-500 mb-2 text-xs">Zona de Perigo</h4>
                      <Button onClick={logout} variant="destructive" className="font-black uppercase text-[10px] h-8 w-full">
                         <LogOut size={14} className="mr-2" /> Sair da Conta
                      </Button>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="connections">
             <Card className="bg-secondary/30 border-white/5 compact-card">
                <CardHeader className="p-0 mb-4">
                   <CardTitle className="text-sm font-black italic uppercase text-white">Contas Conectadas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                   {[
                     { name: "Twitch", connected: true, icon: "https://simpleicons.org/icons/twitch.svg" },
                     { name: "YouTube", connected: false, icon: "https://simpleicons.org/icons/youtube.svg" },
                     { name: "Discord", connected: true, icon: "https://simpleicons.org/icons/discord.svg" },
                     { name: "Steam", connected: false, icon: "https://simpleicons.org/icons/steam.svg" },
                   ].map((app) => (
                      <div key={app.name} className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/5">
                         <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/5`}>
                               <LinkIcon size={16} className="text-slate-400" />
                            </div>
                            <div>
                               <p className="font-bold text-white text-xs">{app.name}</p>
                               <p className="text-[9px] text-slate-500">{app.connected ? "Conectado" : "Não conectado"}</p>
                            </div>
                         </div>
                         <Button
                           variant={app.connected ? "secondary" : "outline"}
                           size="sm"
                           className={`font-black uppercase text-[9px] h-7 px-3 ${!app.connected && "border-white/10 hover:bg-primary hover:text-black hover:border-primary"}`}
                         >
                            {app.connected ? "Desconectar" : "Conectar"}
                         </Button>
                      </div>
                   ))}
                </CardContent>
             </Card>
          </TabsContent>
       </Tabs>
    </div>
  );
}
