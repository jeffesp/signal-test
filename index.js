// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld';
import AnotherComponent from './anothercomponent';
import Signal from 'signals';


var page = {
    changed: new Signal()
};

//page.changed.add(function() { console.log("changed");})

ReactDOM.render(
  <HelloWorld page={page} />,
  document.getElementById('example')
);

ReactDOM.render(
  <AnotherComponent update={page.changed.dispatch} />,
  document.getElementById('example2')
);
