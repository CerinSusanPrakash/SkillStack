import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/login' element={<Login/>}></Route>
        <Route  path='/signup' element={<Signup/>}></Route>
        <Route  path='/dashboard' element={<Dashboard/>}></Route>
        <Route  path='/form' element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
