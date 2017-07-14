import React, { Component } from 'react';
import * as firebase from 'firebase'

class Company extends Component {

constructor(){

  super();

  this.state={

    companies: []

  };

 const rootRef = firebase.database().ref();


 rootRef.child('/user').child('company').on('value', snap =>{

  

  this.setState({

   companies: snap.val()

  });



});

}






  render() {


    const companies = Object.keys(this.state.companies).map((key, i) => {
        return (
           <div className="view"> <p>Name: {this.state.companies[key].name}</p>
          
           </div>
        )
    })





    return (
      <div>
        {companies}
      </div>
    );
  }
}

export default Company;