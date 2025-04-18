
import React from "react";
import { Button } from "@/components/ui/button";
import { CVFormatGuide } from "@/components/CVFormatGuide";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileDown, FileText } from "lucide-react";

interface IdealCVPageProps {
  onContinue: () => void;
  onBack: () => void;
}

const IdealCVPage: React.FC<IdealCVPageProps> = ({
  onContinue,
  onBack
}) => {
  const handleDownloadTemplate = () => {
    // In a real app, this would download a template CV
    alert("In a real application, this would download a template CV document.");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Ideal CV Format</h2>
        <p className="text-muted-foreground mt-2">
          Recommended CV format optimized for skills extraction and processing
        </p>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Optimized CV Format Guide</span>
            </CardTitle>
            <CardDescription>
              Follow these guidelines to create a CV that maximizes skill extraction accuracy
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CVFormatGuide />
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Button variant="outline" onClick={handleDownloadTemplate} className="gap-2">
            <FileDown className="w-4 h-4" />
            Download CV Template
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        
        <Button onClick={onContinue}>
          Continue to CV Transformation
        </Button>
      </div>
    </div>
  );
};

export default IdealCVPage;
