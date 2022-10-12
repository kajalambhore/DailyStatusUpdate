import React from "react";
import {
  Col,
  Container,
  Row,
  Tab,
  TabContainer,
  TabContent,
} from "react-bootstrap";
import "./Projects.css";
import Nav from "react-bootstrap/Nav";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCard from "../projectcard/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Develoopment",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Develoopment",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Develoopment",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Develoopment",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Develoopment",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Develoopment",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              maiores placeat cupiditate rerum, eos temporibus numquam
              blanditiis reiciendis, voluptatem, ex incidunt dolorum quibusdam
              obcaecati quas dolorem a voluptate vel ut.
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home" className="mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab3</Nav.Link>
                </Nav.Item>
              </Nav>

              <TabContent>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">Welcome</Tab.Pane>
                <Tab.Pane eventKey="third">Welcome</Tab.Pane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
