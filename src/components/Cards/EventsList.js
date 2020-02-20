import React from "react";
import Card from "./Cards";
import {Row} from 'reactstrap';

function EventsList(props) {
    const eventsList = props.data.map(event => (
        <Card
          title={event.number}
          location={event.label}
        />
      ));
    return <Row className="">{eventsList}</Row>;
}

export default EventsList
