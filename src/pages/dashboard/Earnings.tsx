import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, TrendingUp, Download } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export default function Earnings() {
  return (
    <div className="p-4 md:p-8 space-y-8 pb-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-black italic uppercase tracking-tighter">Monetização</h1>
           <p className="text-muted-foreground">Gerencie seus ganhos e pagamentos.</p>
        </div>
        <Button className="btn-gold font-black uppercase">
           <CreditCard size={16} className="mr-2" /> Configurar Saque
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="bg-gradient-to-br from-yellow-500/20 to-transparent border-yellow-500/30">
            <CardHeader className="pb-2">
               <CardTitle className="text-xs font-black uppercase tracking-widest text-yellow-500">Saldo Disponível</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-4xl font-black italic flex items-start gap-1">
                  <span className="text-lg mt-1">R$</span> 1.240,50
               </div>
            </CardContent>
         </Card>

         <Card className="bg-card/50 border-white/5">
            <CardHeader className="pb-2">
               <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Pendente</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-black italic flex items-start gap-1 text-muted-foreground">
                  <span className="text-sm mt-1">R$</span> 420,00
               </div>
               <p className="text-xs text-muted-foreground mt-2">Liberação em 15/11</p>
            </CardContent>
         </Card>

         <Card className="bg-card/50 border-white/5">
            <CardHeader className="pb-2">
               <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Total Vitalício</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-2xl font-black italic flex items-start gap-1 text-white">
                  <span className="text-sm mt-1">R$</span> 15.890,00
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="font-black italic uppercase">Histórico de Transações</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  {[1, 2, 3, 4].map((_, i) => (
                     <div key={i} className="flex items-center justify-between p-3 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-3">
                           <div className="bg-emerald-500/10 p-2 rounded-full text-emerald-500">
                              <TrendingUp size={16} />
                           </div>
                           <div>
                              <p className="text-sm font-bold">Pagamento Recebido</p>
                              <p className="text-xs text-muted-foreground">24 Out, 2023</p>
                           </div>
                        </div>
                        <span className="font-black text-emerald-500">+ R$ 150,00</span>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="font-black italic uppercase">Fontes de Receita</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                     <span>Inscrições (Subs)</span>
                     <span>60%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                     <div className="h-full bg-fuchsia-500 w-[60%]"></div>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                     <span>Doações (PIX)</span>
                     <span>25%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[25%]"></div>
                  </div>
               </div>
               <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                     <span>Bits/Cheers</span>
                     <span>15%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                     <div className="h-full bg-blue-500 w-[15%]"></div>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
