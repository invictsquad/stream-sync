import React from 'react';
import { Wrench } from 'lucide-react';
import { RedemptionHistory } from '@/components/stream/tools/RedemptionHistory';
import { WebStreamDeck } from '@/components/stream/tools/WebStreamDeck';
import { Whispers } from '@/components/stream/tools/Whispers';
import { GuestStar } from '@/components/stream/tools/GuestStar';
import { ClipsTrimmer } from '@/components/stream/tools/ClipsTrimmer';

export default function Tools() {
  return (
    <div className="space-y-6 p-4 md:p-8 pb-24">
       <div className="flex items-center gap-2 mb-6">
          <Wrench className="text-primary" size={24} />
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Ferramentas Pro</h1>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Linha 1 */}
          <RedemptionHistory />
          <WebStreamDeck />
          <Whispers />

          {/* Linha 2 */}
          <GuestStar />
          <div className="lg:col-span-2">
             <ClipsTrimmer />
          </div>
       </div>
    </div>
  );
}
