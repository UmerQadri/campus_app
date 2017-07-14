import React, { Component } from 'react';


class EditInfo extends Component {


constructor(){

super();

this.state={

namee: "Umer"

};


}



  render() {


    return (
      <div>
        <form>
        <input type="text" ref="name" placeholder="Full Name" value={this.state.namee}/>
        <br/>
        <input type="text" ref="education" placeholder="Education"/>
        <br/>
        <input type="text" ref="skill" placeholder="Skills"/>
        <br/>
        <input type="text" ref="overview" placeholder="Overview"/>
        </form>
      </div>
    );
  }
}

export default EditInfo;