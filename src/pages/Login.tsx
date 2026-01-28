import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from '../components/BrandLogo';
import { toast } from "sonner";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast.success("Acesso liberado ao Clutch Diamond Room.");
      navigate('/dashboard');
    } else {
      toast.error("Credenciais inválidas.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md space-y-10 relative z-10">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <BrandLogo size={48} textSize="text-4xl" className="flex-col" />
          </Link>
          <p className="text-slate-500 mt-4 text-xs font-bold uppercase tracking-[0.3em]">Ambiente de Transmissão Diamond</p>
        </div>

        <div className="bg-secondary/50 border border-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">E-mail de Elite</label>
              <Input 
                type="email" 
                placeholder="vip@clutch.live" 
                className="bg-background border-white/5 h-12 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Senha Premium</label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                className="bg-background border-white/5 h-12 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover h-12 text-black font-black italic rounded-2xl shadow-glow-sm transition-all group uppercase tracking-widest">
              ENTRAR NA SALA
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-slate-950 px-2 text-slate-600 font-bold tracking-widest">Acesso Rápido</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="border-white/5 bg-background hover:bg-white/5 h-11 font-bold text-slate-400">
               Google
            </Button>
            <Button variant="outline" className="border-white/5 bg-background hover:bg-white/5 h-11 font-bold text-slate-400">
               GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}