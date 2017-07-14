import React, { Component } from 'react';
import {BrowserRouter as Router,
        Route,
        Link, withRouter} from 'react-router-dom';
// import EditInfo from './panelComponents/EditInfo';
import ViewJobs from './panelComponents/ViewJobs';       
import Company from './panelComponents/Company';
import EditInfo from './panelComponents/EditInfo';  
 


class StudentPanel extends Component {
  render() {
    return (
        <div>
        <Router>
            <div>
                <h1>Student Panel</h1>
                <h2>Welcome, Muhammad Umer</h2>
                <ul>
                    <li><Link to="/editInfo">Personal Details</Link></li>
                    <li><Link to="/viewJob">Jobs</Link></li>
                    <li><Link to="/company">Companies</Link></li>
                </ul>

                          

          
                <Route exact path="/editInfo" component={EditInfo}/>
                <Route path="/viewJob" component={ViewJobs}/>
                <Route path="/company" component={Company}/>
               
            </div>
         </Router>
         
         </div>  
    );
  }
}

export default withRouter(StudentPanel);