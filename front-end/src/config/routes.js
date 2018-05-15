import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import CalendarContainer from '../containers/CalendarContainer';
import Event from '../components/Event';
import Home from '../components/Home';

export default(
	<div>
        <nav>
            <h1>Users</h1>
            <Link to="/users">Users</Link>
        </nav>
		<Switch>
            <Route exact path='/users' component={Home}></Route>
			<Route exact path='/users/:id/events' component={CalendarContainer}></Route>
			<Route exact path='/users/:id/events/:id'component={Event}></Route>
		</Switch>
	</div>
)

