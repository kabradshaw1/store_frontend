import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Footer() {
  return (
    <Container as='footer'>
      <Row className="align-items-center">
        <Col><h2>Made by Kyle Bradshaw</h2></Col>
        <Col>
            <Row className='display-5'>
              <Col>
                <a href='https://github.com/kabradshaw1'><VscGithubAlt /></a>
              </Col>
              <Col>
                <a href='https://www.linkedin.com/in/kyle-bradshaw-15950988/'><AiOutlineLinkedin /></a>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;