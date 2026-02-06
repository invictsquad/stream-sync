import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Building2, FileText, Landmark } from 'lucide-react';

export default function Payouts() {
  return (
    <div className="p-4 md:p-8 pb-24 max-w-7xl mx-auto space-y-8">
      <div>
         <h1 className="text-3xl font-black italic uppercase tracking-tighter">Pagamentos</h1>
         <p className="text-muted-foreground">Gerencie seus dados bancários e fiscais.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card/30 border-white/5">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black italic uppercase"><Landmark /> Conta Bancária</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="space-y-2">
                      <Label>Método de Pagamento</Label>
                      <Input value="Transferência Bancária (PIX)" disabled className="bg-black/40" />
                  </div>
                  <div className="space-y-2">
                      <Label>Status</Label>
                      <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded font-bold uppercase text-xs border border-green-500/20">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                          Ativo e Verificado
                      </div>
                  </div>
                  <Button variant="outline" className="w-full">Editar Informações</Button>
              </CardContent>
          </Card>

          <Card className="bg-card/30 border-white/5">
              <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-black italic uppercase"><FileText /> Informações Fiscais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded border border-white/5">
                      <div className="flex items-center gap-3">
                          <Building2 className="text-zinc-500" />
                          <div>
                              <p className="font-bold text-sm text-white">Formulário W-8BEN</p>
                              <p className="text-xs text-zinc-500">Impostos Internacionais</p>
                          </div>
                      </div>
                      <span className="text-green-500 text-xs font-black uppercase">Enviado</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/20 rounded border border-white/5">
                      <div className="flex items-center gap-3">
                          <Building2 className="text-zinc-500" />
                          <div>
                              <p className="font-bold text-sm text-white">Dados de Pessoa Física</p>
                              <p className="text-xs text-zinc-500">CPF e Endereço</p>
                          </div>
                      </div>
                      <span className="text-green-500 text-xs font-black uppercase">Enviado</span>
                  </div>
                  <Button variant="outline" className="w-full">Atualizar Dados</Button>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
