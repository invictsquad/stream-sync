import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const TICKETS = [
  { id: "REQ-2023-001", subject: "Problema com Pagamento", status: "Aberto", date: "25 Out", lastUpdate: "Há 2 horas" },
  { id: "REQ-2023-002", subject: "Denúncia de Assédio", status: "Em Análise", date: "24 Out", lastUpdate: "Ontem" },
  { id: "REQ-2023-003", subject: "Dúvida sobre Partner", status: "Respondido", date: "20 Out", lastUpdate: "3 dias atrás" },
];

export default function TicketList() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Meus Chamados</h1>
            <p className="text-muted-foreground">Histórico de suporte e solicitações.</p>
         </div>
         <Link to="/help/new">
            <Button className="btn-gold font-black uppercase"><Plus size={16} className="mr-2"/> Novo Chamado</Button>
         </Link>
      </div>

      <div className="space-y-4">
         {TICKETS.map(ticket => (
            <Card key={ticket.id} className="bg-card/30 border-white/5 hover:border-primary/30 transition-colors cursor-pointer group">
               <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-primary transition-colors">
                        <MessageSquare size={20} />
                     </div>
                     <div>
                        <h3 className="font-bold text-white text-lg">{ticket.subject}</h3>
                        <p className="text-xs text-zinc-500 font-mono">{ticket.id} • Criado em {ticket.date}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-xs font-black uppercase px-2 py-1 rounded ${
                        ticket.status === 'Aberto' ? 'bg-green-500/10 text-green-500' :
                        ticket.status === 'Em Análise' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-blue-500/10 text-blue-500'
                     }`}>
                        {ticket.status}
                     </span>
                     <p className="text-[10px] text-zinc-500 mt-1">Atualizado: {ticket.lastUpdate}</p>
                  </div>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
