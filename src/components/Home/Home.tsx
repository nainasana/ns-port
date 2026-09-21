import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { CV_URL } from "../../utils/constants";
import TypeWiter from "./Type";
import Home2 from "./Home2";
import { useEffect, useState } from "react";

const Home = (props: any) => {
  const { profileData } = props;
  const [data, setData] = useState<any>({});
  const getHomePageData = async () => {
    setData(profileData);
  };
  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col md={10} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAINA SANA</strong>
              </h1>

              <div className="home-type">
                <TypeWiter roles={data?.roles} />
              </div>

              <p className="home-tagline">
                I build production web and mobile applications end to end, from
                API and database design through to release, currently shipping
                AI-powered clinical documentation at Phigital Care.
              </p>

              <div className="home-cta">
                <Button as={Link as any} to="/project" className="cta-primary">
                  See my work <BsArrowRight />
                </Button>
                <Button
                  href={CV_URL}
                  target="_blank"
                  className="cta-secondary"
                  variant="outline-light"
                >
                  <AiOutlineDownload /> Download CV
                </Button>
              </div>

              <div className="home-stats">
                <span><strong>2.8 yrs</strong> building software</span>
                <span><strong>Web · Mobile · Backend</strong></span>
                <span><strong>Python · React · Azure</strong></span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 data={data} />
    </section>
  );
};

export default Home;
