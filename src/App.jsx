import { useState } from 'react'
import { BrouserRouter, Router, Route } from 'react-router-dom'
import './App.css'
import PaTaskList from './Pages/PaTaskList'
import Task from './Components/Task'

function App() {



  return (
    <BrouserRouter>
      <Router>
        <Route path="/Pages/PaTaskList" element={<PaTaskList/>}></Route>
        <Route path="/Components/Task" element={<Task/>}></Route>
      </Router>
    </BrouserRouter>
  )
}

export default App
