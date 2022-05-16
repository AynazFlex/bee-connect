import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import { loginAuth } from "../../redux/authReducer";

const LoginContainer = ({ isAuth, loginAuth, isCorectlData }) =>
  isAuth ? (
    <Navigate to="/" />
  ) : (
    <Login loginAuth={loginAuth} isCorectlData={isCorectlData} />
  );

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
  isCorectlData: state.auth.isCorectlData,
});

export default connect(mapStateToProps, { loginAuth })(LoginContainer);
