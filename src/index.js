import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



let Checkbox = () => {
   let [checked, toggle] = useReducer(
     checked => !checked, 
     false)
     
  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
    </>
  )
}

let DailySpecials = () => {
  const [val, setVal] = useState("")
  const [val2, setVal2] = useState("")

useEffect(() => {
  console.log(`field 1: ${val}`)
} , [val])

useEffect(() => {
  console.log(`field 2: ${val2}`) 
} , [val2])

  return (
    <div>
      <label>
        Flavor of the Day
      <input value={val} onChange={e => setVal(e.target.value)}/>
      </label>
      <label>
        Color of the Day
      <input value={val2} onChange={e => setVal2(e.target.value)}/>
      </label>
    </div>
  )
}

let CatFact = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`https://cat-fact.herokuapp.com/facts/58e00af60aac31001185ed1d`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error)
  }, [])
  if(data) {
    return (
      <div>{data.text}</div>
    )
  } return (
    null
  )
}



let App = () => {
  const [year, setYear] = useState(2050)
  const [manger, setManger] = useState("The Onecorn")
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
        <Checkbox />
        <DailySpecials />
        <CatFact />
      </>
)
}


ReactDOM.render(
      <App />,
  document.getElementById('root')
);



