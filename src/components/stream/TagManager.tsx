import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X, Hash } from 'lucide-react';

export function TagManager() {
  const [tags, setTags] = useState<string[]>(['Games', 'Pro', 'Ranking']);
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const cleanInput = input.trim().replace(/^#/, '');
    if (cleanInput && !tags.includes(cleanInput) && tags.length < 5) {
      setTags([...tags, cleanInput]);
      setInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <Card className="bg-secondary/30 border-white/5">
       <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-sm font-black italic uppercase text-slate-300">
             <Hash size={16} className="text-primary" /> Tags de Descoberta
          </CardTitle>
       </CardHeader>
       <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 min-h-[40px]">
             {tags.map(tag => (
                <Badge key={tag} className="bg-primary/20 hover:bg-primary/30 text-primary border-primary/20 px-3 py-1 flex items-center gap-1">
                   #{tag}
                   <button onClick={() => removeTag(tag)} className="ml-1 hover:text-white"><X size={12}/></button>
                </Badge>
             ))}
             {tags.length < 5 && (
                 <Input
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={handleKeyDown}
                   placeholder="Adicionar tag..."
                   className="w-32 h-7 bg-transparent border-none text-xs focus-visible:ring-0 p-0"
                 />
             )}
          </div>
          <p className="text-[9px] text-slate-500 font-bold uppercase text-right">
             {tags.length}/5 Tags
          </p>
       </CardContent>
    </Card>
  );
}
