import React from 'react'
import Groups from '../../../images/Groups.png'
import Group from '../../../images/Group.png'
import ProductHunt from '../../../images/product-hunt-1.png'
import Slack from '../../../images/icon_slack.png'
import Airbnb from '../../../images/580b57fcd9996e24bc43c513.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SectionHero = () => (
  <div class="section overflow-hidden">
      <Container className="mt-3xl mb-3xl">
    <Row>
      <Col className="align-center column">
        <h1 className="test-giga text-center">
          Capture their attention with your products’ biggest benefit
        </h1>
        <p className="text-lg text-center max-w-lg">
          Explain how you deliver the value proposition above and/or
          differentiate yourself from your competition.
        </p>
        <a href="#" className="button xl main mt-lg w-button">Action Oriented Call to Action</a>
        <div className="text-sm mt-md muted">
          14 day free trial • No credit card required
        </div>
        <div className="text-sm mt-2xl text-center">
          Show credibility with social proof. Logos of press coverage or
          biggest customers
        </div>
        <div className="row items-center mt-lg _w-full max-w-lg wrap justify-center">
          <div className="logo-container">
            <img src={Groups} alt="intercom logo" className="intercom" />
          </div>
          <div className="logo-container">
            <img src={Group} alt className="buffer" />
          </div>
          <div className="logo-container ph">
            <img src={ProductHunt} alt className="product-hunt" />
          </div>
          <div className="logo-container">
            <img src={Slack} alt className="slack" />
          </div>
          <div className="logo-container">
            <img src={Airbnb} alt className="airbnb" />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  <div className="circle" />
</div>


)

export default SectionHero