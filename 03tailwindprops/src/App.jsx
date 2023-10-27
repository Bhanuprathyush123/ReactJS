import './App.css'
import Card from './components/Card'
import  Navbar from './components/Navbar'

function App() {
  

  return (
     <>
            <Navbar className=" m-10    "/>
            <h1 className="m-6 bg-green-500 p-5 rounded-lg text-4xl font-bold  mb-4">
                 Hello world!
            </h1>
            <div className=' flex mr-5 gap-5'>
            <Card className="m-4" userName="Mac-Book"/>
            <Card userName="Windows"/>
            </div>
            
            
     </>
  )
}

export default App
