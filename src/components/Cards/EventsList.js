import React from "react";
import Card from "./Cards";
import {Row} from 'reactstrap';

function EventsList(props) {
    const eventsList = props.data.map(event => (
        <Card
          key={event.number}
          title={event.number}
          location={event.label}
        />
      ));
    return <Row>{eventsList}</Row>;
}

export default EventsList
