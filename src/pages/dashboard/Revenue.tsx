import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Calendar, CreditCard } from 'lucide-react';

const DATA = [
  { name: '01/10', value: 120 },
  { name: '05/10', value: 300 },
  { name: '10/10', value: 250 },
  { name: '15/10', value: 450 },
  { name: '20/10', value: 380 },
  { name: '25/10', value: 600 },
];

export default function Revenue() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Receita Detalhada</h1>
         <p className="text-muted-foreground">Acompanhe seus ganhos brutos e líquidos.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
          {[
              { label: "Ganhos (30d)", value: "$ 1,240.50", icon: DollarSign, color: "text-green-500" },
              { label: "CPM Médio", value: "$ 3.45", icon: TrendingUp, color: "text-blue-500" },
              { label: "Dias Transmitidos", value: "24", icon: Calendar, color: "text-purple-500" },
              { label: "Transações", value: "145", icon: CreditCard, color: "text-orange-500" },
          ].map((stat, i) => (
              <Card key={i} className="bg-card/30 border-white/5">
                  <CardContent className="p-4 flex items-center justify-between">
                      <div>
                          <p className="text-xs font-black uppercase text-zinc-500">{stat.label}</p>
                          <p className="text-xl font-black text-white">{stat.value}</p>
                      </div>
                      <stat.icon className={stat.color} size={24} />
                  </CardContent>
              </Card>
          ))}
      </div>

      <Card className="bg-card/30 border-white/5 p-4 h-[400px]">
          <CardHeader>
              <CardTitle className="font-black italic uppercase text-sm">Evolução da Receita</CardTitle>
          </CardHeader>
          <CardContent className="h-full pb-10">
              <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DATA}>
                      <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" fontSize={10} />
                      <YAxis stroke="#666" fontSize={10} />
                      <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                      <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
              </ResponsiveContainer>
          </CardContent>
      </Card>
    </div>
  );
}
