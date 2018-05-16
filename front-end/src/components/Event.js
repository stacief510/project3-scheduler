import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Event extends Component {
        state={
            day: '',
            time: '',
            title: '',
            editable: true
        }
   
        componentDidMount = () => {
            let oneEvent = this.props.match.params.id;
            axios.get(`http://localhost:3001/events/${oneEvent}`)
            .then((res)=>{
                this.setState({
                    day: res.data.day,
                    time: res.data.time,
                    title: res.data.title,
                    user_id: this.props.match.params.user_id
                })

            });  
        }

        onDelete = () => {
            let oneEvent = this.props.match.params.id;
            let userId= this.props.match.params.user_id;
            axios.delete(`http://localhost:3001/users/${userId}/events/${oneEvent}`, {data: {id: oneEvent}})
                .then(res => {
                    this.props.history.push(`/users/${userId}/events`);
                })

        }

        onEdit=()=>{
            this.setState({
                editable: false
            })
        }

        onSave=(event)=>{
            event.preventDefault();
            const {title, day, time} = this.state;
            let oneEvent = this.props.match.params.id;
            let userId= this.props.match.params.user_id;
            axios.put(`http://localhost:3001/users/${userId}/events/${oneEvent}`, {title, day, time})
                .then(res => {
                    let updatedEvent = res.data;
                    this.setState({
                        time:updatedEvent.time,
                        day:updatedEvent.day,
                        title:updatedEvent.title,
                        editable: true,
                    })
                });
        }

        handleTitleChange=(event)=>{
            const value = event.target.value;
            this.setState({title: value});
        }
    
        handleDayChange=(event)=>{
            const value = event.target.value;
            this.setState({day: value});
        }
        handleTimeChange=(event)=>{
            const value = event.target.value;
            this.setState({time: value}); 
        }
    
        render(){
            console.log(111, this.props)
            console.log(222, this.state)
            if(this.state.editable){
                return(
                <div className="singleEvent" data-event-index= {this.props.match.params.id} >
                    <h1 className="row">
                    Event: {this.state.title} 
                    </h1>
                    <h1 className="row">
                    Day: {this.state.day}
                    </h1>
                    <h1 className="row">
                    Time: { this.state.time }
                    </h1>
                    <button type="delete" onClick={this.onDelete}>Delete Event</button>
                    <button type="edit" onClick={this.onEdit}>Edit Event</button>
                    <Link to={`/users/${this.props.match.params.user_id}/events`} className="btn btn-primary">Back to Calendar</Link>
                </div>
                )
            }
            else{
                return(
                <div className="updateEventForm" 
                    data-event-index= {this.props.match.params.id} >
                    <form className="form-group">
                        <label>Title:</label>
                        <input className="form-control" onChange={this.handleTitleChange} type="text"  value={this.state.title}/>
                        <label>Day:</label>
                        <input className="form-control" onChange={this.handleDayChange} type="text"  value={this.state.day}/>
                        <label>Time:</label>
                        <input className="form-control" onChange={this.handleTimeChange} type="text" value={this.state.time}/>
                        <button type="save" onClick={this.onSave}>Save Event</button>
                    </form>
                </div>
                )
            }
    }
}

export default Event;
