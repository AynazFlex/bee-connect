import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"

const LoginContainer = ({ isAuth }) => isAuth ? <Navigate to='/' /> : <h1>Login</h1>

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthenticated,
});


export default connect(mapStateToProps)(LoginContainer);
