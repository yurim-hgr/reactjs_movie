import { useEffect, useState } from "react";


function Hello () {
  
  useEffect(() => {
    console.log("created")
    return () => console.log("des")
    }, []);
  return <h1>hihihi</h1>
}

function App() {
  
  const [showing, setShowing] = useState(false);
  const onclick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ?  <Hello /> : null}
      <button onClick={onclick}>{showing? "hide" : "show"}</button>
    </div>
  );
}

export default App;
