import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MailCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleInput = (index: number, value: string) => {
     if (value.length > 1) return;
     const newCode = [...code];
     newCode[index] = value;
     setCode(newCode);

     // Auto-focus next input
     if (value && index < 5) {
        document.getElementById(`code-${index + 1}`)?.focus();
     }
  };

  const handleVerify = () => {
     toast.success("Email verificado com sucesso!");
     setTimeout(() => navigate('/onboarding'), 1000);
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center animate-pulse">
            <MailCheck className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-black italic uppercase text-white tracking-tighter">
              Verifique seu Email
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Digite o código de 6 dígitos enviado para seu email.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
           <div className="flex justify-between gap-2 mb-8">
              {code.map((digit, i) => (
                 <Input
                   key={i}
                   id={`code-${i}`}
                   value={digit}
                   onChange={(e) => handleInput(i, e.target.value)}
                   className="w-12 h-14 text-center text-xl font-black bg-black/50 border-zinc-700 text-primary focus:border-primary"
                   maxLength={1}
                 />
              ))}
           </div>
           <Button onClick={handleVerify} className="w-full btn-gold font-black uppercase text-lg h-12">
              Verificar
           </Button>
        </CardContent>
        <CardFooter className="justify-center">
           <Button variant="link" className="text-zinc-500 text-xs">Reenviar Código</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
