import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, BarChart2 } from 'lucide-react';
import { toast } from "sonner";

export function PollCreator() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["Sim", "Não"]);
  const [duration, setDuration] = useState("60");

  const addOption = () => {
    if (options.length < 5) {
      setOptions([...options, ""]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const startPoll = () => {
    if (!question.trim()) {
      toast.error("Digite uma pergunta para a enquete!");
      return;
    }
    if (options.some(opt => !opt.trim())) {
      toast.error("Preencha todas as opções!");
      return;
    }

    // In a real app, this would send data to backend
    toast.success("Enquete iniciada!", {
      description: `Pergunta: ${question} | Duração: ${duration}s`,
      icon: <BarChart2 className="text-primary" />
    });

    // Reset form
    setQuestion("");
    setOptions(["Sim", "Não"]);
  };

  return (
    <Card className="bg-secondary/30 border border-white/5">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <BarChart2 size={16} /> Criar Enquete
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-black text-slate-500">Pergunta</Label>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Qual o próximo jogo?"
            className="bg-background border-white/10 h-10 text-xs"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-black text-slate-500">Opções</Label>
          {options.map((opt, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Opção ${index + 1}`}
                className="bg-background border-white/10 h-9 text-xs"
              />
              {options.length > 2 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeOption(index)}
                  className="h-9 w-9 text-slate-500 hover:text-red-500"
                >
                  <Trash2 size={14} />
                </Button>
              )}
            </div>
          ))}
          {options.length < 5 && (
            <Button
              variant="outline"
              size="sm"
              onClick={addOption}
              className="w-full h-8 text-xs border-dashed border-white/20 hover:border-primary/50"
            >
              <Plus size={12} className="mr-2" /> Adicionar Opção
            </Button>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-[10px] uppercase font-black text-slate-500">Duração</Label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-full bg-background border-white/10 h-9 text-xs">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30 Segundos</SelectItem>
              <SelectItem value="60">1 Minuto</SelectItem>
              <SelectItem value="120">2 Minutos</SelectItem>
              <SelectItem value="300">5 Minutos</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={startPoll} className="w-full btn-gold h-10 rounded-xl font-black uppercase text-xs">
          Iniciar Enquete
        </Button>
      </CardContent>
    </Card>
  );
}
