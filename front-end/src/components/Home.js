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
                    <img style={{width: "500px", height: "500px"}} src={"https://previews.123rf.com/images/dolgachov/dolgachov1702/dolgachov170200988/71148749-international-group-of-happy-people-holding-hands.jpg"}/>
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
                });
                console.log('users', this.state)
            })

    }
}


export default Home;