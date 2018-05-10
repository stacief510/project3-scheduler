import React, {Component} from 'react';

class Calendar extends Component{

	render(){
		return(
			<div className="calendar">
				<div className="container">
					<div className="row">
						<div className="col-sm">Monday</div>
						<div className="col-sm">Tuesday</div>
						<div className="col-sm">Wednesday</div>
						<div className="col-sm">Thursday</div>
						<div className="col-sm">Friday</div>
					</div>
					<div className="row">
						<div className="col-sm row2"></div>
						<div className="col-sm row2"></div>
						<div className="col-sm row2">Appt 1</div>
						<div className="col-sm row2"></div>
						<div className="col-sm row2"></div>
					</div>
				</div>
			</div>
			)
	}

}
export default Calendar; 