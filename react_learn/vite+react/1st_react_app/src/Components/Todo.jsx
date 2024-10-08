import React, { useContext, useEffect, useRef, useState } from 'react'
import "./Todo.css";
import { MdOutlineDelete } from "react-icons/md";
import { TaskArrContext } from 'C:\\Users\\Shree\\Documents\\Web_Development\\learning\\web_dev_learnings\\react_learn\\vite+react\\1st_react_app\\src\\store\\TodoItems.jsx';
import LoadingSpinner from './LoadingSpinner';
import { useLoaderData } from 'react-router-dom';



export default function Todo() {

    // const [taskArr, setTaskArr] = useState( [] );


    // const handleClickDelete = (item) => {
    //     setTaskArr(taskArr.filter(element => element !== item));
    // }



    //context API
    const importedTaskArrContext = useContext(TaskArrContext);

    const handleClickDelete = (item) => {
        importedTaskArrContext.setTaskArrMain(importedTaskArrContext.taskArrMain.filter(element => element !== item));
    }


    // useState
    // const [task , setTask] = useState("");
    // const [date , setDate] = useState("");
    
    // const handleTaskInputChange = (event) => {
    //     setTask(event.target.value);
    // }


    // const handleDateInputChange = (event) => {
    //     setDate((event.target.value).split("-").reverse().join("-"));
    // }



    //useRef
    const task = useRef();
    const date = useRef();

    


    const handleClickAdd = ()=>{
        // "useState"   
        // setTaskArr([...taskArr, {task , date}]);
        // setTask("");
        // setDate("");

        const id = (importedTaskArrContext.taskArrMain[importedTaskArrContext.taskArrMain.length-1].id) +1; 
        const todo = task.current.value;
        const cdate = date.current.value.split("-").reverse().join("-"); 
        // console.log(task.current.value)
        // console.log(date.current.value)
        
        // To make changes locally
        importedTaskArrContext.setTaskArrMain([...importedTaskArrContext.taskArrMain, {id,todo,cdate}]);

        // setTaskArr([...taskArr, {ctask , cdate}]);
        

        // To send newly added data (Todo) to server        
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: todo,
                completed: false,
                userId: id,
                cdate: cdate
            })
        })
        .then(res => res.json()) 
        .then(console.log);

        
        // To clear the local variables
        task.current.value = "";
        date.current.value = "";
        
    }
    
    
    const [fetching, setFetching] = useState(true);


    // method - 1 of fetching data from server (using "useEffect"), when a page is loaded.
    // useEffect(() => {
    //     setFetching(true);
        
    //     const controller = new AbortController();
    //     const signal = controller.signal;
        
    //     fetch('https://dummyjson.com/todos')
    //     .then(res => res.json())
    //     .then(data => {
    //         importedTaskArrContext.setTaskArrMain([...data.todos])
    //         // .then(data => console.log(data.todos[0]))
    //         // console.log(importedTaskArrContext.taskArrMain);
    //         setFetching(false);
    //     })

    //     return () => {
    //         console.log("request aborted");
    //         controller.abort();
    //     }
        
    // }, ['https://dummyjson.com/todos']);





    //method - 2 of fetching data from server (using "useLoaderData")
    importedTaskArrContext.setTaskArrMain(useLoaderData());


    
    

  return (
    <>
        <div className='c1'>
        
            
            <h1>To-Do App</h1>
            <div>
                <input type="text" name="" id="id1"  className="c2" ref={task} placeholder="Enter the todo here"/>    {/*"useState"  value={task} onChange={handleTaskInputChange}*/}
                <input type="date" name="" id="id2"  className="c2" ref={date}/>    {/* value={date.split("-").reverse().join("-")} "useState" onChange={handleDateInputChange}*/}
                <button type="submit" id='id3' className="c2" onClick={handleClickAdd}>Add</button>    {/* onClick={handleClickAdd}*/}
            </div>
            
                {/* {fetching ===true ? <LoadingSpinner/> : importedTaskArrContext.taskArrMain.length ===0 ? <h2>No items added</h2> : null } */}

                


                {importedTaskArrContext.taskArrMain.map((item) => (
                    // <div key={`${item.data}-${item.cdate}`}>
                    <div key={`${item.todo}`}>

                        <span className='c3' id='id1'>{item.todo}</span>
                        <span className='c3' id='id2'>{item.cdate}</span>
                        {/* <MdOutlineDelete className='c3' id='id4' onClick={(event) => handleClickDelete(item,event)}/> */}
                        <span className='c3' id='id4' onClick={(event) => handleClickDelete(item,event)}>Delete</span>         {/* onClick={(event) => handleClickDelete(item,event)}*/}
                    </div>        
                ))}
{/* fetch('https://dummyjson.com/todos')
  .then(res => res.json())
  .then(json => console.log(json)); */}
        </div>

            {/* <Todoelement task="Buy Milk" date="4/10/2024"/>
            <Todoelement task="Go To College" date="4/10/2024"/>
            <Todoelement task="hello" date="4/10/2024"/> */}
    
    </>
  )
}

