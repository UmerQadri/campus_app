import React, { Component } from 'react';


class Student extends Component {

removingTask(e){

 e.preventDefault();

this.props.handleRemoveTask(this.props.id);

}

  render() {
    return (
      <div className="view" id="small">
        <p>{this.props.name}</p>
       <p>{this.props.education}</p>
       <p>{this.props.skill}</p>
       <button className="apply">Select</button>
      </div>
    );
  }
}

export default Student;
