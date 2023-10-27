import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
     const  [length , setLength] =  useState(8)
     const [numberAllowed, setNumberAllowed] = useState(false)
     const [charAllowed, setCharAllowed] = useState()
     const [password, setPassword] = useState("")
     
     let passwordRef = useRef(null)
     let passwordGenerator = useCallback(() => {
          let pass = ""
          let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefchijklmnopqrstuvwxzy"

          if (numberAllowed) { str += "0123456789" }
          if (charAllowed) { str += "!@#$^&%_" }
          
          // eslint-disable-next-line no-undef
          for (let i = 1; i < length; i++) {
               let char = Math.floor(Math.random() * str.length + 1)
               pass += str.charAt(char)
          }

          setPassword(pass)
     }, [length, numberAllowed, charAllowed])

     let copyPassword = useCallback(() => {
          passwordRef.current?.select()
          window.navigator.clipboard.writeText(password)
          
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[password])
     
     useEffect(() => {
          passwordGenerator()
     },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
     <div className='w-full max-w-md mx-auto shadow-md
          rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
            <h1 className='text-3xl my-5'>Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                 <input type="text"
                      value={password}
                      className="outline-none w-full py-1 px-3"
                      placeholder='Password'
                      readOnly
                      ref={passwordRef}
                 />
                 <button className='outline-none
                  bg-blue-600 p-3 shrink-0' onClick={copyPassword}>Copy</button>
            </div>

            {/* Starting of Dependencies */}
            <div className='flex text-sm gap-x-2'>
                 {/* Range */}
                 <div className='flex items-center gap-x-1'>
                      <input type="range"
                           min={8}
                           max={25}
                           value={length}
                           className='cursor-pointer'
                           onChange={(e)=>{setLength(e.target.value)}}
                      />
                      <label >Length : {length}</label>
                 </div>
                 {/* Radio */}
                 <div className="flex items-center gap-x-1">
                      <input type="checkbox"
                         defaultChecked={numberAllowed}
                         id="numberInput"
                         onChange={() => {
                             setNumberAllowed((prev) => !prev);
                         }}
                      />
                      <label htmlFor="">Number</label>
                 </div>
                 <div className="flex items-center gap-x-1">
                      <input
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id="characterInput"
                      onChange={() => {
                          setCharAllowed((prev) => !prev )
                      }}
                      />

                      <label htmlFor="">Special-Char</label>
                 </div>
            </div>

     </div>
  )
}

export default App