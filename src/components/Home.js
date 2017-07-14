import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter as Router,
        Route,
        Link, withRouter} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>

       
          <div>
        <div id="this"><p id="heading">Campus Recruitment System</p><Login/></div>
        <Signup/>

          </div>

        
      </div>
    );
  }
}

export default withRouter(Home);
