import React, {Component} from 'react';
import axios from 'axios';
import EventsList from './EventsList.js';

class CardList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            actions: []
        }
    }
    // componentDidMount() {
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //     axios.get(url)
    //         .then(response => response.data.splice(0,4))
    //         .then((data) => {
    //         this.setState({ users: data })
    //         //console.log(this.state.users)
    //         })
    //   }

    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/cardData.json")
            .then(res =>{
                const data = res.data.cardData.splice(0,4);
                //console.log(data);
                this.setState({actions:data})
                //console.log("this.state.actions",this.state.actions)
            })
    }

    render() {
        return (
            <EventsList data={this.state.actions} />
        )
    }
}

export default CardList

