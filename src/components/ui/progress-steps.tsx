
import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  id: string;
  title: string;
  description?: string;
}

interface ProgressStepsProps {
  steps: Step[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
  orientation?: "horizontal" | "vertical";
  interactive?: boolean;
}

export function ProgressSteps({
  steps,
  currentStep,
  onStepClick,
  className,
  orientation = "horizontal",
  interactive = false,
}: ProgressStepsProps) {
  const isStepComplete = (stepIndex: number) => stepIndex < currentStep;
  const isStepCurrent = (stepIndex: number) => stepIndex === currentStep;

  return (
    <div 
      className={cn(
        "w-full",
        orientation === "vertical" ? "flex flex-col gap-4" : "flex items-center justify-between",
        className
      )}
    >
      {steps.map((step, index) => {
        const stepComplete = isStepComplete(index);
        const stepCurrent = isStepCurrent(index);
        
        return (
          <React.Fragment key={step.id}>
            <div 
              className={cn(
                "flex flex-col items-center",
                orientation === "horizontal" ? "flex-1" : "flex-row gap-4",
                interactive && "cursor-pointer"
              )}
              onClick={() => interactive && onStepClick && onStepClick(index)}
            >
              <div className="flex items-center justify-center">
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
                    stepComplete 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : stepCurrent 
                      ? "border-primary text-primary" 
                      : "border-muted-foreground/30 text-muted-foreground/50"
                  )}
                >
                  {stepComplete ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
              </div>
              <div 
                className={cn(
                  "mt-2 text-center",
                  orientation === "vertical" ? "ml-4 text-left" : "w-full"
                )}
              >
                <div 
                  className={cn(
                    "text-sm font-medium",
                    stepComplete || stepCurrent ? "text-foreground" : "text-muted-foreground/70"
                  )}
                >
                  {step.title}
                </div>
                {step.description && (
                  <div 
                    className={cn(
                      "text-xs",
                      stepComplete || stepCurrent ? "text-muted-foreground" : "text-muted-foreground/50"
                    )}
                  >
                    {step.description}
                  </div>
                )}
              </div>
            </div>
            
            {index < steps.length - 1 && orientation === "horizontal" && (
              <div 
                className={cn(
                  "w-full h-0.5 flex-1 mx-2 sm:mx-4",
                  stepComplete ? "bg-primary" : "bg-muted-foreground/20"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
