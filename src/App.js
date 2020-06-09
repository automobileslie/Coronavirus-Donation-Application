import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Login from './Login';

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
    <div>
    <Router>
      
      <NavigationBar />
  
     <Switch>

       <Route exact path= '/' render={(renderProps)=> <Home {...renderProps}/>}/>
       <Route exact path= '/login' render={(renderProps)=> <Login {...renderProps}/>}></Route>
       <Route></Route>
       <Route></Route>

     </Switch>

     </Router>
     </div>
  
  );
}
}
