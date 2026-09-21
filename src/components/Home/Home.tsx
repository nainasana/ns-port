import { Container, Row, Col } from "react-bootstrap";
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
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 data={data} />
    </section>
  );
};

export default Home;
