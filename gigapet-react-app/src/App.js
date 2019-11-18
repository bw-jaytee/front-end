import React from 'react';
import { Route } from 'react-router-dom';
import './styles.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import UserHome from './components/UserHome';

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/home" component={UserHome} />
    </div>
  );
}

export default App;
