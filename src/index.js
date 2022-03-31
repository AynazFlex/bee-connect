import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css'
import state from './components/redux/state';
import { addPost } from './components/redux/state';

ReactDOM.render(
  <App state={state} addPost={addPost} />,
  document.getElementById('root')
);
