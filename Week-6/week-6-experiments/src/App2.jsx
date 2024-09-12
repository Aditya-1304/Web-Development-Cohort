import { useState } from "react";

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Go to gym today",
    },
    {
      id: 2,
      title: "eat food",
      description: "go eat food",
    },
    {
      id: 3,
      title: "Go to class",
      description: "Go to class today",
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App;
