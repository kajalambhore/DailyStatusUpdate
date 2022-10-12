import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">WELCOME TO MY PORTFOLIO</span>
            <h1 className="text-info">{`Hi I'm WebCoder`}</h1>
            <p className="text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
              eligendi rem maxime sapiente obcaecati sequi at cumque fugit
              voluptate perferendis, expedita molestiae ullam. Placeat tempora
              provident itaque velit quo assumenda? Commodi exercitationem
              recusandae ipsam saepe, ea ut provident eveniet. Fugiat, voluptas
              est commodi totam facilis nihil ullam ratione delectus quae quasi
              reiciendis modi, esse ad, consectetur ipsam ducimus id deleniti.
            </p>

            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
