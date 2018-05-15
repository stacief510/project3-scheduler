import React, {Component} from 'react';
import axios from 'axios';

class Event extends Component {
        state={
            events:[]
        }
   
        componentDidMount = () => {
            let oneEvent = this.props.match.params.id;
            let results = axios.get(`http://localhost:3001/events/${oneEvent}`)
            .then((res)=>{
                this.setState({
                    events: res.data
                })  
            });  
        }

        onDelete = () => {
            let oneEvent = this.props.match.params.id; 
            axios.delete(`http://localhost:3001/events/${oneEvent}`, {data: {id: oneEvent}})
                .then(res => {
                    this.props.history.push('/');
                })

        }

        render(){
        return(
            <div className="singleEvent" data-event-index= {this.props.match.params.id} >
                    <h1 className="row">
                       Event: {this.state.events.title}
                    </h1>
                    <h1 className="row">
                       Day: {this.state.events.day}
                    </h1>
                    <h1 className="row">
                       Time: {this.state.events.time}
                    </h1>
                    <button type="delete" onClick={this.onDelete}>Delete Event</button>
                    <button type="edit" onClick={this.onEdit}>Edit Event</button>

            </div>
        )
    }
}

export default Event;
