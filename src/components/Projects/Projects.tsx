import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import { useEffect, useState } from "react";

const Projects = (props: any) => {
  const { projectData } = props;
  const [data, setData] = useState<any>({ projects: [] });
  const getProjects = async () => {
    setData(projectData);
  };

  console.log({ data });

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          Things I've <strong className="purple">Built </strong>
        </h1>
        <p style={{ color: "white" }}>
          A mix of production apps shipped at work and projects built on my own.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data?.projects.length > 0
            ? data?.projects.map((item: any, idx: number) => {
                return (
                  <Col md={4} className="project-card" key={`${idx}-project`}>
                    <ProjectCards
                      imgPath={item?.cardImgUrl}
                      isBlog={false}
                      title={<h3>{item?.title}</h3>}
                      description={`${item?.description}`}
                      link={item?.demoUrl}
                      repoLink={item?.repoUrl}
                    />
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
