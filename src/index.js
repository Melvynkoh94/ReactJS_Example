import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
//import * as serviceWorker from './serviceWorker';//not important ecause it is for offline content

//the App refers to App.js
ReactDOM.render(<App />, document.getElementById('root')); //pointing to <div id="root"></div>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
