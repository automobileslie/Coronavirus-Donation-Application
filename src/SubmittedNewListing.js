import React from 'react';

export default class SubmittedNewListing extends React.Component{




render(){
return(

<div>
    <span className="submitted-new-listing-container">
<i role="img" className="submitted-new-listing-icon">&#10004;</i>


<h1>Your listing has been submitted.</h1>

<button id="return-to-listings" onClick={this.props.returnToListingsIndex}>Return to Listings</button>
</span>

</div>


)
}
}