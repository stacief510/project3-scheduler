import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CalendarContainer from '../containers/CalendarContainer';
import Event from '../components/Event';
import Home from '../components/Home';

export default(
	<div>
		<Switch>
            <Route exact path='/users' component={Home}></Route>
			<Route exact path='/users/:id/events' component={CalendarContainer}></Route>
			<Route exact path='/users/:user_id/events/:id' component={Event}></Route>
		</Switch>
	</div>
)

