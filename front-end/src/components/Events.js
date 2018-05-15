import React, {Component} from 'react';
import Event from "../components/Event";

let days = [{ 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday'}];
        
let createCalendar = (days, events) => {
    let calendar=days.map((day,idx,events)=>{
        // console.log(`day: ${day}`);
        // console.log(`event keys: ${Object.keys(events)}`);
    })
}
let reducer=(curr,acc)=>{
    return acc.day===curr.day;
}

class Events extends Component {
    constructor(props) {
        super(props)
    } 

    render(){

        createCalendar(days, this.props.events);
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