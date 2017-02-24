import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import React from 'react';
// helper function for rendering a view with React
export function reactRender(res, СomponentClass, props) {
    const html = ReactDOMServer.renderToString(<СomponentClass {...props}/>);

    res.render('layout', {reactOutput: html});
}
