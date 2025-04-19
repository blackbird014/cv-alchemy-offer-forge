
import { jsPDF } from 'jspdf';

export const generateJobOfferPDF = (
  jobTitle: string,
  companyName: string,
  location: string,
  jobDescription: string,
  responsibilities: string[],
  requirements: { text: string }[],
  benefits: string[],
  salary?: string,
  applicationDeadline?: string,
) => {
  const doc = new jsPDF();
  let yPos = 20;
  
  // Title and header
  doc.setFontSize(20);
  doc.text(jobTitle, 20, yPos);
  
  // Company info
  doc.setFontSize(12);
  yPos += 10;
  doc.text(`${companyName} • ${location}${salary ? ` • ${salary}` : ''}`, 20, yPos);
  
  // Job Description
  yPos += 15;
  doc.setFontSize(14);
  doc.text('About the Position', 20, yPos);
  doc.setFontSize(12);
  yPos += 10;
  const descriptionLines = doc.splitTextToSize(jobDescription, 170);
  doc.text(descriptionLines, 20, yPos);
  
  // Responsibilities
  yPos += descriptionLines.length * 7 + 10;
  doc.setFontSize(14);
  doc.text('Key Responsibilities', 20, yPos);
  doc.setFontSize(12);
  responsibilities.forEach(resp => {
    yPos += 7;
    doc.text(`• ${resp}`, 25, yPos);
  });
  
  // Requirements
  yPos += 15;
  doc.setFontSize(14);
  doc.text('Requirements', 20, yPos);
  doc.setFontSize(12);
  requirements.forEach(req => {
    yPos += 7;
    doc.text(`• ${req.text}`, 25, yPos);
  });
  
  // Benefits
  yPos += 15;
  doc.setFontSize(14);
  doc.text('Benefits', 20, yPos);
  doc.setFontSize(12);
  benefits.forEach(benefit => {
    yPos += 7;
    doc.text(`• ${benefit}`, 25, yPos);
  });
  
  // Application Deadline
  if (applicationDeadline) {
    yPos += 15;
    doc.setFontSize(12);
    doc.text(`Application Deadline: ${applicationDeadline}`, 20, yPos);
  }
  
  // Save the PDF
  doc.save('job-offer.pdf');
};
