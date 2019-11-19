import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './styles.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import UserHome from './components/UserHome';
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <Route path='/register' component={RegistrationForm}/>
      <PrivateRoute path="/home" component={UserHome} />
    </div>
    
  );
}

export default App;
