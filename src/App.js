import { useEffect, useState } from "react";


function App() {
  const [counter, setcount] = useState(0);
  const onclick = () => {
    setcount((prev) => prev +1);
  } 
  console.log("again");
  useEffect( () => {
    console.log("once ");
    
  }, [] );
  return (
    <div>
      <h1>count : {counter}</h1>
      <button onClick={onclick}>click</button>
    </div>
  );
}

export default App;
