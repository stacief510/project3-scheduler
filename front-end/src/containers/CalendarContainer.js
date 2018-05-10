import React, {Component} from 'react';
import Calendar from '../components/Calendar';
import MyRoutes from '../config/routes'

class CalendarContainer extends Component{

	render(){
		return(
			<div className="calContainer">
				<p>Calendar Wrapper</p>
				 <Calendar /> 
				{MyRoutes}
			</div>
			)
	}



}
export default CalendarContainer; 