import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'

import RetrieveFile from './pages/RetrieveFile'
import Profile from './pages/Profile'
import Download from './pages/Download'
import Navbar from './pages/Navbar'

function App() {
 return(

  <BrowserRouter>
  <Navbar/>
  <Routes>
<Route path ="/" element={<Dashboard/>}/>
  <Route path ="/login" element={<Login/>}/>
  <Route path ="/register" element={<Register/>}/>
  <Route path ="/uploads" element={<Upload/>}/>
  <Route path ="/profile" element={<Profile/>}/>
  <Route path ="/retrieve" element={<RetrieveFile/>}/>
  <Route path = "/download" element={<Download/>}></Route>


  </Routes>
  
  </BrowserRouter>
 )
  
}

export default App
