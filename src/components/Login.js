import React, { Component } from 'react';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link, withRouter
} from 'react-router-dom';
import StudentPanel from "./StudentPanel";
import CompanyPanel from "./CompanyPanel";

class Login extends Component {

  constructor() {
    super();

 
    this.state = {
  type: "student"
};

  }






  login(e) {

    e.preventDefault();

    // this.props.history.push('/companyPanel');

    const email = this.refs.email.value;
    const pass = this.refs.pass.value;
    const auth = firebase.auth();
  
    


    auth.signInWithEmailAndPassword(email, pass).then((res) => {

   
        if (this.state.type === "company"){

         this.props.history.push('./companyPanel');

        }
 
        if (this.state.type === "student"){

          this.props.history.push('./studentPanel');

        }





    }).catch(e => { alert(e.message) });



  }


handleOptionChange(changeEvent){

  this.setState({

    type: changeEvent.target.value


  })


}


  signOut() {

    firebase.auth().signOut().then(function () {
      alert("Signed Out");
    }).catch(function (error) {
      // An error happened.
    });

  }









  render() {



    return (

      
      <div id="loginContainer">

        <form onSubmit={this.signOut.bind(this)}>
          <input type="email" ref="email" placeholder="Email" required className="loginField"/>
          <input type="password" ref="pass" placeholder="Password" required className="loginField"/>
          <button onClick={this.login.bind(this)} id="buttonLogin">Sign In</button>
          <br/>
          <label className="radio">
        <input type="radio" value="student" checked={this.state.type === "student"}
        onChange={this.handleOptionChange.bind(this)} />Student</label>
        <label className="radio">
        <input type="radio" value="company" checked={this.state.type === "company"}
        onChange={this.handleOptionChange.bind(this)} />Company</label>
        
        </form>
        {/*<button onClick={this.signOut.bind(this)}>Sign Out</button>*/}
 
      </div>
    );
  }
}

export default withRouter(Login);
