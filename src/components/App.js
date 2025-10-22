
import React from "react";
import './../styles/App.css';

const App = () => {
  const ["click", "SetClick"] = useState(0);

  function increment(){
    return SetClick + 1;
  }
  
  return (
    <div>
      <p>Button clicked {click} times</p>
      <button type="submit" onclick={increment}>Increment</button>
    </div>
  )
}

export default App
