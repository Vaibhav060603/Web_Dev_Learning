import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login.jsx";
import About from "./Components/About.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import User from "./Components/User.jsx";
import Textutils from './Components/Textutils.jsx';
import Todo from './Components/Todo.jsx';
import Clock from './Components/Clock.jsx';
import { useState } from 'react';
import Calculator from './Components/Calculator.jsx';
import Card from './Components/Card.jsx';
import News from './Components/News.jsx';
import { todoLoader } from './store/fetchedToDoItems.jsx';
import FormHandling, { addTodo } from './Components/FormHandling.jsx';
import Redux_Counter from './Components/Redux_Counter.jsx';




const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Card/>
        },        
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/about",
          element : <About/>
        },
        {
          path: "/contact",
          element : <ContactUs/>
        }, 
        {
          path: "/textutils",
          element : <Textutils/>
        },      
        {
          path: "/user/:username",
          element : <User/>
        },
        {
          path: "/todo",
          element: <Todo/>,
          loader: todoLoader,
        },
        {
          path: "/clock",
          element: <Clock/>
        },
        {
          path: "/calculator",
          element: <Calculator/>
        },
        {
          path: "/news",
          element: <News/>
        },
        {
          path: "/form",
          element: <FormHandling/>,
          action: addTodo
        }
      ]
    },
    
    
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
