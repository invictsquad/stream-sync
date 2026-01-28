import React from 'react';
import { Gem } from 'lucide-react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  withText?: boolean;
  textSize?: string;
}

export const BrandLogo = ({ size = 24, className = "", withText = true, textSize = "text-2xl" }: BrandLogoProps) => {
  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      <div className="bg-primary p-2 rounded-2xl group-hover:scale-110 transition-transform gold-glow shadow-glow-sm flex items-center justify-center">
        <Gem size={size} className="text-black" fill="black" />
      </div>
      {withText && (
        <span className={`font-black ${textSize} tracking-tighter uppercase italic text-white leading-none`}>
          Clutch <span className="gradient-text">Live</span>
        </span>
      )}
    </div>
  );
};