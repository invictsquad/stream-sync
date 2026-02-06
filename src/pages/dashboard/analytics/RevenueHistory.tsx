import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Filter } from 'lucide-react';

const TRANSACTIONS = [
  { id: "TX-9821", date: "25/10/2023", type: "Inscrição (Tier 1)", user: "User_Fan123", amount: "R$ 4,50", status: "Pago" },
  { id: "TX-9822", date: "25/10/2023", type: "Donation (Bits)", user: "GamerPro_BR", amount: "R$ 15,00", status: "Pago" },
  { id: "TX-9823", date: "24/10/2023", type: "Inscrição (Tier 2)", user: "Rich_Supporter", amount: "R$ 9,00", status: "Pago" },
  { id: "TX-9824", date: "24/10/2023", type: "Presente (Gift Sub)", user: "Community_Dad", amount: "R$ 22,50", status: "Pago" },
];

export default function RevenueHistory() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Histórico de Receita</h1>
            <p className="text-muted-foreground">Log completo de todas as transações financeiras.</p>
         </div>
         <div className="flex gap-2">
            <Button variant="outline" className="gap-2"><Filter size={16}/> Filtrar</Button>
            <Button variant="secondary" className="gap-2"><Download size={16}/> Exportar CSV</Button>
         </div>
      </div>

      <Card className="bg-card/30 border-white/5">
         <CardContent className="p-0">
            <Table>
               <TableHeader className="bg-black/20">
                  <TableRow className="border-white/5 hover:bg-transparent">
                     <TableHead className="font-black uppercase text-xs">ID</TableHead>
                     <TableHead className="font-black uppercase text-xs">Data</TableHead>
                     <TableHead className="font-black uppercase text-xs">Tipo</TableHead>
                     <TableHead className="font-black uppercase text-xs">Usuário</TableHead>
                     <TableHead className="font-black uppercase text-xs">Valor (Liq)</TableHead>
                     <TableHead className="font-black uppercase text-xs">Status</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {TRANSACTIONS.map((tx) => (
                     <TableRow key={tx.id} className="border-white/5 hover:bg-white/5">
                        <TableCell className="font-mono text-xs text-zinc-500">{tx.id}</TableCell>
                        <TableCell className="text-sm">{tx.date}</TableCell>
                        <TableCell className="text-sm font-bold">{tx.type}</TableCell>
                        <TableCell className="text-sm">{tx.user}</TableCell>
                        <TableCell className="text-sm font-bold text-green-500">{tx.amount}</TableCell>
                        <TableCell>
                           <span className="bg-green-500/10 text-green-500 text-[10px] font-black uppercase px-2 py-1 rounded">
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
