import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Play, Eye, Clock, Share2, MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function ClipsGallery() {
  const clips = [
    { title: "ACE de Sheriff!!", game: "Valorant", views: "12k", time: "2h atrás", duration: "0:45" },
    { title: "Que susto mds", game: "Outlast", views: "5.4k", time: "1d atrás", duration: "0:30" },
    { title: "Engraçado dms kkk", game: "Just Chatting", views: "22k", time: "3d atrás", duration: "1:20" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {clips.map((clip, i) => (
            <div key={i} className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all">
                <div className="aspect-video bg-black relative">
                    {/* Mock Thumbnail */}
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-700">
                        <Play size={48} className="fill-current opacity-20" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                        {clip.duration}
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                        <Play size={48} className="text-white fill-white drop-shadow-lg" />
                    </div>
                </div>
                <div className="p-3">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-white text-sm line-clamp-2 leading-tight hover:text-yellow-500 cursor-pointer">
                            {clip.title}
                        </h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1 -mr-2 text-zinc-400">
                            <MoreVertical size={14} />
                        </Button>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">{clip.game}</p>
                    <div className="flex items-center justify-between mt-3 text-xs text-zinc-400 font-medium">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 hover:text-white"><Eye size={12} /> {clip.views}</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {clip.time}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6 hover:text-yellow-500">
                            <Share2 size={14} />
                        </Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
}
