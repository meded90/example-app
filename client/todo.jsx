import ReactDOM from 'react-dom';
import TodoPage from './pages/todoPage';
import React from 'react';
export default function (data) {
    const mountNode = document.getElementById("app");
    ReactDOM.render( <TodoPage {...data}/>, mountNode);
}

