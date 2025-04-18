
import { Tag } from "@/components/ui/tag-input";

// Mock data for skills extraction
export const mockExtractedSkills: Tag[] = [
  // Technical skills
  { id: "1", text: "JavaScript", category: "technical" },
  { id: "2", text: "React", category: "technical" },
  { id: "3", text: "Node.js", category: "technical" },
  { id: "4", text: "TypeScript", category: "technical" },
  { id: "5", text: "REST API Development", category: "technical" },
  { id: "6", text: "Git", category: "technical" },
  { id: "7", text: "AWS", category: "technical" },
  { id: "8", text: "Docker", category: "technical" },
  { id: "9", text: "MongoDB", category: "technical" },
  { id: "10", text: "SQL", category: "technical" },
  
  // Soft skills
  { id: "11", text: "Team Leadership", category: "soft" },
  { id: "12", text: "Project Management", category: "soft" },
  { id: "13", text: "Problem Solving", category: "soft" },
  { id: "14", text: "Communication", category: "soft" },
  { id: "15", text: "Mentoring", category: "soft" },
  
  // Language skills
  { id: "16", text: "English (Fluent)", category: "language" },
  { id: "17", text: "Spanish (Intermediate)", category: "language" },
  
  // Industry knowledge
  { id: "18", text: "Fintech", category: "industry" },
  { id: "19", text: "E-commerce", category: "industry" },
  { id: "20", text: "Agile Development", category: "industry" },
];

// Mock data for job offer generation
export const mockJobOfferData = {
  jobTitle: "Senior Full Stack Developer",
  companyName: "TechSolutions Inc.",
  location: "San Francisco, CA (Remote Available)",
  jobDescription: "We are seeking an experienced Full Stack Developer to join our growing team. The ideal candidate will have strong experience with JavaScript, React, and Node.js, and a passion for building scalable web applications. As a Senior Developer, you will be responsible for leading development efforts, mentoring junior developers, and ensuring code quality across our projects.",
  responsibilities: [
    "Design, develop, and maintain web applications using React and Node.js",
    "Lead technical projects and collaborate with cross-functional teams",
    "Implement best practices for code quality, testing, and deployment",
    "Review code from other developers and provide constructive feedback",
    "Troubleshoot and resolve complex technical issues",
    "Mentor and guide junior developers in their technical growth",
    "Participate in system architecture decisions and technical planning"
  ],
  requirements: [
    { id: "r1", text: "JavaScript", category: "required" },
    { id: "r2", text: "React", category: "required" },
    { id: "r3", text: "Node.js", category: "required" },
    { id: "r4", text: "TypeScript", category: "required" },
    { id: "r5", text: "REST API Development", category: "required" },
    { id: "r6", text: "Git", category: "required" },
    { id: "r7", text: "AWS", category: "preferred" },
    { id: "r8", text: "Docker", category: "preferred" },
    { id: "r9", text: "MongoDB", category: "preferred" },
    { id: "r10", text: "SQL", category: "preferred" },
    { id: "r11", text: "Team Leadership", category: "required" },
    { id: "r12", text: "Problem Solving", category: "required" }
  ],
  benefits: [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "Flexible work schedule and remote options",
    "Professional development budget",
    "Unlimited PTO policy",
    "401(k) with company match",
    "Modern equipment and home office stipend",
    "Regular team events and retreats"
  ],
  salary: "$120,000 - $150,000 annually",
  applicationDeadline: "Open until filled"
};

// Mock data for ideal CV format
export const idealCVStructure = {
  sections: [
    {
      title: "Contact Information",
      required: true,
      description: "Personal details and how to reach you",
      fields: ["Full Name", "Email", "Phone", "Location", "LinkedIn/Portfolio URL"]
    },
    {
      title: "Professional Summary",
      required: true,
      description: "Brief overview of your professional profile",
      example: "Senior software developer with 7+ years of experience in full-stack web development, specializing in React, Node.js, and cloud solutions. Strong track record of delivering scalable applications in fintech and e-commerce sectors."
    },
    {
      title: "Skills",
      required: true,
      description: "Technical, soft, and domain-specific skills",
      subsections: ["Technical Skills", "Soft Skills", "Languages", "Domain Knowledge"]
    },
    {
      title: "Work Experience",
      required: true,
      description: "Professional history in reverse chronological order",
      format: "{Job Title} | {Company} | {Location} | {Date Range}\n• Achievement with measurable results\n• Technologies and methodologies used\n• Responsibilities and contributions"
    },
    {
      title: "Education",
      required: true,
      description: "Academic qualifications and certifications",
      format: "{Degree/Certification} | {Institution} | {Date}\n• Relevant coursework, honors, or projects"
    },
    {
      title: "Projects",
      required: false,
      description: "Relevant professional or personal projects",
      format: "{Project Name} | {Technologies Used} | {Date}\n• Brief description\n• Your role and contributions\n• Outcomes and achievements"
    },
    {
      title: "Publications & Presentations",
      required: false,
      description: "Published articles, research, or speaking engagements",
      format: "{Title} | {Publisher/Event} | {Date}\n• Brief description or link"
    }
  ]
};
