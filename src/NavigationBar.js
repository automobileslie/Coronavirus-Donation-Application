import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar = (props) =>{

const link = {

    width: "100%",
    padding: '2em',
    margin: '0em 0em 0em',
    background: 'skyblue',
    textDecoration: 'none',
    color: 'black'
}

// const {} = props

return (

<div id= "navigation-bar">

<NavLink
to="/"
exact
style={link}
activeStyle={{
    background: 'lightgray'
}}
> Home
</NavLink>

<NavLink
to="/login"
exact
style={link}
activeStyle={{
    background: 'lightgray'
}}
> Login/Signup
</NavLink>

<NavLink
to="/donations"
exact
style={link}
activeStyle={{
    background: 'lightgray'
}}
> Donation Listings
</NavLink>

<NavLink
to="/requests"
exact
style={link}
activeStyle={{
    background: 'lightgray'
}}
> Requests for Supplies
</NavLink>


</div>

)



}

export default NavigationBar;