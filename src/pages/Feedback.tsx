import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageSquarePlus, Smile, Frown, Meh } from 'lucide-react';
import { toast } from "sonner";

export default function Feedback() {
  const [sentiment, setSentiment] = useState<'good' | 'neutral' | 'bad' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Feedback enviado! Obrigado por nos ajudar a melhorar.");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Feedback</h1>
         <p className="text-muted-foreground">Encontrou um bug? Tem uma sugestão? Conte para nós.</p>
      </div>

      <Card className="bg-secondary/30 border-white/5">
         <CardHeader>
            <CardTitle className="text-center font-black italic uppercase text-lg">Como está sua experiência?</CardTitle>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="flex justify-center gap-4">
                  <Button type="button" variant={sentiment === 'bad' ? 'destructive' : 'outline'} className="h-16 w-16 rounded-full" onClick={() => setSentiment('bad')}>
                     <Frown size={32} />
                  </Button>
                  <Button type="button" variant={sentiment === 'neutral' ? 'secondary' : 'outline'} className="h-16 w-16 rounded-full" onClick={() => setSentiment('neutral')}>
                     <Meh size={32} />
                  </Button>
                  <Button type="button" variant={sentiment === 'good' ? 'default' : 'outline'} className="h-16 w-16 rounded-full bg-green-500/10 hover:bg-green-500/20 border-green-500/50 text-green-500" onClick={() => setSentiment('good')}>
                     <Smile size={32} />
                  </Button>
               </div>

               <div className="space-y-2">
                  <Label>Assunto</Label>
                  <Input placeholder="Resumo do feedback" className="bg-black/20" required />
               </div>

               <div className="space-y-2">
                  <Label>Detalhes</Label>
                  <Textarea placeholder="Descreva sua experiência ou sugestão..." className="bg-black/20 min-h-[150px]" required />
               </div>

               <Button type="submit" className="w-full btn-gold font-black uppercase">Enviar Feedback</Button>
            </form>
         </CardContent>
      </Card>
    </div>
  );
}
