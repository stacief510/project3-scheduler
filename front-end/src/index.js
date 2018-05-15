import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CalendarContainer from './containers/CalendarContainer';
import App from './App';
import routes from './config/routes'
import {BrowserRouter as Router} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
	 <App />
	</Router>, document.getElementById('root'));
registerServiceWorker();
