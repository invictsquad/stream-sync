import React from 'react';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PRODUCTS = [
  { id: 1, name: "Camiseta Oficial 2024", price: "R$ 89,90", image: "https://placehold.co/150x150/111/FFF?text=T-Shirt" },
  { id: 2, name: "Mousepad XL Control", price: "R$ 129,90", image: "https://placehold.co/150x150/111/FFF?text=Mousepad" },
  { id: 3, name: "Boné Snapback", price: "R$ 59,90", image: "https://placehold.co/150x150/111/FFF?text=Cap" },
  { id: 4, name: "Caneca Gamer", price: "R$ 39,90", image: "https://placehold.co/150x150/111/FFF?text=Mug" },
];

export function MerchShelf() {
  return (
    <div className="border-t border-white/5 bg-black/40 p-4 md:p-6">
       <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-black italic uppercase text-slate-300 flex items-center gap-2">
             <ShoppingBag size={16} className="text-primary" /> Loja do Streamer
          </h3>
          <Button variant="link" size="sm" className="text-[10px] text-primary h-auto p-0 uppercase font-bold">Ver tudo</Button>
       </div>

       <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 pb-4">
             {PRODUCTS.map((product) => (
                <div key={product.id} className="w-36 md:w-44 shrink-0 bg-secondary/30 rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all group">
                   <div className="aspect-square bg-black/50 relative">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <Button size="sm" className="btn-gold h-7 text-[9px] uppercase font-black">Comprar</Button>
                      </div>
                   </div>
                   <div className="p-3">
                      <h4 className="text-xs font-bold text-white truncate mb-1">{product.name}</h4>
                      <p className="text-[10px] font-black text-primary">{product.price}</p>
                   </div>
                </div>
             ))}
          </div>
          <ScrollBar orientation="horizontal" />
       </ScrollArea>
    </div>
  );
}
