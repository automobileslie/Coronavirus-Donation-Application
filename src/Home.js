import React from 'react';

export default class Home extends React.Component{



state={
    currentImage: 0
}

componentDidMount=()=>{

    let settingInterval=()=>{
        if(this.state.currentImage<=1){
            this.setState({
                currentImage: this.state.currentImage + 1
                    })
        }

        else{
            this.setState({
                currentImage: this.state.currentImage-2
            })
        }
    }

        setInterval(settingInterval, 5000)
        
}

renderImages=()=>{
    const medicalSupplies = [
{img: <img  className='featured-listing' src= {require('./Images/alcohol_pads.jpg')} alt= 'box of alcohol pads'/>, name: "Alcohol Pads"},
{img: <img className='featured-listing' src= {require('./Images/bandaid_box.jpg')} alt= 'box of bandaids'/>, name: "Bandaids"},
{img: <img className='featured-listing' src= {require('./Images/mask.jpg')} alt= 'face mask'/>, name: "Face Mask"}
    ]

    return <div id= "featured-product-container">
        <p>{medicalSupplies[this.state.currentImage].img}</p>
        <p>{medicalSupplies[this.state.currentImage].name}</p>
    </div>
}




    render(){
        return(
            <React.Fragment>
        <h2 className= "heading">Welcome to the Coronavirus Donation Center</h2>
        <h3 className= "heading">Featured Listings</h3>
        {this.renderImages()}
        </React.Fragment>
        )
    }
}