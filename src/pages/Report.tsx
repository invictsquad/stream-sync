import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Flag, AlertTriangle } from 'lucide-react';
import { toast } from "sonner";

export default function Report() {
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      toast.success("Denúncia enviada. Nossa equipe irá analisar.");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 flex items-center justify-center">
      <Card className="w-full max-w-lg bg-zinc-900 border-zinc-800">
         <CardHeader>
            <CardTitle className="flex items-center gap-2 font-black italic uppercase text-red-500">
                <Flag /> Denunciar Conteúdo
            </CardTitle>
            <CardDescription>Ajude-nos a manter a comunidade segura.</CardDescription>
         </CardHeader>
         <CardContent>
             <form onSubmit={handleSubmit} className="space-y-4">
                 <div className="bg-red-500/10 border border-red-500/20 p-3 rounded text-xs text-red-200 flex gap-2">
                     <AlertTriangle size={16} className="shrink-0" />
                     <p>Denúncias falsas podem resultar na suspensão da sua conta.</p>
                 </div>

                 <div className="space-y-2">
                     <Label>Usuário ou Canal</Label>
                     <Input placeholder="Link ou @nome" className="bg-black/40" />
                 </div>

                 <div className="space-y-2">
                     <Label>Motivo</Label>
                     <Select>
                         <SelectTrigger className="bg-black/40"><SelectValue placeholder="Selecione um motivo..." /></SelectTrigger>
                         <SelectContent>
                             <SelectItem value="spam">Spam ou Golpe</SelectItem>
                             <SelectItem value="harassment">Assédio ou Ódio</SelectItem>
                             <SelectItem value="violence">Violência ou Ameaças</SelectItem>
                             <SelectItem value="copyright">Violação de Copyright</SelectItem>
                         </SelectContent>
                     </Select>
                 </div>

                 <div className="space-y-2">
                     <Label>Descrição</Label>
                     <Textarea placeholder="Forneça detalhes adicionais..." className="bg-black/40 min-h-[100px]" />
                 </div>

                 <div className="space-y-2">
                     <Label>Prova (URL)</Label>
                     <Input placeholder="Link do clipe ou imagem" className="bg-black/40" />
                 </div>

                 <Button className="w-full btn-gold font-black uppercase">Enviar Denúncia</Button>
             </form>
         </CardContent>
      </Card>
    </div>
  );
}
