import React, { Component } from 'react';
import * as firebase from 'firebase';

class EditInfo extends Component {


constructor(){

super();

const user = firebase.auth().currentUser;




this.state={

name: user.displayName,
education: "",
skill: "",
overview: ""

};


}

componentDidMount(){
const user = firebase.auth().currentUser;
const rootRef = firebase.database().ref();

rootRef.child('/user').child('student').child(user.uid).on('value', snap =>{

  

  this.setState({

    education: snap.val().education,
skill: snap.val().skill,
overview: snap.val().overview 

  });

});



}

saveData(e){
e.preventDefault();

  const rootRef = firebase.database().ref();
const user = firebase.auth().currentUser;

  if (this.refs.name.value !== user.displayName){

    user.updateProfile({
                    displayName: this.refs.name.value
                }).then(function() {
                    // Update successful.
                }, function(error) {
                    // An error happened.
                });

  }
    

  rootRef.child("user").child("student").child(user.uid).set({

    


    name: this.refs.name.value,
    education: this.refs.education.value,
    skill: this.refs.skill.value,
    overview: this.refs.overview.value

  });


}


handleOptionChange(clickedField, changeEvent){

  if (clickedField === "name"){

    this.setState({

    name: changeEvent.target.value

 });

 

}
else if (clickedField === "education"){

this.setState({

    education: changeEvent.target.value

 });

}

else if (clickedField === "skill"){

this.setState({

    skill: changeEvent.target.value

 });

}

else if (clickedField === "overview"){

this.setState({

    overview: changeEvent.target.value

 });

}


}

getData(){


const user = firebase.auth().currentUser;
const rootRef = firebase.database().ref();

return rootRef.child('/user').child(user.uid).once('value').then(function(snapshot){

  var userData = snapshot.val();
});


}

  render() {


    return (
      <div className="info">
        <form onSubmit={this.saveData.bind(this)}>
        <input type="text" ref="name" placeholder="Full Name" value={this.state.name} onChange={this.handleOptionChange.bind(this, "name")} className="signupField"/>
        <br/>
        <input type="text" ref="education" placeholder="Education" value={this.state.education} onChange={this.handleOptionChange.bind(this, "education")} className="signupField"/>
        <br/>
        <input type="text" ref="skill" placeholder="Skills" value={this.state.skill} onChange={this.handleOptionChange.bind(this, "skill")} className="signupField"/>
        <br/>
        <input type="text" ref="overview" placeholder="Overview" value={this.state.overview} onChange={this.handleOptionChange.bind(this, "overview")} className="signupField"/>
        <br/>
        <button className="buttonSignUp">Save</button>
        </form>
      </div>
    );
  }
}

export default EditInfo;