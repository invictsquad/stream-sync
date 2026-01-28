import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ChatOverlay() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'ClutchBot', text: 'Overlay de chat ativo! Arraste para o OBS.' },
    { id: 2, user: 'Admin', text: 'Configure a transparência no OBS Studio.' }
  ]);

  // Simulação de chat chegando em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      const users = ['ProGamer', 'ClutchFan', 'Viewer_X', 'NinjaBR'];
      const texts = ['GOGOGO!', 'Essa jogada foi clutch!', 'Salve streamer!', 'TOP DEMAIS'];
      const newMessage = {
        id: Date.now(),
        user: users[Math.floor(Math.random() * users.length)],
        text: texts[Math.floor(Math.random() * texts.length)]
      };
      setMessages(prev => [...prev.slice(-15), newMessage]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full bg-transparent p-4 font-sans overflow-hidden flex flex-col justify-end">
      <div className="space-y-2">
        {messages.map((m) => (
          <div key={m.id} className="animate-in slide-in-from-left duration-300">
            <div className="inline-block bg-black/60 backdrop-blur-md border-l-4 border-indigo-500 px-3 py-1.5 rounded-r-lg">
              <span className="font-black text-indigo-400 text-sm mr-2 uppercase italic">{m.user}:</span>
              <span className="text-white text-sm font-medium">{m.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}