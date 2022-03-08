import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Main from './components/Main';


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
