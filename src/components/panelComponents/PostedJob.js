import React, { Component } from 'react';
import * as firebase from 'firebase'



class PostedJob extends Component {



constructor(){

  super();

  this.state={

    jobs: []

  };

 const rootRef = firebase.database().ref();


 rootRef.child('/jobs').on('value', snap =>{

  

  this.setState({

   jobs: snap.val()

  });



});

}







  render() {

    const jobs = Object.keys(this.state.jobs).map((key, i) => {
        return (
          <div className="view"> <p>Job Title: {this.state.jobs[key].title}</p>
           <p>Salary: {this.state.jobs[key].salary}</p>
           <p>Description: {this.state.jobs[key].desc}</p>
           </div>
        )
    })

    return (
      <div>
        {jobs}
      </div>
    );
  }
}

export default PostedJob;
