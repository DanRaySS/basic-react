import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const elem = <h2>Hello World</h2>;

const text = 'Hello World!';

const elem = (
  <div>
    <h2 className='text'>Текст: {text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex="0">click</button>
  </div>
);

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);
