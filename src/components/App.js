
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

  const [times, setTimes] = useState(0);
  function increaseCount(){
    setTimes(times + 1);
  }


  return (
    <div>
        <p>Button clicked {times} times</p>
        <button onClick={increaseCount}>Click me</button>
    </div>
  )
}

export default App
