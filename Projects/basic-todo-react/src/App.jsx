import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "Go to gym from 5-6",
    },
    { title: "Go to Gym", description: "Go to gym from 5-6" },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New todo",
        description: "Desc of new todo",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}
      {todos.map(function (todo) {
        return (
          <Todo
            key={todo.title}
            title={todo.title}
            description={todo.description}
          />
        );
      })}
    </div>
  );
}
function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default App;
