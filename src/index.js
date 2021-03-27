import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from '../src/setting_text_color/Main';
import Form from '../src/form/Form'
import MainTDL from '../src/todolist/MainTDL'
import reportWebVitals from './reportWebVitals';
import App from './App'
import HomeRouter from './router/HomeRouter'
import Test from './router/Test'


ReactDOM.render(
  <React.StrictMode>
    <HomeRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
