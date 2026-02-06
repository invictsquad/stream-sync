import React from 'react';
import { Button } from "@/components/ui/button";
import { Smartphone, Download } from 'lucide-react';
import { BrandLogo } from '@/components/BrandLogo';

export default function DownloadApp() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

       <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center relative z-10">
          <div className="space-y-8 text-center md:text-left">
             <BrandLogo size={64} textSize="text-5xl" />
             <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white tracking-tighter leading-none">
                Leve a Clutch <br/> <span className="text-primary">Onde For</span>
             </h1>
             <p className="text-xl text-zinc-400 font-bold max-w-md mx-auto md:mx-0">
                Assista, interaja e transmita direto do seu celular. A melhor experiência mobile de streaming chegou.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="h-16 px-8 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl flex items-center gap-3">
                   <Download size={24} className="text-white"/>
                   <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-zinc-500">Baixe na</p>
                      <p className="text-lg font-black text-white leading-none">App Store</p>
                   </div>
                </Button>
                <Button className="h-16 px-8 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 rounded-xl flex items-center gap-3">
                   <Download size={24} className="text-white"/>
                   <div className="text-left">
                      <p className="text-[10px] uppercase font-bold text-zinc-500">Disponível no</p>
                      <p className="text-lg font-black text-white leading-none">Google Play</p>
                   </div>
                </Button>
             </div>
          </div>

          <div className="relative hidden md:block">
             <div className="w-[300px] h-[600px] bg-black border-8 border-zinc-800 rounded-[3rem] mx-auto relative shadow-2xl overflow-hidden">
                {/* Mock Screen */}
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 flex flex-col">
                   <div className="bg-primary h-48 flex items-end p-4 pb-8">
                      <BrandLogo size={24} />
                   </div>
                   <div className="p-4 space-y-4">
                      <div className="h-32 bg-zinc-800 rounded-xl animate-pulse" />
                      <div className="h-32 bg-zinc-800 rounded-xl animate-pulse delay-75" />
                      <div className="h-32 bg-zinc-800 rounded-xl animate-pulse delay-150" />
                   </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-xl" />
             </div>
          </div>
       </div>
    </div>
  );
}
