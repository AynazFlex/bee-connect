import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import { Route, Routes } from "react-router-dom";
import { setInitialApp } from "./redux/appReducer";
import { connect } from "react-redux";
import InitialPage from "./components/Initial/InitialPage";
import Preloader from "./components/Other/Preloader";
const MainContainer = lazy(() => import("./components/Main/MainContainer"));
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = lazy(() =>
  import("./components/Messages/DialogsContainer")
);
const NewsContainer = lazy(() => import("./components/News/NewsContainer"));
const EditContainer = lazy(() => import("./components/Edit/EditContainer"));
const LoginContainer = lazy(() => import("./components/Login/LoginContainer"));

const App = (props) => {
  useEffect(() => {
    !props.isInitialized && props.setInitialApp();
  }, []);

  return !props.isInitialized ? (
    <InitialPage />
  ) : (
    <div className="wrapper">
      <NavbarContainer />
      <SidebarContainer />
      <Suspense fallback={<Preloader />}>
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
      </Suspense>
    </div>
  );
};

export default connect(mapStateToProps, { setInitialApp })(App);
