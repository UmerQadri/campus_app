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
                <div className="panelHeader">
                <h2>Welcome to Student Panel</h2></div>
                <ul className="navContainer">
                    <li className="navbar"><Link to="/editInfo">Personal Details</Link></li>
                    <li className="navbar"><Link to="/viewJob">Jobs</Link></li>
                    <li className="navbar"><Link to="/company">Companies</Link></li>
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

export default StudentPanel;