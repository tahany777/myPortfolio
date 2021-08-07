/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import land from "assets/img/theme/landing2.jpg";
import coffee from "assets/img/theme/coffee.jpg";
import desk from "assets/img/theme/desk.jpg";
import emergency from "assets/img/theme/emergency.png";

class Landing extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <img src={land} />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1  style={{color: 'white'}} className="display-3">
                        What Excites Me The Most About Tech?{" "}
                        <span>
                          literally every technology excite me , everything is
                          possible with technology .
                        </span>
                      </h1>
                      <p style={{color: 'white'}} className="lead">
                        nowadays innovations are taking technology on the high
                        level of powerful, speed and comfortable.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          className="bg-default shadow border-0"
                          alt="..."
                          src={emergency}
                          top
                        ></CardImg>
                        <CardBody>
                          <CardTitle>Emergency Advisor</CardTitle>
                          <CardText>
                            the client does not have first aid skills and
                            instructions for dealing with diseases,this website
                            provides all the medical instructions that must be
                            followed to maintain health .
                          </CardText>
                          <Button
                          className="mr-4"
                          color="info"
                          target='_blank'
                          href="https://anti-devs.github.io/emergency-advisor/"
                          size="md"
                        >
                          Visit Website
                        </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          className="bg-default shadow border-0"
                          alt="..."
                          src={coffee}
                          top
                        ></CardImg>
                        <CardBody>
                          <CardTitle>301 Project</CardTitle>
                          <CardText>Loading ...</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          className="bg-default shadow border-0"
                          alt="..."
                          src={coffee}
                          top
                        ></CardImg>
                        <CardBody>
                          <CardTitle>401 Project</CardTitle>
                          <CardText>Loading ...</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={desk}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Creative Developer
                      </h4>
                      <p className="lead text-italic text-white">
                      I'm hard working and dedicated software developer, motivated and well organized, with a keen eye for a beautiful design.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Top Skills</h3>
                    <p className="lead">
                      HTML(5) - CSS(3) - JavaScript - jQuery - TailwindCSS - Bootstrap - ReactJs - NodeJs - MongoDB - MySQL - PHP - AdobeXD - SASS.
                    </p>
                    <Button
                          className="mr-4"
                          color="default"
                          target='_blank'
                          href="https://docs.google.com/document/d/1J6nvBKYlXzncH3YR6SjvIa267XCPc1svSDYfIXVFQNA/edit?usp=sharing"
                          size="lg"
                        >
                          My Resume
                        </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;