import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Save } from 'lucide-react';
import { toast } from "sonner";

export function GoalConfig() {
  const [title, setTitle] = useState("Novo Microfone");
  const [target, setTarget] = useState("1000");
  const [type, setType] = useState("donation");

  const handleSave = () => {
    toast.success("Meta atualizada com sucesso!", {
      description: `${title}: ${type === 'donation' ? 'R$' : ''}${target}`,
      icon: <Target className="text-emerald-500" />
    });
  };

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Target size={16} /> Configurar Meta
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-black text-slate-500">Título da Meta</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-background border-white/10 h-10 text-xs"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-[10px] uppercase font-black text-slate-500">Tipo</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-full bg-background border-white/10 h-10 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="donation">Doações (R$)</SelectItem>
                <SelectItem value="subs">Inscritos</SelectItem>
                <SelectItem value="followers">Seguidores</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
             <Label className="text-[10px] uppercase font-black text-slate-500">Alvo</Label>
             <Input
               value={target}
               onChange={(e) => setTarget(e.target.value)}
               className="bg-background border-white/10 h-10 text-xs"
             />
          </div>
        </div>

        <Button onClick={handleSave} className="w-full bg-emerald-600 hover:bg-emerald-700 h-10 rounded-xl font-black uppercase text-xs">
          <Save size={14} className="mr-2" /> Salvar Meta
        </Button>
      </CardContent>
    </Card>
  );
}
