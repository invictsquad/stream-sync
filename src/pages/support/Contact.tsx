import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Responderemos em breve.");
  };

  return (
    <div className="min-h-screen bg-background p-8 pb-24 max-w-2xl mx-auto">
       <div className="mb-8">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Fale Conosco</h1>
          <p className="text-slate-500">Envie suas dúvidas, sugestões ou reporte bugs.</p>
       </div>

       <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/30 p-8 rounded-3xl border border-white/5">
          <div className="grid md:grid-cols-2 gap-4">
             <div className="space-y-2">
                <Label>Nome</Label>
                <Input placeholder="Seu nome" className="bg-black/20 border-white/10" />
             </div>
             <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="seu@email.com" className="bg-black/20 border-white/10" />
             </div>
          </div>
          <div className="space-y-2">
             <Label>Assunto</Label>
             <Input placeholder="Sobre o que você quer falar?" className="bg-black/20 border-white/10" />
          </div>
          <div className="space-y-2">
             <Label>Mensagem</Label>
             <Textarea placeholder="Descreva sua solicitação..." className="bg-black/20 border-white/10 min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full btn-gold font-black uppercase">
             <Send size={16} className="mr-2" /> Enviar Mensagem
          </Button>
       </form>
    </div>
  );
}
