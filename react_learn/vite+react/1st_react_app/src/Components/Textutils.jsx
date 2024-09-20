import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Button(props){
    return (
        <button onClick={props.onClick} style={{marginRight: 20 + 'px'}}>{props.text}</button>
    );
}

export default function Textutils(props) {
    
    const handleOnChange = (e)=>{
        setText(e.target.value);
        console.log(text);
    }
    
    
    const handleOnClickUp = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Upper case");
        toast("Converted to upper-case",{position: "top-center"})
    }

    const handleOnClickLow = ()=>{
        setText(text.toLowerCase());
        console.log("lower case");
        toast("Converted to lower-case",{position: "top-center"})

    } 

    const handleOnClickCopy = ()=>{
        navigator.clipboard.writeText(text);
        toast("Coppied to clipboard",{position: "top-center"})
    }

    const handleOnClickExtraSpace = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      toast("Removed extra spaces",{position: "top-center"})
    }

    const handleOnClickClear = ()=>{
        setText("");
        toast("Text cleared",{position: "top-center"});
        navigate("/");
    }

    const navigate = useNavigate();
    

    let [text,setText] = useState('');


  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>


        <Button text="Convert To Upper-Case" onClick={handleOnClickUp}></Button>
        <Button text="Convert To Lower-Case" onClick={handleOnClickLow}></Button>
        <Button text="Copy the text" onClick={handleOnClickCopy}></Button>
        <Button text="Remove extra spaces" onClick={handleOnClickExtraSpace}></Button>
        <Button text="Clear Text" onClick={handleOnClickClear} ></Button>


        <div>
          <h2>Your text summary:</h2>
          <p>
            {text==="" ? 0:text.split(" ").length} words and {text.length} characters.
          </p>
          <p>
            Time taken to read {text==="" ? 0:text.split(" ").length} words: {(text==="" ? 0:text.split(" ").length)*0.008} mins
          </p>
          <h3>
            Preview of text:
          </h3>
          <p>
            {text}
          </p>
        </div>

        <div>
          <ToastContainer />
        </div>

      </div>
    </>
  );
}
