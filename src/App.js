import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Friends from "./components/Friends/Friends";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Edit from "./components/Edit/Edit"
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar avatar={this.props.store.getState().avatar} />
        <Sidebar
          avatar={this.props.store.getState().avatar}
          profile={this.props.store.getState().profile}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                state={this.props.store.getState().main}
                addPost={this.props.store.addPost.bind(this.props.store)}
                changeEntryField={this.props.store.changeEntryField.bind(this.props.store)}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Main
                state={this.props.store.getState().main}
                addPost={this.props.store.addPost.bind(this.props.store)}
                changeEntryField={this.props.store.changeEntryField.bind(this.props.store)}
              />
            }
          />
          <Route path="/friends" element={<Friends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/edit" element={<Edit
            changeFormEdit={this.props.store.changeFormEdit.bind(this.props.store)}
            commitFormEdit={this.props.store.commitFormEdit.bind(this.props.store)} 
            state={this.props.store.getState().edit}/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
