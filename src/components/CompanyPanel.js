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
            <div>
                <h1>Company Panel</h1>
                <h2>Welcome, Muhammad Umer</h2>
                <ul>
                    <li><Link to="/postJob">Post Job</Link></li>
                    <li><Link to="/postedJob">Posted Jobs</Link></li>
                    <li><Link to="/viewStudents">View Students</Link></li>
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
