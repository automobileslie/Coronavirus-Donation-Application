import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Login from './Login';
import Listings from './Listings';

export default class App extends React.Component {

state={
  donationListings: [{item: "Latex Gloves", description: "protects your hands from the coronavirus", quantity: "2 boxes", location: "New York", image: "./Images/latex_gloves.jpg"}, 
  {item: "Acetaminophen", description: "brings the fever down", quantity: "1 bottle", location: "Chicago", image: "./Images/acetaminophen.jpg"},
  {item: "Mask", description: "cover your face!", quantity: "4 boxes", location: "San Francisco", image: "./Images/mask.jpg"},
  {item: "Band-aids", description: "keep the germs out of any cuts you have", quantity: "5 boxes", location: "Arizona", image: "./Images/bandaid_box.jpg"},
  {item: "Alcohol pads", description: "clean open wounds or anything the Coronavirus might have touched", quantity: "4 boxes", location: "Michigan", image: "./Images/alcohol_pads.jpg"}
],
  requestListings: [{item: "Band-aids", description: "keep the germs out of any cuts you have", quantity: "5 boxes", location: "Arizona", image: "./Images/bandaid_box.jpg"}, 
  {item: "Alcohol pads", description: "clean open wounds or anything the Coronavirus might have touched", quantity: "4 boxes", location: "Michigan", image: "./Images/alcohol_pads.jpg"}],
  approvedRequestListings: [],
  approvedDonorListings: [],

  donationListingShowPageExpanded: false,
  requestListingShowPageExpanded: false,
  aShowPageIsExpanded: false,
  currentlyExpandedListing: []
}

// componentDidMount=(){


// }

goToDonationListingShowPage=(donation)=>{
  this.setState({
    donationListingShowPageExpanded: true,
    requestListingShowPageExpanded: false,
    aShowPageIsExpanded: true,
    currentlyExpandedListing: donation
  })
}

goToRequestListingShowPage=(request)=>{
  this.setState({
    requestListingShowPageExpanded: true,
    donationListingShowPageExpanded: false,
    aShowPageIsExpanded: true,
    currentlyExpandedListing: request   
  })
}

returnToListingsIndex=()=>{
  this.setState({
    currentlyExpandedListing: [],
    aShowPageIsExpanded: false,
    requestListingShowPageExpanded: false,
    donationListingShowPageExpanded: false

  })
}


  render(){
  return (
    <div>
    <Router>
      
      <NavigationBar returnToListingsIndex={this.returnToListingsIndex}/>
  
     <Switch>

      <Route exact path= '/' render={(renderProps)=> <Home {...renderProps}/>}/>
      <Route exact path= '/login' render={(renderProps)=> <Login {...renderProps}/>}></Route>
      <Route exact path= '/listings' render={(renderProps)=> <Listings {...renderProps} donationListings= {this.state.donationListings} 
      requestListings= {this.state.requestListings}
      goToRequestListingShowPage={this.goToRequestListingShowPage}
      goToDonationListingShowPage={this.goToDonationListingShowPage}
      aShowPageIsExpanded={this.state.aShowPageIsExpanded}
      currentlyExpandedListing={this.state.currentlyExpandedListing}
      returnToListingsIndex={this.returnToListingsIndex}
      donationListingShowPageExpanded={this.state.donationListingShowPageExpanded}
      requestListingShowPageExpanded={this.state.requestListingShowPageExpanded}/>}></Route>
      <Route></Route>

     </Switch>

     </Router>
     </div>
  
  );
}
}
