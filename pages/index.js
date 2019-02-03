import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout className="cover" {...this.props.auth}>
        {/* <div className="main-section">
          <Container>
            <Row>
              <Col md="6">
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
      </BaseLayout>
    )
  }
}

export default Index;
