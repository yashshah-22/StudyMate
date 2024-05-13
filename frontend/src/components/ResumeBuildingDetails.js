import React from 'react';
import './DomainDetails.css';
import html2pdf from 'html2pdf.js';
import resumeImage from "../images/resume.png";
import resumebuild from "../images/resumebuild.jpeg";
import res from "../images/res.jpeg";
import sampleResume1 from "../images/sampleresume1.png";
import sampleResume2 from "../images/sampleresume3.jpeg";
import sampleResume3 from "../images/sampleresume2.jpeg";
import * as htmlToImage from 'html-to-image';

const ResumeBuildingDetails = () => {
    const handleDownload = (resumeUrl, fileName) => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
      const handleHtmlToImageDownload = async (resumeId, fileName) => {
        const node = document.getElementById(resumeId);
        try {
          const blob = await htmlToImage.toBlob(node);
          const url = URL.createObjectURL(blob);
          handleDownload(url, `${fileName}.png`);
        } catch (error) {
          console.error('Error converting to image:', error);
        }
      };

  return (
    <div className="domain-details">
      <div className="content">
        <h2 style={{ textAlign: "center", textDecoration: "underline", fontWeight: "bold" }}>Resume Building for Placements</h2>
        <p>
          Your resume is a crucial tool for securing placements. Enhance your resume-building skills to craft compelling documents that showcase your achievements and stand out to potential employers.
        </p>
      </div>
      <img src={res} style={{ height: '500px', marginLeft: "150px", width: "75%" }} alt="Resume Building for Placements" />
      <hr />

      <div className="section">
        <div className="content">
          <h3>Getting Started:</h3>
          <p>
            Building an effective resume involves understanding the key components that make it stand out. Start with a professional summary, highlight relevant skills, and showcase your academic and extracurricular achievements.
            Embarking on resume building involves showcasing your academic and extracurricular achievements, honing key skills, and crafting a compelling summary of your professional journey. Begin by understanding the components of an effective resume, including personal details, educational background, work experience, and relevant skills. Tailor your resume for each job application, emphasizing accomplishments and utilizing action verbs. Explore online platforms offering resume templates for free, such as Canva, Resumemaker.online, Resume.com, Zety, and Novorésumé. Incorporate impactful language and quantifiable achievements to create a standout document that reflects your potential and captures the attention of potential employers.
          </p>
        </div>
        <img src={resumeImage} alt="Getting Started" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Resume Essentials:</h3>
          <p>
            Explore essential elements of a resume, including proper formatting, the use of action verbs, and tailoring your resume for specific job applications. Understand how to effectively present your experience and qualifications.
            Resume essentials encompass key components vital for a compelling document. Start with a concise yet impactful summary highlighting your professional goals. Clearly present your education, emphasizing degrees and relevant coursework. Highlight practical experience with detailed descriptions, focusing on accomplishments. Showcase technical and soft skills crucial for the targeted role. Utilize proper formatting, maintain clarity, and incorporate action verbs for dynamic language. Tailor your resume for each job, emphasizing skills and experiences aligned with the specific role. Include quantifiable achievements and use keywords relevant to the industry. Keep it concise, ideally fitting on one page, ensuring readability and making a memorable impression on recruiters.
          </p>
        </div>
        <img src={resumebuild} alt="Resume Essentials" className="section-image-small" />
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Importance of Resume:</h3>
          <p>
            A well-crafted resume is your first introduction to potential employers. It serves as a snapshot of your skills, experiences, and accomplishments. A compelling resume can significantly increase your chances of securing interviews and landing your desired job.
            A resume is a crucial tool in the professional realm, serving as a concise representation of an individual's skills, experiences, and qualifications. It acts as a first impression for employers, showcasing one's suitability for a specific role. A well-crafted resume provides recruiters with essential information, allowing them to assess a candidate's potential quickly. It serves as a marketing document, emphasizing achievements and capabilities, helping candidates stand out in a competitive job market. Resumes are gateways to job opportunities, influencing hiring decisions and facilitating the initial screening process. In essence, a compelling resume is paramount for securing interviews and advancing in one's career.
          </p>
        </div>
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Tips for Building a Resume:</h3>
          <ul>
            <li>Customize your resume for each job application to highlight relevant skills and experiences.</li>
            <li>Use a clean and professional format with legible fonts and proper spacing.</li>
            <li>Showcase quantifiable achievements and results to demonstrate your impact.</li>
            <li>Include keywords from the job description to pass through applicant tracking systems (ATS).</li>
            <li>Keep your resume concise and focused, aiming for a one-page document for entry-level positions.</li>
            <li>Proofread your resume for grammatical errors and consistency.</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Must Include in a Technical Resume:</h3>
          <ul>
            <li>Contact Information: Include your name, phone number, email, and LinkedIn profile.</li>
            <li>Summary/Objective: Provide a brief overview of your career goals and technical expertise.</li>
            <li>Technical Skills: List relevant programming languages, frameworks, tools, and technologies.</li>
            <li>Education: Mention your academic qualifications, degrees, and institutions attended.</li>
            <li>Work Experience: Detail your professional experience, emphasizing achievements and technical contributions.</li>
            <li>Projects: Highlight key projects, specifying your role, technologies used, and outcomes.</li>
            <li>Certifications: Showcase relevant certifications and training.</li>
            <li>Awards/Honors: Include any technical awards or recognitions received.</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="section">
        <div className="content">
          <h3>Avoid Including:</h3>
          <ul>
            <li>Personal Information: Omit unnecessary personal details.</li>
            <li>Irrelevant Skills: Exclude skills not pertinent to the job.</li>
            <li>Long Paragraphs: Keep content concise and use bullet points.</li>
            <li>Generic Phrases: Use specific examples and avoid clichés.</li>
            <li>Graphics/Photos: Generally, avoid adding photos or graphics.</li>
            <li>Unrelated Hobbies: Only mention hobbies relevant to the job.</li>
            <li>Objective Statements: Consider omitting if your experience speaks for itself.</li>
            <li>References: Reserve space; state "Available upon request."</li>
            <li>Tailor your resume for each application by aligning it with the job requirements.</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className="section-videos">
        <h4 style={{ marginBottom: '30px', textAlign: "center" }}>Resume Building Tips and Examples</h4>

        {/* Video 1 */}
        <div className="video-item" style={{ marginBottom: '20px', marginLeft: '300px' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CkHx95MzUOY"
            title="Resume Building Tips"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="video-item" style={{ marginBottom: '20px', marginLeft: '300px' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/x7OSb4lKQbM"
            title="Do's and dont's for Resume Building"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <hr />

      <div className="section">
        <div className="content">
          <h3>Best Websites for Creating Resumes for Freshers:</h3>
          <p>
            There are several online platforms that offer free resume-building services for freshers. Consider using the following websites to create a professional and impactful resume:
          </p>
          <ul>
            <li><a href="https://www.overleaf.com/gallery/tagged/cv" target="_blank" rel="noopener noreferrer">Overleaf - Resume Maker</a></li>
            <li><a href="https://www.canva.com/create/resumes/" target="_blank" rel="noopener noreferrer">Canva - Resume Maker</a></li>
            <li><a href="https://www.resumemaker.online/" target="_blank" rel="noopener noreferrer">Resumemaker.online</a></li>
            <li><a href="https://www.resume.com/" target="_blank" rel="noopener noreferrer">Resume.com</a></li>
            <li><a href="https://www.zety.com/" target="_blank" rel="noopener noreferrer">Zety - Resume Builder</a></li>
            <li><a href="https://novoresume.com/" target="_blank" rel="noopener noreferrer">Novorésumé</a></li>
          </ul>
          <p>
            These platforms provide user-friendly interfaces, customizable templates, and guidance to help you create a standout resume.
          </p>
        </div>
      </div>

      <hr />

      {/* Sample Resumes Section */}
      <div className="section" style={{height:"500px"}}>
  <div className="content" id="resumeContent">
    <h3>Sample Resumes:</h3>
    <p>Explore these sample resumes to get inspiration:</p>

    {/* Sample Resumes */}
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <img src={sampleResume1} alt="sample resume 1" style={{ width: "300px", height: "400px" }} />
      <img src={sampleResume2} alt="sample resume 2" style={{ width: "300px", height: "400px" }} />
      <img src={sampleResume3} alt="sample resume 3" style={{ width: "300px", height: "400px" }} />
    </div>
  </div>
  </div>
    </div>
  );
};

export default ResumeBuildingDetails;
