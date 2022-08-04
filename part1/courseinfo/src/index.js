import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

/*
const Title = ({course}) => <h1>{course}</h1>

*/ 
const Title = (props) => {
  return  <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.msg} {props.number}</p>
}

const Content = (props) => {
  const msgs = props.msgs;
  const numbers = props.numbers;
  return (<div>
    <Part msg = {msgs[0]} number = {numbers[0]} ></Part>
    <Part msg = {msgs[1]} number = {numbers[1]} ></Part>
    <Part msg = {msgs[2]} number = {numbers[2]} ></Part>
  </div>)
}

const Total = (props) => {
  let suma = 0;
  props.numbers.forEach(element => {
    suma+= element;
  });
  return <p>{props.msg} {suma}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}></Title>
      <Content msgs= {[part1,part2,part3]} numbers ={[exercises1,exercises2,exercises3]}></Content>
      <Total msg = {"Number of exercises "} numbers = {[exercises1 , exercises2 , exercises3]}></Total>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);