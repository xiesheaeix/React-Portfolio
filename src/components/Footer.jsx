import { Container, Row } from "react-bootstrap";


export default function Footer() {
    return (
        <footer className="footer">
            <Container>
            <Row className="align-items-center">
                <p>Website built by Shea in React.<br></br> <small>&copy; Copyright 2022, Shea Ehrenberger</small> </p>
            </Row>
            </Container>
      </footer>
    );
}