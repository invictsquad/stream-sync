import React from 'react';
import { ChatSettings as ChatSettingsComponent } from '@/components/stream/ChatSettings';

export default function ChatSettings() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Configuração do Chat</h1>
         <p className="text-muted-foreground">Personalize a experiência de chat para seus espectadores.</p>
      </div>

      <ChatSettingsComponent />
    </div>
  );
}
