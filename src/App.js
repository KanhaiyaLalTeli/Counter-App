import  { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [count,setCount] =useState(0);

  const increment = () => {
       setCount(count+1);
  }

  const decrement = () => {
      if(count>1)
      {
          setCount(count-1)
      }
      else
        setCount(0)
       }

    const reset =() =>{
      setCount(0);
    }
 
  return (
    <div>
  <Counter 
    count={count}
    increment={increment}
    decrement={decrement}
    reset={reset}
  />
   </div>
  );
}


export default App;
