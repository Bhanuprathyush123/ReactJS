import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './componets/Login/Login'
import Profile from './componets/Profile/Profile'

function App() {

  return (
    <UserContextProvider>
            <h1>React Context</h1>
            <Login />
            <Profile/>   
    </UserContextProvider>
  )
}

export default App
