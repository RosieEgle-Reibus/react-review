import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let Lake = ({name}) => {
  return (
    <h1>Visit {name}!</h1>
  )
}

let SkiResort = ({name}) => {
  return (
    <h1>Visit {name}!</h1>
  )
}

// if(props.season === "Summer") {
//   return (
//     <Lake name="Lake Princess"/>
//   )
// } else if(props.season === "Winter") {
//   return (
//     <SkiResort name="Unicorn Mountain"/>
//   )
// }

function App(props) {
  return(
    <div>
      {props.season === "Summer" ? <Lake name="Lake Princess"/> : props.season === "Winter" ? <SkiResort name="Unicorn Mountain"/> : <h1>Come back in the winter or summer</h1>
      }
    </div>
  )
}


ReactDOM.render(
<App season="Winter "/>,
  document.getElementById('root')
);


