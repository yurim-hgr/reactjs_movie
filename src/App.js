import { useEffect, useState } from "react";



function App() {
  
  const [todo , setTodo] = useState("");
  const [todos , setTodos ] = useState([]);
  const onchange = (event) => {
    setTodo(event.target.value);
  }

  const onsubmit = (e) => {
    e.preventDefault();
    if (todo === ""){
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo , ...currentArray]);
    console.log(todos);
    
  }
  return (
    <div>
      <h1>My Todos Docs({todos.length})</h1>
      <form onSubmit={onsubmit}>
      <input onChange={onchange} value={todo} type="text" placeholder= "write your todo"></input>
      <button>add To Do</button>
      </form>
      < hr/>
      <ul>
        {todos.map((item , index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
