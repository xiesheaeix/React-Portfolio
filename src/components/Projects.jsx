import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export default function Projects() {
    const project1 = [
        {
            title: "Cinéflix",
            description: "Django App consuming an API for browsing movie trailers",
            imgUrl: "https://i.imgur.com/AmkRhCY.png"
        },
        {
            title: "Cinéflix",
            description: "Django App consuming an API for browsing movie trailers",
            imgUrl: "https://i.imgur.com/GoKRvpx.png"
        },
        {
            title: "Journaling Social Media App",
            description: "MEN Stack App to post private/public journal entries and look at others posts",
            imgUrl: "https://i.imgur.com/OSRROJj.png"
        },
    ];
    const project2 = [
        {
            title: "Modern Landing Page",
            description: "MERN Stack E-Commerce Web App",
            imgUrl: "https://i.imgur.com/P0htl3f.png"
        },
        {
            title: "Shopping Cart/Categories",
            description: "Django App consuming an API for browsing movie trailers",
            imgUrl: "https://i.imgur.com/KcoChpB.png"
        },
        {
            title: "Admin Panel",
            description: "MEN Stack App to post private/public journal entries and look at others posts",
            imgUrl: "https://i.imgur.com/YBrGbyo.png"
        },
    ];
    const project3 = [
        {
            title: "Journaling Social Media App",
            description: "MEN Stack App to post private/public journal entries and look at others posts",
            imgUrl: "https://i.imgur.com/yvw1QmN.jpg"
        },
        {
            title: "Cinéflix",
            description: "Django App consuming an API for browsing movie trailers",
            imgUrl: "https://i.imgur.com/AONTV7Q.jpg"
        },
        {
            title: "Journaling Social Media App",
            description: "MEN Stack App to post private/public journal entries and look at others posts",
            imgUrl: "https://i.imgur.com/yvw1QmN.jpg"
        },
    ];

    

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloremque minima non voluptates impedit provident delectus, placeat explicabo praesentium suscipit fuga quas commodi porro nisi quibusdam hic voluptatum unde quia?</p>   
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Third</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                <h2>Petit Trésor</h2> 
                                <p>MERN Stack E-Commerce Web App</p>
                                <Button href="https://petit-tresor.herokuapp.com/" variant="outline-info">Live Demo</Button>
                                <Button href="https://github.com/xiesheaeix/Petit-Tresor" variant="outline-info">GitHub</Button>
                                    <Row>
                                        {
                                            project1.map((project, idx) => {
                                                return (
                                                    <ProjectCard
                                                      key={idx} 
                                                      {...project}
                                                    />
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>   
                                        {
                                            project2.map((project, idx) => {
                                                return (
                                                    <ProjectCard
                                                      key={idx} 
                                                      {...project}
                                                    />
                                                );
                                            })
                                        }
                                    </Row> 
                                </Tab.Pane>
                                <Tab.Pane eventKey="third"> 
                                    <Row>
                                        {
                                            project3.map((project, idx) => {
                                                return (
                                                    <ProjectCard
                                                      key={idx} 
                                                      {...project}
                                                    />
                                                );
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                        </div>}
                    </TrackVisibility> 
                    </Col>
                </Row>
            </Container>
           <img className="background-image-right" src="https://i.imgur.com/tHak3l6.jpg" alt="" />                         
        </section>
    );
}