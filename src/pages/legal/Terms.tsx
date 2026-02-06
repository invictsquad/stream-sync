import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Termos de Uso</h1>
        <p className="text-muted-foreground">Última atualização: Outubro 2023</p>
      </div>

      <div className="bg-card/50 border border-border/50 rounded-3xl p-6 md:p-10 space-y-8 shadow-sm">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
            Aceitação dos Termos
          </h2>
          <p className="text-muted-foreground leading-relaxed pl-10">
            Ao acessar e utilizar a plataforma Stream Sync, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
            Uso de Licença
          </h2>
          <p className="text-muted-foreground leading-relaxed pl-10">
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Stream Sync, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.
          </p>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
             <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
            Isenção de Responsabilidade
          </h2>
          <p className="text-muted-foreground leading-relaxed pl-10">
            Os materiais no site da Stream Sync são fornecidos 'como estão'. Stream Sync não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
             <span className="bg-primary/10 text-primary w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
            Limitações
          </h2>
          <p className="text-muted-foreground leading-relaxed pl-10">
            Em nenhum caso o Stream Sync ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Stream Sync.
          </p>
        </section>
      </div>
    </div>
  );
}
