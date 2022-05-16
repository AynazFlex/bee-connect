import React, { useEffect } from "react";
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import MainContainer from "./components/Main/MainContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Messages/DialogsContainer";
import EditContainer from "./components/Edit/EditContainer";
import { Route, Routes } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import NewsContainer from "./components/News/NewsContainer";
import { setInitialApp } from "./redux/appReducer";
import { connect } from "react-redux";
import InitialPage from "./components/Initial/InitialPage";

const App = (props) => {

  useEffect(() => {
    props.setInitialApp();
  }, []);

  return !props.isInitialized ? (
    <InitialPage />
  ) : (
    <div className="wrapper">
      <NavbarContainer />
      <SidebarContainer />
      <Routes>
        <Route path="/*" element={<MainContainer />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route path="/friends" element={<UsersContainer />} />
        <Route path="/messages" element={<DialogsContainer />} />
        <Route path="/news" element={<NewsContainer />} />
        <Route path="/edit" element={<EditContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});

export default connect(mapStateToProps, { setInitialApp })(App);
