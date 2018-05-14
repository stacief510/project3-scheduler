import React, {Component} from 'react';
import MyRoutes from '../config/routes';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NewEvent from '../components/NewEvent';

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

class Event extends Component {
    state={
        event:[]
    }
    render(){
        return(
            <div>
                <h1>hello</h1>
            </div>
        )
    }
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




class CalendarContainer extends Component{

    constructor() {
        super()
        this.state = {
            events: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
            showForm: false
        }
    }

     massageData = () => {
        const results = {
            monday:[],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [] 
        };
        this.state.events.forEach(event => {
            let day = event.day
            let agenda = {};

            if (results[day]) {
                agenda.title = event.title;
                results[day].push(agenda)
            }
        })

        this.setState({
            events: this.state.events,
            monday: results.monday,
            tuesday: results.tuesday,
            wednesday: results.wednesday,
            thursday: results.thursday,
            friday: results.friday,
            saturday: results.saturday,
            sunday: results.sunday
        })



    }
    componentDidMount(){

        let results = axios.get('http://localhost:3001/')
            .then((res)=>{
                this.setState({
                    events: res.data
                })          
                this.massageData();
            }).then(() => {
            })
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render(){

        let newEvent = this.state.showForm ? <NewEvent /> : null;

        return(
            <div className="calContainer">
                <h1 className='title'>Weekly Scheduler</h1>
                <div className="calendar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm days">Monday</div>
                            <div className="col-sm days">Tuesday</div>
                            <div className="col-sm days">Wednesday</div>
                            <div className="col-sm days">Thursday</div>
                            <div className="col-sm days">Friday</div>
                            <div className="col-sm days">Saturday</div>
                            <div className="col-sm days">Sunday</div>
                        </div>

                        <div className="row">
                            <div className="col-sm row2">
                                <Events events={this.state.monday} />
                            </div>

                            <div className="col-sm row2">
                                 <Events events={this.state.tuesday} />
                             </div>

                            <div className="col-sm row2">
                                <Events events={this.state.wednesday} />
                            </div>

                            <div className="col-sm row2">
                                <Events events={this.state.thursday} />
                            </div>
                            <div className="col-sm row2">
                                <Events events={this.state.friday} />
                            </div>
                            <div className="col-sm row2">
                                <Events events={this.state.saturday} />
                            </div>
                            <div className="col-sm row2">
                                <Events events={this.state.sunday} />
                            </div>
                        </div>

                        <div className='row'>
                            <button onClick={this.toggleForm}>Create New Event</button>
                            { newEvent }
                        </div>

                    </div>
                </div>
                {MyRoutes}
            </div>
            )
    }


}

export default CalendarContainer;
