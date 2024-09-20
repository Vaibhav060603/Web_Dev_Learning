import React, { useContext, useEffect } from 'react'
import {useState} from "react"
import { TaskArrContext } from '../store/TodoItems';



export default function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      
      const intervalId = setInterval(() => {
          setTime(new Date());
      },1000)

      return () => {
        clearInterval(intervalId);
        console.log("Abort requested");
      }
    }, []);


    const importedTaskArrContext = useContext(TaskArrContext);

    const handleClickDelete = (item) => {
      importedTaskArrContext.setTaskArrMain(importedTaskArrContext.taskArrMain.filter(element => element !== item));
  }

  return (
    <>
        <div className='c1'>

            This is the clock that shows the time in India:
            <br />
            Current date in India is: {time.toLocaleDateString('en-GB')}
            <br />
            Current time in India is: {time.toLocaleTimeString()}

        </div>

        {importedTaskArrContext.taskArrMain.map((item) => (
                    <div key={`${item.ctask}-${item.cdate}`}>
                        <span className='c3' id='id1'>{item.ctask}</span>
                        <span className='c3' id='id2'>{item.cdate}</span>
                        {/* <MdOutlineDelete className='c3' id='id4' onClick={(event) => handleClickDelete(item,event)}/> */}
                        <span className='c3' id='id4' onClick={(event) => handleClickDelete(item,event)}>Delete</span>        {/*onClick={(event) => handleClickDelete(item,event)} */}
                    </div>        
                ))}
    
    </>
  )
}
