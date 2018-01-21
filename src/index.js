import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App text={'new text from prop'} cat={5} />,
    document.getElementById('root')
);
