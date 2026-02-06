import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy, Target, Lock, Users } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function Achievements() {
  return (
    <div className="p-4 md:p-8 space-y-8 pb-24 max-w-7xl mx-auto">
      <div className="mb-8">
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Conquistas</h1>
         <p className="text-muted-foreground">Desbloqueie marcos para ganhar recompensas exclusivas.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         {/* Main Highlight */}
         <Card className="lg:col-span-2 bg-gradient-to-r from-primary/20 to-transparent border-primary/20 relative overflow-hidden">
            <div className="absolute right-0 top-0 p-10 opacity-10">
               <Trophy size={200} />
            </div>
            <CardHeader>
               <CardTitle className="text-2xl font-black italic uppercase flex items-center gap-2">
                  <Award className="text-primary" size={32} /> Rumo ao Parceiro
               </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 relative z-10">
               <p className="max-w-md text-muted-foreground">Complete os requisitos abaixo para se tornar um Parceiro oficial e desbloquear 70% de revenue share.</p>

               <div className="grid gap-4">
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm font-bold uppercase">
                        <span>Média de 75 espectadores</span>
                        <span className="text-primary">45/75</span>
                     </div>
                     <Progress value={60} className="h-3" />
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm font-bold uppercase">
                        <span>Transmitir 12 dias diferentes</span>
                        <span className="text-primary">12/12 (Concluído)</span>
                     </div>
                     <Progress value={100} className="h-3 bg-emerald-950" indicatorColor="bg-emerald-500" />
                  </div>
               </div>
            </CardContent>
         </Card>

         {/* Badges */}
         <div className="space-y-4">
            <h3 className="font-black italic uppercase text-lg">Insígnias Recentes</h3>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-card/50 border border-white/5 p-4 rounded-xl flex flex-col items-center text-center gap-2">
                  <div className="bg-yellow-500/20 p-3 rounded-full text-yellow-500">
                     <Star size={24} fill="currentColor" />
                  </div>
                  <span className="font-bold text-xs uppercase">Primeira Live</span>
               </div>
               <div className="bg-card/50 border border-white/5 p-4 rounded-xl flex flex-col items-center text-center gap-2">
                  <div className="bg-purple-500/20 p-3 rounded-full text-purple-500">
                     <Users size={24} />
                  </div>
                  <span className="font-bold text-xs uppercase">100 Seguidores</span>
               </div>
               <div className="bg-card/50 border border-white/5 p-4 rounded-xl flex flex-col items-center text-center gap-2 opacity-50 grayscale">
                  <div className="bg-slate-500/20 p-3 rounded-full text-slate-500">
                     <Target size={24} />
                  </div>
                  <span className="font-bold text-xs uppercase">Afiliado</span>
                  <Lock size={12} className="absolute top-2 right-2" />
               </div>
               <div className="bg-card/50 border border-white/5 p-4 rounded-xl flex flex-col items-center text-center gap-2 opacity-50 grayscale">
                  <div className="bg-slate-500/20 p-3 rounded-full text-slate-500">
                     <Award size={24} />
                  </div>
                  <span className="font-bold text-xs uppercase">Parceiro</span>
                  <Lock size={12} className="absolute top-2 right-2" />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
