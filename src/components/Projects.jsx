import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';

export default function Projects() {
    const projects = [
        {
            title: "Petit Trésor",
            description: "MERN Stack E-Commerce Web App",
            imgUrl: "https://i.imgur.com/WsdybUj.jpg"
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
        {
            title: "Scary Concentration Game",
            description: "A Vanilla JS memory game with a scary twist",
            imgUrl: "https://i.imgur.com/ZMqdh9H.jpg"
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
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
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, idx) => {
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
                                <Tab.Pane eventKey="second">BLAH HA</Tab.Pane>
                                <Tab.Pane eventKey="third">OMG</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
           <img className="background-image-right" src="https://i.imgur.com/tHak3l6.jpg" alt="" />                         
        </section>
    );
}