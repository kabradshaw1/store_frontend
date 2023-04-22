import React from 'react'
import AllItems from '../../components/AllItems'
import ShoppingCart from '../../components/ShoppingCart'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Home: React.FC = () => {
  return (
    <Row>
      <Col>
        <AllItems/>
      </Col>
      <Col lg={3}>
        <ShoppingCart/>
      </Col>
    </Row>
  )
};

export default Home;
