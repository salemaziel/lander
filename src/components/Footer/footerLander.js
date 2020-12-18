import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FooterLander = () => (
<div className="section pb-2xl-m">
  <Container className="mt-2xl mb-2xl">
    <Row className="v-l">
      <Col className="column align-left">
        <div className="emoji lg">🌎</div>
        <a href="#" className="u mt-lg">info@email.com</a>
        <div className="row mt-lg ml-md-n">
          <a href="#" target="_blank" className="p-md w-inline-block"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" data-feather="twitter" alt className="icon" /></a><a href="#" target="_blank" className="p-md w-inline-block"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" data-feather="instagram" alt className="icon" /></a><a href="#" target="_blank" className="p-md w-inline-block"><img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" data-feather="linkedin" alt className="icon" /></a>
        </div>
      </Col>
      <Col className="column align-left">
        <h6 className="max-w-lg mb-xl footer-header">Resources</h6>
        <div>
          Colors by
          <a href="https://yeun.github.io/open-color/" target="_blank"> Open Color</a>
        </div>
        <div className="mt-md">
          Icons by
          <a href="https://feathericons.com" target="_blank"> Feather Icons</a>
        </div>
        <div className="mt-md">
          Illustrations by
          <a href="https://icons8.com/ouch" target="_blank"> Ouch</a>
        </div>
        <div className="mt-md">
          Built on
          <a href="https://webflow.com/" target="_blank"> Webflow</a>
        </div>
      </Col>
      <Col className="column align-left">
        <h6 className="max-w-lg mb-xl footer-header">Learn more</h6>
        <div>
          Check Julian Shapiro’s
          <a href="https://www.julian.com/guide/growth/landing-pages" target="_blank"> guide</a>
        </div>
        <div className="mt-md">
          Check out Harry’s
          <a href="https://marketingexamples.com/copywriting/tips" target="_blank"> tips</a>
        </div>
      </Col>
      <Col className="column align-left">
        <h6 className="max-w-lg mb-xl footer-header">Use Lander for free</h6>
        <div><a href="#">Clone on Webflow</a></div>
        <div className="mt-md">
          <a href="#" target="_blank">Download a copy as a .zip</a>
        </div>
      </Col>
    </Row>
    <div className="border-t mt-xl">
      <Row className="mt-xl v-l">
        <Col className="column align-left">
          <div className="muted text-sm">
            © No copyright I guess? Do whatever you want with the site
          </div>
        </Col>
        <Col className="column align-right">
          <Row className="row">
            <Col>
            <div className="muted text-sm mr-lg">Dummy links: </div>
            </Col>
            <Col>
            <a href="#">Privacy Policy</a>
            </Col>
            <Col>
            <a href="#" className="">Terms and Conditions</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Container>
</div>



)

export default FooterLander 