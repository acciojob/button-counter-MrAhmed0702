
import React from "react";
import './../styles/App.css';

const App = () => {
  const [click, setClick] = useState(0);

  function increment(){
    return SetClick(click + 1);
  }
  
  return (
    <div>
      <p>Button clicked {click} times</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
