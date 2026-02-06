import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, ArrowDownLeft, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TRANSACTIONS = [
  { id: "W-001", date: "25/10/2023", desc: "Compra de Gems (1000)", type: "debit", amount: "R$ 49,90", status: "Concluído" },
  { id: "W-002", date: "24/10/2023", desc: "Inscrição: Gaules", type: "spent", amount: "500 Gems", status: "Concluído" },
  { id: "W-003", date: "22/10/2023", desc: "Reembolso: Gems", type: "credit", amount: "R$ 49,90", status: "Estornado" },
  { id: "W-004", date: "20/10/2023", desc: "Compra de Gems (500)", type: "debit", amount: "R$ 24,90", status: "Concluído" },
];

export default function UserTransactionHistory() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Minhas Transações</h1>
            <p className="text-muted-foreground">Histórico de compras e gastos na plataforma.</p>
         </div>
         <Button variant="outline" className="gap-2"><Download size={16}/> Exportar</Button>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardContent className="p-0">
            <Table>
               <TableHeader className="bg-black/20">
                  <TableRow className="border-white/5 hover:bg-transparent">
                     <TableHead className="font-black uppercase text-xs">Data</TableHead>
                     <TableHead className="font-black uppercase text-xs">Descrição</TableHead>
                     <TableHead className="font-black uppercase text-xs">Tipo</TableHead>
                     <TableHead className="font-black uppercase text-xs text-right">Valor</TableHead>
                     <TableHead className="font-black uppercase text-xs text-center">Status</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {TRANSACTIONS.map((tx) => (
                     <TableRow key={tx.id} className="border-white/5 hover:bg-white/5">
                        <TableCell className="text-sm font-mono text-zinc-400">{tx.date}</TableCell>
                        <TableCell className="text-sm font-bold text-white">{tx.desc}</TableCell>
                        <TableCell>
                           {tx.type === 'debit' && <span className="flex items-center gap-1 text-red-400 text-xs font-bold uppercase"><ArrowUpRight size={12}/> Compra</span>}
                           {tx.type === 'credit' && <span className="flex items-center gap-1 text-green-400 text-xs font-bold uppercase"><ArrowDownLeft size={12}/> Reembolso</span>}
                           {tx.type === 'spent' && <span className="flex items-center gap-1 text-purple-400 text-xs font-bold uppercase"><ArrowUpRight size={12}/> Uso</span>}
                        </TableCell>
                        <TableCell className="text-right font-mono font-bold">{tx.amount}</TableCell>
                        <TableCell className="text-center">
                           <span className="bg-zinc-800 text-zinc-400 text-[10px] font-black uppercase px-2 py-1 rounded">
                              {tx.status}
                           </span>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </CardContent>
      </Card>
    </div>
  );
}
