import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { loginAuth } from "../../redux/authReducer";
import { useNavigate } from "react-router-dom";

const LoginContainer = ({isAuth, loginAuth, isCorectlData, captchaUrl }) => {

  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate(-1);
  }, [isAuth])

  return <Login loginAuth={loginAuth} isCorectlData={isCorectlData} captchaUrl={captchaUrl} />
}

const mapStateToProps = (state) => {
  //console.log("login mstp");
  return {
    isAuth: state.auth.isAuthenticated,
    isCorectlData: state.auth.isCorectlData,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { loginAuth })(LoginContainer);
