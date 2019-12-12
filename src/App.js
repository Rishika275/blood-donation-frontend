import React from 'react';
import Homepage from './Homepage'
import { BrowserRouter, Route } from "react-router-dom";
import DonorHomepage from './Donor/DonorHomePage';
import BBHomePage from './Blood-Bank/BBHomePage';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/donor' component={DonorHomepage} />
				<Route exact path='/blood-bank' component={BBHomePage} />
			</BrowserRouter>
		)
	}
}

export default App;
