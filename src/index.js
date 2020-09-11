import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Madrid",
  country: "Spain"
}

ReactDOM.render(
  <div><h1 id="heading" className="cool-text">Hello from {city.name}, {city.country}!</h1>
 <ul>
   <li>Puppies</li>
  <li> Unicorns</li>
  <li>Rainbows!</li>
 </ul>
 </div>,
  document.getElementById('root')
);


