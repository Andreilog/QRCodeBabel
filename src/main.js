import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <h1>Hello world!!</h1>
    </div>);

const root = document.getElementById('root');
console.log(root);

ReactDOM.render(<App/>, root);
