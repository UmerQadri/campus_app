import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import StudentPanel from './components/StudentPanel';
import CompanyPanel from './components/CompanyPanel';
import ViewJobs from './components/panelComponents/ViewJobs';       
import Company from './components/panelComponents/Company';
import EditInfo from './components/panelComponents/EditInfo';   

import {BrowserRouter as Router,
        Route,
        Link, withRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <div>
        <div id="head"></div>
        

          <Route exact path="/" component={Home}/>
          <Route path ="/studentPanel" component={StudentPanel}/>
          <Route path = "/companyPanel" component={CompanyPanel}/>

          

          </div>
</Router>
        
      </div>
    );
  }
}

export default App;
