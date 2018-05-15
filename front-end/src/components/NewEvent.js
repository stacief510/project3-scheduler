import React, {Component} from 'react';

class newEvent extends Component {

	render(){
		return(
			<div>
	           <form onSubmit={this.props.onSubmit}>
	                <label>Event:</label>
	                <input type='text' name='title' placeholder='title' value={this.props.title} onChange={this.props.handleTitleChange}/>
	                <label>Day:</label>
	                <input type='text' name='day' placeholder='day' value={this.props.day} onChange={this.props.handleDayChange}/>
	                <label>Time:</label>
	                <input type='text' name='time' placeholder='time' value={this.props.time} onChange={this.props.handleTimeChange}/>
	                <button className="submit" type='submit'>Submit</button>
	            </form>
	        </div>
			)
	}
}

export default newEvent;