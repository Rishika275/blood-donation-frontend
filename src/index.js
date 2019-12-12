import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BBHomePage from './Blood-Bank/BBHomePage'
import * as serviceWorker from './serviceWorker';
import DonorHomePage  from './Donor/DonorHomePage';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
	<Router>
	  <div>
		<Route exact path="/" component={App} />
		<Route path="/donor" component={DonorHomePage} />
		<Route path="/blood-bank" component={BBHomePage} />
	  </div>
	</Router>
  )
  ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
