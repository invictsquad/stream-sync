import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Share2, Instagram, Twitter, Youtube, Plus, Trash2 } from 'lucide-react';

export function SocialLinks() {
  const [links, setLinks] = useState([
    { platform: 'Instagram', url: 'instagram.com/clutch', icon: Instagram },
    { platform: 'Twitter', url: 'twitter.com/clutch', icon: Twitter },
  ]);

  return (
    <Card className="bg-secondary/30 border-white/5 h-full">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Share2 size={16} className="text-primary" /> Redes Sociais
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="space-y-2">
             {links.map((link, idx) => (
                <div key={idx} className="flex items-center gap-2">
                   <div className="bg-black/40 p-2 rounded-lg"><link.icon size={14} className="text-slate-400"/></div>
                   <Input value={link.url} readOnly className="h-9 text-xs bg-black/40 border-white/5 flex-1" />
                   <Button size="icon" variant="ghost" className="h-9 w-9 text-slate-500 hover:text-red-500"><Trash2 size={14}/></Button>
                </div>
             ))}
          </div>
          <Button variant="outline" className="w-full h-9 text-[10px] border-dashed border-white/20 hover:bg-white/5">
             <Plus size={12} className="mr-1" /> Adicionar Link
          </Button>
       </CardContent>
    </Card>
  );
}
