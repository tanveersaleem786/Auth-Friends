import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';
//import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';


function App() {

  const Logout = () => {
    localStorage.removeItem('token');  
    //props.history.push("/login");     
  }
  const token = localStorage.getItem('token')
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
           
            {/* { token === null ? (
               <Link to="/login">Login{token}</Link>
              ) : ( 
              <Link to="/logout" onClick={() => Logout()}>Logout{token}</Link>
              )} */}
              <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendsList">Friends List</Link>
          </li>
          <li>
            <Link to="/add">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friendsList" component={FriendsList} />
          <PrivateRoute exact path="/add" component={AddFriend} />     
          <PrivateRoute exact path="/edit" component={UpdateFriend} />  
                          
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;