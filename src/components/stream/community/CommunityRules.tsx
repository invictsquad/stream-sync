import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BookOpen } from 'lucide-react';
import { toast } from "sonner";

export function CommunityRules() {
  const [rules, setRules] = useState("1. Respeito acima de tudo.\n2. Sem spam.\n3. Sem links suspeitos.\n4. Divirta-se!");

  const handleSave = () => {
    toast.success("Regras da comunidade atualizadas!");
  };

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <BookOpen size={16} className="text-primary" /> Regras do Chat
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <p className="text-[9px] text-slate-500 font-bold uppercase">Exibidas quando um novo usuário entra no chat.</p>
          <Textarea
             value={rules}
             onChange={(e) => setRules(e.target.value)}
             className="min-h-[150px] bg-black/40 border-white/5 text-xs leading-relaxed resize-none focus:border-primary"
          />
          <Button onClick={handleSave} className="w-full btn-gold h-9 text-[10px]">Salvar Regras</Button>
       </CardContent>
    </Card>
  );
}
