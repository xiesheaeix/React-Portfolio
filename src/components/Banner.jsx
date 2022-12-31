import { useEffect, useState } from "react";
import { Container, Row ,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from "react-on-screen";



export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer ", "Full-Stack Developer ", "Web Designer "];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const timePeriod = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(timePeriod);
        } else if (isDeleting && updatedText === '')  {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }


    }

    return (
        <section className="banner" id="home">
            <video autoPlay muted loop>
             <source src="https://i.imgur.com/djZ1TZs.mp4" type="video/mp4" />
            </video>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my portfolio</span>
                            <h1>{`Hi I'm Shea, `}<span className="wrap">{text}</span></h1>
                            <p>
                                A lover of all things technology and web development. I am constantly learning to develop my skills and deepen my knowledge
                                of all things tech. From front to back-end, I'm ready to bring my skill set to a great team! 
                            </p>
                            <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src='https://i.imgur.com/elV6itq.png' alt="header img" />
                    </Col>
                </Row>
            </Container>

        </section>
    );
}