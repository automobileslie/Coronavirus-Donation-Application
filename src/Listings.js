import React from 'react';
import DonationListingShowPage from './DonationListingShowPage';
import RequestListingShowPage from './RequestListingShowPage';


export default class Listings extends React.Component{

displayTheDonationListings=()=>{
    
    return this.props.donationListings.map(donation=>{
        return <div>
<p onClick={()=>this.props.goToDonationListingShowPage(donation)} className="background-for-general-listings"><img className='general-listing' src= {require(`${donation.image}`)} alt= {donation.item}/></p>
        </div>

    })

}

displayTheRequestListings=()=>{
    return this.props.requestListings.map(request=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPage(request)} className="background-for-general-listings"><img className='general-listing' src= {require(`${request.image}`)} alt= {request.item}/></p>
        </div>

    })
}

    render(){
        return(

            !this.props.aShowPageIsExpanded ?

                <div>
                    <h2 >Donation Listings</h2>
                    {this.displayTheDonationListings()}
                    <h2>Request Listings</h2>
                    {this.displayTheRequestListings()}
                </div>
            :
                this.props.donationListingShowPageExpanded ?
                <DonationListingShowPage currentlyExpandedListing={this.props.currentlyExpandedListing}
                returnToListingsIndex={this.props.returnToListingsIndex}/> 
                :
                <RequestListingShowPage currentlyExpandedListing={this.props.currentlyExpandedListing}
                returnToListingsIndex={this.props.returnToListingsIndex}/>
                       
        )
    }
}