import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import NewEvent from '../components/NewEvent';
import Events from '../components/Events';
import Moment from 'moment';
import Moment2 from 'react-moment';

class CalendarContainer extends Component{

    constructor() {
        super()
        this.state = {
            dates: [],
            events: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
            showForm: false,
            title: '',
            day: '',
            time: '',
            user_id:''
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

          this.state.events.forEach((event) => {
            console.log(`event: ${event}`);
            let day = event.day
            let agenda = {};

            if (results[day]) {
                let id = event._id;
                let userId = event.user_id;
                let eventDetails = { 
                    pathname: `/users/${userId}/events/${id}`,
                  };

                agenda.title = <Link 
                    to={eventDetails}
                    >{event.title}</Link>;
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
        axios.get(`http://localhost:3001/users/${this.props.match.params.id}/events`)
            .then((res)=>{
                console.log(res.data)
                this.setState({
                    events: res.data,
                    user_id: this.props.
                    match.params.id
                })
                this.massageData();
            }).then(() => {
                 
            })
            // this.getCurrentDate();
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const {title, day, time, user_id} = this.state;
        let userId = this.state.user_id;
        console.log(123, this.state)
        console.log('this is it', userId);
        axios.post(`http://localhost:3001/users/${userId}/events`, {title, day, time, user_id})
            .then(res => {
                let createdEvent = res.data;
                this.setState({
                    events: this.state.events.concat(createdEvent),
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

    getCurrentDate=()=>{
        const startWeek = Moment().startOf('week');
        const endWeek = Moment().endOf('week');
        
        var date = startWeek.subtract(1, 'day');
        var holder=[];
        while (startWeek.isBefore(endWeek,'day')){
            holder.push({
                days: Array(7).fill(0).map(()=> date.add(1, 'day').clone())
            })
        }
        return holder;
    }

    render(){
        let testing = this.getCurrentDate();
        let dateResults = testing[0].days.map(day => {
            return <div className="col-sm days">{`${day._d}`}</div>
        })
        
        let newEvent = this.state.showForm ? <NewEvent onSubmit={this.onSubmit} handleDayChange={this.handleDayChange} handleTimeChange={this.handleTimeChange} handleTitleChange={this.handleTitleChange} massageData={this.massageData} title={this.state.title} day={this.state.day} time={this.state.time}/> : null;
        return(
            <div className="calContainer">
                <h1 className='title'>Weekly Scheduler</h1>
                <div className="calendar">
                    <div className="container">
                        <div className="row">
                            {dateResults}
                        </div>

                        <div className="row">
                            <div className="col-sm row2">
                                <Events events={this.state.sunday} />
                            </div>
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
                        </div>

                        <div className='row'>
                            <button onClick={this.toggleForm}>Create New Event</button>
                            { newEvent }
                        </div>

                    </div>
                </div>
            </div>
            )
    }
}

export default CalendarContainer;
