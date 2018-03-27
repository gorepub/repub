import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <div>
            <Col>
              <h2 className="space-top"> Prazer em ter você aqui. Nós somos a repub.</h2>
            </Col>
            <Col>
              <h5>Aqui, você pode encontrar vagas para morar em república ou simplesmente publicar a sua!</h5>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
