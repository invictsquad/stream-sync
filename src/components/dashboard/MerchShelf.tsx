import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Edit } from 'lucide-react';

export function MerchShelf() {
  const items = [
    { name: "Camiseta Oficial", price: "R$ 89,90", image: "👕" },
    { name: "Caneca Gamer", price: "R$ 45,90", image: "☕" },
    { name: "Boné Snapback", price: "R$ 69,90", image: "🧢" },
  ];

  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-black italic uppercase text-white flex items-center gap-2">
            <ShoppingBag size={20} className="text-yellow-500" /> Loja do Canal
        </CardTitle>
        <Button size="sm" variant="outline">Gerenciar Loja</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, i) => (
                <div key={i} className="group relative bg-black/20 rounded border border-white/5 overflow-hidden">
                    <div className="aspect-square flex items-center justify-center text-6xl bg-black/40">
                        {item.image}
                    </div>
                    <div className="p-3">
                        <h4 className="font-bold text-white text-sm truncate">{item.name}</h4>
                        <p className="text-yellow-500 font-black text-sm">{item.price}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="gap-2">
                            <Edit size={14} /> Editar
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
