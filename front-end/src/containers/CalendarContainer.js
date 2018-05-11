import React, {Component} from 'react';
import MyRoutes from '../config/routes';


class Event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: this.props.events
        }
    }
    render(){
        let result = this.state.events.map((item, idx) => {
            return(
                        <div className='calendar' key={idx}>
                            <div className="row">
                                {item.title}
                            </div>
                            <div className="row">
                                {item.day}
                            </div>
                            <div className="row">
                                {item.time}
                            </div>
                        </div>
                        )
            })
        return(
            <div>
               {result} 
            </div>
            )
    }
}

class CalendarContainer extends Component{

    constructor() {
        super()
        this.state = {
            events: [{
                title:"walk dog",
                day:"Tuesday",
                time:"8:00AM"
            },
                {
                    title:"do the dishes",
                    day:"Monday",
                    time:"8:00PM"
                },
                {
                    title:"laundry",
                    day:"Saturday",
                    time:"8:00AM"
                },
                {
                    title:"walk dog",
                    day:"Thursday",
                    time:"8:00AM"
                }]
        }
    }

    render(){
        return(
            <div className="calContainer">
                <p>Calendar Wrapper</p>
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
                                <Event events={this.state.events}/>
                            <div className="col-sm row2"></div>
                            <div className="col-sm row2"></div>
                            <div className="col-sm row2"></div>
                            <div className="col-sm row2"></div>
                        </div>
                    </div>
                </div>
                {MyRoutes}
            </div>
            )
    }
}

export default CalendarContainer;
