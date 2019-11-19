import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <>
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
