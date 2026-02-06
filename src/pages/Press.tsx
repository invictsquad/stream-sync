import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

export default function Press() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto space-y-12">
      <div className="border-b border-white/10 pb-8">
         <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-4">Imprensa & Brand Kit</h1>
         <p className="text-muted-foreground">Recursos oficiais da marca Stream Sync.</p>
      </div>

      <section className="space-y-6">
         <h2 className="text-xl font-black italic uppercase">Logos</h2>
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black p-8 rounded-xl border border-white/10 flex flex-col items-center gap-6">
               <BrandLogo size={48} />
               <div className="flex gap-2 w-full">
                  <Button variant="secondary" className="w-full text-xs font-bold"><Download size={14} className="mr-2"/> SVG</Button>
                  <Button variant="secondary" className="w-full text-xs font-bold"><Download size={14} className="mr-2"/> PNG</Button>
               </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-white/10 flex flex-col items-center gap-6">
               <div className="flex items-center gap-2 text-black">
                  <div className="bg-black text-white p-2 rounded-lg">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                  <span className="font-black italic tracking-tighter text-2xl">STREAM SYNC</span>
               </div>
               <div className="flex gap-2 w-full">
                  <Button variant="outline" className="w-full text-xs font-bold border-black/20 text-black hover:bg-black/5"><Download size={14} className="mr-2"/> SVG</Button>
                  <Button variant="outline" className="w-full text-xs font-bold border-black/20 text-black hover:bg-black/5"><Download size={14} className="mr-2"/> PNG</Button>
               </div>
            </div>
         </div>
      </section>

      <section className="space-y-6">
         <h2 className="text-xl font-black italic uppercase">Cores</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
               <div className="h-24 bg-primary rounded-xl shadow-lg shadow-primary/20"></div>
               <p className="font-mono text-xs text-slate-400">#FFD700</p>
               <p className="text-xs font-bold uppercase">Gold Primary</p>
            </div>
            <div className="space-y-2">
               <div className="h-24 bg-black border border-white/10 rounded-xl"></div>
               <p className="font-mono text-xs text-slate-400">#000000</p>
               <p className="text-xs font-bold uppercase">Pure Black</p>
            </div>
         </div>
      </section>
    </div>
  );
}
