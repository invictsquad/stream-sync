import React from 'react';
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-secondary/50", className)}
      {...props}
    />
  );
}

export function StreamCardSkeleton() {
  return (
    <div className="space-y-3">
       <Skeleton className="aspect-video w-full rounded-2xl" />
       <div className="flex gap-3">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <div className="space-y-2 flex-1">
             <Skeleton className="h-4 w-3/4" />
             <Skeleton className="h-3 w-1/2" />
          </div>
       </div>
    </div>
  );
}
