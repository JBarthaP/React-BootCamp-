import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  

  /*
  This algorithm is based in pure mathematics, you only need to solve the 
  following equation to find this expression. The equation is this:

  1º
  min <= X <= max

  2º
  0 <= X - min <= max - min  
   
  3ºAdd the random number
  0 <= (X - min) * r <= (max - min) * r

  4ºAdding min again we see we need a value for r thats it between 0 and 1
  so we use Math.random() 
  min <= min + (X - min) * r <= min + (max - min) * r

  5ºAnd we use Math.floor to get the deepest number, so we use the last expression
  and we have min + (max-min+1) * r
  +1 for the initial value being 0
  */
  const generateRandomInteger = (min, max) => {
    return Math.floor(min + Math.random() * (max - min + 1))
  }

  const handleClick = () => {
    setSelected(generateRandomInteger(0, anecdotes.length - 1))
  }


  /*
  Remember if we have complex states we need to update a copy
  and then return it
  */
  const handleVote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }


  /*
  Math.max() returns the max value of an array , if we use indexOf we can know in which 
  position is stored this value
  If their any votes we can make the component not render
  */
  const mostVoted = () => {
    const max = points.indexOf(Math.max(...points))
    const mostVotes = points[max] > 0 ? anecdotes[max]
    : null  
    return mostVotes;
    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      {points[selected] > 0 ?<p>has {points[selected]} votes</p>: null}
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {mostVoted()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
