import React, { useState } from 'react'
import "./Calculator.css";


    
  let Button = (props) =>{


 
    return (
      <button type="button" id='idcal3' value={props.text} onClick={props.onClick}>{props.text}</button>

  )}
  



export default function Calculator() {

  let [numberstr, setNumberstr] = useState("");
   

    let numsArr = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];



    let handleInputChange = (event) => {
        setNumberstr(event.target.value)
    }

    
    const isValidExpression = (expression) => {
      // A regex to check if the expression ends with a number or a closing parenthesis
      const validEnding = /[\d)]$/;
      // Additional checks can be added as needed
      return validEnding.test(expression);
    };
    
  let handleOnBtClick = (items,event) => {

    if (items === "=") {                                              // we can also use event.target.value instead of items
      if (isValidExpression(numberstr)) {
        try {
          setNumberstr(eval(numberstr).toString());
        } catch (error) {
          setNumberstr("");
          alert("Please enter correct expression")
        }
      } else {
        setNumberstr("");
        alert("Please enter correct expression")
      }

      setNumberstr(eval(numberstr).toString())

    }
    else if (items === "C") {
      setNumberstr("")

    }
    else {
      setNumberstr(numberstr.concat(event.target.value));
      console.log("btn clicked");
      console.log(event.target.value);
    }
  }
  

  return (
    <>
      <div id='idcal'>
        <input type="text" name="" id="idcal2" value={numberstr} onChange={handleInputChange}/>
        <br />
      
        <div id='idcal4'>
          {numsArr.map((items) => (
              <Button text={items} key={items} onClick={(event) => handleOnBtClick(items,event)}/>
          ))}
        </div>










      </div>
    
    
    
    
    
    </>
  )
}
