
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info } from "lucide-react";

export function CVFormatGuide() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Ideal CV Format Guide</h2>
        <p className="text-muted-foreground">
          Follow this structured format to create a CV that's optimized for automated processing and skill extraction.
        </p>
      </div>
      
      <Tabs defaultValue="structure" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="formatting">Formatting</TabsTrigger>
        </TabsList>
        
        <TabsContent value="structure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Sections</CardTitle>
              <CardDescription>
                Organize your CV with these clearly labeled sections in the following order
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Contact Information</h4>
                      <p className="text-sm text-muted-foreground">Name, email, phone, location, LinkedIn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Professional Summary</h4>
                      <p className="text-sm text-muted-foreground">Brief overview of your professional profile</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Skills</h4>
                      <p className="text-sm text-muted-foreground">Categorized technical, soft, and domain skills</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Work Experience</h4>
                      <p className="text-sm text-muted-foreground">Detailed work history with accomplishments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xs font-bold text-primary">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Education</h4>
                      <p className="text-sm text-muted-foreground">Academic qualifications and certifications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xs font-bold text-primary">6</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Additional Sections</h4>
                      <p className="text-sm text-muted-foreground">Projects, publications, languages, etc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-4 border rounded-md bg-muted/50">
            <div className="flex gap-2">
              <Info className="w-5 h-5 text-primary" />
              <div>
                <h4 className="font-medium">Why This Structure Matters</h4>
                <p className="text-sm text-muted-foreground">
                  This logical section order prioritizes your most relevant information for both human recruiters and automated CV processing systems, ensuring key skills and qualifications are immediately visible.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills Section Best Practices</CardTitle>
              <CardDescription>
                How to organize your skills for optimal extraction and matching
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2 p-3 rounded-md border bg-background">
                  <h4 className="font-medium text-green-600 flex items-center">
                    <Check className="w-4 h-4 mr-1" />
                    Recommended Format
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="font-medium">Technical Skills:</p>
                    <p>JavaScript, React, Node.js, TypeScript, Git, CI/CD, AWS</p>
                    
                    <p className="font-medium">Soft Skills:</p>
                    <p>Communication, Leadership, Problem-solving, Teamwork</p>
                    
                    <p className="font-medium">Domain Knowledge:</p>
                    <p>Fintech, E-commerce, Healthcare IT</p>
                  </div>
                </div>
                
                <div className="space-y-2 p-3 rounded-md border bg-background">
                  <h4 className="font-medium text-destructive flex items-center">
                    <span className="mr-1">×</span>
                    Avoid This Format
                  </h4>
                  <div className="text-sm space-y-2">
                    <p>Proficient in various programming languages and frameworks</p>
                    <p>Experienced with JavaScript and related technologies</p>
                    <p>Familiar with cloud platforms</p>
                    <p>Good communicator with leadership abilities</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium">Key Guidelines:</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Categorize skills into distinct groups (Technical, Soft, Domain, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>List skills as comma-separated keywords rather than in sentences</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Include skill proficiency levels when relevant (e.g., Advanced, Intermediate)</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Be specific with technical skills rather than using generic terms</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Work Experience Guidelines</CardTitle>
              <CardDescription>
                How to structure work experience for better skill extraction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Each Position Should Include:</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Company name, location, job title, and dates clearly labeled</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Bullet points describing responsibilities and achievements</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Specific technologies, tools, and methodologies used</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Quantifiable achievements with metrics when possible</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Action Verbs to Use:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Developed", "Implemented", "Designed", "Led",
                        "Managed", "Created", "Optimized", "Reduced",
                        "Increased", "Coordinated", "Analyzed", "Delivered"
                      ].map((verb) => (
                        <span key={verb} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                          {verb}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="formatting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Formatting Recommendations</CardTitle>
              <CardDescription>
                Format your CV to be both human-readable and machine-friendly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Document Structure</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use clear section headings (e.g., "Skills," "Experience," "Education")</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Maintain consistent formatting throughout the document</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use bullet points for lists rather than paragraphs</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Keep the document to 1-2 pages maximum</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Text Formatting</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use a standard, professional font (Arial, Calibri, Times New Roman)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Font size: 10-12pt for body text, 14-16pt for headings</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use bold for section headers and job titles</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Maintain consistent spacing between sections</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">File Format</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Save as PDF to ensure formatting is preserved</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Use a simple, descriptive filename (e.g., "FirstName_LastName_CV.pdf")</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ensure document is text-selectable (not a scanned image)</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Avoid using tables, text boxes, or complex layouts</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-4 border rounded-md bg-yellow-50">
            <div className="flex gap-2">
              <Info className="w-5 h-5 text-yellow-600" />
              <div>
                <h4 className="font-medium text-yellow-800">ATS Compatibility</h4>
                <p className="text-sm text-yellow-700">
                  Following these formatting guidelines ensures your CV is compatible with Applicant Tracking Systems (ATS) that many employers use to screen candidates. Clean, simple formatting with clearly labeled sections and standard fonts helps maximize your CV's readability by both software and human recruiters.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
