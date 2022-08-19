
/*
Another type of using 
const Title = ({course}) => <h1>{course}</h1>

*/
const Title = (props) => {
    return <h2>{props.course}</h2>
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
  
    //If you dont have any ids, one possibility is using index:
    return (
      <div>
        {props.parts.map(function (item) {
          return <Part key={item.id} msg={item.name} number={item.exercises} />;
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
  
  /*
  Remember that in the first loop of the reduce for, the initial value
  is the value of the initial value on the second parameter of the callback function
  */
  
  const Total = (props) => {
    const initialValue = 0;
    const reducer = (s, p) => s+p.exercises
    const total = props.parts.reduce(reducer, initialValue)
  
  
    return <p><strong>{'Total of exercises '} {total}</strong></p>
  }
  
 export const Course = ({ course }) => {
    return (
      <div>
        <Title course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }