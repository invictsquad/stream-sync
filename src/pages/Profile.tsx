import React from 'react';
import { Twitter, Instagram, Youtube, MapPin, Link as LinkIcon, Edit3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BrandLogo } from '../components/BrandLogo';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
       <header className="border-b border-white/5 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/"><BrandLogo size={24} textSize="text-xl" /></Link>
        </div>
      </header>

      {/* Banner */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-primary/20 via-purple-500/10 to-blue-500/10 relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
         <Button variant="secondary" size="sm" className="absolute top-4 right-4 text-xs font-bold uppercase"><Edit3 size={14} className="mr-2" /> Editar Capa</Button>
      </div>

      <main className="max-w-5xl mx-auto px-4 -mt-16 md:-mt-20 relative z-10">
         <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8 text-center md:text-left">
            <div className="relative">
               <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-background shadow-2xl">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
               </Avatar>
               <div className="absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-background"></div>
            </div>
            <div className="flex-1 pb-4">
               <h1 className="text-3xl font-black italic uppercase text-white">John Doe <span className="text-primary text-lg align-top">★</span></h1>
               <p className="text-slate-400 font-medium">@johndoe_tv</p>
            </div>
            <div className="pb-4 flex gap-3">
               <Button className="btn-gold font-black uppercase text-xs h-10 px-6 rounded-xl">Editar Perfil</Button>
               <Button variant="secondary" size="icon" className="h-10 w-10 rounded-xl"><LinkIcon size={16} /></Button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
               <section className="bg-secondary/30 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-lg font-black italic uppercase text-white mb-4">Sobre</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     Apaixonado por jogos competitivos e tecnologia. Faço lives todos os dias a partir das 18h.
                     Junte-se à nossa comunidade no Discord! Contato comercial: contato@johndoe.com
                  </p>
               </section>

               <section className="bg-secondary/30 p-6 rounded-3xl border border-white/5">
                  <h3 className="text-lg font-black italic uppercase text-white mb-4">Conquistas</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="bg-black/20 p-4 rounded-xl flex flex-col items-center gap-2 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help">
                           <div className="bg-primary/20 p-2 rounded-full text-primary"><Trophy size={20} /></div>
                           <span className="text-[10px] font-bold uppercase text-slate-400">1 Ano de Live</span>
                        </div>
                     ))}
                  </div>
               </section>
            </div>

            <aside className="space-y-6">
               <div className="bg-secondary/30 p-6 rounded-3xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-black italic uppercase text-white">Redes Sociais</h3>
                  <div className="space-y-3">
                     <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={18} /> <span className="text-xs font-bold">@johndoe</span></a>
                     <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-[#E1306C] transition-colors"><Instagram size={18} /> <span className="text-xs font-bold">@john.doe</span></a>
                     <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-[#FF0000] transition-colors"><Youtube size={18} /> <span className="text-xs font-bold">/johndoeTV</span></a>
                  </div>
               </div>

               <div className="bg-secondary/30 p-6 rounded-3xl border border-white/5 space-y-4">
                  <h3 className="text-sm font-black italic uppercase text-white">Detalhes</h3>
                  <div className="space-y-3 text-xs text-slate-400">
                     <div className="flex items-center gap-2"><MapPin size={14} /> São Paulo, BR</div>
                     <div className="flex items-center gap-2"><LinkIcon size={14} /> johndoe.com</div>
                  </div>
               </div>
            </aside>
         </div>
      </main>
    </div>
  );
}

import { Trophy } from 'lucide-react';
