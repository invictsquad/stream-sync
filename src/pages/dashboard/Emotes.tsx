import React from 'react';
import { EmoteManager } from '@/components/stream/EmoteManager';
import { AlertCircle } from 'lucide-react';

export default function Emotes() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Emotes do Canal</h1>
         <p className="text-muted-foreground">Personalize os emotes que seus inscritos podem usar.</p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-center gap-3">
         <AlertCircle className="text-blue-500" />
         <p className="text-sm">Emotes são desbloqueados conforme o nível do seu canal (Afiliado/Parceiro).</p>
      </div>

      <EmoteManager />
    </div>
  );
}
