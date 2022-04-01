import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Friends from "./components/Friends/Friends";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar avatar={this.props.state.avatar} />
        <Sidebar
          avatar={this.props.state.avatar}
          profile={this.props.state.profile}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                state={this.props.state.main}
                addPost={this.props.addPost}
                changeEntryField={this.props.changeEntryField}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Main
                state={this.props.state.main}
                addPost={this.props.addPost}
                changeEntryField={this.props.changeEntryField}
              />
            }
          />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
