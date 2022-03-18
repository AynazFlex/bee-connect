import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Friends from "./components/Friends/Friends";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/profile" element={<Main />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
