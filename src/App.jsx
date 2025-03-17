import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Website1 from './Website1'
import Project from './Project'
import Home from './Home'
import Service from './Service'


function App() {


  return (
    <>

 <BrowserRouter> 
 <Website1/>
<Routes>

<Route path='home'element={<Home/>}></Route>
<Route path='projects' element={<Project/>}></Route>
<Route path='service' element={<Service/>}></Route>
<Route index element={<Home/>}></Route>

</Routes>


 </BrowserRouter>

</>
  )
}

export default App
