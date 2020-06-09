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
to="/listings"
exact
className="navbar-link"
activeClassName="navbar-link-active"
> Listings
</NavLink>


<NavLink
to="/profile"
exact
className="navbar-link"
activeClassName="navbar-link-active"
> Profile
</NavLink>

</div>

)
}

export default NavigationBar;