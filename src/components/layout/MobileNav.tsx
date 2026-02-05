import React from 'react';
import { Home, Compass, Video, User, Menu, BarChart3, Users, Settings, LogOut, Palette, Wrench } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BrandLogo } from '../BrandLogo';

export function MobileNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-lg border-t border-white/10 md:hidden z-50 flex items-center justify-around px-2 pb-safe">
        <Link to="/" className={`flex flex-col items-center gap-1 p-2 ${isActive('/') ? 'text-primary' : 'text-slate-500'}`}>
          <Home size={20} />
          <span className="text-[9px] font-black uppercase">Home</span>
        </Link>
        <Link to="/categories" className={`flex flex-col items-center gap-1 p-2 ${isActive('/categories') ? 'text-primary' : 'text-slate-500'}`}>
          <Compass size={20} />
          <span className="text-[9px] font-black uppercase">Browse</span>
        </Link>
        <div className="relative -top-5">
           <Link to="/dashboard" className="bg-primary text-black p-4 rounded-full shadow-lg border-4 border-black">
             <Video size={24} />
           </Link>
        </div>
        <Link to="/profile" className={`flex flex-col items-center gap-1 p-2 ${isActive('/profile') ? 'text-primary' : 'text-slate-500'}`}>
          <User size={20} />
          <span className="text-[9px] font-black uppercase">Profile</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center gap-1 p-2 text-slate-500">
              <Menu size={20} />
              <span className="text-[9px] font-black uppercase">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-secondary/95 border-l border-white/10 w-[80%]">
             <div className="flex flex-col h-full py-6">
                <BrandLogo className="mb-8" />
                <nav className="space-y-2">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 mb-2">Studio</p>
                   <Link to="/dashboard" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <Video className="text-primary" size={20} /> Dashboard
                   </Link>
                   <Link to="/dashboard/analytics" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <BarChart3 className="text-primary" size={20} /> Analytics
                   </Link>
                   <Link to="/dashboard/community" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <Users className="text-primary" size={20} /> Comunidade
                   </Link>
                   <Link to="/dashboard/customization" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <Palette className="text-primary" size={20} /> Personalização
                   </Link>
                   <Link to="/dashboard/tools" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <Wrench className="text-primary" size={20} /> Ferramentas
                   </Link>

                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 mt-6 mb-2">Conta</p>
                   <Link to="/profile" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <User className="text-primary" size={20} /> Meu Perfil
                   </Link>
                   <Link to="/settings" className="flex items-center gap-4 text-white font-bold p-3 hover:bg-white/5 rounded-xl transition-colors">
                      <Settings className="text-primary" size={20} /> Configurações
                   </Link>
                   <button onClick={() => { localStorage.removeItem('stream_app_user'); window.location.href = '/login'; }} className="flex items-center gap-4 text-red-500 font-bold p-3 hover:bg-red-500/10 rounded-xl w-full text-left transition-colors mt-4">
                      <LogOut size={20} /> Sair
                   </button>
                </nav>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
