import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus, Trash2 } from 'lucide-react';

export default function PaymentMethods() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Métodos de Pagamento</h1>
            <p className="text-muted-foreground">Gerencie seus cartões para assinaturas e doações.</p>
         </div>
         <Button className="btn-gold font-black uppercase"><Plus size={16} className="mr-2"/> Adicionar Novo</Button>
      </div>

      <div className="grid gap-6">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="font-black italic uppercase text-sm">Cartões Salvos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               {[1, 2].map(i => (
                  <div key={i} className="flex items-center justify-between p-4 bg-zinc-900 rounded-xl border border-white/5">
                     <div className="flex items-center gap-4">
                        <div className="bg-zinc-800 p-3 rounded text-zinc-400">
                           <CreditCard size={24} />
                        </div>
                        <div>
                           <p className="font-bold text-white">Mastercard •••• 4242</p>
                           <p className="text-xs text-zinc-500">Expira em 12/25</p>
                        </div>
                        {i === 1 && <span className="bg-primary/10 text-primary text-[10px] font-black uppercase px-2 py-1 rounded ml-2">Padrão</span>}
                     </div>
                     <Button size="icon" variant="ghost" className="text-red-500 hover:text-red-400"><Trash2 size={16}/></Button>
                  </div>
               ))}
            </CardContent>
         </Card>

         <Card className="bg-card/30 border-white/5 opacity-50">
            <CardContent className="p-6 flex items-center justify-center flex-col gap-2">
               <p className="text-sm font-bold text-zinc-400">PIX Automático</p>
               <p className="text-xs text-zinc-600">Em breve</p>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
