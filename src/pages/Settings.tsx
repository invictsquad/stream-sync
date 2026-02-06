import React, { useState } from 'react';
import { Settings as SettingsIcon, Shield, Lock, Bell, Link as LinkIcon, Smartphone, LogOut, Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { useAuth } from '@/contexts/AuthContext';

export default function Settings() {
  const { logout } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = () => {
    toast.success("Configurações salvas com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 space-y-8 max-w-5xl mx-auto">
       <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-2xl"><SettingsIcon className="text-primary" size={32} /></div>
          <div>
             <h1 className="text-3xl font-black italic uppercase tracking-tighter">Configurações</h1>
             <p className="text-slate-500 font-bold">Gerencie sua conta e preferências</p>
          </div>
       </div>

       <Tabs defaultValue="general" className="w-full">
          <TabsList className="bg-secondary/50 p-1 rounded-xl h-auto flex-wrap justify-start mb-8 gap-2">
             <TabsTrigger value="general" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-xs uppercase h-10 px-6">Geral</TabsTrigger>
             <TabsTrigger value="privacy" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-xs uppercase h-10 px-6">Privacidade</TabsTrigger>
             <TabsTrigger value="security" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-xs uppercase h-10 px-6">Segurança</TabsTrigger>
             <TabsTrigger value="connections" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black font-bold text-xs uppercase h-10 px-6">Conexões</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
             <Card className="bg-secondary/30 border-white/5">
                <CardHeader>
                   <CardTitle className="text-lg font-black italic uppercase text-white">Preferências</CardTitle>
                   <CardDescription>Ajuste sua experiência na plataforma.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                      <div className="flex items-center gap-3">
                         <Bell className="text-slate-400" />
                         <div>
                            <p className="font-bold text-white text-sm">Notificações por Email</p>
                            <p className="text-[10px] text-slate-500">Receba resumos semanais e alertas.</p>
                         </div>
                      </div>
                      <Switch defaultChecked />
                   </div>
                   <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                      <div className="flex items-center gap-3">
                         <Smartphone className="text-slate-400" />
                         <div>
                            <p className="font-bold text-white text-sm">Notificações Push</p>
                            <p className="text-[10px] text-slate-500">Alertas quando streamers entram ao vivo.</p>
                         </div>
                      </div>
                      <Switch defaultChecked />
                   </div>
                   <div className="flex justify-end">
                      <Button onClick={handleSave} className="btn-gold font-black uppercase">Salvar Alterações</Button>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="privacy">
             <Card className="bg-secondary/30 border-white/5">
                <CardHeader>
                   <CardTitle className="text-lg font-black italic uppercase text-white">Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                      <div>
                         <p className="font-bold text-white text-sm">Mostrar Status Online</p>
                         <p className="text-[10px] text-slate-500">Permitir que amigos vejam quando você está online.</p>
                      </div>
                      <Switch defaultChecked />
                   </div>
                   <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                      <div>
                         <p className="font-bold text-white text-sm">Mensagens Diretas</p>
                         <p className="text-[10px] text-slate-500">Permitir mensagens de qualquer pessoa.</p>
                      </div>
                      <Switch />
                   </div>
                   <div className="flex justify-end">
                      <Button onClick={handleSave} className="btn-gold font-black uppercase">Salvar Alterações</Button>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="security">
             <Card className="bg-secondary/30 border-white/5">
                <CardHeader>
                   <CardTitle className="text-lg font-black italic uppercase text-white">Segurança</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="space-y-4 max-w-md">
                      <div className="space-y-2">
                         <Label>Senha Atual</Label>
                         <Input type="password" className="bg-black/20 border-white/10" />
                      </div>
                      <div className="space-y-2">
                         <Label>Nova Senha</Label>
                         <div className="relative">
                            <Input type={showPassword ? "text" : "password"} className="bg-black/20 border-white/10 pr-10" />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                               {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                         </div>
                      </div>
                      <Button onClick={handleSave} variant="secondary" className="font-black uppercase text-xs w-full">Alterar Senha</Button>
                   </div>

                   <div className="border-t border-white/5 pt-6 mt-6">
                      <h4 className="font-black italic uppercase text-red-500 mb-4">Zona de Perigo</h4>
                      <Button onClick={logout} variant="destructive" className="font-black uppercase text-xs">
                         <LogOut size={16} className="mr-2" /> Sair da Conta
                      </Button>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="connections">
             <Card className="bg-secondary/30 border-white/5">
                <CardHeader>
                   <CardTitle className="text-lg font-black italic uppercase text-white">Contas Conectadas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                   {[
                     { name: "Twitch", connected: true, icon: "https://simpleicons.org/icons/twitch.svg" },
                     { name: "YouTube", connected: false, icon: "https://simpleicons.org/icons/youtube.svg" },
                     { name: "Discord", connected: true, icon: "https://simpleicons.org/icons/discord.svg" },
                     { name: "Steam", connected: false, icon: "https://simpleicons.org/icons/steam.svg" },
                   ].map((app) => (
                      <div key={app.name} className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-white/5">
                         <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/5`}>
                               <LinkIcon size={20} className="text-slate-400" />
                            </div>
                            <div>
                               <p className="font-bold text-white">{app.name}</p>
                               <p className="text-[10px] text-slate-500">{app.connected ? "Conectado como User123" : "Não conectado"}</p>
                            </div>
                         </div>
                         <Button
                           variant={app.connected ? "secondary" : "outline"}
                           size="sm"
                           className={`font-black uppercase text-[10px] h-8 ${!app.connected && "border-white/10 hover:bg-primary hover:text-black hover:border-primary"}`}
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
