/**
This is the main file run used by browserify and is run in the browser.
*/

import ReactDOM from 'react-dom';
import HomePage from './pages/home';
import React, {PureComponent, PropTypes} from 'react';
var mountNode = document.getElementById("app");
ReactDOM.render( <HomePage size={200}/>, mountNode);
