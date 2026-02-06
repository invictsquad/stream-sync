import React, { useState } from 'react';
import { MessageSquare, Search, MoreVertical, Phone, Video, Image, Mic, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/SkeletonLoader";

const MOCK_CONVERSATIONS = [
  { id: 1, user: 'Gaules', avatar: 'https://i.pravatar.cc/150?u=gaules', lastMsg: 'Valeu pelo sub!', time: '2m', unread: 2 },
  { id: 2, user: 'Alanzoka', avatar: 'https://i.pravatar.cc/150?u=alanzoka', lastMsg: 'Quando vamos jogar?', time: '1h', unread: 0 },
  { id: 3, user: 'Cellbit', avatar: 'https://i.pravatar.cc/150?u=cellbit', lastMsg: 'O enigma foi resolvido...', time: '1d', unread: 0 },
];

export default function Messages() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="h-[calc(100vh-5rem)] md:h-screen bg-background flex">
       {/* Sidebar Lista de Conversas */}
       <div className={`w-full md:w-80 border-r border-white/5 bg-secondary/10 flex flex-col ${activeChat !== null ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-white/5">
             <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-black italic uppercase">Mensagens</h1>
                <Button size="icon" variant="ghost"><MoreVertical size={18} /></Button>
             </div>
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <Input placeholder="Buscar conversas..." className="pl-9 bg-black/20 border-white/5 h-10 rounded-xl" />
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
             {isLoading ? (
               [1,2,3].map(i => <div key={i} className="flex gap-3 p-3"><Skeleton className="h-12 w-12 rounded-full" /><div className="flex-1 space-y-2"><Skeleton className="h-4 w-24" /><Skeleton className="h-3 w-32" /></div></div>)
             ) : (
               MOCK_CONVERSATIONS.map(chat => (
                  <div
                    key={chat.id}
                    onClick={() => setActiveChat(chat.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${activeChat === chat.id ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5 border border-transparent'}`}
                  >
                     <div className="relative">
                        <Avatar>
                           <AvatarImage src={chat.avatar} />
                           <AvatarFallback>{chat.user[0]}</AvatarFallback>
                        </Avatar>
                        {chat.unread > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center text-white">{chat.unread}</span>}
                     </div>
                     <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                           <h3 className={`text-sm font-bold truncate ${activeChat === chat.id ? 'text-primary' : 'text-white'}`}>{chat.user}</h3>
                           <span className="text-[10px] text-slate-500">{chat.time}</span>
                        </div>
                        <p className={`text-xs truncate ${chat.unread > 0 ? 'text-white font-bold' : 'text-slate-500'}`}>{chat.lastMsg}</p>
                     </div>
                  </div>
               ))
             )}
          </div>
       </div>

       {/* Chat Area */}
       <div className={`flex-1 flex flex-col bg-black/40 ${activeChat === null ? 'hidden md:flex' : 'flex'}`}>
          {activeChat ? (
             <>
                <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-secondary/10">
                   <div className="flex items-center gap-3">
                      <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setActiveChat(null)}><MoreVertical className="rotate-90" /></Button>
                      <Avatar className="h-10 w-10">
                         <AvatarImage src={MOCK_CONVERSATIONS.find(c => c.id === activeChat)?.avatar} />
                         <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                         <h2 className="font-black italic uppercase">{MOCK_CONVERSATIONS.find(c => c.id === activeChat)?.user}</h2>
                         <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</p>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <Button size="icon" variant="ghost"><Phone size={18} /></Button>
                      <Button size="icon" variant="ghost"><Video size={18} /></Button>
                      <Button size="icon" variant="ghost"><MoreVertical size={18} /></Button>
                   </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                   {/* Mock Messages */}
                   <div className="flex justify-start">
                      <div className="bg-secondary p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                         <p className="text-sm">E aí, tudo certo pra live de hoje?</p>
                         <span className="text-[9px] text-slate-500 mt-1 block">14:30</span>
                      </div>
                   </div>
                   <div className="flex justify-end">
                      <div className="bg-primary p-3 rounded-2xl rounded-tr-none max-w-[80%] text-black">
                         <p className="text-sm font-bold">Com certeza! Já configurei tudo aqui.</p>
                         <span className="text-[9px] text-black/50 mt-1 block text-right">14:32</span>
                      </div>
                   </div>
                </div>

                <div className="p-4 border-t border-white/5 bg-secondary/10">
                   <div className="flex gap-2 items-center">
                      <Button size="icon" variant="ghost" className="text-slate-400"><Image size={20} /></Button>
                      <Input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="bg-black/20 border-white/10 rounded-xl"
                      />
                      <Button size="icon" className="btn-gold rounded-xl"><Send size={18} /></Button>
                   </div>
                </div>
             </>
          ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-slate-500 opacity-50">
                <MessageSquare size={64} className="mb-4" />
                <p className="font-bold uppercase">Selecione uma conversa</p>
             </div>
          )}
       </div>
    </div>
  );
}
