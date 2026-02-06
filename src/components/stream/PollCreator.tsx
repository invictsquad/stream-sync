import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, BarChart2 } from 'lucide-react';
import { toast } from "sonner";

export function PollCreator() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["Sim", "Não"]);
  const [duration, setDuration] = useState("60");

  const addOption = () => {
    if (options.length < 5) setOptions([...options, ""]);
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
        setOptions(options.filter((_, i) => i !== index));
    }
  };

  const createPoll = () => {
    if (!question) return toast.error("Digite a pergunta!");
    toast.success("Enquete criada com sucesso!");
    setQuestion("");
    setOptions(["Sim", "Não"]);
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader>
        <CardTitle className="text-lg font-black italic uppercase text-white flex items-center gap-2">
            <BarChart2 size={20} />
            Criar Enquete
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
            <Label>Pergunta</Label>
            <Input
                placeholder="Qual o próximo jogo?"
                className="bg-black/20 border-white/10"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
        </div>

        <div className="space-y-2">
            <Label>Opções</Label>
            {options.map((opt, i) => (
                <div key={i} className="flex gap-2">
                    <Input
                        value={opt}
                        onChange={(e) => updateOption(i, e.target.value)}
                        className="bg-black/20 border-white/10"
                        placeholder={`Opção ${i + 1}`}
                    />
                    {options.length > 2 && (
                        <Button variant="ghost" size="icon" onClick={() => removeOption(i)}>
                            <Trash2 size={16} className="text-red-500" />
                        </Button>
                    )}
                </div>
            ))}
            {options.length < 5 && (
                <Button variant="outline" size="sm" onClick={addOption} className="w-full border-dashed border-zinc-700 text-zinc-400">
                    <Plus size={16} className="mr-2" /> Adicionar Opção
                </Button>
            )}
        </div>

        <div className="space-y-2">
            <Label>Duração</Label>
            <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="bg-black/20 border-white/10">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="30">30 Segundos</SelectItem>
                    <SelectItem value="60">1 Minuto</SelectItem>
                    <SelectItem value="120">2 Minutos</SelectItem>
                    <SelectItem value="300">5 Minutos</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <Button onClick={createPoll} className="w-full btn-gold font-bold">
            Iniciar Enquete
        </Button>
      </CardContent>
    </Card>
  );
}
