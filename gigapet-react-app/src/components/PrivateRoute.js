import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <>
    <h2>In PrivateRouter</h2>
<Route
{...rest}
render={()=> {
    if (localStorage.getItem("token")){
        return <Component rest={rest} />
    } else {
        return <Redirect to="/login" />;
    }
}}
/>
    </>
    );
};

export default PrivateRoute;

