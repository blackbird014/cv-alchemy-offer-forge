
import * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  theme?: "light" | "primary" | "secondary";
}

export function LoadingSpinner({
  size = "md",
  className,
  theme = "primary",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3",
    xl: "w-12 h-12 border-4",
  };

  const themeClasses = {
    light: "border-muted-foreground/30 border-t-background",
    primary: "border-muted-foreground/30 border-t-primary",
    secondary: "border-muted-foreground/30 border-t-secondary",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full",
        sizeClasses[size],
        themeClasses[theme],
        className
      )}
    />
  );
}
