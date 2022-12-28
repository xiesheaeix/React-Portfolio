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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi eligendi asperiores rerum beatae corporis quo ipsam aspernatur ducimus nulla. Voluptatum ex temporibus mollitia atque saepe neque numquam, provident accusantium reiciendis?</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="https://i.imgur.com/pXpk1Nk.png" alt="skill img" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/6XAsaoa.png" alt="skill img" />
                                    <h5>Back-end</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/xSZ23J9.png" alt="skill img" />
                                    <h5>Front-End</h5>
                                </div>
                                <div className="item">
                                    <img src="https://i.imgur.com/AmkRhCY.png" alt="skill img" />
                                    <h5>React</h5>
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