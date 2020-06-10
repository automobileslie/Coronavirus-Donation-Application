import React from 'react';
import DonationListingShowPage from './DonationListingShowPage';
import RequestListingShowPage from './RequestListingShowPage';

export default class Profile extends React.Component{

displayDonorListings=()=>{

    return this.props.currentUsersDonationListings.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToDonationListingShowPage(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })

}

displayRequestListings=()=>{
    return this.props.currentUsersRequestListings.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPage(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayDirectRequests=()=>{

    return this.props.directRequests.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPage(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayDirectDonations=()=>{
    return this.props.directDonations.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToDonationListingShowPage(listing)}className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayApprovedRequests=()=>{
    return this.props.approvedRequests.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToRequestListingShowPage(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
        </div>
    })
}

displayAcceptedDonations=()=>{
    return this.props.acceptedDonations.map(listing=>{
        return <div>
<p onClick= {()=>this.props.goToDonationListingShowPage(listing)} className="background-for-general-listings"><img className='general-listing' src= {require(`${listing.image}`)} alt= {listing.item}/></p>
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

            this.props.requestListingShowPageExpanded ?

            <DonationListingShowPage currentlyExpandedListing={this.props.currentlyExpandedListing}
            returnToListingsIndex={this.props.returnToListingsIndex}/>

            :

            <RequestListingShowPage currentlyExpandedListing={this.props.currentlyExpandedListing}
            returnToListingsIndex={this.props.returnToListingsIndex}/>

        )
    }
}