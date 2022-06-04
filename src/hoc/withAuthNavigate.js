import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom"

const withAuthNavigate = (Component) => {

    const AuthNavigate = (props) => {
        if(!props.isAuth) return <Navigate to='/login' />
        return <Component />
    }

    return connect((state) => ({isAuth: state.auth.isAuthenticated}))(AuthNavigate);

};


export default withAuthNavigate;