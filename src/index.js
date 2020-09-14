import React, {useState} from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';


let App = () => {
  const [year, setYear] = useState(2050)
  const [manger, setManger] = useState("The Unicorn")
  const [status, setStatus] = useState("Open") 

return (
  <>
  <h1>The Unicorned</h1>
  <h2>A place for unicorns to eat popcorn</h2>
   <div>
    <h2>{year}</h2>
    <button onClick={() => setYear(year + 1)}>Next year</button>
  </div>
  <div>
    <h2>Manager on Duty: {manger}</h2>
    <button onClick={() => setManger("Unicorny")}>Change Manager</button>
  </div>
  <div>
    <h3>Status: {status}</h3>
    <button onClick={() => setStatus("Open")}>Open</button>
    <button onClick={() => setStatus("Back in 5")}>Back in 5</button>
    <button onClick={() => setStatus("Closed")}>Closed</button>
  </div>
  </>
)
}


ReactDOM.render(
<App />,
  document.getElementById('root')
);



