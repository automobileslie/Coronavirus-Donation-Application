import React from 'react';

export default class NewDirectRequestToDonateForm extends React.Component{

//this form will be revised...right now it is just a copy of another form, to start with a template

    render(){
        <div>
                    <h2>Submit a Direct Request To Meet This Need</h2>
                    <div className="container-for-new-listing-form">
                    <form onSubmit={this.formSubmitted} className="form-for-new-listings">
                    <input className="input-field-for-new-listing-form" type="text" name="item" value={this.state.item} placeholder="item to be listed" onChange={this.formCompleted}/>
                    <br></br>
                    <input className="input-field-for-new-listing-form" type="text" name="location" value={this.state.location} placeholder="your location" onChange={this.formCompleted}/>
                    <br></br>
                    <input className="input-field-for-new-listing-form" type="text" name="quantity" value={this.state.quantity} placeholder="quantity" onChange={this.formCompleted}/>
                    <br></br>
                    <input className="input-field-for-new-listing-form" type="text" name="description" value={this.state.description} placeholder="description" onChange={this.formCompleted}/>
                    <br></br>
                    <input className="input-field-for-new-listing-form" type="text" name="image" value={this.state.image} placeholder="image"/>
                    <br></br>
                    <input className="radio-button-for-new-listing-form" type="radio" id="donation" name="type" value="Donation" onChange={this.formCompleted}/>
                    <label for="donation">Donation</label>
                    <br></br>
                    <input className="radio-button-for-new-listing-form" type="radio" id="request" name="type" value="Request" onChange={this.formCompleted}/>
                    <label for="request">Request</label>
                    <br></br>
                    <input className="submit-button-for-new-listing" type="submit" value="Submit" />
                    </form>
                    </div>
            </div>
}