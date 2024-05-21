import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LandingPage() {
return(
  <>
<Container>
      <Row>
        <Col col-md={8}>sm=8</Col>
        <Col col-md={4}>sm=4</Col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      </Row>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>   
        <Col sm>sm=true</Col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      </Row>
    </Container>
    </>
    );
    }

    export default LandingPage;