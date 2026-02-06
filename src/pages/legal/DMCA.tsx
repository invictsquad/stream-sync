import React from 'react';
import { Separator } from "@/components/ui/separator";
import { AlertCircle, FileText, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function DMCA() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Diretrizes DMCA</h1>
        <p className="text-muted-foreground">Política de Direitos Autorais e Procedimentos de Notificação.</p>
      </div>

      <Card className="bg-red-500/10 border-red-500/20 mb-8">
         <CardContent className="p-6 flex gap-4 items-start">
            <AlertCircle className="text-red-500 shrink-0" />
            <div>
               <h3 className="font-bold text-red-500 text-lg mb-2">Importante</h3>
               <p className="text-red-200 text-sm">A Clutch Live respeita a propriedade intelectual de terceiros e espera que seus usuários façam o mesmo. É nossa política responder a avisos claros de suposta violação de direitos autorais em conformidade com o Digital Millennium Copyright Act ("DMCA").</p>
            </div>
         </CardContent>
      </Card>

      <div className="bg-card/50 border border-border/50 rounded-3xl p-6 md:p-10 space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
             <FileText className="text-primary" /> Notificação de Infração
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Se você acredita que seu trabalho foi copiado de uma forma que constitui violação de direitos autorais, forneça ao nosso Agente de Direitos Autorais as seguintes informações por escrito:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm mt-4">
             <li>Assinatura física ou eletrônica do proprietário dos direitos autorais.</li>
             <li>Descrição da obra protegida por direitos autorais que você alega ter sido infringida.</li>
             <li>Descrição de onde o material que você alega estar infringindo está localizado no site.</li>
             <li>Seu endereço, número de telefone e endereço de e-mail.</li>
             <li>Uma declaração de boa fé de que o uso contestado não é autorizado.</li>
          </ul>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
             <Mail className="text-primary" /> Contato do Agente
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Todas as notificações de DMCA devem ser enviadas para:
          </p>
          <div className="bg-black/20 p-4 rounded-xl border border-white/5 font-mono text-sm">
             <p>Clutch Live, Inc.</p>
             <p>A/C: Copyright Agent</p>
             <p>Email: copyright@clutch.live</p>
          </div>
        </section>
      </div>
    </div>
  );
}
