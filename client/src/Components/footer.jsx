import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div id="footer">
            <Row>
                <Col>
                    <p>FluffyBan <span id="footerSpan">Your Personal Organizer</span></p>
                </Col>
                <Col>
                </Col>
                <Col>
                    <button id="githublink"><img src="/github.png" id="githublogo"/></button>
                </Col>
            </Row>
        </div>
    )
}