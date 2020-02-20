import React, { Component } from 'react';
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
import CardList from '../../components/Cards/CardList.js';
import ChartContainer from '../../components/Charts/ChartContainer/ChartContainer.js';
import Calendar from '../../components/Calender/Calender.js'
import ActionList from '../../components/ActionCards/CardList.js'

class Dashboard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      dropdownOpen: false
    }
  }
  
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">

          <CardList />
          <Row className="mt-4">
          <Col lg={8}> <ChartContainer /></Col>
          <Col lg={4}><Calendar /></Col>
         



          </Row>
          
          <ActionList />
       
      </div>
    )
  }
}

export default Dashboard;
