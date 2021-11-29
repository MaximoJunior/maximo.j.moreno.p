import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AddUserForm } from '../components/AddUserForm/AddUserForm';
import { Departments } from '../components/Departments/Departments';
import { NavBar } from '../components/NavBar/NavBar';
import { UserList } from '../components/UserList/UserList';


export const AppRouter = () => {

    return (
        <Router>
            <NavBar />
            <div>
               <Switch>
                  <Route path="/departments" component={ Departments }/>
                  <Route path="/user-list" component={ UserList }/>
                  <Route path="/" component={ AddUserForm }/>
               </Switch>
            </div>
      </Router>
    )
}