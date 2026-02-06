import React from 'react';
import { Palette } from 'lucide-react';
import { SubTiersConfig } from '@/components/stream/customization/SubTiersConfig';
import { BadgesEditor } from '@/components/stream/customization/BadgesEditor';
import { TrailerUploader } from '@/components/stream/customization/TrailerUploader';
import { VisualsEditor } from '@/components/stream/customization/VisualsEditor';
import { SocialLinks } from '@/components/stream/customization/SocialLinks';
import { TeamsManager } from '@/components/stream/customization/TeamsManager';
import { GoalConfig } from '@/components/stream/GoalConfig';
import { EmoteManager } from '@/components/stream/EmoteManager';

export default function Customization() {
  return (
    <div className="space-y-6 p-4 md:p-8 pb-24">
       <div className="flex items-center gap-2 mb-6">
          <Palette className="text-primary" size={24} />
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Personalização</h1>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
             <SubTiersConfig />
          </div>
          <VisualsEditor />
          <BadgesEditor />
          <TrailerUploader />
          <SocialLinks />
          <TeamsManager />
          <div className="lg:col-span-2">
            <GoalConfig />
          </div>
          <div className="lg:col-span-3">
             <EmoteManager />
          </div>
       </div>
    </div>
  );
}
