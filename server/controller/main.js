import HomePage from '../../client/pages/squarePage';
import SquareModel from '../model/SquareModel'
import ReactDOMServer from 'react-dom/server';
import React from 'react';

export default function (req, res) {
    const props = SquareModel.getSize();
    const html = ReactDOMServer.renderToString(<HomePage {...props}/>);

    res.render('square', {reactOutput: html,initData:JSON.stringify(props)});
}
