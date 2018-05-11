import React, {Component} from 'react';
import MyRoutes from '../config/routes'
import Events from "../components/Events";


{/*<Events events={this.state.events}/></div>*/}
// this.state.events.map(item => {
//     <div className='calendar'>
//         <div className="row">
//             {this.state.event.title}
//         </div>
//         <div className="row">
//             {this.state.event.day}
//         </div>
//         <div className="row">
//             {this.state.event.time}
//         </div>
//     </div>
// }


const Event = (props) => {
    return <div>I AM AN EVENT</div>
}



class CalendarContainer extends Component{



    constructor() {
        super()
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        const mockEvents=[{
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
            }];

        this.setState({events: mockEvents});
        console.log(11, this.state)
    }



    render(){

        this.state.events.map(item => {
            console.log('looping over item', item)
            return (
                <div>{item.title}</div>
            )
        })

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
                                <Event/>
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
