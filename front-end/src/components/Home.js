import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    render() {
        let users = this.state.users.map((user, i) => {
            let pathname = `/users/${user._id}/events`;
            return (
                <div key={i}>
                    <Link className="user-links" to={pathname}>{user.name}</Link>
                </div>
            )
        });
        return (
            <div className='users-div'>
                
                    <img alt="logoImg" className="orgImg" style={{height: "500px"}} src={"https://wbnsema.org/wp-content/uploads/2015/03/get-organized-banner.jpg"}/>
                    <h1 className="title">Weekly Scheduler</h1>
                <div className='users-user'>
                    
                    <h3>Select a User</h3>
                    {users}
                </div>
            </div>
        );
    }

    componentDidMount = () => {
        axios.get('http://localhost:3001/users')
            .then((res) => {
                this.setState({
                    users: res.data
                });
                console.log('users', this.state)
            })

    }
}


export default Home;