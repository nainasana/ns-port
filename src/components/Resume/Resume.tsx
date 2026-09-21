import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { CV_URL } from "../../utils/constants";
import ResumeContent from "./ResumeContent";

const Resume = () => {
 

  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV_URL} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeContent
              title="Software Engineer I - ( Phigital Care )"
              date="September 2025 - Present"
              isProject={true}
              content={[
                {
                  projectName: "Trilogy SmartNotes Platform",
                  desc: [
                    "Owned full-stack engineering across company projects, taking responsibility for architecture, backend services, databases, integrations, testing, debugging, and production delivery using Python, FastAPI, TypeScript, Next.js, React, REST APIs, MSSQL (SQL Server), PostgreSQL, Azure Cosmos DB, Redis, Docker, and Azure",
                    "Engineered Trilogy SmartNotes, an AI-assisted clinical documentation platform for behavioral health clinicians, implementing Entra ID (Azure AD)/MSAL SSO with OAuth token refresh, AI-powered workflows, analytics, activity tracking, and hybrid RSA-OAEP + AES-256-GCM payload encryption, while maintaining ~2.5s average AI response times in production",
                    "Built AI-assisted development and automation workflows integrating Jira, MCP, AI orchestration, automated PR generation and review, CI/CD, and deployment, enabling structured feature development, bug fixes, and code-quality checks",
                    "Recognized with a Certificate of Appreciation for outstanding contribution and UI innovation in the Smart Notes project",
                  ],
                },
              ]}
            />
            <ResumeContent
              title="Associate Software Development Engineer - ( Futuristic Labs )"
              date="June 2024 - July 2025"
              isProject={true}
              content={[
                {
                  projectName: "Klynk Smart Cooking App & Automated Kitchen Appliances",
                  desc: [
                    "Developed the responsive web application for automated kitchen appliances using React.js, Node.js, Material UI, MongoDB, and Firebase, delivering an intuitive, guided cooking experience across devices",
                    "Built the cross-platform mobile app for Klynk smart cooking using React Native, letting users browse chef-curated recipes, customize and create their own, plan meals, and cook step by step through the connected Semi induction cooktop and Riku rice and curry maker",
                    "Increased automation capabilities by 30% by integrating IoT devices into embedded kitchen appliance systems",
                    "Ensured seamless integration between software and hardware to enhance appliance functionality and user experience",
                  ],
                },
              ]}
            />
            <ResumeContent
              title="MERN Stack Developer - ( Xcrino Business Solutions Pvt Ltd )"
              date="January 2024 - May 2024"
              isProject={true}
              content={[
                {
                  projectName: "High-Performance Web Application",
                  desc: [
                    "Built a high-performance MERN stack web app with Next.js for Server-Side Rendering (SSR) to improve SEO and UX",
                    "Ensured type safety with TypeScript and design a responsive UI using Tailwind CSS for a modern look and feel",
                    "Developed RESTful APIs, managed version control with Git, and resolved technical issues to meet project deadlines",
                  ],
                },
              ]}
            />
            <ResumeContent
              title="Web Development Intern - ( Let's Grow More )"
              date="February 2023 - March 2023"
              isProject={true}
              content={[
                {
                  projectName: "Web Applications Development",
                  desc: [
                    "Imagined and developed engaging web applications, including a To-Do List, Student Registration Form, Calculator, and apps using Create React App",
                    "Inspired by real-world challenges, collaborated with LWM mentors and earned a Letter of Appreciation for outstanding performance",
                    "Perfected UI design and front-end skills through iterative feedback and practical implementation using React and modern web technologies",
                  ],
                },
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <ResumeContent
              title="B.Tech in Electronics Communication ( Vignan's Nirula Institute of Technology And Sciences for Women | Guntur, Andhra Pradesh )"
              date="2020 - 2024"
              content={["CGPA: 7.5"]}
            />

            <h3 className="resume-title">CERTIFICATIONS</h3>
            <ResumeContent
              title="Python Programming ( Grow with Google, Coursera, LetsUpgrade )"
              date=""
              content={[]}
              link="https://drive.google.com/drive/folders/1XrkjYvAwb_swFfWE8ORPDAs5dg-or0oL"
            />
            <ResumeContent
              title="Leadership - Design Thinking and Emotional Intelligence ( Talentio )"
              date=""
              content={[]}
              link="https://drive.google.com/drive/folders/1YVwbNou2-31KBc-5awETVPxy9pgVibw7"
            />
            <ResumeContent
              title="Front End Development ( IBM SkillsBuild )"
              date=""
              content={[]}
              link="https://drive.google.com/file/d/1i4T_5EOsfQqdkXzJoceq1Z8PH8xDmoVm/view"
            />
            <ResumeContent
              title="Azure Data Fundamentals ( Microsoft )"
              date=""
              content={[]}
              link="https://drive.google.com/file/d/1DbWRLwxNRIMjIPjDmeSH0hrhb2JATfN1/view"
            />

            <h3 className="resume-title">SKILLS</h3>
            <ResumeContent
              title="Technical Skills"
              content={[
                "Python, FastAPI, TypeScript, JavaScript (ES6+), SQL, Node.js, Express, REST APIs, GraphQL",
                "React, Next.js, Angular, Redux, Zustand, Tailwind CSS, Material UI, HTML, CSS, Responsive Web",
                "React Native, Cross-Platform Mobile, IoT Device Integration, Embedded Systems",
                "MSSQL (SQL Server), PostgreSQL, Azure Cosmos DB, MongoDB, Redis, Firebase",
                "Azure, Docker, CI/CD, GitHub Actions, Git, Webpack, NPM, YARN, Build Tools",
                "Entra ID (Azure AD), MSAL, SSO, OAuth, RSA/AES Encryption, Pytest, Unit Testing"
              ]}
            />

            <h3 className="resume-title">FIND ME ONLINE</h3>
           <div>
           <ResumeContent
              title={<a href="https://www.linkedin.com/in/nainasana-shaik" target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              content={[]}
            />
            <ResumeContent
              title={<a href="https://github.com/nainasana" target="_blank" rel="noopener noreferrer">GitHub</a>}
              content={[]}
            />
           </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={CV_URL} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
