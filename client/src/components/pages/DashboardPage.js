import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

class DashboardPage extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Welcome !</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DashboardPage;
