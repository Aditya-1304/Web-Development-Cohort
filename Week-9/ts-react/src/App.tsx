import './App.css'
function App() {
  return (
    <>
      <Todo title='hello' description='yoo' done={false}/>
    </>
  )
}
interface TodoProps {
  title: string,
  description: string,
  done: boolean,
}
function Todo(props : TodoProps) {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
