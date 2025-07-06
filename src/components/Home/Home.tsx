import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/naina-dev.png";
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
          <Row style={{justifyContent: "center", alignItems: "center"}}>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAINA SANA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeWiter roles={data?.roles} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 data={data} />
    </section>
  );
};

export default Home;
