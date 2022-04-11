import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Friends from "./components/Friends/Friends";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Edit from "./components/Edit/Edit";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar avatar={this.props.state.mainPage.avatar} />
        <Sidebar
          avatar={this.props.state.mainPage.avatar}
          profile={this.props.state.editPage.profile}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                state={this.props.state.mainPage.main}
                dispatch={this.props.dispatch}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Main
                state={this.props.state.mainPage.main}
                dispatch={this.props.dispatch}
              />
            }
          />
          <Route path="/friends" element={<Friends />} />
          <Route 
            path="/messages" 
            element={
              <Messages
                state={this.props.state.messagesPage.messagesPage}
                dispatch={this.props.dispatch}
              />
            } 
          />
          <Route path="/news" element={<News />} />
          <Route
            path="/edit"
            element={
              <Edit
                state={this.props.state.editPage.edit}
                dispatch={this.props.dispatch}
              />
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
