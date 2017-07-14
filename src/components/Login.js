import React, { Component } from 'react';
import * as firebase from 'firebase';
import {BrowserRouter as Router,
        Route,
        Link, withRouter} from 'react-router-dom';
import StudentPanel from "./StudentPanel";
import CompanyPanel from "./CompanyPanel";

class Login extends Component {

  constructor(){
    super();


  }


  



login(e){

  e.preventDefault();
  const email =  this.refs.email.value;
  const pass = this.refs.pass.value;
  const auth = firebase.auth();

  this.props.history.push('/studentPanel');

auth.signInWithEmailAndPassword(email, pass).then( (res)=>{

var user = firebase.auth().currentUser;

    console.log(user.displayName);
    
    const rootRef = firebase.database().ref();

    
        // save the user's profile into Firebase so we can list users,
        // use them in Security and Firebase Rules, and show profiles
        rootRef.child("users").child(user.uid).set({
          provider: "new",
          name: "NewOne",
          type: "student"
          //some more user data
            });

            this.refs.email.value = "";
            this.refs.pass.value = "";

           

}).catch(e => {alert(e.message)} );



 
          
        


}





 signOut() {

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

  }









  render() {



    return (
      <div>
       
        <form onSubmit={this.signOut.bind(this)}>
        <input type="email" ref="email" placeholder="Email" required/>
        <input type="password" ref="pass" placeholder="Password" required/>
        <button onClick={this.login.bind(this)}>Sign In</button>
        <button>Sign Out</button>
        </form>
          
      
      </div>
    );
  }
}

export default withRouter(Login);
