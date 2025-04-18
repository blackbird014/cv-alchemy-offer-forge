
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { SkillsDisplay } from "@/components/SkillsDisplay";
import { Tag, TagInput } from "@/components/ui/tag-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Zap } from "lucide-react";

interface SkillsExtractionPageProps {
  skills: Tag[];
  onSkillsChange: (skills: Tag[]) => void;
  onContinue: () => void;
  onBack: () => void;
  isLoading: boolean;
}

const SkillsExtractionPage: React.FC<SkillsExtractionPageProps> = ({
  skills,
  onSkillsChange,
  onContinue,
  onBack,
  isLoading
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Extracted Skills</h2>
        <p className="text-muted-foreground mt-2">
          Review, modify, or add to the skills extracted from your CV
        </p>
      </div>
      
      <Tabs defaultValue="view">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="view" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Review Skills</span>
          </TabsTrigger>
          <TabsTrigger value="edit" className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            <span>Edit Skills</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="view">
          <Card>
            <CardHeader>
              <CardTitle>Extracted Skills</CardTitle>
              <CardDescription>
                These skills were automatically extracted from your CV
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SkillsDisplay skills={skills} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="edit">
          <Card>
            <CardHeader>
              <CardTitle>Edit Skills</CardTitle>
              <CardDescription>
                Add, remove, or modify the extracted skills below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Technical Skills</h3>
                <TagInput
                  tags={skills.filter(skill => skill.category === "technical")}
                  onTagsChange={(tags) => {
                    const updatedTags = tags.map(tag => ({ ...tag, category: "technical" }));
                    const otherTags = skills.filter(skill => skill.category !== "technical");
                    onSkillsChange([...otherTags, ...updatedTags]);
                  }}
                  placeholder="Add technical skills..."
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Soft Skills</h3>
                <TagInput
                  tags={skills.filter(skill => skill.category === "soft")}
                  onTagsChange={(tags) => {
                    const updatedTags = tags.map(tag => ({ ...tag, category: "soft" }));
                    const otherTags = skills.filter(skill => skill.category !== "soft");
                    onSkillsChange([...otherTags, ...updatedTags]);
                  }}
                  placeholder="Add soft skills..."
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Languages</h3>
                <TagInput
                  tags={skills.filter(skill => skill.category === "language")}
                  onTagsChange={(tags) => {
                    const updatedTags = tags.map(tag => ({ ...tag, category: "language" }));
                    const otherTags = skills.filter(skill => skill.category !== "language");
                    onSkillsChange([...otherTags, ...updatedTags]);
                  }}
                  placeholder="Add languages..."
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Industry Knowledge</h3>
                <TagInput
                  tags={skills.filter(skill => skill.category === "industry")}
                  onTagsChange={(tags) => {
                    const updatedTags = tags.map(tag => ({ ...tag, category: "industry" }));
                    const otherTags = skills.filter(skill => skill.category !== "industry");
                    onSkillsChange([...otherTags, ...updatedTags]);
                  }}
                  placeholder="Add industry knowledge..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        
        <Button onClick={onContinue} disabled={skills.length === 0 || isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Generating Job Offer...
            </>
          ) : (
            "Generate Job Offer"
          )}
        </Button>
      </div>
    </div>
  );
};

export default SkillsExtractionPage;
