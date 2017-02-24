/**
This is the main file run used by browserify and is run in the browser.
*/

import ReactDOM from 'react-dom';
import HomePage from './pages/home';

var mountNode = document.getElementById("react-main-mount");
ReactDOM.render( <HomePage size="200" />, mountNode);
