import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StoryGenerator from './components/storyGenerator';

ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<StoryGenerator />, document.getElementById('storygenerator'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
