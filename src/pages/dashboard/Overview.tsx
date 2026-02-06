import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Radio, Users, Activity, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="p-4 md:p-8 space-y-8 pb-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Visão Geral</h1>
          <p className="text-muted-foreground">Bem-vindo de volta, Streamer.</p>
        </div>
        <div className="flex gap-2">
           <Link to="/dashboard/go-live">
             <Button className="btn-gold font-black uppercase tracking-widest gap-2">
                <Radio size={16} /> Iniciar Live
             </Button>
           </Link>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Média de Viewers", value: "842", trend: "+12%", icon: Users, color: "text-primary" },
          { label: "Novos Seguidores", value: "1.2k", trend: "+5%", icon: Activity, color: "text-emerald-500" },
          { label: "Ganhos (Mês)", value: "R$ 3.4k", trend: "+18%", icon: DollarSign, color: "text-yellow-500" },
          { label: "Horas Transmitidas", value: "42h", trend: "-2%", icon: Calendar, color: "text-blue-500" },
        ].map((stat, i) => (
          <Card key={i} className="bg-card/50 border-white/5 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black italic">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <span className={stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                  {stat.trend}
                </span>
                <span className="ml-1 opacity-50">vs mês anterior</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <Card className="lg:col-span-2 bg-card/30 border-white/5">
          <CardHeader>
            <CardTitle className="text-lg font-black italic uppercase flex items-center gap-2">
              <Activity className="text-primary" size={18} /> Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-white/5 hover:border-primary/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      USR
                    </div>
                    <div>
                      <p className="text-sm font-bold">Novo seguidor: <span className="text-primary">User_{i}99</span></p>
                      <p className="text-xs text-muted-foreground">Há {i * 5 + 2} minutos</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8 opacity-50 hover:opacity-100">
                    <ArrowUpRight size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Card className="bg-gradient-to-br from-primary/20 to-transparent border-primary/20">
            <CardHeader>
               <CardTitle className="text-lg font-black italic uppercase">Status da Meta</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                     <span>Rumo aos 10k</span>
                     <span className="text-primary">75%</span>
                  </div>
                  <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                     <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_#FFD700]"></div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">Faltam 2.500 seguidores para alcançar o nível Diamante.</p>
               </div>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="text-sm font-black italic uppercase text-muted-foreground">Dicas</CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm leading-relaxed">
                  Configure alertas de doação para aumentar a interação. Streamers que usam alertas sonoros têm <span className="text-primary font-bold">30% mais engajamento</span>.
               </p>
               <Button variant="link" className="text-primary p-0 h-auto mt-2 text-xs uppercase font-bold">Configurar Agora</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
