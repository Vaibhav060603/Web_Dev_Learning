import React from 'react'
import "./Card.css";


let Cards = (props) => {
  return(
    <div className="card">
      <h2>{props.heading}</h2>
      <p>{props.description}</p>
    </div>

  )}




export default function Card() {
  return (
    <>
            

      <div className='c1'>
        <Cards heading = "Card 1" description="This is card 1."/>
        <Cards heading = "Card 2" description="This is card 2."/>
        <Cards heading = "Card 3" description="This is card 3."/>
        <Cards heading = "Card 4" description="This is card 4."/>
      </div>
    
    
    </>
  )
}
