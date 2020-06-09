import React from 'react';

export default class DonationListingShowPage extends React.Component{


    displayInfoAboutRequest=()=>{
        return <div>
            <h2>Request</h2>
            <p>{this.props.currentlyExpandedListing.item}</p>
        </div>
}





    
render(){
    return(
        this.displayInfoAboutRequest()
        )
}







}