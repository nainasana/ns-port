import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CV_URL } from "../../utils/constants";
import ResumeContent from "./ResumeContent";

const Resume = (props: any) => {
  const { profileData } = props;
 

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
              title="Associate Software Development Engineer - ( Futuristic Labs )"
              date="June 2024 - Present"
              isProject={true}
              content={[
                {
                  projectName: "Automated Kitchen Appliances Project",
                  desc: [
                    "Developed a responsive user interface for automated kitchen appliances using React.js, Node.js, Material UI, MongoDB, and Firebase, delivering an intuitive and engaging user experience through innovative design",
                    "Increased automation capabilities by 30% by integrating IoT devices into embedded kitchen appliance systems",
                    "Ensured seamless integration between software and hardware to enhance appliance functionality and user experience",
                    "Encouraged a culture of experimentation and cross-functional collaboration, resulting in faster iteration cycles and improved product design",
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

            <h3 className="resume-title">SKILLS</h3>
            <ResumeContent
              title="Technical Skills"
              content={[
                "ReactJS, NodeJS, JavaScript, TypeScript, NextJS, Express, HTML, Redux, CSS",
                "Tailwind CSS, MongoDB, Firebase, Git, ES6+, GitHub API Integration, Python",
                "Webpack, Typography, React Native, Responsive Web, NPM, YARN, Build Tools"
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
