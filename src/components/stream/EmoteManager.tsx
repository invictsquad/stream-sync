import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from 'lucide-react';

export function EmoteManager() {
  return (
    <Card className="bg-secondary/30 border-white/5">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-black italic uppercase text-white">Seus Emotes</CardTitle>
        <Button size="sm" className="btn-gold gap-2">
            <Upload size={16} /> Upload
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
            {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="aspect-square bg-black/40 rounded border border-white/10 flex items-center justify-center relative group cursor-pointer">
                    <span className="text-2xl">😎</span>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-white">
                        Editar
                    </div>
                </div>
            ))}
            <div className="aspect-square border-2 border-dashed border-zinc-700 rounded flex flex-col items-center justify-center text-zinc-500 hover:border-yellow-500 hover:text-yellow-500 transition-colors cursor-pointer">
                <Upload size={20} />
                <span className="text-[10px] mt-1 font-bold">Novo</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
