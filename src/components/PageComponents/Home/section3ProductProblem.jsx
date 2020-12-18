import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SectionProblem = () => (
<div className="section">
  <div className="container mt-2xl mb-2xl">
    <Row>
      <Col className="column align-center">
        <h2 className="max-w-lg text-center">
          What problem does your product solve?
        </h2>
        <p className="text-lg text-center max-w-md">
          Describe your customers biggest, most expensive pain point. Use the
          same words they use when talking about it. Drive it home with
          emotion.
        </p>
      </Col>
    </Row>
  </div>
</div>

);

export default SectionProblem;
