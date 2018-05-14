import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CalendarContainer from '../containers/CalendarContainer';

export default(
	<Switch>
		<Route exact path='/' component={CalendarContainer}></Route>
	    <Route exact path='/events' ></Route>
	</Switch>
)

