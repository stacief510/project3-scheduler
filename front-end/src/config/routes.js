import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CalendarContainer from '../containers/CalendarContainer';

export default(
	<Switch>
		<Route exact path='/' component={CalendarContainer}></Route>
	</Switch>
)

