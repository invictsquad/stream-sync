import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Plus, Shield } from 'lucide-react';

export default function Teams() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black italic uppercase tracking-tighter">Equipes</h1>
            <p className="text-muted-foreground">Gerencie sua participação em times de streamers.</p>
         </div>
         <Button className="btn-gold font-black uppercase"><Plus size={16} className="mr-2"/> Criar Time</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <Card className="bg-card/30 border-white/5">
            <CardHeader>
               <CardTitle className="flex items-center gap-2">
                  <Avatar className="w-10 h-10 border-2 border-primary">
                     <AvatarImage src="https://github.com/shadcn.png" />
                     <AvatarFallback>TB</AvatarFallback>
                  </Avatar>
                  <span className="font-black italic uppercase">Team Bravo</span>
               </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Membros</span>
                  <span className="font-bold">12/50</span>
               </div>
               <div className="flex -space-x-2 overflow-hidden mb-6">
                  {[1,2,3,4,5].map(i => (
                     <Avatar key={i} className="border-2 border-background w-8 h-8">
                        <AvatarFallback>U{i}</AvatarFallback>
                     </Avatar>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold border-2 border-background">+7</div>
               </div>
               <div className="flex gap-2">
                  <Button className="w-full font-black uppercase" variant="secondary">Ver Página</Button>
                  <Button size="icon" variant="outline"><Shield size={16}/></Button>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
