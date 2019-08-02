import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = <h1>Hello, world!</h1>;
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
