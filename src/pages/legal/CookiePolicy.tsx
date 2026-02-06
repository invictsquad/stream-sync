import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 pb-24 max-w-4xl mx-auto">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter flex items-center gap-3">
           <Cookie className="text-primary" size={32} /> Política de Cookies
        </h1>
        <p className="text-muted-foreground">Entenda como e por que usamos cookies na Clutch Live.</p>
      </div>

      <div className="bg-card/50 border border-border/50 rounded-3xl p-6 md:p-10 space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. O que são Cookies?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer os sites funcionarem, ou funcionarem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.
          </p>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. Como usamos Cookies?</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
             <li><strong className="text-white">Cookies Essenciais:</strong> Necessários para o funcionamento do site (ex: login).</li>
             <li><strong className="text-white">Cookies de Desempenho:</strong> Coletam informações anônimas sobre como os usuários usam o site.</li>
             <li><strong className="text-white">Cookies de Funcionalidade:</strong> Lembram suas escolhas (ex: idioma, região).</li>
             <li><strong className="text-white">Cookies de Publicidade:</strong> Usados para entregar anúncios relevantes.</li>
          </ul>
        </section>

        <Separator className="bg-border/50" />

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">3. Gerenciamento de Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que eles sejam colocados. Se você fizer isso, no entanto, talvez tenha que ajustar manualmente algumas preferências toda vez que visitar um site e alguns serviços e funcionalidades podem não funcionar.
          </p>
        </section>
      </div>
    </div>
  );
}
