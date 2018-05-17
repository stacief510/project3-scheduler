import React, {Component} from 'react';

// let days = [{ 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday'}];

class Events extends Component {

    render(){

        let result = this.props.events.map((item, idx) => {
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
export default Events;