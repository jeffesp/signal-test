// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld';
import AnotherComponent from './anothercomponent';

ReactDOM.render(
  <HelloWorld message="Goodbye, World!" />,
  document.getElementById('example')
);

ReactDOM.render(
  <AnotherComponent />,
  document.getElementById('example2')
);
