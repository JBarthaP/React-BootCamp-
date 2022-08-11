import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';


const Counter = ({number}) => {
 return <h1>{number}</h1>
}

const App = (props) => {
  /*
  useState devuelve un array de dos posiciones en la primera se encuentra el valor del componente
  y en la segunda posición se guarda el valor de como se actualiza el componente.
  En el parametro de la función se pasa el valor inicial del componente
  
  useState returns an array with two positions, in the first position is the actual value of the component
  while on the second position is stored the function to how the value of the component is uploaded.
  The prop of the function useState is where we store the initial value of the component 
  */
 
  const [contador, setContador] = useState(0);

  /* Is the same as the line 13 but I used destructuring
  const contador = useState(0); 
  const contadorValue = contador[0]
  const updateContador = contador[1];
  */
  //const [contadorValue,updateContador] = useState(0);



  //If you want to treat with the prev value of the component is better to use this declaration

  /*setContador(prevContador => {
    return prevContador + 1
    }) 
  */
  const handleClick = (params) => {
    return () => {
      if (params) setContador(contador + 1);
      else setContador(contador - 1);
    }
  }

  const handleClickReset = () => {
    setContador(0);
  }

  const isEven = contador % 2 === 0
  const mensajePar = isEven ? 'Es par' : 'Es impar';

  return (
    <div>
      <p>El valor del contador es :</p>
      <Counter number = {contador}></Counter>
      <p>{mensajePar}</p>
      <button onClick={handleClick(1)}>
        Incrementar
      </button>
      <button onClick={handleClick(0)}>
        Decrementar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
    </div>)
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
