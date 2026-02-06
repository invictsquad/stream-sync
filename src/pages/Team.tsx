import React from 'react';
import { Users, Trophy, Target, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrandLogo } from '../components/BrandLogo';

export default function Team() {
  return (
    <div className="min-h-screen bg-background pb-24">
       {/* Hero / Banner */}
       <div className="h-64 md:h-80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

          <div className="absolute bottom-8 left-4 md:left-12 flex items-end gap-6">
             <div className="w-24 h-24 md:w-32 md:h-32 bg-black rounded-3xl border-4 border-background flex items-center justify-center shadow-2xl">
                <Shield size={48} className="text-primary" />
             </div>
             <div className="mb-2">
                <h1 className="text-3xl md:text-5xl font-black italic uppercase text-white tracking-tighter">Elite Squad</h1>
                <p className="text-slate-300 font-bold flex items-center gap-2"><Users size={16} /> 12 Membros • Criado em 2023</p>
             </div>
          </div>
       </div>

       <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 space-y-12">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { label: "Total Viewers", value: "2.5M", icon: Users },
               { label: "Horas Transmitidas", value: "15K", icon: Clock },
               { label: "Jogos Dominados", value: "18", icon: Trophy },
               { label: "Vitórias em Torneios", value: "42", icon: Target },
             ].map((stat, i) => (
                <div key={i} className="bg-secondary/30 border border-white/5 p-6 rounded-2xl">
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{stat.label}</p>
                   <p className="text-2xl font-black italic text-white flex items-center gap-2">
                      {stat.value}
                      {stat.icon && <stat.icon size={16} className="text-primary" />}
                   </p>
                </div>
             ))}
          </div>

          {/* Members */}
          <section>
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black italic uppercase">Membros do Time</h2>
                <Button className="btn-gold font-black uppercase text-xs">Solicitar Entrada</Button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map(i => (
                   <div key={i} className="bg-secondary/20 border border-white/5 p-4 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors group cursor-pointer">
                      <Avatar className="h-16 w-16 border-2 border-primary/20 group-hover:border-primary transition-colors">
                         <AvatarImage src={`https://i.pravatar.cc/150?u=team${i}`} />
                         <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                         <h3 className="font-black uppercase italic text-lg leading-none mb-1">Streamer {i}</h3>
                         <div className="flex gap-2">
                            <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase">FPS</span>
                            <span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Ao Vivo</span>
                         </div>
                      </div>
                      <Button size="sm" variant="secondary">Ver</Button>
                   </div>
                ))}
             </div>
          </section>
       </main>
    </div>
  );
}

import { Clock } from 'lucide-react';
