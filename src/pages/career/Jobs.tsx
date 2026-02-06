import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock } from 'lucide-react';

const JOBS = [
  { title: "Senior Frontend Engineer", dept: "Engenharia", loc: "Remoto (Brasil)", type: "Tempo Integral" },
  { title: "Go Backend Developer", dept: "Engenharia", loc: "Remoto (Global)", type: "Tempo Integral" },
  { title: "Product Designer", dept: "Design", loc: "São Paulo, SP", type: "Híbrido" },
  { title: "Community Manager", dept: "Marketing", loc: "Remoto (Brasil)", type: "Tempo Integral" },
];

export default function Jobs() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4 py-8">
         <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Trabalhe Conosco</h1>
         <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos construindo o futuro do streaming ao vivo. Junte-se à nossa missão.
         </p>
      </div>

      <div className="grid gap-4">
         {JOBS.map((job, i) => (
            <Card key={i} className="bg-card/30 border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
               <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                     <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors">{job.title}</h3>
                     <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-400 font-bold uppercase">
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.loc}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                     </div>
                  </div>
                  <Button variant="secondary" className="font-black uppercase">Ver Vaga</Button>
               </CardContent>
            </Card>
         ))}
      </div>
    </div>
  );
}
