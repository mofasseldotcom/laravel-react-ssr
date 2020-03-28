import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Example from './components/Example';

const html = ReactDOMServer.renderToString(
    <div id="example">
        <Example />
    </div>
);

dispatch(html);
