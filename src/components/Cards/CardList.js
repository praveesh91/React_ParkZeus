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

    componentDidMount(){
        axios.get("https://praveesh91.github.io/test_json/cardData.json")
            .then(res =>{
                const data = res.data.cardData.splice(0,4);
                this.setState({actions:data})
            })
    }

    render() {
        return (
            <EventsList data={this.state.actions} />
        )
    }
}

export default CardList

