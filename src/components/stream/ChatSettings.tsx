import React from 'react';
import { Type, Clock, Shield, Settings2 } from 'lucide-react';
import {
  Popover, PopoverContent, PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function ChatSettings() {
  const [timestamps, setTimestamps] = React.useState(false);
  const [badges, setBadges] = React.useState(true);
  const [fontSize, setFontSize] = React.useState([14]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-white">
           <Settings2 size={16} /> {/* Note: Need to import Settings2 or pass icon */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-black/90 border-white/10 w-64 p-4">
         <h4 className="text-sm font-black italic uppercase text-white mb-4">Aparência do Chat</h4>

         <div className="space-y-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <Clock size={14} className="text-slate-500" />
                  <Label className="text-xs font-bold text-slate-300">Timestamps</Label>
               </div>
               <Switch checked={timestamps} onCheckedChange={setTimestamps} className="scale-75" />
            </div>

            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <Shield size={14} className="text-slate-500" />
                  <Label className="text-xs font-bold text-slate-300">Badges</Label>
               </div>
               <Switch checked={badges} onCheckedChange={setBadges} className="scale-75" />
            </div>

            <div className="space-y-2">
               <div className="flex items-center gap-2">
                  <Type size={14} className="text-slate-500" />
                  <Label className="text-xs font-bold text-slate-300">Tamanho da Fonte ({fontSize}px)</Label>
               </div>
               <Slider value={fontSize} onValueChange={setFontSize} min={10} max={20} step={1} className="py-2" />
            </div>
         </div>
      </PopoverContent>
    </Popover>
  );
}
