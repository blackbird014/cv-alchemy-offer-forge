
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PDFViewer } from "@/components/ui/pdf-viewer";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowRight, Download, FileText, AlertTriangle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TransformCVPageProps {
  uploadedFile: File | null;
  onTransform: () => void;
  onBack: () => void;
  isTransformed: boolean;
  isLoading: boolean;
}

const TransformCVPage: React.FC<TransformCVPageProps> = ({
  uploadedFile,
  onTransform,
  onBack,
  isTransformed,
  isLoading
}) => {
  // In a real app, we would use actual file URLs
  const originalFileUrl = uploadedFile ? URL.createObjectURL(uploadedFile) : "";
  const transformedFileUrl = originalFileUrl; // This would be different in a real app
  
  const handleDownload = () => {
    // In a real app, this would download the transformed CV
    alert("In a real application, this would download the transformed CV as a PDF document.");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Transform Your CV</h2>
        <p className="text-muted-foreground mt-2">
          Convert your CV to the ideal format for better skill extraction
        </p>
      </div>
      
      {!isTransformed ? (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Original CV</span>
              </CardTitle>
              <CardDescription>
                Your uploaded CV will be transformed to the ideal format
              </CardDescription>
            </CardHeader>
            <CardContent>
              {uploadedFile ? (
                <PDFViewer 
                  fileUrl={originalFileUrl} 
                  fileName={uploadedFile.name} 
                  className="h-[400px]"
                />
              ) : (
                <div className="text-center p-8 border rounded-md">
                  <p className="text-muted-foreground">No CV uploaded yet</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="text-center p-4">
            <Button 
              size="lg" 
              onClick={onTransform} 
              disabled={!uploadedFile || isLoading}
              className="gap-2"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Transforming CV...
                </>
              ) : (
                <>
                  Transform to Ideal Format
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
          
          <Alert>
            <AlertTriangle className="w-4 h-4" />
            <AlertTitle>About CV Transformation</AlertTitle>
            <AlertDescription>
              The transformation process reorganizes your CV content to match the recommended format
              while preserving all your original information. This optimizes your CV for both human
              recruiters and automated systems.
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        <div className="space-y-6">
          <Tabs defaultValue="comparison">
            <TabsList className="w-full">
              <TabsTrigger value="comparison">Side-by-Side Comparison</TabsTrigger>
              <TabsTrigger value="transformed">Transformed CV</TabsTrigger>
            </TabsList>
            
            <TabsContent value="comparison" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Original CV</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PDFViewer 
                      fileUrl={originalFileUrl} 
                      fileName={uploadedFile?.name || "original.pdf"} 
                      className="h-[500px]"
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Transformed CV</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PDFViewer 
                      fileUrl={transformedFileUrl} 
                      fileName="transformed_cv.pdf" 
                      className="h-[500px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="transformed" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span>Transformed CV</span>
                  </CardTitle>
                  <CardDescription>
                    Your CV has been restructured to match the ideal format
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PDFViewer 
                    fileUrl={transformedFileUrl} 
                    fileName="transformed_cv.pdf" 
                    className="h-[600px]"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={handleDownload}
            >
              <Download className="w-4 h-4" />
              Download Transformed CV
            </Button>
          </div>
        </div>
      )}
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        
        {isTransformed && (
          <Button variant="default" onClick={() => window.location.reload()}>
            Start New CV
          </Button>
        )}
      </div>
    </div>
  );
};

export default TransformCVPage;
