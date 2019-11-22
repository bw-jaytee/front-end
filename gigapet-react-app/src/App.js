import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import UserHome from "./components/UserHome";
import RegistrationForm from "./components/RegistrationForm";
import FoodSummary from "./components/FoodSummary";
import FoodEdit from "./components/FoodEdit";

function App() {
  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={props =>
          localStorage.getItem("token") ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route path="/login" component={Login} />
      <Route path="/register" component={RegistrationForm} />
      <PrivateRoute path="/summary" component={FoodSummary} />
      <PrivateRoute path="/home" component={UserHome} />
      <PrivateRoute path="/editMeal/:id" component={FoodEdit} />
    </div>
  );
}

export default App;
