import React, { Component } from 'react'
import {Row, Col, Card, CardBody, CardTitle, ButtonToolbar, ButtonGroup, CardFooter, Button} from 'reactstrap'
import CardView from './CardView'
import ListView from './ListView'
import './ViewContainer.css'

export class ViewContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listType: false,
             CardType: true
        }
    }

    handleList(e){
        this.setState(() => ({
            listType: false,
            CardType: true 
        }));
        // e.preventDefault();
    }

    handleMenu(e){
        this.setState(() => ({
            CardType: false,
            listType: true 
        }));
        // e.preventDefault();
    }
    
    render() {
        const type = this.state.listType;
        console.log(type);
        return (


            <Row>
                <Col>
                    <Card className="rounded">
                    <CardBody>
                        <Row>
                        <Col sm="5">
                            <CardTitle className="mb-2"><b>Parking Space Overview</b></CardTitle>
                        </Col>
                        <Col sm="7" className="d-none d-sm-inline-block float-right">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button color="outline-secondary" onClick = {()=> {this.handleList()}}><i className="fa fa-list-ul"></i></Button>
                                    <Button color="outline-secondary" onClick = {()=> {this.handleMenu()}}><i className="fa fa-th-large"></i></Button>
                                    <Button color="outline-secondary"><i className="fa fa-map-o"></i></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        </Row>
                        <div className="mt-3">
                            {type ? <CardView/> : <ListView/>} 
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary rounded-pill px-4">View All Locations</Button>
                    </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default ViewContainer
