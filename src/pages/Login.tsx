import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function Login() {
  const { login } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      login();
      setLoading(false);
    }, 800);
  };

  return (
    <div className="h-dvh w-full bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center">
            <Zap className="h-6 w-6 text-black fill-black" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black italic uppercase text-white tracking-tighter">
              Clutch Live
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Entre para começar a assistir e transmitir
            </CardDescription>
          </div>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">Email</Label>
              <Input 
                id="email"
                type="email" 
                defaultValue="test@stream.com"
                className="bg-black/50 border-zinc-700 text-white"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">Senha</Label>
              <Input 
                id="password"
                type="password" 
                defaultValue="password123"
                className="bg-black/50 border-zinc-700 text-white"
                readOnly
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold uppercase italic py-6 text-lg"
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar na Plataforma'}
            </Button>
          </CardFooter>
        </form>
        <div className="px-6 pb-6 text-center text-xs text-zinc-500">
          Acesso de demonstração pré-configurado
        </div>
      </Card>
    </div>
  );
}
