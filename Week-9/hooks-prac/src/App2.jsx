
import useTodos from './Hooks/useTodos';


function App() {

  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App;