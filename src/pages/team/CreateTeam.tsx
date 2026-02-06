import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Users, Upload } from 'lucide-react';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function CreateTeam() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast.success("Equipe criada com sucesso!");
     setTimeout(() => navigate('/dashboard/teams'), 1000);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-3xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Criar Equipe</h1>
         <p className="text-muted-foreground">Junte forças com outros criadores.</p>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardHeader>
            <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Users /> Detalhes da Equipe</CardTitle>
            <CardDescription>Você será o proprietário desta equipe.</CardDescription>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-2">
                  <Label>Nome da Equipe</Label>
                  <Input placeholder="Ex: Elite Gamers" className="bg-black/40" required />
               </div>

               <div className="space-y-2">
                  <Label>Tag (Abreviação)</Label>
                  <Input placeholder="ELITE" maxLength={5} className="bg-black/40 uppercase" required />
               </div>

               <div className="space-y-2">
                  <Label>Logo</Label>
                  <div className="border-2 border-dashed border-zinc-700 bg-black/20 rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                     <Upload size={24} className="text-zinc-500 mb-2"/>
                     <span className="text-xs text-zinc-400 font-bold uppercase">Upload Imagem (5MB)</span>
                  </div>
               </div>

               <Button className="w-full btn-gold font-black uppercase h-12">Criar Equipe</Button>
            </form>
         </CardContent>
      </Card>
    </div>
  );
}
