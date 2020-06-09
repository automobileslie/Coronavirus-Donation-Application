import React from 'react';

export default class RequestListingShowPage extends React.Component{


displayInfoAboutRequest=()=>{
        return <div className="container-for-showpage-image">
            <h1>Request</h1>
            <img className='listing-showpage-image' src= {require(`${this.props.currentlyExpandedListing.image}`)} alt= {this.props.currentlyExpandedListing.item}/>
            <p>{this.props.currentlyExpandedListing.item}</p>
            <button className= "button" onClick={this.props.returnToListingsIndex}>Return to Listings</button>

        </div>
}



render(){
    return(

        this.displayInfoAboutRequest()

    )
}

}