import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

const AboutCard = (props: any) => {
  const { data } = props;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> {data?.name} </span>
            from <span className="purple"> {data?.address}.</span>
            <br />
            <br />I am an <span className="purple">enthusiastic</span> learner
            with high motivational, problem-solving, and decision-making skills.
            I seek knowledge for self-development and aim to be a helping hand
            for community development. Highly interested in{" "}
            <span className="purple">reading books</span> and participating in{" "}
            <span className="purple">
              extracurricular activities like sports
            </span>
            , I am an excellent{" "}
            <span className="purple">
              team player with leadership qualities
            </span>
            . I am also extremely inclined towards spirituality and humanity. I
            have around <span className="purple">{data?.yoe}</span> of
            experience as a full stack software engineer, building web and mobile
            applications with <span className="purple">Python and FastAPI</span>,{" "}
            <span className="purple">React and Next.js</span>,{" "}
            <span className="purple">TypeScript</span>, and{" "}
            <span className="purple">React Native</span>. I have hands-on
            experience with <span className="purple">secure authentication</span>,{" "}
            <span className="purple">AI-powered workflows</span>,{" "}
            <span className="purple">IoT integration</span>, and cloud deployment
            on <span className="purple">Azure</span>. I am comfortable designing
            and optimizing{" "}
            <span className="purple">
              databases such as SQL Server, PostgreSQL, Cosmos DB and MongoDB
            </span>
            , and shipping through{" "}
            <span className="purple">Docker, CI/CD, Git and Jira</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
