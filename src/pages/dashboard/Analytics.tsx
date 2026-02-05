import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, UserPlus, Heart, MonitorPlay, Map } from 'lucide-react';

const DATA_VIEWS = [
  { name: 'Mon', views: 4000, subs: 240 },
  { name: 'Tue', views: 3000, subs: 139 },
  { name: 'Wed', views: 2000, subs: 980 },
  { name: 'Thu', views: 2780, subs: 390 },
  { name: 'Fri', views: 1890, subs: 480 },
  { name: 'Sat', views: 2390, subs: 380 },
  { name: 'Sun', views: 3490, subs: 430 },
];

const DATA_REGIONS = [
  { name: 'Brasil', value: 65 },
  { name: 'Portugal', value: 15 },
  { name: 'EUA', value: 10 },
  { name: 'Outros', value: 10 },
];

export default function Analytics() {
  return (
    <div className="space-y-6 p-4 md:p-8 pb-24">
       <div className="flex items-center gap-2 mb-6">
          <MonitorPlay className="text-primary" size={24} />
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter">Analytics Pro</h1>
       </div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-secondary/50 border-white/5">
             <CardContent className="p-4">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Total Views</p>
                <div className="text-2xl font-black italic text-white flex items-center gap-2">
                   18.4k <Users size={16} className="text-primary" />
                </div>
             </CardContent>
          </Card>
          <Card className="bg-secondary/50 border-white/5">
             <CardContent className="p-4">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Novos Subs</p>
                <div className="text-2xl font-black italic text-white flex items-center gap-2">
                   142 <Heart size={16} className="text-fuchsia-500" />
                </div>
             </CardContent>
          </Card>
          <Card className="bg-secondary/50 border-white/5">
             <CardContent className="p-4">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Tempo Médio</p>
                <div className="text-2xl font-black italic text-white flex items-center gap-2">
                   24m <Clock size={16} className="text-yellow-500" />
                </div>
             </CardContent>
          </Card>
          <Card className="bg-secondary/50 border-white/5">
             <CardContent className="p-4">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Seguidores</p>
                <div className="text-2xl font-black italic text-white flex items-center gap-2">
                   +1.2k <UserPlus size={16} className="text-emerald-500" />
                </div>
             </CardContent>
          </Card>
       </div>

       <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-secondary/30 border-white/5 p-4 rounded-3xl">
             <CardHeader>
                <CardTitle className="text-sm font-black italic uppercase text-slate-400">Crescimento Semanal</CardTitle>
             </CardHeader>
             <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={DATA_VIEWS}>
                      <defs>
                         <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFD700" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" fontSize={10} />
                      <YAxis stroke="#666" fontSize={10} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                      <Area type="monotone" dataKey="views" stroke="#FFD700" fillOpacity={1} fill="url(#colorViews)" />
                   </AreaChart>
                </ResponsiveContainer>
             </CardContent>
          </Card>

          <Card className="bg-secondary/30 border-white/5 p-4 rounded-3xl">
             <CardHeader>
                <CardTitle className="text-sm font-black italic uppercase text-slate-400">Inscrições x Doações</CardTitle>
             </CardHeader>
             <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={DATA_VIEWS}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" fontSize={10} />
                      <YAxis stroke="#666" fontSize={10} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                      <Legend />
                      <Bar dataKey="subs" fill="#d946ef" radius={[4, 4, 0, 0]} />
                   </BarChart>
                </ResponsiveContainer>
             </CardContent>
          </Card>
       </div>
    </div>
  );
}
