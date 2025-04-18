
import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillCategoryProps {
  title: string;
  skills: Tag[];
  description?: string;
}

function SkillCategory({ title, skills, description }: SkillCategoryProps) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill.id} variant="secondary" className="text-sm">
              {skill.text}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface SkillsDisplayProps {
  skills: Tag[];
  className?: string;
}

export function SkillsDisplay({ skills, className }: SkillsDisplayProps) {
  const categorizedSkills = React.useMemo(() => {
    const categories: Record<string, Tag[]> = {
      technical: [],
      soft: [],
      language: [],
      industry: [],
      other: []
    };
    
    skills.forEach(skill => {
      const category = skill.category || "other";
      if (categories[category]) {
        categories[category].push(skill);
      } else {
        categories.other.push(skill);
      }
    });
    
    return categories;
  }, [skills]);
  
  // Count non-empty categories
  const nonEmptyCategories = Object.values(categorizedSkills).filter(arr => arr.length > 0).length;
  
  return (
    <div className={className}>
      {nonEmptyCategories <= 1 ? (
        <div className="space-y-4">
          {Object.entries(categorizedSkills).map(([category, categorySkills]) => {
            if (categorySkills.length === 0) return null;
            
            const titles: Record<string, string> = {
              technical: "Technical Skills",
              soft: "Soft Skills",
              language: "Languages",
              industry: "Industry Knowledge",
              other: "Other Skills"
            };
            
            const descriptions: Record<string, string> = {
              technical: "Hard skills related to specific tools, technologies and methodologies",
              soft: "Interpersonal and character traits valuable in professional settings",
              language: "Communication and programming languages",
              industry: "Specialized knowledge in specific industries or domains",
              other: "Additional valuable skills"
            };
            
            return (
              <SkillCategory 
                key={category}
                title={titles[category] || category}
                skills={categorySkills}
                description={descriptions[category]}
              />
            );
          })}
        </div>
      ) : (
        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto">
            {Object.entries(categorizedSkills).map(([category, skills]) => {
              if (skills.length === 0) return null;
              
              const labels: Record<string, string> = {
                technical: "Technical",
                soft: "Soft Skills",
                language: "Languages",
                industry: "Industry",
                other: "Other"
              };
              
              return (
                <TabsTrigger key={category} value={category} className="whitespace-nowrap">
                  {labels[category] || category} ({skills.length})
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {Object.entries(categorizedSkills).map(([category, categorySkills]) => {
            if (categorySkills.length === 0) return null;
            
            const titles: Record<string, string> = {
              technical: "Technical Skills",
              soft: "Soft Skills",
              language: "Languages",
              industry: "Industry Knowledge",
              other: "Other Skills"
            };
            
            const descriptions: Record<string, string> = {
              technical: "Hard skills related to specific tools, technologies and methodologies",
              soft: "Interpersonal and character traits valuable in professional settings",
              language: "Communication and programming languages",
              industry: "Specialized knowledge in specific industries or domains",
              other: "Additional valuable skills"
            };
            
            return (
              <TabsContent key={category} value={category} className="mt-4">
                <SkillCategory 
                  title={titles[category] || category}
                  skills={categorySkills}
                  description={descriptions[category]}
                />
              </TabsContent>
            );
          })}
        </Tabs>
      )}
    </div>
  );
}
