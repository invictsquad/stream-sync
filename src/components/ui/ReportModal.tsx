import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ReportModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  const handleSubmit = () => {
    toast.success("Denúncia enviada para análise.");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zinc-900 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="font-black italic uppercase">Denunciar Conteúdo</DialogTitle>
          <DialogDescription>
            Selecione o motivo da denúncia. Sua identidade será mantida em sigilo.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
           <RadioGroup defaultValue="harassment">
              <div className="flex items-center space-x-2">
                 <RadioGroupItem value="harassment" id="r1" className="border-white/50 text-primary" />
                 <Label htmlFor="r1">Assédio ou Discurso de Ódio</Label>
              </div>
              <div className="flex items-center space-x-2">
                 <RadioGroupItem value="violence" id="r2" className="border-white/50 text-primary" />
                 <Label htmlFor="r2">Violência ou Ameaças</Label>
              </div>
              <div className="flex items-center space-x-2">
                 <RadioGroupItem value="copyright" id="r3" className="border-white/50 text-primary" />
                 <Label htmlFor="r3">Violação de Direitos Autorais</Label>
              </div>
              <div className="flex items-center space-x-2">
                 <RadioGroupItem value="spam" id="r4" className="border-white/50 text-primary" />
                 <Label htmlFor="r4">Spam ou Golpe</Label>
              </div>
           </RadioGroup>
           <Textarea placeholder="Detalhes adicionais (opcional)..." className="bg-black/50 border-white/10" />
        </div>
        <DialogFooter>
           <Button variant="ghost" onClick={() => onOpenChange(false)}>Cancelar</Button>
           <Button className="btn-gold font-black uppercase" onClick={handleSubmit}>Enviar Denúncia</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
