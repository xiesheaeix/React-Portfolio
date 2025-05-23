import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export default function Projects() {
    const project1 = [
        {
            title: "Dynamic Homepage",
            description: "CSS animations w/ movies from API",
            imgUrl: "https://i.imgur.com/AmkRhCY.png"
        },
        {
            title: "Profile Card",
            description: "Save your favorite movies and see your reviews",
            imgUrl: "https://i.imgur.com/GoKRvpx.png"
        },
        {
            title: "Browse movies",
            description: "The API populates movies which we save to our database",
            imgUrl: "https://i.imgur.com/OSRROJj.png"
        },
    ];
    const project2 = [
        {
            title: "Modern Landing Page",
            description: "Beautiful modern design with an elegant home for all our products",
            imgUrl: "https://i.imgur.com/P0htl3f.png"
        },
        {
            title: "Shopping Cart/Categories",
            description: "Dynamic shopping cart and product categories that update on click ",
            imgUrl: "https://i.imgur.com/KcoChpB.png"
        },
        {
            title: "Admin Panel",
            description: "Admin users have the ability to add/delete products on the site and view active orders",
            imgUrl: "https://i.imgur.com/YBrGbyo.png"
        },
    ];
    const project3 = [
        {
            title: "HomePage",
            description: "Browse the website as a visitor or sign up using google oauth",
            imgUrl: "https://i.imgur.com/FXwk88H.png"
        },
        {
            title: "User Profile",
            description: "User's profiles contain all of their posts and only the user cna look at their private posts",
            imgUrl: "https://i.imgur.com/sOCgLwW.png"
        },
        {
            title: "Post Details",
            description: "Look at post details with the ability to comment and edit your own post ",
            imgUrl: "https://i.imgur.com/aIUEgqG.png"
        },
    ];
    const project4 = [
        {
            title: "Easy & Hard Game Play",
            description: "Scary theme with options to increase game intensity",
            imgUrl: "https://i.imgur.com/8rOfFWz.png"
        },
        {
            title: "Game Play Page",
            description: "Enjoy testing your memory with this dynamic JS game",
            imgUrl: "https://i.imgur.com/G1sGLFn.png"
        },
        {
            title: "Scary Surprise",
            description: "Game Losers will be meet with a scary surprise!",
            imgUrl: "https://i.imgur.com/dF5fJm9.png"
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
                        <p>Browse a collection of all of my Full-Stack projects</p>   
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Cinéflix Movies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Petit Trésor</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Journal App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Memory Game</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                <h2>Cinéflix</h2> 
                                <p>Django Web App consuming an API to browse movie trailers</p>
                                <div className="project-info-btns">
                                    <Button href="https://cineflixapp.herokuapp.com/" variant="outline-info">Live Demo</Button>
                                    <Button href="https://github.com/xiesheaeix/cineflix" variant="outline-info">GitHub</Button>
                                </div>
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
                                <h2>Petit Trésor</h2> 
                                <p>MERN Stack E-Commerce Web App with admin panel</p>
                                <div className="project-info-btns">
                                    <Button href="https://petit-tresor.herokuapp.com/" variant="outline-info">Live Demo</Button>
                                    <Button href="https://github.com/xiesheaeix/Petit-Tresor" variant="outline-info">GitHub</Button>
                                </div>
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
                                <h2>Journal App</h2> 
                                <p>MEN Stack Web App where uses can make private or public posts</p>
                                <div className="project-info-btns">
                                    <Button href="https://journal-app-1997.herokuapp.com/" variant="outline-info">Live Demo</Button>
                                    <Button href="https://github.com/xiesheaeix/Journal-App" variant="outline-info">GitHub</Button>
                                </div>
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
                                <Tab.Pane eventKey="fourth"> 
                                <h2>Scary Memory Game</h2> 
                                <p>Vanilla JS based concentration game with a scary surprise</p>
                                <div className="project-info-btns">
                                    <Button href="https://xiesheaeix.github.io/Project-1/" variant="outline-info">Live Demo</Button>
                                    <Button href="https://github.com/xiesheaeix/Project-1" variant="outline-info">GitHub</Button>
                                </div>
                                    <Row>
                                        {
                                            project4.map((project, idx) => {
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