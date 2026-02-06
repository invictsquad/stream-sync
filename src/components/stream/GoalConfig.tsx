import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Target } from 'lucide-react';
import { toast } from "sonner";

export function GoalConfig() {
  const [type, setType] = useState("followers");
  const [target, setTarget] = useState("1000");

  const handleSave = () => {
    toast.success("Meta atualizada com sucesso!");
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader>
        <CardTitle className="text-lg font-black italic uppercase text-white flex items-center gap-2">
            <Target size={20} className="text-red-500" /> Configurar Meta
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            <Label>Tipo de Meta</Label>
            <Select value={type} onValueChange={setType}>
                <SelectTrigger className="bg-black/20 border-white/10">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="followers">Seguidores</SelectItem>
                    <SelectItem value="subscribers">Inscritos</SelectItem>
                    <SelectItem value="donations">Doações</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label>Alvo</Label>
            <Input
                type="number"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="bg-black/20 border-white/10"
            />
        </div>
        <Button onClick={handleSave} className="w-full bg-red-600 hover:bg-red-700 font-bold">
            Salvar Meta
        </Button>
      </CardContent>
    </Card>
  );
}
