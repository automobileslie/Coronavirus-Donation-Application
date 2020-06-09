import React from 'react';


export default class Listings extends React.Component{

displayTheDonationListings=()=>{
    
    return this.props.donationListings.map(donation=>{
        return <div>
<p className="background-for-general-listings"><img className='general-listing' src= {require(`${donation.image}`)} alt= {donation.item}/></p>
        </div>

    })

}

displayTheRequestListings=()=>{
    return this.props.requestListings.map(request=>{
        return <div>
<p className="background-for-general-listings"><img className='general-listing' src= {require(`${request.image}`)} alt= {request.item}/></p>
        </div>

    })
}

    render(){
        return(
            <React.Fragment>
    <h2 >Donation Listings</h2>
  
       {this.displayTheDonationListings()}

       <h2>Request Listings</h2>

       {this.displayTheRequestListings()}
      
       </React.Fragment>

        )
    }
}