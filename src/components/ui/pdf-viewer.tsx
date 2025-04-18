
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerProps {
  fileUrl: string;
  fileName?: string;
  className?: string;
  onDownload?: () => void;
}

export function PDFViewer({ 
  fileUrl, 
  fileName = "document.pdf", 
  className,
  onDownload 
}: PDFViewerProps) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  
  const handleIframeLoad = () => {
    setLoading(false);
  };
  
  const handleIframeError = () => {
    setLoading(false);
    setError("Failed to load PDF document");
  };
  
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  return (
    <div className={cn("flex flex-col w-full h-full border rounded-md", className)}>
      <div className="flex items-center justify-between p-2 border-b bg-muted/30">
        <div className="text-sm font-medium truncate">{fileName}</div>
        <Button variant="ghost" size="sm" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-1" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Download</span>
        </Button>
      </div>
      
      <div className="relative flex-1 min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        )}
        
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-destructive">{error}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2"
                onClick={() => window.open(fileUrl, '_blank')}
              >
                Try opening in new tab
              </Button>
            </div>
          </div>
        ) : (
          <iframe
            src={fileUrl}
            className="w-full h-full"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  );
}
