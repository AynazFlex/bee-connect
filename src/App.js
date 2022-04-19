import React from "react";
import "./App.css";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import MainContainer from "./components/Main/MainContainer";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Messages/DialogsContainer";
import News from "./components/News/News";
import EditContainer from "./components/Edit/EditContainer";
import { Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <NavbarContainer />
      <SidebarContainer />
      <Routes>
        <Route path="/" element={<MainContainer />}/>
        <Route path="/profile" element={<MainContainer />}/>
        <Route path="/friends" element={<UsersContainer />} />
        <Route path="/messages" element={<DialogsContainer />}/>
        <Route path="/news" element={<News />} />
        <Route path="/edit" element={<EditContainer />}/>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
