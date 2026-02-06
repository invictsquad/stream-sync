import React from 'react';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-dvh bg-background text-foreground font-sans selection:bg-primary selection:text-black">
      {/* Sidebar - Sticky on desktop */}
      <div className="hidden md:block sticky top-0 h-dvh overflow-y-auto shrink-0 border-r border-white/5 bg-background z-50 w-64 lg:w-72">
        <Sidebar />
      </div>

      {/* Main Content - Grows naturally */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <MobileNav />
      </div>
    </div>
  );
};
