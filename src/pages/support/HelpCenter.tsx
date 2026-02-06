import React from 'react';
import { HelpCircle, Search, Book, MessageCircle, FileText } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Como começo a transmitir?", a: "Baixe o OBS, configure a chave de transmissão disponível no seu Painel e clique em 'Iniciar Transmissão'." },
  { q: "Como recebo pagamentos?", a: "Configure sua conta bancária ou PIX na aba Carteira. Pagamentos são processados todo dia 15." },
  { q: "O que são Diamonds?", a: "Diamonds são a moeda virtual da plataforma usada para comprar presentes e assinaturas." },
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-background p-8 pb-24 max-w-4xl mx-auto space-y-12">
       <div className="text-center space-y-4">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Central de Ajuda</h1>
          <p className="text-slate-500">Como podemos ajudar você hoje?</p>
          <div className="relative max-w-lg mx-auto">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
             <Input placeholder="Buscar tópicos..." className="pl-12 bg-secondary/50 border-white/10 h-12 rounded-2xl" />
          </div>
       </div>

       <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors text-center">
             <Book size={32} className="mx-auto text-primary mb-4" />
             <h3 className="font-black uppercase mb-2">Guias</h3>
             <p className="text-xs text-slate-500">Tutoriais passo a passo.</p>
          </div>
          <div className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors text-center">
             <MessageCircle size={32} className="mx-auto text-primary mb-4" />
             <h3 className="font-black uppercase mb-2">Comunidade</h3>
             <p className="text-xs text-slate-500">Fórum de discussão.</p>
          </div>
          <div className="bg-secondary/30 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors text-center">
             <FileText size={32} className="mx-auto text-primary mb-4" />
             <h3 className="font-black uppercase mb-2">Políticas</h3>
             <p className="text-xs text-slate-500">Regras e diretrizes.</p>
          </div>
       </div>

       <section>
          <h2 className="text-2xl font-black italic uppercase mb-6">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
             {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
                   <AccordionTrigger className="font-bold text-left">{faq.q}</AccordionTrigger>
                   <AccordionContent className="text-slate-400">{faq.a}</AccordionContent>
                </AccordionItem>
             ))}
          </Accordion>
       </section>
    </div>
  );
}
