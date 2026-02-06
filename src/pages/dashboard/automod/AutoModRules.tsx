import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, List, Plus } from 'lucide-react';

export default function AutoModRules() {
  const [bannedTerm, setBannedTerm] = useState("");

  return (
    <div className="p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Regras do AutoMod</h1>
         <p className="text-muted-foreground">Configure a inteligência artificial de moderação.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase"><ShieldAlert className="text-red-500"/> Níveis de Proteção</CardTitle>
               <CardDescription>Quanto maior o nível, mais restrito será o chat.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               {[
                  { label: "Discriminação", level: "Alto" },
                  { label: "Conteúdo Sexual", level: "Médio" },
                  { label: "Agressividade", level: "Alto" },
                  { label: "Spam", level: "Baixo" },
               ].map((rule, i) => (
                  <div key={i} className="flex items-center justify-between">
                     <span className="font-bold text-sm">{rule.label}</span>
                     <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-6 text-[10px] uppercase font-bold bg-white/5">Baixo</Button>
                        <Button variant="ghost" size="sm" className={`h-6 text-[10px] uppercase font-bold ${rule.level === 'Médio' ? 'bg-primary text-black' : 'bg-white/5'}`}>Médio</Button>
                        <Button variant="ghost" size="sm" className={`h-6 text-[10px] uppercase font-bold ${rule.level === 'Alto' ? 'bg-red-500 text-white' : 'bg-white/5'}`}>Alto</Button>
                     </div>
                  </div>
               ))}
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2 font-black italic uppercase"><List /> Termos Bloqueados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex gap-2">
                  <Input
                     value={bannedTerm}
                     onChange={(e) => setBannedTerm(e.target.value)}
                     placeholder="Adicionar termo..."
                     className="bg-black/20"
                  />
                  <Button size="icon" className="btn-gold"><Plus size={16}/></Button>
               </div>
               <div className="flex flex-wrap gap-2">
                  {['spam', 'promo', 'follow4follow', 'cheat'].map((term) => (
                     <div key={term} className="bg-red-500/10 border border-red-500/20 text-red-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2">
                        {term}
                        <button className="hover:text-white">×</button>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
