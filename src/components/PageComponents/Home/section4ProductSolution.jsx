import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MarginaliaComing from '../../../images/marginalia-coming-soon.png'

import MarginaliaShopping from '../../../images/marginalia-online-shopping.png'
import MarginaliaComplete from '../../../images/marginalia-order-complete.png'
import {
  FaCheck
} from 'react-icons/fa'

const SectionSolution = () => (
<div className="section">
  <Container>
    <Row className="items-center v-t">
      <Col className="column align-left p-2xl">
        <h6 className="max-w-lg">#1 Feature</h6>
        <h2 className="max-w-lg">
          Present the main benefit of your top feature
        </h2>
        <p className="text-lg">
          Describe the feature in two or three sentences. Explain how it
          works and why your product does this best.
        </p>
      </Col>
      <Col className="column align-center p-2xl">
        <img src={MarginaliaComing} alt className="feature-card" />
      </Col>
    </Row>
    <Row className="reverse items-center v-t">
      <Col className="column align-left p-2xl">
        <h6 className="max-w-lg">#2 Feature</h6>
        <h2 className="max-w-lg">Combat the top objection readers may have</h2>
        <div className="row mt-lg">
          <FaCheck alt className="icon mt-sm mr-md" />
          <p className="text-lg">Explain how your product solves that</p>
        </div>
        <div className="row mt-lg">
          <FaCheck  alt className="icon mt-sm mr-md" />
          <p className="text-lg">Use bullet points to break it up</p>
        </div>
        <div className="row mt-lg">
          <FaCheck  alt className="icon mt-sm mr-md" />
          <p className="text-lg">Into short, easier chunks to read</p>
        </div>
      </Col>
      <Col className="column align-center p-2xl">
        <img src={MarginaliaShopping} alt className="feature-card" />
      </Col>
    </Row>
    <Row className="items-center v-t">
      <Col className="column align-left p-2xl">
        <h6 className="max-w-lg">#3 Feature</h6>
        <h2 className="max-w-lg">
          What is unique about your product? Why does it matter?
        </h2>
        <p className="text-lg">
          Don’t talk about the feature itself. Your leads don’t care about
          it, only what it does for them. So talk about the benefits it
          provides.
        </p>
      </Col>
      <Col className="column align-center p-2xl">
        <img src={MarginaliaComplete} alt className="feature-card" />
      </Col>
    </Row>
  </Container>
</div>


);

export default SectionSolution;
