import React, {Component} from 'react';
import axios from 'axios';

class newEvent extends Component {
	state={
        title:'',
        day:'',
        time:'' 
	}

    onSubmit=(event)=>{
        event.preventDefault();
        const {title, day, time} = this.state;
        axios.post('http://localhost:3001/events', {title, day, time})
            .then(res => {
                let createdEvent = res.data;
                this.setState({
                    // events: this.props.events.concat(createdEvent),
                    time:'',
                    day:'',
                    title:''
                })
                this.massageData()
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
		return(
			<div>
	           <form onSubmit={this.onSubmit}>
	                <label>Event:</label>
	                <input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.handleTitleChange}/>
	                <label>Day:</label>
	                <input type='text' name='day' placeholder='day' value={this.state.day} onChange={this.handleDayChange}/>
	                <label>Time:</label>
	                <input type='text' name='time' placeholder='time' value={this.state.time} onChange={this.handleTimeChange}/>
	                <button type='submit'>Submit</button>
	            </form>
	        </div>
			)
	}
}

export default newEvent;