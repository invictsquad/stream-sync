import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Users, DollarSign, Trophy } from 'lucide-react';
import { toast } from "sonner";

export function ReferralDashboard() {
  const link = "https://clutch.tv/r/meucanal";

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    toast.success("Link copiado!");
  };

  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-blue-500/10 border-blue-500/20">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold uppercase text-blue-400">Convidados</p>
                            <h3 className="text-3xl font-black text-white mt-1">1,240</h3>
                        </div>
                        <Users className="text-blue-500" size={24} />
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-green-500/10 border-green-500/20">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold uppercase text-green-400">Ganhos</p>
                            <h3 className="text-3xl font-black text-white mt-1">R$ 450,00</h3>
                        </div>
                        <DollarSign className="text-green-500" size={24} />
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-purple-500/10 border-purple-500/20">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs font-bold uppercase text-purple-400">Ranking</p>
                            <h3 className="text-3xl font-black text-white mt-1">#42</h3>
                        </div>
                        <Trophy className="text-purple-500" size={24} />
                    </div>
                </CardContent>
            </Card>
        </div>

        <Card className="bg-secondary/30 border-white/5">
            <CardHeader>
                <CardTitle className="text-lg font-black italic uppercase text-white">Seu Link Único</CardTitle>
                <CardDescription>Compartilhe este link para ganhar recompensas.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex gap-2">
                    <div className="flex-1 bg-black/40 border border-white/10 rounded px-4 py-3 text-zinc-300 font-mono">
                        {link}
                    </div>
                    <Button onClick={copyLink} className="btn-gold font-bold">
                        <Copy size={16} className="mr-2" /> Copiar
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
