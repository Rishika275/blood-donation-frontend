import React from 'react';
import Header from './header';
import Slideshow, {Introduction, BasicRequirementsForBD} from './HomepageComponents';
import Footer from './Footer';

class Homepage extends React.Component {
  render(){
	  console.log(this.props);
	return (
		<div>
		  <Header {...this.props}/>
		  <br></br>
		  <Slideshow />
		  <Introduction/>
		  <BasicRequirementsForBD/>
		  <Footer/>
	
		</div>
	  );
  }
}

export default Homepage;
