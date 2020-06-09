import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavigationBar = (props) =>{

return (

<div id= "navigation-bar">

<NavLink
to="/"
exact
className="navbar-link"
activeClassName="navbar-link-active"
> Home
</NavLink>

<NavLink
to="/login"
exact
className="navbar-link"
activeClassName="navbar-link-active"
> Login/Signup
</NavLink>

<NavLink
to="/donations"
exact
className="navbar-link"
activeClassName="navbar-link-active"
> Donations
</NavLink>

<NavLink
to="/requests"
exact
className="navbar-link"
activeClassName="navbar-link-active"
> Requests
</NavLink>


</div>

)



}

export default NavigationBar;