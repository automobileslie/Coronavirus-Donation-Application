import React from 'react';

export default class DonationListingShowPage extends React.Component{


displayInfoAboutRequest=()=>{
    return <div className="div-for-showpage">
        <h1>Donation</h1>
        <div className="div-for-showpage-info">
            <p className="showpage-item-name">{this.props.currentlyExpandedListing.item}</p>
            <p className="showpage-item-quantity">{this.props.currentlyExpandedListing.quantity}</p>
        </div>

        <p className="showpage-item-description">{this.props.currentlyExpandedListing.description}</p>

        <img className='listing-showpage-image' src= {require(`${this.props.currentlyExpandedListing.image}`)} alt= {this.props.currentlyExpandedListing.item}/>

        <div className="listing-showpage-location-container">
        <h3>Location</h3>
        <p className="listing-showpage-location">{this.props.currentlyExpandedListing.location}</p>
        </div>
        <button className= "button" onClick={this.props.returnToListingsIndex}>Return to Listings</button>
    </div>
}
    
render(){
    return(
        this.displayInfoAboutRequest()
        )
}

}