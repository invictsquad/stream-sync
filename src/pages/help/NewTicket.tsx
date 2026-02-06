import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function NewTicket() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
     toast.success("Chamado criado com sucesso!");
     setTimeout(() => navigate('/help/tickets'), 1000);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-3xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Novo Chamado</h1>
         <p className="text-muted-foreground">Descreva seu problema para nossa equipe de suporte.</p>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="space-y-2">
                  <Label>Assunto</Label>
                  <Input placeholder="Resumo do problema..." className="bg-black/40" required />
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <Label>Departamento</Label>
                     <Select>
                        <SelectTrigger className="bg-black/40"><SelectValue placeholder="Selecione..." /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="tech">Suporte Técnico</SelectItem>
                           <SelectItem value="billing">Pagamentos & Assinaturas</SelectItem>
                           <SelectItem value="account">Conta & Segurança</SelectItem>
                           <SelectItem value="partner">Parcerias</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="space-y-2">
                     <Label>Prioridade</Label>
                     <Select defaultValue="normal">
                        <SelectTrigger className="bg-black/40"><SelectValue /></SelectTrigger>
                        <SelectContent>
                           <SelectItem value="low">Baixa</SelectItem>
                           <SelectItem value="normal">Normal</SelectItem>
                           <SelectItem value="high">Alta</SelectItem>
                           <SelectItem value="critical">Crítica (Sistema fora do ar)</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>

               <div className="space-y-2">
                  <Label>Mensagem</Label>
                  <Textarea placeholder="Descreva os detalhes..." className="bg-black/40 min-h-[200px]" required />
               </div>

               <div className="space-y-2">
                  <Label>Anexos (Opcional)</Label>
                  <Input type="file" className="bg-black/40 pt-2" />
               </div>

               <div className="flex justify-end gap-4 pt-4">
                  <Button type="button" variant="ghost" onClick={() => navigate(-1)}>Cancelar</Button>
                  <Button type="submit" className="btn-gold font-black uppercase px-8">Enviar Chamado</Button>
               </div>
            </form>
         </CardContent>
      </Card>
    </div>
  );
}
