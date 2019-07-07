import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myProfile=<div>
<h1>My Profile</h1>
<p>Name:Mary Noon Kamau</p>
<p>Gender:Female</p>
</div>
ReactDOM.render(myProfile, document.getElementById('root'));
//above const myprofile is a JSX code..calling myProfile in reactDom.render



// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
