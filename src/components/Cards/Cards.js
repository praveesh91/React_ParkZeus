import React, {Component}from "react";
import {Col} from 'reactstrap';

function CardContent(props) {
  return (
    <div className="text-dark bg-white round">
      <div className="card-img-top d-flex align-items-center p-2">
        <img className="img-fluid p-3" src="http://via.placeholder.com/50x50/1f1a38/ffffff?text=Image" alt="Card image cap" />
        <div className="mt-3">
        <span className="styleCardTitle">{props.title}</span>
        <p className="styleLocationLabel">{props.location}</p>
        </div>
      </div>
    </div>
  );
}

class Cards extends Component {
    constructor(props) {
        super(props);
      }
    
      render() {
        return (
            <Col xs="12" sm="6" lg="3" id={this.props.id}>
              <CardContent
                title={this.props.title}
                location={this.props.location}
                description={this.props.category}
              />
            </Col>
        );
      }
}

export default Cards

