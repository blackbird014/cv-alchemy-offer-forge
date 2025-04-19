import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobOfferTemplate } from "@/components/JobOfferTemplate";
import { Tag } from "@/components/ui/tag-input";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockJobOfferData } from "@/lib/mock-data";
import { Download, Edit, FileText } from "lucide-react";
import { generateJobOfferPDF } from "@/utils/pdfUtils";
import { toast } from "sonner";

interface JobOfferPageProps {
  skills: Tag[];
  onContinue: () => void;
  onBack: () => void;
  isGenerated: boolean;
}

const JobOfferPage: React.FC<JobOfferPageProps> = ({
  skills,
  onContinue,
  onBack,
  isGenerated
}) => {
  const [jobTitle, setJobTitle] = useState(mockJobOfferData.jobTitle);
  const [companyName, setCompanyName] = useState(mockJobOfferData.companyName);
  const [location, setLocation] = useState(mockJobOfferData.location);
  const [jobDescription, setJobDescription] = useState(mockJobOfferData.jobDescription);
  const [salary, setSalary] = useState(mockJobOfferData.salary);
  const [responsibilities, setResponsibilities] = useState(mockJobOfferData.responsibilities);
  const [benefits, setBenefits] = useState(mockJobOfferData.benefits);
  const [applicationDeadline, setApplicationDeadline] = useState(mockJobOfferData.applicationDeadline);
  const [activeTab, setActiveTab] = useState("preview");

  const handleDownload = () => {
    try {
      generateJobOfferPDF(
        jobTitle,
        companyName,
        location,
        jobDescription,
        responsibilities,
        mockJobOfferData.requirements,
        benefits,
        salary,
        applicationDeadline
      );
      toast.success("Job offer PDF downloaded successfully");
    } catch (error) {
      toast.error("Failed to generate PDF");
      console.error("PDF generation error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Tailored Job Offer</h2>
        <p className="text-muted-foreground mt-2">
          A custom job offer generated based on the extracted skills
        </p>
      </div>

      <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            <span>Preview</span>
          </TabsTrigger>
          <TabsTrigger value="customize" className="flex items-center gap-2">
            <Edit className="w-4 h-4" />
            <span>Customize</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview">
          <div className="space-y-6">
            <JobOfferTemplate 
              jobTitle={jobTitle}
              companyName={companyName}
              location={location}
              jobDescription={jobDescription}
              responsibilities={responsibilities}
              requirements={mockJobOfferData.requirements}
              benefits={benefits}
              salary={salary}
              applicationDeadline={applicationDeadline}
              onDownload={handleDownload}
            />
            
            <div className="flex justify-center">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                Download Job Offer PDF
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="customize">
          <Card>
            <CardHeader>
              <CardTitle>Customize Job Offer</CardTitle>
              <CardDescription>
                Adjust the job offer details to better match your requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input 
                    id="jobTitle" 
                    value={jobTitle} 
                    onChange={e => setJobTitle(e.target.value)} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input 
                    id="companyName" 
                    value={companyName} 
                    onChange={e => setCompanyName(e.target.value)} 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={location} 
                    onChange={e => setLocation(e.target.value)} 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary">Salary</Label>
                  <Input 
                    id="salary" 
                    value={salary} 
                    onChange={e => setSalary(e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea 
                  id="jobDescription" 
                  value={jobDescription}
                  onChange={e => setJobDescription(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="applicationDeadline">Application Deadline</Label>
                <Input 
                  id="applicationDeadline" 
                  value={applicationDeadline} 
                  onChange={e => setApplicationDeadline(e.target.value)}
                  type="date"
                />
              </div>
              
              <div className="flex justify-end">
                <Button onClick={() => setActiveTab("preview")}>
                  Preview Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        
        <Button onClick={onContinue}>
          Continue to Ideal CV Format
        </Button>
      </div>
    </div>
  );
};

export default JobOfferPage;
