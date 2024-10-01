import { useEffect, useState } from "react";
import axios from "axios";

function useTodos(n) {

  const [todos, setTodos] = useState([])
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setloading(false)
        })
    }, n * 1000)

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setloading(false)
      })

    return () => {
      clearInterval(value)
    }
  }, [n])

  return { todos, loading }
}

export default useTodos;