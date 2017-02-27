/**
This is the main file run used by browserify and is run in the browser.
*/

import ReactDOM from 'react-dom';
import InnerPage from './pages/inner';
import React from 'react';
export default function (data) {
    const mountNode = document.getElementById("app");
    ReactDOM.render( <InnerPage {...data}/>, mountNode);
}

