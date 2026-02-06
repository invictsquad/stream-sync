import React, { useState } from 'react';
import { Wallet as WalletIcon, CreditCard, Plus, ArrowUpRight, ArrowDownLeft, History as HistoryIcon, Gem } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TRANSACTIONS = [
  { id: 1, type: 'deposit', amount: 500, date: 'Hoje, 14:30', method: 'PIX', status: 'Concluído' },
  { id: 2, type: 'spent', amount: -50, date: 'Ontem, 20:00', method: 'Gift: Gaules', status: 'Concluído' },
  { id: 3, type: 'deposit', amount: 1000, date: '10/10/2023', method: 'Cartão Final 4242', status: 'Concluído' },
];

const PACKAGES = [
  { coins: 100, price: 'R$ 4,90', bonus: null },
  { coins: 550, price: 'R$ 24,90', bonus: '+10%' },
  { coins: 1200, price: 'R$ 49,90', bonus: '+20%' },
  { coins: 3000, price: 'R$ 119,90', bonus: '+25%' },
];

export default function Wallet() {
  const [balance, setBalance] = useState(1500);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 space-y-8">
       <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-2xl"><WalletIcon className="text-primary" size={32} /></div>
          <div>
             <h1 className="text-3xl font-black italic uppercase tracking-tighter">Carteira</h1>
             <p className="text-slate-500 font-bold">Gerencie seus créditos e pagamentos</p>
          </div>
       </div>

       <div className="grid md:grid-cols-3 gap-6">
          {/* Balance Card */}
          <Card className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-black border-white/10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <CardHeader>
                <CardTitle className="text-slate-400 font-black uppercase text-xs tracking-widest">Saldo Disponível</CardTitle>
             </CardHeader>
             <CardContent>
                <div className="flex items-end gap-2 mb-6">
                   <Gem size={48} className="text-primary mb-1" />
                   <span className="text-6xl font-black text-white tracking-tighter">{balance.toLocaleString()}</span>
                   <span className="text-xl font-bold text-slate-500 mb-2">Gems</span>
                </div>
                <div className="flex gap-4">
                   <Dialog>
                      <DialogTrigger asChild>
                         <Button className="btn-gold h-12 px-8 font-black uppercase tracking-widest text-xs">
                            <Plus size={16} className="mr-2" /> Comprar Gems
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-900 border-white/10 text-white max-w-2xl">
                         <DialogHeader>
                            <DialogTitle className="font-black italic uppercase text-2xl">Carregar Carteira</DialogTitle>
                         </DialogHeader>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                            {PACKAGES.map((pkg, i) => (
                               <button key={i} className="bg-black/40 border border-white/10 hover:border-primary p-4 rounded-2xl flex flex-col items-center gap-2 group transition-all relative overflow-hidden">
                                  {pkg.bonus && <div className="absolute top-0 right-0 bg-primary text-black text-[9px] font-black px-2 py-0.5 rounded-bl-lg">{pkg.bonus}</div>}
                                  <Gem size={32} className="text-primary group-hover:scale-110 transition-transform" />
                                  <span className="font-black text-xl text-white">{pkg.coins}</span>
                                  <span className="text-sm text-slate-400">{pkg.price}</span>
                               </button>
                            ))}
                         </div>
                      </DialogContent>
                   </Dialog>
                   <Button variant="secondary" className="h-12 px-6 font-bold uppercase text-xs">
                      Resgatar Código
                   </Button>
                </div>
             </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="bg-secondary/30 border-white/5">
             <CardHeader>
                <CardTitle className="text-slate-400 font-black uppercase text-xs tracking-widest">Método Padrão</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10">
                   <CreditCard className="text-white" size={24} />
                   <div className="flex-1">
                      <p className="font-black text-white text-sm">•••• •••• •••• 4242</p>
                      <p className="text-[10px] text-slate-400 uppercase">Mastercard</p>
                   </div>
                </div>
                <Button variant="outline" className="w-full text-xs font-black uppercase border-dashed border-white/20">
                   <Plus size={14} className="mr-2" /> Adicionar Cartão
                </Button>
             </CardContent>
          </Card>
       </div>

       {/* Transactions */}
       <div className="space-y-4">
          <h3 className="text-lg font-black italic uppercase flex items-center gap-2">
             <HistoryIcon size={20} /> Histórico
          </h3>
          <Card className="bg-secondary/30 border-white/5">
             <CardContent className="p-0">
                <div className="overflow-x-auto">
                   <table className="w-full text-sm text-left text-slate-400">
                      <thead className="text-[10px] font-black uppercase bg-black/40 text-slate-500">
                         <tr>
                            <th className="px-6 py-4">Tipo</th>
                            <th className="px-6 py-4">Método</th>
                            <th className="px-6 py-4">Data</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Valor</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {TRANSACTIONS.map((tx) => (
                            <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                               <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                                  {tx.type === 'deposit' ? <ArrowDownLeft size={16} className="text-green-500" /> : <ArrowUpRight size={16} className="text-red-500" />}
                                  {tx.type === 'deposit' ? 'Depósito' : 'Gasto'}
                               </td>
                               <td className="px-6 py-4">{tx.method}</td>
                               <td className="px-6 py-4">{tx.date}</td>
                               <td className="px-6 py-4"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] font-black uppercase">{tx.status}</span></td>
                               <td className={`px-6 py-4 text-right font-black ${tx.type === 'deposit' ? 'text-green-500' : 'text-slate-200'}`}>
                                  {tx.type === 'deposit' ? '+' : ''}{tx.amount}
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </CardContent>
          </Card>
       </div>
    </div>
  );
}
