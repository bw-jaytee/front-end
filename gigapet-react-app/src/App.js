import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <div>
      <header>
      </header>
      <Router>
        <Route path='/register' component={RegistrationForm}/>
      </Router>
    </div>
    
  );
}

export default App;
