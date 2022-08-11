import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';

const Button = ({ event, text }) => {
  return (
    <button onClick={event(text)}>
      {text}
    </button>)
}

//If we use the tag of tr, we need to grap it inside a td tag also

const Statistic = ({ text, value }) => {
  return <tr>
    <td>{text}</td>
    <td>{value}</td>  
  </tr>
}

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = () => {
    return good + neutral + bad;
  }

  const positive = () => {
    const total = all()
    return total > 0 ? parseFloat(good / total * 100) + '%' : 0;
  }
  const average = () => {
    const map = {
      good: 1,
      neutral: 0,
      bad: -1
    }
    const total = all()
    const averageValoration = parseFloat((good * map.good + neutral * map.neutral + bad * map.bad) / total);
    return total > 0 ? averageValoration : 0;
  }
  return all() <= 0 ? <p>No feedback given</p>
    :
    (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all()} />
          <Statistic text="average" value={average()} />
          <Statistic text="positive" value={positive()} />
        </tbody>
      </table>
    )
}

/*
We cant have the logic of a component in where we update it
*/


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const handleClick = (params) => {
    return () => {
      if (params === 'good') {
        setGood(good + 1)
      } else if (params === 'neutral') {
        setNeutral(neutral + 1);
      } else if (params === 'bad') {
        setBad(bad + 1);
      }
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button event={handleClick} text={'good'}></Button>
      <Button event={handleClick} text={'neutral'}></Button>
      <Button event={handleClick} text={'bad'}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
