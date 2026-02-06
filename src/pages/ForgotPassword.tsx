import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { KeyRound, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Link de recuperação enviado!");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-zinc-800 w-12 h-12 rounded-full flex items-center justify-center">
            <KeyRound className="h-6 w-6 text-zinc-400" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black italic uppercase text-white tracking-tighter">
              Recuperar Senha
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Digite seu email para receber um link de redefinição.
            </CardDescription>
          </div>
        </CardHeader>
        {!sent ? (
           <form onSubmit={handleSubmit}>
             <CardContent className="space-y-4">
               <div className="space-y-2">
                 <Label className="text-zinc-300">Email Cadastrado</Label>
                 <Input type="email" placeholder="voce@exemplo.com" className="bg-black/50 border-zinc-700 text-white" />
               </div>
             </CardContent>
             <CardFooter className="flex-col gap-4">
               <Button
                 type="submit"
                 className="w-full btn-gold font-black uppercase italic"
                 disabled={loading}
               >
                 {loading ? 'Enviando...' : 'Enviar Link'}
               </Button>
               <Link to="/login" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                  <ArrowLeft size={14} /> Voltar para o Login
               </Link>
             </CardFooter>
           </form>
        ) : (
           <CardContent className="text-center space-y-6">
              <div className="bg-green-500/10 text-green-500 p-4 rounded-lg text-sm font-bold border border-green-500/20">
                 Verifique sua caixa de entrada! Enviamos as instruções para o seu email.
              </div>
              <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800" onClick={() => setSent(false)}>
                 Tentar outro email
              </Button>
           </CardContent>
        )}
      </Card>
    </div>
  );
}
