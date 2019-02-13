import React from 'react';
import ReactDOM from 'react-dom';
import { UrlList } from './components/UrlList';

const App = () => (
    <UrlList/>
);

const rootElem = document.getElementById('root');
ReactDOM.render(<App/>, rootElem);
