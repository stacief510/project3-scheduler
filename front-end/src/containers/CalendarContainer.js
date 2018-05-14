import React, {Component} from 'react';
import MyRoutes from '../config/routes';
import {Link} from 'react-router-dom';
import axios from 'axios';


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
    constructor(props) {
        super(props)
        console.log('props', props)

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
                    events: [{
                    title:"walk dog",
                    day:"monday",
                    time:"8:00AM"
                },
                {
                    title:"do the dishes",
                    day:"tuesday",
                    time:"8:00PM"
                },
                {
                    title:"laundry",
                    day:"wednesday",
                    time:"8:00AM"
                },
                {
                    title:"laundry2",
                    day:"wednesday",
                    time:"9:00AM"
                },
                {
                    title:"walk dog",
                    day:"thursday",
                    time:"8:00AM"
                }],
            // events: [],
                monday: [{title: 'walk dog mon'}],
                tuesday: [{title: 'walk dog tue'}],
                wednesday: [{title: 'fake'}, {title: 'fake'}],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: []     

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

        console.log(12321, results)


        this.setState({
            events: this.state.events,
            friday: results.friday,
            wednesday: results.wednesday
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


    render(){
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
                                <Event events={this.state.monday} />
                            </div>

                            <div className="col-sm row2">
                                 <Event events={this.state.tuesday} />
                             </div>

                            <div className="col-sm row2">
                                <Event events={this.state.wednesday} />
                            </div>

                            <div className="col-sm row2">
                                <Event events={this.state.thursday} />
                            </div>
                            <div className="col-sm row2">
                                <Event events={this.state.friday} />
                            </div>
                            <div className="col-sm row2">
                                <Event events={this.state.saturday} />
                            </div>
                            <div className="col-sm row2">
                                <Event events={this.state.sunday} />
                            </div>
                        </div>

                        <div className='row'>
                            <Link to={'/events'} className='btn btn-secondary' type='submit'> Create New Event </Link>
                        </div>
                    </div>
                </div>
                {MyRoutes}
            </div>
            )
    }


}

export default CalendarContainer;
