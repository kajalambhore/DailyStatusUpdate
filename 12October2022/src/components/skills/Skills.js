import React from "react";
import "./Skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate perspiciatis obcaecati quis reiciendis earum ut quasi
                id enim ducimus autem eos voluptatum unde, rerum iusto, in
                nesciunt adipisci exercitationem sit. Dolorem aspernatur quam
                voluptas necessitatibus deserunt dolor blanditiis qui, illo odit
                rerum, nostrum delectus architecto. Consequatur voluptates ullam
                ad fuga alias nobis aliquid, harum et expedita, at veniam
                necessitatibus quis.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Developement</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Brand Identity</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Logo Design</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Developement</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
