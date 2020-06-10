import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Login from './Login';
import Listings from './Listings';
import Profile from './Profile';

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
  
  approvedRequests: [{item: "Latex Gloves", description: "protects your hands from the coronavirus", quantity: "2 boxes", location: "New York", image: "./Images/latex_gloves.jpg"}],
 
  acceptedDonations: [{item: "Mask", description: "cover your face!", quantity: "4 boxes", location: "San Francisco", image: "./Images/mask.jpg"}],
  
  directRequests: [{item: "Acetaminophen", description: "brings the fever down", quantity: "1 bottle", location: "Chicago", image: "./Images/acetaminophen.jpg"},
  {item: "Mask", description: "cover your face!", quantity: "4 boxes", location: "San Francisco", image: "./Images/mask.jpg"}],
  
  directDonations: [{item: "Band-aids", description: "keep the germs out of any cuts you have", quantity: "5 boxes", location: "Arizona", image: "./Images/bandaid_box.jpg"},
  {item: "Alcohol pads", description: "clean open wounds or anything the Coronavirus might have touched", quantity: "4 boxes", location: "Michigan", image: "./Images/alcohol_pads.jpg"}],

  currentUsersDonationListings: [{item: "Acetaminophen", description: "brings the fever down", quantity: "1 bottle", location: "Chicago", image: "./Images/acetaminophen.jpg"}],

  currentUsersRequestListings: [{item: "Mask", description: "cover your face!", quantity: "4 boxes", location: "San Francisco", image: "./Images/mask.jpg"}],

  donationListingShowPageExpanded: false,
  requestListingShowPageExpanded: false,
  aShowPageIsExpanded: false,
  currentlyExpandedListing: [],
  profileListingExpanded: false,
  createdANewListing: false
}

// componentDidMount=(){


// }

goToDonationListingShowPage=(donation)=>{
  this.setState({
    donationListingShowPageExpanded: true,
    requestListingShowPageExpanded: false,
    aShowPageIsExpanded: true,
    currentlyExpandedListing: donation,
    createdANewListing: false
  })
}

goToRequestListingShowPage=(request)=>{
  this.setState({
    requestListingShowPageExpanded: true,
    donationListingShowPageExpanded: false,
    aShowPageIsExpanded: true,
    currentlyExpandedListing: request,  
    createdANewListing: false

  })
}

returnToListingsIndex=()=>{
  this.setState({
    currentlyExpandedListing: [],
    aShowPageIsExpanded: false,
    requestListingShowPageExpanded: false,
    donationListingShowPageExpanded: false,
    profileListingExpanded: false,
    createdANewListing: false
  })
}

createANewListing=(listing)=>{

  if(listing.type==="Donation"){
    this.setState({
    donationListings: [...this.state.donationListings, listing],
    createdANewListing: true
  })

  }
  else if(listing.type==="Request"){
    this.setState({
    requestListings: [...this.state.donationListings, listing],
    createdANewListing: true
    })
  }
}

goToDonationListingShowPageFromProfile=(donation)=>{
  this.setState({
    donationListingShowPageExpanded: true,
    requestListingShowPageExpanded: false,
    aShowPageIsExpanded: true,
    currentlyExpandedListing: donation,
    profileListingExpanded: true,
    createdANewListing: false
  })
}

goToRequestListingShowPageFromProfile=(request)=>{
  this.setState({
    requestListingShowPageExpanded: true,
    donationListingShowPageExpanded: false,
    aShowPageIsExpanded: true,
    currentlyExpandedListing: request   ,
    profileListingExpanded: true,
    createdANewListing: false
  })
}

createNewDirectRequestForItem=()=>{

}

createNewDirectRequestToDonate=()=>{

}


  render(){

    console.log(this.state.createdANewListing)
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
      requestListingShowPageExpanded={this.state.requestListingShowPageExpanded}
      createANewListing={this.createANewListing}
      profileListingExpanded={this.state.profileListingExpanded}
      createdANewListing={this.state.createdANewListing}/>}></Route>

      <Route exact path= '/profile' render={(renderProps)=> <Profile {...renderProps}
      directRequests={this.state.directRequests} 
      directDonations={this.state.directDonations}
      approvedRequests={this.state.approvedRequests} 
      acceptedDonations={this.state.acceptedDonations}
      currentUsersDonationListings={this.state.currentUsersDonationListings}
      currentUsersRequestListings={this.state.currentUsersRequestListings}
      goToRequestListingShowPageFromProfile={this.goToRequestListingShowPageFromProfile}
      goToDonationListingShowPageFromProfile={this.goToDonationListingShowPageFromProfile}
      aShowPageIsExpanded={this.state.aShowPageIsExpanded}
      requestListingShowPageExpanded={this.state.requestListingShowPageExpanded}
      donationListingShowPageExpanded={this.state.donationListingShowPageExpanded}
      currentlyExpandedListing={this.state.currentlyExpandedListing}
      returnToListingsIndex={this.returnToListingsIndex}
      profileListingExpanded={this.state.profileListingExpanded}/>}></Route>

     </Switch>

     </Router>
     </div>
  
  );
}
}
