import React, { useState, useEffect } from 'react';
import { Wallet as WalletIcon, CreditCard, Plus, ArrowUpRight, ArrowDownLeft, History as HistoryIcon, Gem } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { storage } from '@/lib/storage';

const PACKAGES = [
  { coins: 100, price: 'R$ 4,90', bonus: null },
  { coins: 550, price: 'R$ 24,90', bonus: '+10%' },
  { coins: 1200, price: 'R$ 49,90', bonus: '+20%' },
  { coins: 3000, price: 'R$ 119,90', bonus: '+25%' },
];

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState(storage.wallet.get().transactions);

  useEffect(() => {
      const data = storage.wallet.get();
      setBalance(data.balance);
      setTransactions(data.transactions);
  }, []);

  const handlePurchase = (coins: number) => {
      const newData = storage.wallet.update(coins, "Compra de Gems", 'credit');
      setBalance(newData.balance);
      setTransactions(newData.transactions);
      toast.success(`${coins} Gems adicionadas!`);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 pb-24 space-y-6 max-w-6xl mx-auto">
       <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl"><WalletIcon className="text-primary" size={24} /></div>
          <div>
             <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Carteira</h1>
             <p className="text-slate-500 font-bold text-xs">Gerencie seus créditos e pagamentos</p>
          </div>
       </div>

       <div className="grid md:grid-cols-3 gap-6">
          {/* Balance Card */}
          <Card className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-black border-white/10 relative overflow-hidden compact-card">
             <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
             <CardHeader className="p-0 mb-4">
                <CardTitle className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Saldo Disponível</CardTitle>
             </CardHeader>
             <CardContent className="p-0">
                <div className="flex items-end gap-2 mb-6">
                   <Gem size={32} className="text-primary mb-2" />
                   <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">{balance.toLocaleString()}</span>
                   <span className="text-lg font-bold text-slate-500 mb-2">Gems</span>
                </div>
                <div className="flex gap-3">
                   <Dialog>
                      <DialogTrigger asChild>
                         <Button className="btn-gold h-10 px-6 font-black uppercase tracking-widest text-[10px]">
                            <Plus size={14} className="mr-2" /> Comprar Gems
                         </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-900 border-white/10 text-white max-w-2xl">
                         <DialogHeader>
                            <DialogTitle className="font-black italic uppercase text-xl">Carregar Carteira</DialogTitle>
                         </DialogHeader>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
                            {PACKAGES.map((pkg, i) => (
                               <button key={i} onClick={() => handlePurchase(pkg.coins)} className="bg-black/40 border border-white/10 hover:border-primary p-3 rounded-xl flex flex-col items-center gap-1 group transition-all relative overflow-hidden">
                                  {pkg.bonus && <div className="absolute top-0 right-0 bg-primary text-black text-[8px] font-black px-1.5 py-0.5 rounded-bl-lg">{pkg.bonus}</div>}
                                  <Gem size={24} className="text-primary group-hover:scale-110 transition-transform" />
                                  <span className="font-black text-lg text-white">{pkg.coins}</span>
                                  <span className="text-xs text-slate-400">{pkg.price}</span>
                               </button>
                            ))}
                         </div>
                      </DialogContent>
                   </Dialog>
                   <Button variant="secondary" className="h-10 px-4 font-bold uppercase text-[10px]">
                      Resgatar Código
                   </Button>
                </div>
             </CardContent>
          </Card>

          {/* Payment Methods */}
          <div className="space-y-4">
             <Card className="bg-secondary/30 border-white/5 compact-card">
                <CardHeader className="p-0 mb-3">
                   <CardTitle className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Método Padrão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                   <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10">
                      <CreditCard className="text-white" size={20} />
                      <div className="flex-1">
                         <p className="font-black text-white text-xs">•••• •••• •••• 4242</p>
                         <p className="text-[9px] text-slate-400 uppercase">Mastercard</p>
                      </div>
                   </div>
                   <Button variant="outline" className="w-full text-[10px] font-black uppercase border-dashed border-white/20 h-8">
                      <Plus size={12} className="mr-2" /> Adicionar Cartão
                   </Button>
                </CardContent>
             </Card>

             <Card className="bg-secondary/30 border-white/5 compact-card">
                <CardHeader className="p-0 mb-3">
                   <CardTitle className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Pagamentos (Creator)</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <Dialog>
                      <DialogTrigger asChild>
                         <Button className="w-full btn-gold font-black uppercase text-[10px] h-8">Configurar Saque</Button>
                      </DialogTrigger>
                      <DialogContent className="bg-zinc-900 border-white/10 text-white">
                         <DialogHeader>
                            <DialogTitle className="font-black italic uppercase">Dados Bancários</DialogTitle>
                         </DialogHeader>
                         <div className="space-y-4 py-4">
                            <div className="space-y-2">
                               <Label className="text-xs">Chave PIX ou Conta</Label>
                               <Input placeholder="Digite sua chave PIX..." className="bg-black/50 border-white/10 text-xs h-9" />
                            </div>
                            <div className="space-y-2">
                               <Label className="text-xs">Nome Completo</Label>
                               <Input placeholder="Nome do titular" className="bg-black/50 border-white/10 text-xs h-9" />
                            </div>
                            <Button onClick={() => toast.success("Dados bancários salvos!")} className="w-full btn-gold font-black uppercase h-9">Salvar</Button>
                         </div>
                      </DialogContent>
                   </Dialog>
                </CardContent>
             </Card>
          </div>
       </div>

       {/* Transactions */}
       <div className="space-y-3">
          <h3 className="text-sm font-black italic uppercase flex items-center gap-2">
             <HistoryIcon size={16} /> Histórico
          </h3>
          <Card className="bg-secondary/30 border-white/5 compact-card">
             <CardContent className="p-0">
                <div className="overflow-x-auto">
                   <table className="w-full text-xs text-left text-slate-400">
                      <thead className="text-[9px] font-black uppercase bg-black/40 text-slate-500">
                         <tr>
                            <th className="px-4 py-3 rounded-tl-lg">Tipo</th>
                            <th className="px-4 py-3">Descrição</th>
                            <th className="px-4 py-3">Data</th>
                            <th className="px-4 py-3 text-right rounded-tr-lg">Valor</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                         {transactions.map((tx) => (
                            <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                               <td className="px-4 py-3 font-bold text-white flex items-center gap-2">
                                  {tx.type === 'deposit' || tx.type === 'credit' ? <ArrowDownLeft size={14} className="text-green-500" /> : <ArrowUpRight size={14} className="text-red-500" />}
                                  {tx.type === 'credit' ? 'Depósito' : 'Gasto'}
                               </td>
                               <td className="px-4 py-3">{tx.desc}</td>
                               <td className="px-4 py-3">{new Date(tx.date).toLocaleDateString()}</td>
                               <td className={`px-4 py-3 text-right font-black ${tx.type === 'credit' ? 'text-green-500' : 'text-slate-200'}`}>
                                  {tx.type === 'credit' ? '+' : '-'}{tx.amount}
                               </td>
                            </tr>
                         ))}
                         {transactions.length === 0 && (
                             <tr><td colSpan={4} className="text-center py-8 text-slate-500">Nenhuma transação recente.</td></tr>
                         )}
                      </tbody>
                   </table>
                </div>
             </CardContent>
          </Card>
       </div>
    </div>
  );
}
