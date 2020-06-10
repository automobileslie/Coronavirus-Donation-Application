import React from 'react';
import ListingShowPage from './ListingShowPage';

export default class Profile extends React.Component{

   // Right now, this is displaying the profile for donors and receivers, but this can be conditionally rendered depending on what type of account the user has.

displayDonorListings=()=>{

    return this.props.currentUsersDonationListings.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToDonationListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })

}

displayRequestListings=()=>{
    return this.props.currentUsersRequestListings.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayDirectRequests=()=>{

    return this.props.directRequests.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayDirectDonations=()=>{
    return this.props.directDonations.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToDonationListingShowPageFromProfile(listing)}className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayApprovedRequests=()=>{
    return this.props.approvedRequests.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayAcceptedDonations=()=>{
    return this.props.acceptedDonations.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToDonationListingShowPageFromProfile(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

    render(){
        return(

            !this.props.aShowPageIsExpanded ?

            <div className="profile-page-container">
            <h1>Donor Page</h1>
            <h2>My Listings</h2>
            {this.displayDonorListings()}
            <h2>Direct Requests</h2>
            {this.displayDirectRequests()}
            <h2>Accepted</h2>
            {this.displayAcceptedDonations()}
            <h1>Requester Page</h1>
            <h2>My Requests</h2>
            {this.displayRequestListings()}
            <h2>Direct Donations</h2>
            {this.displayDirectDonations()}
            <h2>Approved</h2>
            {this.displayApprovedRequests()}
            </div> 

            :


            <ListingShowPage currentlyExpandedListing={this.props.currentlyExpandedListing}
            returnToListingsIndex={this.props.returnToListingsIndex}
            donationListingShowPageExpanded={this.props.donationListingShowPageExpanded}
            profileListingExpanded={this.props.profileListingExpanded}/>
        )
    }
}