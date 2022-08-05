import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

/*
Another type of using 
const Title = ({course}) => <h1>{course}</h1>

*/ 
const Title = (props) => {
  return  <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.msg} {props.number}</p>
}

const Content = (props) => {
  console.log(props);

  /* If we had ids in the objects we could use this part of the code 
  return (<div>
  {props.parts.map(item => <Part key= {item.key} msg={item.name} number={item.exercises} />)}
  </div>)
  */

  //If you dont have any ids, one possibility is using this:
  return (
    <div>
      {props.parts.map(function(item, i){
        return <Part msg = {item.name} number = {item.exercises} key={i} />;
    })}
    </div>
  )

  //React uses keys to create child trees to give priority to the objects in an array, I think that how it works but I really dont know :( 

  /* If you dont want to use loops you could always use the safe way

  return (<div>
    
    <Part msg = {msgs[0]} number = {numbers[0]} ></Part>
    <Part msg = {msgs[1]} number = {numbers[1]} ></Part>
    <Part msg = {msgs[2]} number = {numbers[2]} ></Part>
    
  </div>)

  */
  
}

const Total = (props) => {
  let suma = 0;
  props.parts.forEach(element => {
    suma+= element.exercises;
  });
  return <p>{'Total of exercises '} {suma}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Title course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);