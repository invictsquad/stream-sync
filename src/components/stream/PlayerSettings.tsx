import React from 'react';
import { Settings2, Monitor, Gauge } from 'lucide-react';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuRadioGroup, DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function PlayerSettings() {
  const [quality, setQuality] = React.useState("1080p");
  const [speed, setSpeed] = React.useState("1.0x");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings2 size={20} className="text-slate-400 hover:text-primary cursor-pointer transition-colors" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 border-white/10 text-white min-w-[200px]">
        <DropdownMenuLabel className="text-[10px] font-black uppercase text-slate-500">Qualidade de Vídeo</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={quality} onValueChange={setQuality}>
          <DropdownMenuRadioItem value="1080p" className="text-xs font-bold">1080p60 (Source)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="720p" className="text-xs font-bold">720p60</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="480p" className="text-xs font-bold">480p</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="auto" className="text-xs font-bold">Auto</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator className="bg-white/10" />

        <DropdownMenuLabel className="text-[10px] font-black uppercase text-slate-500">Velocidade</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={speed} onValueChange={setSpeed}>
          <DropdownMenuRadioItem value="0.5x" className="text-xs font-bold">0.5x</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1.0x" className="text-xs font-bold">Normal</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1.5x" className="text-xs font-bold">1.5x</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="2.0x" className="text-xs font-bold">2.0x</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem className="text-xs font-bold flex gap-2">
           <Monitor size={14} /> Estatísticas para Nerds
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
