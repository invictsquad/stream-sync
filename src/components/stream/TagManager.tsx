import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X } from 'lucide-react';

export function TagManager() {
  const [tags, setTags] = useState<string[]>(["FPS", "Ranked", "Português"]);
  const [input, setInput] = useState("");

  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input) {
        if (!tags.includes(input) && tags.length < 5) {
            setTags([...tags, input]);
            setInput("");
        }
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <div className="space-y-2">
        <div className="flex flex-wrap gap-2 mb-2">
            {tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 gap-1">
                    {tag}
                    <button onClick={() => removeTag(tag)} className="hover:text-white"><X size={12} /></button>
                </Badge>
            ))}
        </div>
        <Input
            placeholder="Adicionar tag (Enter)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={addTag}
            className="bg-black/20 border-white/10"
            disabled={tags.length >= 5}
        />
        <p className="text-[10px] text-zinc-500">Pressione Enter para adicionar. Máximo 5 tags.</p>
    </div>
  );
}
