import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, JsFrameworks, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {
  const { theme } = useAppContext();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <Title>
            <h2>JavaScript frameworks</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {JsFrameworks.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a target="_blank" rel="noreferrer" href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
