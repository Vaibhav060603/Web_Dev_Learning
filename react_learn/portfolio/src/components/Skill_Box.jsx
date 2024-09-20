import React from 'react'
import "./Skill_Box.css";

export default function Skill_Box(props) {
  return (
    <>

            <div className='csb2'>
                <img src={props.imageUrl} alt="" id='idsb1' />
                <div id='idsb2'>
                    <span id='idsb3'>{props.skillText}</span>
                </div>
            </div>
    
    
    </>      
  )
}
