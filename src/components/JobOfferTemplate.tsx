
import * as React from "react";
import { Tag } from "@/components/ui/tag-input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobOfferTemplateProps {
  jobTitle: string;
  companyName: string;
  location: string;
  jobDescription: string;
  responsibilities: string[];
  requirements: Tag[];
  benefits: string[];
  salary?: string;
  applicationDeadline?: string;
  className?: string;
  onDownload?: () => void;
}

export function JobOfferTemplate({
  jobTitle,
  companyName,
  location,
  jobDescription,
  responsibilities,
  requirements,
  benefits,
  salary,
  applicationDeadline,
  className,
  onDownload
}: JobOfferTemplateProps) {
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    }
  };
  
  return (
    <div className={cn("relative w-full p-6 bg-white rounded-lg shadow-sm", className)}>
      <div className="absolute top-4 right-4">
        <Button size="sm" variant="outline" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">{jobTitle}</h1>
        <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
          <span>{companyName}</span>
          <span>•</span>
          <span>{location}</span>
          {salary && (
            <>
              <span>•</span>
              <span>{salary}</span>
            </>
          )}
        </div>
      </div>
      
      <Separator className="my-6" />
      
      <div className="space-y-6">
        <section>
          <h2 className="mb-3 text-lg font-semibold">About the Position</h2>
          <p className="text-sm text-muted-foreground">{jobDescription}</p>
        </section>
        
        <section>
          <h2 className="mb-3 text-lg font-semibold">Key Responsibilities</h2>
          <ul className="space-y-2">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex text-sm">
                <span className="mr-2 text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        
        <section>
          <h2 className="mb-3 text-lg font-semibold">Requirements</h2>
          <div className="flex flex-wrap gap-2">
            {requirements.map((req) => (
              <span
                key={req.id}
                className={cn(
                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                  req.category === "required" 
                    ? "bg-primary/10 text-primary border border-primary/20" 
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                {req.text}
              </span>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="mb-3 text-lg font-semibold">Benefits</h2>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {benefits.map((item, index) => (
              <li key={index} className="flex text-sm">
                <span className="mr-2 text-primary">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        
        {applicationDeadline && (
          <section className="p-4 rounded-md bg-muted">
            <p className="text-sm font-medium">
              Application Deadline: <span className="font-normal">{applicationDeadline}</span>
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
