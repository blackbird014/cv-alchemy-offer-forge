
import React from "react";
import { FileInput } from "@/components/ui/file-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { FileText, Upload } from "lucide-react";

interface UploadPageProps {
  onFileUpload: (file: File) => void;
  onContinue: () => void;
  uploadedFile: File | null;
  isLoading: boolean;
}

const UploadPage: React.FC<UploadPageProps> = ({
  onFileUpload,
  onContinue,
  uploadedFile,
  isLoading
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Upload Your CV</h2>
        <p className="text-muted-foreground mt-2">
          Upload your CV document to extract skills and generate a tailored job offer
        </p>
      </div>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              <span>CV Upload</span>
            </CardTitle>
            <CardDescription>
              Upload your CV in PDF or Word (DOCX) format. Maximum file size: 5MB.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FileInput
              onFileSelected={onFileUpload}
              acceptedFileTypes={[".pdf", ".docx", ".doc"]}
              maxSizeMB={5}
              label=""
              dropzoneText="Drag & drop your CV here or click to browse"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Accepted Formats</span>
            </CardTitle>
            <CardDescription>
              Ensure your CV is in one of the following formats for optimal processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-md p-4 text-center">
                <div className="mb-2 w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-medium">PDF</h3>
                <p className="text-xs text-muted-foreground mt-1">Portable Document Format</p>
              </div>
              
              <div className="border rounded-md p-4 text-center">
                <div className="mb-2 w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-medium">DOCX</h3>
                <p className="text-xs text-muted-foreground mt-1">Microsoft Word Document</p>
              </div>
              
              <div className="border rounded-md p-4 text-center">
                <div className="mb-2 w-12 h-12 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-sm font-medium">DOC</h3>
                <p className="text-xs text-muted-foreground mt-1">Microsoft Word Document (Legacy)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-end">
          <Button 
            onClick={onContinue} 
            disabled={!uploadedFile || isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Processing...
              </>
            ) : (
              "Extract Skills"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
