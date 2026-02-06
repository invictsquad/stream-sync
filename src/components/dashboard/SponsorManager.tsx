import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SponsorManager() {
  return (
    <div className="space-y-6">
        <Card className="bg-secondary/30 border-white/5">
            <CardHeader>
                <CardTitle className="text-lg font-black italic uppercase text-white">Patrocinadores Ativos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/20 rounded border border-white/5">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 rounded bg-white p-1">
                            <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" className="object-contain" />
                            <AvatarFallback>AMZ</AvatarFallback>
                        </Avatar>
                        <div>
                            <h4 className="font-bold text-white text-lg">Amazon Prime</h4>
                            <p className="text-sm text-zinc-400">Campanha Mensal - Banner Rotativo</p>
                        </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-500 border-green-500/20">Ativo</Badge>
                </div>
            </CardContent>
        </Card>

        <Card className="bg-secondary/30 border-white/5">
            <CardHeader>
                <CardTitle className="text-lg font-black italic uppercase text-white">Oportunidades Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/20 rounded border border-white/5 space-y-4">
                         <div className="flex items-center justify-between">
                            <h4 className="font-bold text-white">Razer</h4>
                            <Badge variant="outline" className="border-yellow-500 text-yellow-500">Novo</Badge>
                         </div>
                         <p className="text-sm text-zinc-400">Divulgação de periféricos. Exige overlay na stream.</p>
                         <div className="flex items-center gap-2 text-sm text-green-400 font-bold">
                            <span>R$ 1.500,00</span>
                            <span className="text-zinc-600">/ mês</span>
                         </div>
                         <Button className="w-full btn-gold text-black font-bold">Candidatar-se</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
