import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Clock, Share2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ENGAGEMENT_DATA = [
  { time: '00:00', messages: 450, uniqueChatters: 120 },
  { time: '00:15', messages: 680, uniqueChatters: 180 },
  { time: '00:30', messages: 1200, uniqueChatters: 350 },
  { time: '00:45', messages: 900, uniqueChatters: 280 },
  { time: '01:00', messages: 1500, uniqueChatters: 400 },
];

export default function Engagement() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Engajamento</h1>
         <p className="text-muted-foreground">Como sua comunidade interage com seu conteúdo.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
            { label: "Mensagens no Chat", value: "15.4K", icon: MessageSquare, color: "text-blue-500" },
            { label: "Chatters Únicos", value: "1.2K", icon: Users, color: "text-green-500" },
            { label: "Tempo Médio Assistido", value: "24m", icon: Clock, color: "text-yellow-500" },
            { label: "Compartilhamentos", value: "342", icon: Share2, color: "text-purple-500" },
         ].map((stat, i) => (
            <Card key={i} className="bg-card/30 border-white/5">
               <CardContent className="p-4">
                  <p className="text-xs font-black uppercase text-slate-500 mb-1">{stat.label}</p>
                  <div className="flex items-center gap-2">
                     <stat.icon size={20} className={stat.color} />
                     <span className="text-2xl font-black italic text-white">{stat.value}</span>
                  </div>
               </CardContent>
            </Card>
         ))}
      </div>

      <Card className="bg-card/30 border-white/5 h-[400px]">
         <CardHeader>
            <CardTitle className="font-black italic uppercase text-sm">Volume de Chat x Chatters Únicos</CardTitle>
         </CardHeader>
         <CardContent className="h-full pb-10">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={ENGAGEMENT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="time" stroke="#666" fontSize={10} />
                  <YAxis stroke="#666" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                  <Bar dataKey="messages" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Mensagens" />
                  <Bar dataKey="uniqueChatters" fill="#10b981" radius={[4, 4, 0, 0]} name="Chatters" />
               </BarChart>
            </ResponsiveContainer>
         </CardContent>
      </Card>
    </div>
  );
}
