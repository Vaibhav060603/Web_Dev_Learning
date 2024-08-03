import './App.css'
import Footer from '../Components/Footer.jsx'
import Navbar from "../Components/Navbar.jsx";
import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TaskArrContext } from '../store/TodoItems.jsx';


function App() {

  const [taskArrMain, setTaskArrMain] = useState( [] );
  console.log(taskArrMain);
  
  return (
    <>
    <TaskArrContext.Provider value={ {taskArrMain, setTaskArrMain,} }>

      <Navbar/>
      

      <Outlet/>

      <Footer/>
    </TaskArrContext.Provider>
    </>
  )
}

export default App