import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
  name: "Madrid",
  country: "Spain"
}

 let Hello = (props) => {
   console.log(Object.keys(props).length)
  return (
  <div>
  <h1>Welcome to the page of welcome!</h1>
  <h2>{props.message}</h2>
  <p>The place where unicorns rule!</p>
  <p>Unicorns currently admitted: {props.number}</p>
  </div>
  )}

ReactDOM.render(
<Hello library="React" message="Only Unicorns allowed!" number={3}/>,
  document.getElementById('root')
);


