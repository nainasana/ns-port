import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaJira } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAntdesign,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiMicrosoftazure,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Cols icon={<DiHtml5 color="#df4d26" />} label="HTML5" />
      <Cols icon={<DiJavascript1 color="#ffff00" />} label="Javascript" />
      <Cols icon={<SiTypescript color="#0175c9" />} label="Typescript" />
      <Cols icon={<DiPython style={{ color: "#3776AB" }} />} label="Python" />
      <Cols icon={<SiFastapi color="#05998b" />} label="FastAPI" />
      <Cols icon={<DiNodejs color="#83cd29" />} label="Node Js" />
      <Cols icon={<DiReact color="cyan" />} label="React" />
      <Cols icon={<SiNextdotjs color="#ffffff" />} label="Next.js" />
      <Cols icon={<TbBrandReactNative color="cyan" />} label="React Native" />
      <Cols icon={<SiMicrosoftsqlserver color="#cc2927" />} label="SQL Server" />
      <Cols icon={<SiPostgresql color="#336791" />} label="PostgreSQL" />
      <Cols icon={<SiMongodb color="green" />} label="MongoDB" />
      <Cols icon={<SiRedis color="#d82c20" />} label="Redis" />
      <Cols icon={<SiExpress color="#83cd33" />} label="Express Js" />
      <Cols icon={<SiMicrosoftazure color="#0089d6" />} label="Azure" />
      <Cols icon={<SiDocker color="#2496ed" />} label="Docker" />
      <Cols icon={<DiGit color="#e84d31" />} label="Git" />
      <Cols icon={<SiRedux color="#7248b6" />} label="Redux" />
      <Cols icon={<RiTailwindCssFill color="#19b3b6" />} label="Tailwind CSS" />
      <Cols icon={<SiAntdesign color="#1ba8ee" />} label="Ant design" />
      <Cols icon={<FaJira color="#0352c9" />} label="Jira" />
      <Cols icon={<SiFirebase color="#FFCA28" />} label="Firebase" />
    </Row>
  );
};

const Cols = ({ icon, label }: { icon: React.ReactNode; label: String }) => {
  return (
    <Col xs={4} md={2} className="tech-icons">
      {icon}
      <h6>{label ? label : ""}</h6>
    </Col>
  );
};

export default Techstack;
