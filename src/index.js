import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalendarContainer from './containers/CalendarContainer';
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
	 <CalendarContainer />
	</Router>, document.getElementById('root'));
registerServiceWorker();
