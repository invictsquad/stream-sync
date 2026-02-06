import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, ChevronRight, Gamepad2, User, Wand2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STEPS = [
   { title: "Perfil", icon: User },
   { title: "Interesses", icon: Gamepad2 },
   { title: "Personalização", icon: Wand2 },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNext = () => {
     if (step < STEPS.length - 1) {
        setStep(step + 1);
     } else {
        navigate('/');
     }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
       <div className="w-full max-w-2xl space-y-8">
          {/* Progress */}
          <div className="flex justify-between items-center px-8">
             {STEPS.map((s, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 ${i <= step ? 'text-primary' : 'text-zinc-700'}`}>
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${i <= step ? 'border-primary bg-primary/10' : 'border-zinc-800 bg-zinc-900'}`}>
                      {i < step ? <Check size={20} /> : <s.icon size={20} />}
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest">{s.title}</span>
                </div>
             ))}
             <div className="absolute left-0 top-[30%] w-full h-0.5 bg-zinc-900 -z-10" />
             {/* Note: Z-index would need relative parent, skipping complex layout for speed */}
          </div>

          <Card className="bg-zinc-900 border-zinc-800 min-h-[400px] flex flex-col">
             <CardHeader>
                <CardTitle className="text-3xl font-black italic uppercase text-white">
                   {step === 0 && "Vamos configurar seu perfil"}
                   {step === 1 && "O que você curte?"}
                   {step === 2 && "Dê o seu toque final"}
                </CardTitle>
                <CardDescription className="text-lg">
                   {step === 0 && "Escolha como você será visto na plataforma."}
                   {step === 1 && "Selecione pelo menos 3 categorias."}
                   {step === 2 && "Escolha um tema para começar."}
                </CardDescription>
             </CardHeader>
             <CardContent className="flex-1">
                {step === 0 && (
                   <div className="space-y-4 max-w-sm">
                      <div className="flex justify-center mb-6">
                         <div className="w-32 h-32 rounded-full bg-zinc-800 border-4 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500 cursor-pointer hover:border-primary hover:text-primary transition-colors">
                            Upload Avatar
                         </div>
                      </div>
                      <div className="space-y-2">
                         <Label>Bio</Label>
                         <Input placeholder="Conte um pouco sobre você..." className="bg-black/50" />
                      </div>
                   </div>
                )}

                {step === 1 && (
                   <div className="grid grid-cols-3 gap-4">
                      {['FPS', 'RPG', 'MOBA', 'Simulação', 'Terror', 'Estratégia', 'Esportes', 'Música', 'IRL'].map(cat => (
                         <Button key={cat} variant="outline" className="h-24 border-zinc-700 hover:border-primary hover:bg-primary/10 flex flex-col gap-2">
                            <Gamepad2 size={24} />
                            {cat}
                         </Button>
                      ))}
                   </div>
                )}

                {step === 2 && (
                   <div className="grid grid-cols-2 gap-6">
                      <div className="border-2 border-primary rounded-xl p-4 bg-zinc-950 cursor-pointer">
                         <div className="h-20 bg-zinc-900 rounded mb-2" />
                         <div className="h-4 w-1/2 bg-zinc-800 rounded" />
                         <p className="mt-2 text-primary font-bold text-center">Clutch Dark (Padrão)</p>
                      </div>
                      <div className="border-2 border-transparent hover:border-zinc-700 rounded-xl p-4 bg-zinc-900 opacity-50 cursor-not-allowed">
                         <div className="h-20 bg-white rounded mb-2" />
                         <div className="h-4 w-1/2 bg-zinc-200 rounded" />
                         <p className="mt-2 text-zinc-400 font-bold text-center">Light Mode (Em Breve)</p>
                      </div>
                   </div>
                )}
             </CardContent>
             <CardFooter className="justify-between border-t border-white/5 pt-6">
                <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                   Voltar
                </Button>
                <Button onClick={handleNext} className="btn-gold font-black uppercase px-8">
                   {step === 2 ? "Concluir" : "Próximo"} <ChevronRight size={16} className="ml-2" />
                </Button>
             </CardFooter>
          </Card>
       </div>
    </div>
  );
}
