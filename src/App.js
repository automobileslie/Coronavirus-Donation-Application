import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';

export default class App extends React.Component {

state={
  donationListings: [],
  requestListings: [],
  approvedRequestListings: [],
  approvedDonorListings: []
}

// componentDidMount=(){


// }


  render(){
  return (
    <Router>
      
      <NavigationBar />
  
     <Switch>

       <Route exact path= '/' render={(renderProps)=> <Home {...renderProps}/>}/>
       <Route></Route>
       <Route></Route>
       <Route></Route>

     </Switch>

     </Router>
  
  );
}
}
