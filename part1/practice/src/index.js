import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';


const INITIAL_STATE = {
  left: 0,
  right: 0, 
}
const WarningNotUsed = () => {
  return <h1>Todavia no se ha utilizado el contador</h1>
}

/*
If you want to debug in React you can use the debugger declaration
or use the dev tools of Chrome, where you can see and upload states or props
*/

const ListOfClicks = ({clicks}) => {
  //debugger;
  return <p>{clicks.join(', ')}</p>
}

const App = (props) => {
  /*
  const [leftCounter, setLeftCounter] = useState(0);
  const [rightCounter, setRightCounter] = useState(0);
  
  
  Normally is best to use atomic states, the most isolated states we have the better will be for the future understanding
  of the code, but you may need to use compound states such as objects, as is stated below:
  */

  const [counters, setCounters] = useState(INITIAL_STATE)
  const [clicks, setClicks] = useState([])


  const handleClick = (params) => {
    return () => {
      //We can use the spread operator to maintain all the attributes of the objects
      if (params === 'left') setCounters({
        ...counters,
        left: counters.left + 1,
      })
      else if (params === 'right') setCounters({
        ...counters,
        right: counters.right + 1,
      });
      setClicks((prevClicks) => {
        //return prevClicks.concat(params)
        //Or we could use the spread operator 
        return [...prevClicks, params];
      })
      
    }

  }

  const handleReset = () => {
    setCounters(INITIAL_STATE)
    setClicks([])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClick('left')}>Left</button>
      <button onClick={handleClick('right')}>Right</button>
      {counters.right}
      <p>Number of clicks: {clicks.length}</p> 
      <p>The last click was: {clicks[clicks.length-1]}</p>
      {clicks.length === 0 
      ? <WarningNotUsed/>
      : <ListOfClicks clicks = {clicks}></ListOfClicks>}
      <button onClick={handleReset}>Reset</button> 
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();