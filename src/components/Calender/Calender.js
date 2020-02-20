// import React from 'react'
// import moment from 'moment'
// import DayNames from './Daynames.js'
// import Week from './Week.js'
// 

// import {Card, Row, Col, CardBody} from 'reactstrap'

// class Calender extends React.Component {
//     constructor(props) {
//       super(props);
      
//       this.state = {
//         month: moment(),
//         selected: moment().startOf('day')
//       };
      
//       this.previous = this.previous.bind(this);
//       this.next = this.next.bind(this);
//     }
    
//     previous() {
//       const {
//         month,
//       } = this.state;
  
//       this.setState({
//         month: month.subtract(1, 'month'),
//       });
//     }
  
//     next() {
//       const {
//         month,
//       } = this.state;
  
//       this.setState({
//         month: month.add(1,'month'),
//       });
//     }
    
//     select(day) {
//       this.setState({
//         selected: day.date,
//         month: day.date.clone(),
//       });
//     }
  
//     renderWeeks() {
//       let weeks = [];
//       let done = false;
//       let date = this.state.month.clone().startOf("month").add("w" -1).day("Sunday");
//       let count = 0;
//       let monthIndex = date.month();
  
//       const {
//         selected,
//         month,
//       } = this.state;
  
//       while (!done) {
//         weeks.push(
//           <Week key={date} 
//             date={date.clone()} 
//             month={month} 
//             select={(day)=>this.select(day)} 
//             selected={selected} />
//         );
  
//         date.add(1, "w");
        
//         done = count++ > 2 && monthIndex !== date.month();
//         monthIndex = date.month();
//       }
  
//       return weeks;
//     };
  
//     renderMonthLabel() {
//       const {month} = this.state;
  
//       return <span className="month-label">{month.format("MMMM YYYY")}</span>;
//     }
  
//     render() {
//       return (
//         <Row>
//           <Col>
//           <div className="calendar">
//               <header className="header">
//                   <div className="month-display row">
//                     <i className="arrow fa fa-angle-left" onClick={this.previous}/>
//                     {this.renderMonthLabel()}
//                     <i className="arrow fa fa-angle-right" onClick={this.next}/>
//                   </div>
//                   <DayNames />
//                 </header>
//                 {this.renderWeeks()}
//                 </div>
//             </Col>
//         </Row>
        
//       );
//     }
//   }
  
// export default Calender


import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calender.css';
import {Row, Col, Button} from 'reactstrap'
 
class Calender extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <Row>
        <Col>
          <div className="calendar-container mb-3 rounded">
            <h5 className="text-left pl-4 pt-4"><b>My Calendar</b></h5>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
            <Button color="primary rounded-pill mx-3 my-2 px-4">Add event +</Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Calender;