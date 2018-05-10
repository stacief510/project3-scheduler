import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import CalendarContainer from '../containers/CalendarContainer';
import Calendar from '../components/Calendar';

export default(
	<Switch>
		<Route exact path='/' component={CalendarContainer}></Route>
	</Switch>
)

