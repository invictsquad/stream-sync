import React, { useState } from 'react';
import { Pin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export function PinnedMessageManager() {
  const [message, setMessage] = useState("");

  const handlePin = () => {
     if (!message) return;
     toast.success("Mensagem fixada no topo do chat!");
     setMessage("");
  };

  return (
    <Card className="bg-secondary/30 border border-white/5 h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-black uppercase italic flex items-center gap-2 text-primary">
          <Pin size={16} /> Mensagem Fixada
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
         <div className="bg-primary/10 border border-primary/20 p-3 rounded-lg">
             <div className="flex items-start gap-2">
                <Pin size={12} className="text-primary mt-1 shrink-0" />
                <p className="text-xs text-white font-medium italic">"Não esqueçam de usar o cupom LIVE20 na loja!"</p>
             </div>
         </div>

         <div className="flex gap-2">
            <Input
               placeholder="Nova mensagem..."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               className="h-9 bg-black/20 text-xs"
            />
            <Button size="icon" className="h-9 w-9 shrink-0 btn-gold" onClick={handlePin}>
               <Send size={14} />
            </Button>
         </div>
      </CardContent>
    </Card>
  );
}
