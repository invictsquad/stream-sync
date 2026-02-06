import React from 'react';
import { MerchShelf } from '@/components/stream/MerchShelf';
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Merch() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-2xl"><ShoppingBag className="text-primary" size={32} /></div>
            <div>
               <h1 className="text-3xl font-black italic uppercase tracking-tighter">Loja Oficial</h1>
               <p className="text-slate-500 font-bold">Produtos exclusivos dos seus criadores favoritos.</p>
            </div>
         </div>
         <Button className="btn-gold font-black uppercase">Ver Carrinho</Button>
      </div>

      {/* Featured Banner */}
      <Card className="bg-gradient-to-r from-primary/20 via-black to-black border-white/10 overflow-hidden relative min-h-[300px] flex items-center">
         <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mask-gradient-left" />
         <CardContent className="relative z-10 p-8 md:p-12 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase leading-none mb-4">Nova Coleção <span className="text-primary">Inverno 2024</span></h2>
            <p className="text-lg font-bold text-slate-300 mb-8">Moletoms limitados com estampas exclusivas.</p>
            <Button size="lg" className="btn-gold font-black uppercase px-8">Comprar Agora</Button>
         </CardContent>
      </Card>

      <MerchShelf />
    </div>
  );
}
