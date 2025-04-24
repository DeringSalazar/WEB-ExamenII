import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PaTaskList from './Pages/PaTaskList'
import PButtons from './Pages/PButtons'
import Task from './Components/Task'
import Buttons from './Components/Buttons';
import TaskList from './Components/TaskList';
import CheckBox from './Components/CheckBox';

function App() {



  return (
    <>
      <TaskList title="Pendiente">Hola Mundo <CheckBox></CheckBox></TaskList>
      <TaskList title="Pendiente">Hola Mundo</TaskList>
    </>
  );
};

export default App;
