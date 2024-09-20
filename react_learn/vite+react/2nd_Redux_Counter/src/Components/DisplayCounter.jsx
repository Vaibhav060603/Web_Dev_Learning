import React from 'react'
import {useSelector, useDispatch} from "react-redux";


export default function DisplayCounter() {
    
  const count = useSelector((state) => state.counter.value)

  return (
    <>
            <p>Counter current value: {count}</p>
    
    </>
  )
}
