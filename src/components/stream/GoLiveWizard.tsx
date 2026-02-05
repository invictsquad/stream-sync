import React, { useState } from 'react';
import { Radio, Users, Settings, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function GoLiveWizard() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [notification, setNotification] = useState("");

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleStart();
  };

  const handleStart = () => {
    toast.success("Você está ao vivo!", {
      description: `Título: ${title} | Categoria: ${category}`,
      icon: <Radio className="text-red-500 animate-pulse" />
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn-gold h-12 px-8 rounded-2xl font-black uppercase tracking-widest animate-pulse">
           <Radio className="mr-2" size={18} /> Iniciar Live
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-secondary border border-white/10 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-black italic uppercase text-primary">Configurar Transmissão</DialogTitle>
          <div className="sr-only">Wizard para iniciar a live</div>
        </DialogHeader>

        <div className="py-4 space-y-6">
           {/* Step Indicator */}
           <div className="flex justify-between mb-4">
              {[1, 2, 3].map(i => (
                 <div key={i} className={`h-1 flex-1 mx-1 rounded-full transition-all ${step >= i ? 'bg-primary' : 'bg-white/10'}`} />
              ))}
           </div>

           {step === 1 && (
             <div className="space-y-4 animate-in slide-in-from-right-10">
                <div className="space-y-2">
                   <Label className="text-xs uppercase font-black text-slate-500">Título da Live</Label>
                   <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex: Rumo ao Global" className="bg-black/20 border-white/10" />
                </div>
                <div className="space-y-2">
                   <Label className="text-xs uppercase font-black text-slate-500">Categoria</Label>
                   <Select onValueChange={setCategory}>
                      <SelectTrigger className="bg-black/20 border-white/10"><SelectValue placeholder="Selecione" /></SelectTrigger>
                      <SelectContent>
                         <SelectItem value="games">Games</SelectItem>
                         <SelectItem value="music">Música</SelectItem>
                         <SelectItem value="irl">IRL</SelectItem>
                      </SelectContent>
                   </Select>
                </div>
             </div>
           )}

           {step === 2 && (
             <div className="space-y-4 animate-in slide-in-from-right-10">
                <div className="space-y-2">
                   <Label className="text-xs uppercase font-black text-slate-500">Notificação aos Seguidores</Label>
                   <Input value={notification} onChange={e => setNotification(e.target.value)} placeholder="Ex: Corre que começou!" className="bg-black/20 border-white/10" />
                   <p className="text-[10px] text-slate-500">Essa mensagem será enviada via push para todos os seguidores.</p>
                </div>
             </div>
           )}

           {step === 3 && (
             <div className="text-center animate-in slide-in-from-right-10 space-y-4">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto">
                   <Radio size={40} className="text-primary" />
                </div>
                <div>
                   <h3 className="text-lg font-black italic text-white">Pronto para começar?</h3>
                   <p className="text-xs text-slate-400">Verifique se o OBS já está transmitindo para o servidor.</p>
                </div>
             </div>
           )}

           <Button onClick={handleNext} className="w-full btn-gold h-12 rounded-xl font-black uppercase">
              {step === 3 ? "Entrar ao Vivo" : "Próximo"} <ArrowRight size={16} className="ml-2" />
           </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
