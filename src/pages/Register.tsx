import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, User, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Conta criada com sucesso! Verifique seu email.");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
            <Zap className="h-6 w-6 text-black fill-black" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black italic uppercase text-white tracking-tighter">
              Crie sua Conta
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Junte-se à comunidade Clutch Live hoje mesmo.
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleRegister}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-zinc-300">Nome de Usuário</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                <Input placeholder="SeuNickGamer" className="bg-black/50 border-zinc-700 text-white pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                <Input type="email" placeholder="voce@exemplo.com" className="bg-black/50 border-zinc-700 text-white pl-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-300">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                <Input type="password" placeholder="••••••••" className="bg-black/50 border-zinc-700 text-white pl-10" />
              </div>
            </div>
            <div className="text-xs text-zinc-500">
               Ao se registrar, você concorda com nossos <Link to="/terms" className="text-yellow-500 hover:underline">Termos de Uso</Link> e <Link to="/privacy" className="text-yellow-500 hover:underline">Política de Privacidade</Link>.
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button
              type="submit"
              className="w-full btn-gold font-black uppercase italic py-6 text-lg"
              disabled={loading}
            >
              {loading ? 'Criando...' : 'Criar Conta Grátis'}
            </Button>
            <div className="text-center text-sm text-zinc-400">
               Já tem uma conta? <Link to="/login" className="text-yellow-500 font-bold hover:underline">Entrar</Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
