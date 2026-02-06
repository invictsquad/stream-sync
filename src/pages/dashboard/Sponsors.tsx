import React from 'react';
import { SponsorManager } from '@/components/stream/SponsorManager';

export default function Sponsors() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Patrocinadores</h1>
         <p className="text-muted-foreground">Gerencie logotipos e banners de parceiros na sua live.</p>
      </div>

      <div className="max-w-4xl">
        <SponsorManager />
      </div>
    </div>
  );
}
