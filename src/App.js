import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Login from './Login';
import Listings from './Listings';

export default class App extends React.Component {

state={
  donationListings: [{item: "Latex Gloves", description: "protects your hands from the coronavirus", quantity: 2, location: "New York", image: "./Images/latex_gloves.jpg"}, 
  {item: "Acetaminophen", description: "brings the fever down", quantity: 1, location: "Chicago", image: "./Images/acetaminophen.jpg"},
  {item: "Mask", description: "cover your face!", quantity: 4, location: "San Francisco", image: "./Images/mask.jpg"},
  {item: "Band-aids", description: "keep the germs out of any cuts you have", quantity: 5, location: "Arizona", image: "./Images/bandaid_box.jpg"},
  {item: "Alcohol pads", description: "clean open wounds or anything the Coronavirus might have touched", quantity: 4, location: "Michigan", image: "./Images/alcohol_pads.jpg"}
],
  requestListings: [{item: "Band-aids", description: "keep the germs out of any cuts you have", quantity: 5, location: "Arizona", image: "./Images/bandaid_box.jpg"}, {item: "Alcohol pads", description: "clean open wounds or anything the Coronavirus might have touched", quantity: 4, location: "Michigan", image: "./Images/alcohol_pads.jpg"}],
  approvedRequestListings: [],
  approvedDonorListings: []
}

// componentDidMount=(){


// }


  render(){
  return (
    <div>
    <Router>
      
      <NavigationBar />
  
     <Switch>

       <Route exact path= '/' render={(renderProps)=> <Home {...renderProps}/>}/>
       <Route exact path= '/login' render={(renderProps)=> <Login {...renderProps}/>}></Route>
  <Route exact path= '/listings' render={(renderProps)=> <Listings {...renderProps} donationListings= {this.state.donationListings} requestListings= {this.state.requestListings}/>}></Route>
       <Route></Route>

     </Switch>

     </Router>
     </div>
  
  );
}
}
