import { useState } from 'react'
import { BrouserRouter, Router, Route } from 'react-router-dom'
import './App.css'
import PaTaskList from './Pages/PaTaskList'

function App() {

  return (
    <BrouserRouter>
      <Router>
        <Route path="/Pages/PaTaskList" component={PaTaskList}></Route>
      </Router>
    </BrouserRouter>
  )
}

export default App
