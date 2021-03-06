import React, { Component } from 'react';
import * as firebase from 'firebase'


class Signup extends Component {

constructor(props){
super();
this.state = {
  selectedOption: "student"
};
}

signup(e){

e.preventDefault();
              const email =  this.refs.email.value;
              const pass = this.refs.pass.value;
              const auth = firebase.auth();
              const rootRef = firebase.database().ref();

              auth.createUserWithEmailAndPassword(email, pass).then( (res) =>{

                var user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: this.refs.name.value
                }).then(function() {
                    // Update successful.
                }, function(error) {
                    // An error happened.
                });

              

                rootRef.child("user").child(this.state.selectedOption).child(user.uid).set({

                  
                  type: this.state.selectedOption,
                  name: this.refs.name.value,
                  

                });

                this.refs.name.value = "";
                this.refs.email.value = "";
                this.refs.pass.value = "";

              }).catch(e =>{alert(e.message)});

              


  

}

handleOptionChange(changeEvent){

  this.setState({

    selectedOption: changeEvent.target.value


  })


}

  render() {
    return (
      <div id="signupContainer">
        <h1>New here? Sign Up!</h1>
        <form onSubmit={this.signup.bind(this)}>
        <input type="text" ref="name" placeholder="Full Name" required className="signupField"/>
        <br/>
        <input type="text" ref="email" placeholder="Email" required className="signupField"/>
        <br/>
        <input type="text" ref="pass" placeholder="Password" required className="signupField"/>
        <br/>
        <label>
        <input type="radio" value="student" checked={this.state.selectedOption === "student"}
        onChange={this.handleOptionChange.bind(this)} />Student</label>
        <label>
        <input type="radio" value="company" checked={this.state.selectedOption === "company"}
        onChange={this.handleOptionChange.bind(this)} />Company</label>
        <br/>
        <button className="buttonSignUp">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;