import React, { Component } from 'react';
import * as firebase from 'firebase';

class PostJob extends Component {


pushData(e){
  e.preventDefault();

    const user = firebase.auth().currentUser;
const rootRef = firebase.database().ref().child('/jobs').push();

    rootRef.set({

          companyID: user.uid,
          title: this.refs.jobTitle.value,
          salary: this.refs.salary.value,
          desc: this.refs.jobDesc.value


    });
          

  }






  render() {
    return (
      <div className="info">
        <input type="text" ref="jobTitle" placeholder="Job Title" className="signupField"/>
        <br/>
        <input type="text" ref="salary" placeholder="Salary" className="signupField"/>
        <br/>
        <input type="text" ref="jobDesc" placeholder="Job Description" className="signupField"/>
        <br/>
        <button onClick={this.pushData.bind(this)} className="buttonSignUp">Post</button>
      </div>
    );
  }
}

export default PostJob;
