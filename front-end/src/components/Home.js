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
                <li key={i}>
                    <Link to={pathname}>{user.name}</Link>
                </li>
            )
        });
        return (
            <div className='users'>
                <h2>Users</h2>
                <ul className='users-user'>
                    {users}
                </ul>
            </div>
        );
    }

    componentDidMount = () => {
        axios.get('http://localhost:3001/users')
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })

    }
}


export default Home;