import React from 'react';
import { Users, ShieldCheck } from 'lucide-react';
import { AuditLog } from '@/components/stream/community/AuditLog';
import { BannedUsers } from '@/components/stream/community/BannedUsers';
import { Moderators } from '@/components/stream/community/Moderators';
import { AutoHostConfig } from '@/components/stream/community/AutoHostConfig';
import { CommunityRules } from '@/components/stream/community/CommunityRules';
import { ChatBotManager } from '@/components/stream/community/ChatBotManager';
import { AutoModConfig } from '@/components/stream/community/AutoModConfig';

export default function Community() {
  return (
    <div className="space-y-6 p-4 md:p-8 pb-24">
       <div className="flex items-center gap-2 mb-6">
          <Users className="text-primary" size={24} />
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Comunidade & Moderação</h1>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna 1: Logs e Bans (Mais largos) */}
          <div className="lg:col-span-2 space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
                <AuditLog />
                <BannedUsers />
                <div className="md:col-span-2">
                   <Moderators />
                </div>
             </div>
             <CommunityRules />
             <AutoModConfig />
          </div>

          {/* Coluna 2: Ferramentas */}
          <div className="space-y-6">
             <ChatBotManager />
             <AutoHostConfig />
          </div>
       </div>
    </div>
  );
}
