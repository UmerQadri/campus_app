import React, { Component } from 'react';
import PostJob from './panelComponents/PostJob';
import PostedJob from './panelComponents/PostedJob';
import ViewStudents from './panelComponents/ViewStudents';
import {BrowserRouter as Router,
        Route,
        Link} from 'react-router-dom';

class CompanyPanel extends Component {
  render() {
    return (
      <div>
        <Router>
            <div >
                <div className="panelHeader">
                <h2>Welcome to CompanyPanel</h2></div>
                <ul className="navContainer">
                    <li className="navbar"><Link to="/postJob">Post Job</Link></li>
                    <li className="navbar"><Link to="/postedJob">Posted Jobs</Link></li>
                    <li className="navbar"><Link to="/viewStudents">View Students</Link></li>
                </ul>

                
                <Route  exact path="/postJob" component={PostJob}/>
                <Route  path="/postedJob" component={PostedJob}/>
                <Route path="/viewStudents" component={ViewStudents}/>
                
                
            </div>
         </Router>
      </div>
    );
  }
}

export default CompanyPanel;
