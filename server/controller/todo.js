import InnerPage from '../../client/pages/todoPage';
import TodoModel from '../model/TodoModel'
import ReactDOMServer from 'react-dom/server';
import React from 'react';

export default function (req, res) {
    const props = TodoModel.getList();
    const html = ReactDOMServer.renderToString(<InnerPage {...props}/>);

    res.render('todo', {reactOutput: html, initData: JSON.stringify(props)});
}
