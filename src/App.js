import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';


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
