import React, { Component } from 'react'
import {Row, Col, Card, CardBody, CardTitle, ButtonToolbar, ButtonGroup, CardFooter, Button} from 'reactstrap'
import CardView from './CardView'
import ListView from './ListView'
import MapContainer from '../MapView/MapContainer'
import './ViewContainer.css'

export class ViewContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listType: false,
             CardType: true,
             mapType: false,
             viewMode: 'card'
        }
    }

    handleCard(e){
        this.setState(() => ({
            listType: false,
            CardType: true, 
            mapType: false
        }));
        // e.preventDefault();
    }

    handleList(e){
        this.setState(() => ({
            CardType: false,
            listType: true,
            mapType: false 
        }));
        // e.preventDefault();
    }

    handleMap(e){
        this.setState(() => ({
            CardType: false,
            listType: false,
            mapType: true ,
        }));
        // e.preventDefault();
    }

    // handleView=(type) => {
    //     this.setState({
    //         viewMode:type
    //     })
    //     console.log("viewMode after",this.state.viewMode)
    //     switch (type) {
    //         case 'card':
    //           return <CardView/>;
    //         case 'list':
    //           return <ListView/>;
    //         case 'map':
    //           return <MapContainer/>;
    //         default:
    //           return null;
    //       }
        // if(this.state.viewMode == 'card'){
        //     return <CardView/>
        // }
        // else if(this.state.viewMode == 'list'){
        //     return <ListView/>
        // }
        // else if(this.state.viewMode == 'map'){
        //     return <MapContainer/>
        // }
    //}
    
    render() {
        const listType = this.state.listType;
        const CardType = this.state.CardType;
        const mapType = this.state.mapType;

        const viewType = this.state.viewType;
        console.log("viewType",viewType)
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
                                    <Button color="outline-secondary" onClick = {()=> {this.handleCard()}}><i className="fa fa-th-large"></i></Button>
                                    <Button color="outline-secondary" onClick = {()=> {this.handleMap()}}><i className="fa fa-map-o"></i></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        </Row>
                        <div className="mt-3">
                            {/* {type ? <CardView/> : <ListView/>}  */}
                            {/* {this.handleView(this.state.viewMode)} */}
                            {/* <MapContainer/> */}
                            {listType && <ListView/>}
                            {CardType && <CardView/>}
                            {mapType && <MapContainer/>}
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
