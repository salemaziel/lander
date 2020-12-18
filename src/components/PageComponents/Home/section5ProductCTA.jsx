import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const SectionCTA = () => (
<div className="section main mt-2xl">
  <Container className="container mt-2xl mb-2xl">
    <Row className="items-center">
      <Col className="column align-center">
        <h1 className="max-w-lg text-giga text-center text-white">
          Remind them why they came. Get them to act!
        </h1>
        <a href="#" className="button xl main white mt-lg w-button">Action Oriented Call to Action</a>
        <div className="faded text-sm mt-md">
          14 day free trial • No credit card required
        </div>
      </Col>
    </Row>
  </Container>
</div>


);

export default SectionCTA;
