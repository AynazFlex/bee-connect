import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "./Login";

const LoginContainer = ({ isAuth }) =>
  isAuth ? <Navigate to="/" /> : <Login />;

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LoginContainer);
