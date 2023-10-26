import { useState } from 'react'
import './App.css'

function App() {

     let [counter, setCounter] = useState(1);
     // counter => A variable that holds the value  
     /*
          setCounter => used to Update the value and where 
          ever it is on the UI 
          
          the work of the useState is to Update the Values
          that are on the UI
     */
     
     const addValue = () => {
          if ( counter === 20)  alert('Your Ahead')
          else setCounter(counter + 1)
     }

     const removeValue = () => {
          if (counter === 0) {
               alert("Your Under the Hood")
          } else {
               setCounter(counter -1)
          }
          
     }

     const doubleValue = () => {
               setCounter(counter * 2)
     }

     const zeroValue = () =>{setCounter(0)}

  return (
    <>
            <h1>Counter Practice</h1>
            <p>React 1st Lectur</p>
            <h4>Counter Value : {counter}</h4>

            <button onClick={addValue}>Add Value By 1 : </button> <button>{counter}</button> <br /> 
            <button onClick={removeValue}>Remove Value By 1 : </button> <button>{counter}</button> <br />
            <button onClick={doubleValue}>Multiply Value By 2 : </button> <button>{counter}</button> <br />
            <button onClick={zeroValue}>Set Value To 0 : </button> <button>{counter}</button>
    </>
  )
}

export default App
