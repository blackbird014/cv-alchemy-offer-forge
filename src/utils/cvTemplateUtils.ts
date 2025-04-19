
import { jsPDF } from 'jspdf';

export const generateCVTemplatePDF = () => {
  const doc = new jsPDF();
  let yPos = 20;
  
  // Header
  doc.setFontSize(20);
  doc.text('Professional CV Template', 20, yPos);
  
  // Contact Information Section
  yPos += 20;
  doc.setFontSize(14);
  doc.text('Contact Information', 20, yPos);
  doc.setFontSize(12);
  yPos += 10;
  doc.text('[Your Full Name]', 25, yPos);
  yPos += 7;
  doc.text('[Your Email] | [Your Phone]', 25, yPos);
  yPos += 7;
  doc.text('[Your Location]', 25, yPos);
  yPos += 7;
  doc.text('[LinkedIn Profile]', 25, yPos);

  // Professional Summary
  yPos += 15;
  doc.setFontSize(14);
  doc.text('Professional Summary', 20, yPos);
  doc.setFontSize(12);
  yPos += 10;
  doc.text('[Brief overview of your professional profile and key strengths]', 25, yPos);

  // Skills Section
  yPos += 15;
  doc.setFontSize(14);
  doc.text('Skills', 20, yPos);
  doc.setFontSize(12);
  yPos += 10;
  doc.text('Technical Skills:', 25, yPos);
  yPos += 7;
  doc.text('[List your technical skills, separated by commas]', 30, yPos);
  yPos += 10;
  doc.text('Soft Skills:', 25, yPos);
  yPos += 7;
  doc.text('[List your soft skills, separated by commas]', 30, yPos);

  // Work Experience
  yPos += 15;
  doc.setFontSize(14);
  doc.text('Work Experience', 20, yPos);
  doc.setFontSize(12);
  yPos += 10;
  doc.text('[Job Title] - [Company Name]', 25, yPos);
  yPos += 7;
  doc.text('[Start Date] - [End Date]', 25, yPos);
  yPos += 7;
  doc.text('• [Key achievement or responsibility]', 30, yPos);
  yPos += 7;
  doc.text('• [Key achievement or responsibility]', 30, yPos);

  // Education
  yPos += 15;
  doc.setFontSize(14);
  doc.text('Education', 20, yPos);
  doc.setFontSize(12);
  yPos += 10;
  doc.text('[Degree] - [Institution]', 25, yPos);
  yPos += 7;
  doc.text('[Graduation Year]', 25, yPos);

  doc.save('cv-template.pdf');
};
