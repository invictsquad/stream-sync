import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function PartnerApplication() {
  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast.success("Aplicação enviada! Entraremos em contato em breve.");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 flex items-center justify-center">
       <Card className="w-full max-w-2xl bg-zinc-900 border-zinc-800">
          <CardHeader>
             <CardTitle className="text-3xl font-black italic uppercase tracking-tighter">Aplicação para Parceiro</CardTitle>
             <CardDescription>Conte-nos sobre você e seu conteúdo.</CardDescription>
          </CardHeader>
          <CardContent>
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Label>Nome Completo</Label>
                      <Input className="bg-black/40" required />
                   </div>
                   <div className="space-y-2">
                      <Label>Nome do Canal</Label>
                      <Input className="bg-black/40" required />
                   </div>
                </div>

                <div className="space-y-2">
                   <Label>Link do Canal (Twitch/YouTube/Outros)</Label>
                   <Input placeholder="https://..." className="bg-black/40" required />
                </div>

                <div className="space-y-2">
                   <Label>Média de Espectadores</Label>
                   <Input type="number" className="bg-black/40" required />
                </div>

                <div className="space-y-2">
                   <Label>Por que você quer ser parceiro?</Label>
                   <Textarea className="bg-black/40 min-h-[150px]" required />
                </div>

                <Button type="submit" className="w-full btn-gold font-black uppercase text-lg h-12">Enviar Aplicação</Button>
             </form>
          </CardContent>
       </Card>
    </div>
  );
}
