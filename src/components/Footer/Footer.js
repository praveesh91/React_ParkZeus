import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <div className="container">
            <Row>
              <Col>
                <span> &copy; 2020 ParkZeus | All Rights Reserved</span>
              </Col>
              <Col className="text-right">
                <span> Version 1.0.0</span>
              </Col>
            </Row>
        </div>
      </footer>
    )
  }
}

export default Footer;
