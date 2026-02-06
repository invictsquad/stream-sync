import React from 'react';
import { ReferralDashboard } from '@/components/stream/ReferralDashboard';

export default function Referrals() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Indicações</h1>
         <p className="text-muted-foreground">Convide streamers e ganhe porcentagem dos ganhos.</p>
      </div>

      <ReferralDashboard />
    </div>
  );
}
