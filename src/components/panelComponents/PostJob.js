import React, { Component } from 'react';


class PostJob extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="jobTitle" placeholder="Job Title"/>
        <br/>
        <input type="text" ref="salary" placeholder="Salary"/>
        <br/>
        <input type="text" ref="jobDesc" placeholder="Job Description"/>
        <br/>
        <button>Post</button>
      </div>
    );
  }
}

export default PostJob;
