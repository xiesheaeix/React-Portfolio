import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Browse through some of the technologies I have experience working with!</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="https://i.imgur.com/Ec1vAx7.png" alt="skill img" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/zo5ee96.png" alt="skill img" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/QO9o7ZY.png" alt="skill img" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/ykbZoOI.png" alt="skill img" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/maUC2uV.png" alt="skill img" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/8ZXZmc8.png" alt="skill img" />
                                    <h5>SQL Databases</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/QHaCDKW.png" alt="skill img" />
                                    <h5>Django</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/SWa38lH.png" alt="skill img" />
                                    <h5>NoSQL Databases</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/fc2cPp2.png" alt="skill img" />
                                    <h5>Express.js</h5>
                                </div>
                            
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src="https://i.imgur.com/dO3NI34.jpg" alt="" />
        </section>
    );
}