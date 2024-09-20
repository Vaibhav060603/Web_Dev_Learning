import React, { useState } from 'react'
import "./Controls.css" 
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount, reset, decrementByAmount} from "../store/counter/counterSlice"

export default function Controls() {

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment())
    }
    
    const handleDecrement = () => {
        dispatch(decrement());
    }


    const [toBeAddedOrSubtracted, setToBeAdded] = useState(0);
    const handleToBeAddedChange = (event) => {
            setToBeAdded(event.target.value)
    }
    
    const handleAdd = () => {
        dispatch(incrementByAmount(toBeAddedOrSubtracted));
        setToBeAdded(0);
    }


    const handleReset = () => {
        dispatch(reset())
    }

    const handleSubtract = () => {
        dispatch(decrementByAmount(toBeAddedOrSubtracted))
    }
    
    
  return (
    <>
        <div id='idc1'>
            <button type="button" className='cc1' onClick={handleIncrement}>+1</button>
            <button type="button" className='cc1' onClick={handleDecrement}>-1</button> <br /><br />
            <button type="button" onClick={handleSubtract}>Subtract</button> 
            <input type="number" name="" className='cc1' value={toBeAddedOrSubtracted} onChange={handleToBeAddedChange}/>
            <button type="button" onClick={handleAdd}>Add</button> <br /> <br />
            <button type="button" onClick={handleReset}>Reset</button>
        </div>
    
    </>
  )
}
