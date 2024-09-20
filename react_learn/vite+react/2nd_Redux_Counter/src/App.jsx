import './App.css'
import Controls from './Components/Controls'
import DisplayCounter from './Components/DisplayCounter'
import Header from './Components/Header'
import {useSelector, useDispatch} from "react-redux";

function App() {

  const count = useSelector((state) => state.counter.value)
  
  return (
    <>
        <center >
          <div id='ida1'>
            <Header />
            <DisplayCounter />
            <Controls />
          </div>
        </center>
    </>
  )
}

export default App
