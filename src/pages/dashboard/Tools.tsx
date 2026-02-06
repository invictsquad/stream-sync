import React from 'react';
import { Wrench } from 'lucide-react';
import { RedemptionHistory } from '@/components/stream/tools/RedemptionHistory';
import { WebStreamDeck } from '@/components/stream/tools/WebStreamDeck';
import { Whispers } from '@/components/stream/tools/Whispers';
import { GuestStar } from '@/components/stream/tools/GuestStar';
import { ClipsTrimmer } from '@/components/stream/tools/ClipsTrimmer';
import { OverlayManager } from '@/components/stream/tools/OverlayManager';
import { SubathonTimer } from '@/components/stream/tools/SubathonTimer';
import { DonationTicker } from '@/components/stream/tools/DonationTicker';
import { PinnedMessageManager } from '@/components/stream/tools/PinnedMessageManager';
import { StreamKeyManager } from '@/components/stream/StreamKeyManager';

export default function Tools() {
  return (
    <div className="space-y-6 p-4 md:p-8 pb-24">
       <div className="flex items-center gap-2 mb-6">
          <Wrench className="text-primary" size={24} />
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Ferramentas Pro</h1>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
             <StreamKeyManager />
          </div>
          {/* Linha 1 */}
          <RedemptionHistory />
          <WebStreamDeck />
          <Whispers />

          {/* Linha 2 */}
          <GuestStar />
          <div className="lg:col-span-2">
             <ClipsTrimmer />
          </div>

          {/* Linha 3 (Novas Features) */}
          <OverlayManager />
          <SubathonTimer />
          <PinnedMessageManager />

          <div className="lg:col-span-3">
             <DonationTicker />
          </div>
       </div>
    </div>
  );
}
