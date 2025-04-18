
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProgressSteps } from "@/components/ui/progress-steps";
import UploadPage from "./steps/UploadPage";
import SkillsExtractionPage from "./steps/SkillsExtractionPage";
import JobOfferPage from "./steps/JobOfferPage";
import IdealCVPage from "./steps/IdealCVPage";
import TransformCVPage from "./steps/TransformCVPage";
import { Tag } from "@/components/ui/tag-input";
import { mockExtractedSkills } from "@/lib/mock-data";

const steps = [
  { id: "upload", title: "Upload CV", description: "Upload your CV document" },
  { id: "skills", title: "Skills Extraction", description: "Review extracted skills" },
  { id: "job-offer", title: "Job Offer", description: "Generate tailored job offer" },
  { id: "ideal-cv", title: "Ideal CV Format", description: "View recommended CV format" },
  { id: "transform", title: "Transform CV", description: "Convert to ideal format" }
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [extractedSkills, setExtractedSkills] = useState<Tag[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [jobOfferGenerated, setJobOfferGenerated] = useState(false);
  const [transformedCV, setTransformedCV] = useState(false);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const handleExtractSkills = () => {
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setExtractedSkills(mockExtractedSkills);
      setIsLoading(false);
      setCurrentStep(1);
    }, 2000);
  };

  const handleGenerateJobOffer = () => {
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setJobOfferGenerated(true);
      setIsLoading(false);
      setCurrentStep(2);
    }, 2000);
  };

  const handleTransformCV = () => {
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setTransformedCV(true);
      setIsLoading(false);
      setCurrentStep(4);
    }, 2000);
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepClick = (stepIndex: number) => {
    // Only allow going to completed steps or the next available step
    if (stepIndex <= currentStep + 1) {
      setCurrentStep(stepIndex);
    }
  };

  // Determine which steps are enabled
  const isStepEnabled = (stepIndex: number) => {
    if (stepIndex === 0) return true; // Upload always enabled
    if (stepIndex === 1) return !!uploadedFile; // Skills needs upload
    if (stepIndex === 2) return extractedSkills.length > 0; // Job offer needs skills
    if (stepIndex === 3) return true; // Ideal CV always accessible
    if (stepIndex === 4) return !!uploadedFile; // Transform needs upload
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      <header className="py-6 px-4 md:px-6 bg-white border-b">
        <div className="container max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[#9b87f5]">CV Alchemy</h1>
          <p className="text-muted-foreground">Transform CVs into tailored job offers</p>
        </div>
      </header>

      <main className="container max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="mb-10">
          <ProgressSteps 
            steps={steps} 
            currentStep={currentStep} 
            onStepClick={handleStepClick}
            interactive={true}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm min-h-[500px]">
          {currentStep === 0 && (
            <UploadPage 
              onFileUpload={handleFileUpload} 
              onContinue={handleExtractSkills}
              uploadedFile={uploadedFile}
              isLoading={isLoading}
            />
          )}
          
          {currentStep === 1 && (
            <SkillsExtractionPage 
              skills={extractedSkills}
              onSkillsChange={setExtractedSkills}
              onContinue={handleGenerateJobOffer}
              onBack={handlePrevStep}
              isLoading={isLoading}
            />
          )}
          
          {currentStep === 2 && (
            <JobOfferPage 
              skills={extractedSkills}
              onContinue={handleNextStep}
              onBack={handlePrevStep}
              isGenerated={jobOfferGenerated}
            />
          )}
          
          {currentStep === 3 && (
            <IdealCVPage 
              onContinue={handleNextStep}
              onBack={handlePrevStep}
            />
          )}
          
          {currentStep === 4 && (
            <TransformCVPage 
              uploadedFile={uploadedFile}
              onTransform={handleTransformCV}
              onBack={handlePrevStep}
              isTransformed={transformedCV}
              isLoading={isLoading}
            />
          )}
        </div>
      </main>

      <footer className="bg-white border-t py-6 px-4 md:px-6 mt-auto">
        <div className="container max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 CV Alchemy - Offer Forge. All rights reserved.</p>
          <p className="mt-1">Transform CVs into tailored job offers with ease.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
