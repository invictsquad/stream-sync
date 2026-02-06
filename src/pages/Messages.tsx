import React, { useState, useEffect } from 'react';
import { MessageSquare, Search, MoreVertical, Phone, Video, Image, Mic, Send, ChevronLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/SkeletonLoader";
import { storage, Conversation } from '@/lib/storage';

export default function Messages() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load messages from storage
    setTimeout(() => {
        setConversations(storage.messages.get());
        setIsLoading(false);
    }, 500);
  }, []);

  const handleSendMessage = () => {
      if (!activeChatId || !messageText.trim()) return;
      const updated = storage.messages.send(activeChatId, messageText);
      setConversations(updated);
      setMessageText('');
  };

  const activeConversation = conversations.find(c => c.id === activeChatId);

  return (
    <div className="h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)] bg-background flex overflow-hidden">
       {/* Sidebar Lista de Conversas */}
       <div className={`w-full md:w-80 border-r border-white/5 bg-secondary/10 flex flex-col ${activeChatId ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-white/5 shrink-0">
             <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-black italic uppercase">Mensagens</h1>
                <Button size="icon" variant="ghost" className="h-8 w-8"><MoreVertical size={16} /></Button>
             </div>
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                <Input placeholder="Buscar conversas..." className="pl-9 bg-black/20 border-white/5 h-9 rounded-lg text-xs" />
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1">
             {isLoading ? (
               [1,2,3].map(i => <div key={i} className="flex gap-3 p-3"><Skeleton className="h-10 w-10 rounded-full" /><div className="flex-1 space-y-2"><Skeleton className="h-3 w-20" /><Skeleton className="h-2 w-32" /></div></div>)
             ) : (
               conversations.map(chat => {
                  const lastMsg = chat.messages[chat.messages.length - 1];
                  return (
                    <div
                        key={chat.id}
                        onClick={() => setActiveChatId(chat.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeChatId === chat.id ? 'bg-primary/10 border border-primary/20' : 'hover:bg-white/5 border border-transparent'}`}
                    >
                        <div className="relative">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={chat.avatar} />
                                <AvatarFallback>{chat.user[0]}</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                                <h3 className={`text-sm font-bold truncate ${activeChatId === chat.id ? 'text-primary' : 'text-white'}`}>{chat.user}</h3>
                                <span className="text-[10px] text-slate-500">{new Date(lastMsg?.timestamp || Date.now()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                            </div>
                            <p className="text-xs truncate text-slate-500">{lastMsg?.text || "Nova conversa"}</p>
                        </div>
                    </div>
                  );
               })
             )}
          </div>
       </div>

       {/* Chat Area */}
       <div className={`flex-1 flex flex-col bg-black/40 ${!activeChatId ? 'hidden md:flex' : 'flex'}`}>
          {activeConversation ? (
             <>
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-4 bg-secondary/10 shrink-0">
                   <div className="flex items-center gap-3">
                      <Button size="icon" variant="ghost" className="md:hidden h-8 w-8" onClick={() => setActiveChatId(null)}><ChevronLeft /></Button>
                      <Avatar className="h-8 w-8">
                         <AvatarImage src={activeConversation.avatar} />
                         <AvatarFallback>{activeConversation.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                         <h2 className="font-black italic uppercase text-sm">{activeConversation.user}</h2>
                         <p className="text-[9px] text-green-500 font-bold uppercase tracking-wider">Online</p>
                      </div>
                   </div>
                   <div className="flex gap-1">
                      <Button size="icon" variant="ghost" className="h-8 w-8"><Phone size={16} /></Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8"><Video size={16} /></Button>
                   </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/20">
                   {activeConversation.messages.map((msg) => (
                       <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`p-3 rounded-2xl max-w-[80%] ${msg.sender === 'me' ? 'bg-primary text-black rounded-tr-none' : 'bg-secondary text-white rounded-tl-none'}`}>
                             <p className="text-xs font-medium">{msg.text}</p>
                             <span className={`text-[9px] mt-1 block text-right ${msg.sender === 'me' ? 'text-black/50' : 'text-slate-500'}`}>
                                {new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                             </span>
                          </div>
                       </div>
                   ))}
                </div>

                <div className="p-3 border-t border-white/5 bg-secondary/10 shrink-0">
                   <div className="flex gap-2 items-center">
                      <Button size="icon" variant="ghost" className="text-slate-400 h-9 w-9 shrink-0"><Image size={18} /></Button>
                      <Input
                        value={messageText}
                        onChange={e => setMessageText(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Digite sua mensagem..."
                        className="bg-black/20 border-white/10 rounded-lg h-9 text-xs"
                      />
                      <Button size="icon" className="btn-gold rounded-lg h-9 w-9 shrink-0" onClick={handleSendMessage}><Send size={16} /></Button>
                   </div>
                </div>
             </>
          ) : (
             <div className="flex-1 flex flex-col items-center justify-center text-slate-500 opacity-50">
                <MessageSquare size={48} className="mb-4" />
                <p className="font-bold uppercase text-xs">Selecione uma conversa</p>
             </div>
          )}
       </div>
    </div>
  );
}
