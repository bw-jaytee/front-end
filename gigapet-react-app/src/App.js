import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import './App.css';
import './styles.css';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import UserHome from './components/UserHome';
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <div className="App">
      <Redirect exact path="/" to="/login"/>
      <Route path="/login" component={Login}/>
      <Route path='/register' component={RegistrationForm}/>
      <PrivateRoute path="/home" component={UserHome} />
    </div>
    
  );
}

export default App;
