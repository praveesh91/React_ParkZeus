import React, { Component } from 'react'
import {
    Badge,
    Row,
    Col,
    Progress,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardFooter,
    CardTitle,
    Button,
    ButtonToolbar,
    ButtonGroup,
    ButtonDropdown,
    Label,
    Input,
    Table
  } from 'reactstrap';
import Chart from './Chart.js'

export class LineChart extends Component {

    constructor(props) {
        super(props)
        this.state = {
          dropdownOpen: false,
          chartType : 'Pie'
        }
    }
    async handleLine(){
        await this.setState({ chartType:"Line" });
        this.refs.child.graphType();
    }
    async handleBar(){
        await this.setState({ chartType:"Bar" });
        this.refs.child.graphType();
    }
    async handlePie(){
        await this.setState({chartType:"Pie"});
        this.refs.child.graphType();
    }

    render() {
        // console.log("ChartType in Line chart: ",this.state.chartType)
        return (
            <Row>
                <Col>
                    <Card className="rounded">
                    <CardBody>
                        <Row>
                        <Col sm="5">
                            <CardTitle className="mb-0">Parking Status</CardTitle>
                            <div className="small text-muted">November 2015</div>
                        </Col>
                        <Col sm="7" className="d-none d-sm-inline-block float-right">
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Daily</Button>
                                    <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Weekly</Button>
                                    <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Monthly</Button>
                                </ButtonGroup>
                                <ButtonGroup className="mr-2" aria-label="First group">
                                    <Button color="outline-secondary" onClick = {()=> {this.handleLine()}}><i className="fa fa-line-chart"></i></Button>
                                    <Button color="outline-secondary" onClick = {()=> {this.handleBar()}}><i className="fa fa-bar-chart"></i></Button>
                                    <Button color="outline-secondary" onClick = {()=> {this.handlePie()}}><i className="fa fa-pie-chart"></i></Button>
                                </ButtonGroup>
                            </ButtonToolbar>
                        </Col>
                        </Row>
                        <div className="chart-wrapper" style={{ marginTop: 40 + 'px' }}>
                            <Chart ref="child" chartType={this.state.chartType} />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Button color="primary rounded-pill px-4">Track the Parking status</Button>
                    </CardFooter>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default LineChart
