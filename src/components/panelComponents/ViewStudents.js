import React, { Component } from 'react';
import * as firebase from 'firebase';
import Student from './Student'

class ViewStudents extends Component {

constructor(){

  super();

  this.state={

    students: []

  };

 const rootRef = firebase.database().ref();


 rootRef.child('/user').child("student").on('value', snap =>{

  

  this.setState({

   students: snap.val()

  });



});

}


  render() {

     const students = Object.keys(this.state.students).map((key, i) => {
        return (
           <Student  key={i} name={this.state.students[key].name}
                  education={this.state.students[key].education}
                  skill={this.state.students[key].skill}/>
        )
    })


    return (
      <div>
        <h1>{students}</h1>
      </div>
    );
  }
}

export default ViewStudents;
