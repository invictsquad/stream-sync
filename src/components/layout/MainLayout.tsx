import React from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh overflow-hidden bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 relative">
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {children}
        </main>
        <MobileNav />
      </div>
    </div>
  );
};
