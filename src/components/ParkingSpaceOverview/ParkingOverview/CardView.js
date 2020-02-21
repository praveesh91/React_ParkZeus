import React, { Component } from 'react'
import {Card, CardTitle, CardText, CardSubtitle, Button} from 'reactstrap'
import axios from 'axios'

class CardView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cardData: []
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/overviewData.json")
            .then(res =>{
                const data = res.data.parkingOverview;
                this.setState({cardData:data})
            })
    }
    render() {
        return (
            <div className="row">
           
                    {this.state.cardData.map((e) => (
                        <div className="col-md-6 card-custom">
                            <div className="font-weight-bold">{e.spaceName}</div>
                            <div className="info-container mb-2 mt-2">
                                <div className="status mr-3">
                                    <p>Occupied</p>
                                    <p>{e.status.booked}</p>
                                </div>
                                <div className="status mr-3">
                                    <p>Vacant</p>
                                    <p>{e.status.vacant}</p>
                                </div>
                                <div className="status mr-3">
                                    <p>Booked</p>
                                    <p>{e.status.occupied}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                
            </div>
            
        )
    }
}

export default CardView
