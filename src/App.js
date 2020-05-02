import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigate from './components/SideBar';
import AllUsers from './components/AllUsers';
import SideBar from './components/SideBar';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import AllGroups from './components/AllGroups';
import CreateGroup from './components/CreateGroup';
import DeleteGroups from './components/DeleteGroups';
import UpdateGroup from './components/UpdateGroup';
import DeleteUsers from './components/DeleteUsers';

function App() {
  return (

    <Router>
      <div className="App row ">
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allusers" component={AllUsers} />
          <Route path="/allgroups" component={AllGroups} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/deleteusers" component={DeleteUsers} />
          <Route path="/updateuser/:id/:name" component={UpdateUser} />
          <Route path="/creategroup" component={CreateGroup} />
          <Route path="/deletegroups" component={DeleteGroups} />
          <Route path="/updategroup/:id/:name" component={UpdateGroup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
