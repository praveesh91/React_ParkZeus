import React, { Component } from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'

class listView extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listData: []
        }
    }
    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/overviewData.json")
            .then(res =>{
                const data = res.data.parkingOverview;
                const status = data.map(d => d.status)
                const parkinName = data.map(d => d.spaceName)
                console.log(status)
                console.log(parkinName)
                this.setState({listData:data})
            })
    }
    render() {
        return (
            <React.Fragment>
                <Table>
                    <thead>
                        <tr>
                        <th>Parking Space Name</th>
                        <th>Occupied</th>
                        <th>Booked</th>
                        <th>Vacant</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listData.map((event) =>(
                              <tr>
                                <td>{event.spaceName}</td>
                                <td>{event.status.booked}</td>
                                <td>{event.status.vacant}</td>
                                <td>{event.status.occupied}</td>
                                <td className="text-center"><i className="fa fa-edit"></i></td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
          </React.Fragment>
        )
    }
}

export default listView
