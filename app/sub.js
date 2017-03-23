/**
 * Created by Skipper on 2017/3/14.
 */
//我们这里使用CommonJS的风格
// function generateText() {
//   var element = document.createElement('h2');
//   element.innerHTML = "Hello h2 world";
//   return element;
// }
//
// module.exports = generateText;

// es6
// export default function() {
//   var element = document.createElement('h2');
//   element.innerHTML = "Hello h2 world hahaha";
//   return element;
// }

import React, {Component} from 'react'
import config from './config.json';
export default class Greeter extends Component {
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}
// or
// class Greeter extends Component{
//   render() {
//     return (
//       <div>
//         {config.greetText}
//       </div>
//     );
//   }
// }
//
// export default Greeter