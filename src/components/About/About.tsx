import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";

const About = (props: any) => {
  const { profileData } = props;
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row className="justify-content-center">
          <Col md={9} className="about-intro">
            <h1 className="about-heading">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard data={profileData} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
};

export default About;
