/**
 * Created by Skipper on 2017/3/14.
 */
require('./main.scss');
// es5
// var sub = require('./sub');

// es6
import React from 'react';
import ReactDom from 'react-dom';
import Greeter from './sub';


var content = document.createElement('div');
content.setAttribute('id', 'app');
document.body.appendChild(content);
ReactDom.render(
  <Greeter />,
  document.getElementById('app')
);