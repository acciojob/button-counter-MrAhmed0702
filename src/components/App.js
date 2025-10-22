
import React from "react";
import './../styles/App.css';

const App = () => {
  const [click, setClick] = useState(0);
  
  return (
    <div>
      <p>Button clicked {click} times</p>
      <button onClick={()=>setClick(click+1)}>Increment</button>
    </div>
  )
}

export default App
