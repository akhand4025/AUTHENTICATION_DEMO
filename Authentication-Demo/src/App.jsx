// import { useState } from 'react'

import './App.css'

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {Dash}  from "./pages/Dash"
import {Land}  from "./pages/Land"
import {Sign}  from "./pages/Sign"
import {Signup}  from "./pages/Signup"

function App() {

  
  return (
    <>
    
     <BrowserRouter>
        <Routes>
          <Route path="/Dash"  element={<Dash/>}></Route>
          <Route path="/"  element={<Land/>}></Route>
          <Route path="/Sign"  element={<Sign/>}></Route>
          <Route path="/Signup"  element={<Signup/>}></Route>
        </Routes>
     </BrowserRouter>
   </>
      )
}



export default App
