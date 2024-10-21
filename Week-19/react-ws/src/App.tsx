import { useEffect, useState } from "react"

function App() {
  const [socket,setSocket] = useState<null | WebSocket>(null)
  const [latestMessage,setLatestMessage] = useState<string | null>("")
  const [message,setMessage] = useState<string>("")

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('Connected to server')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('Received message:',message.data)
      setLatestMessage(message.data)
    }

    return () => {
      socket.close()
    }

  },[])
  if(!socket){
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      <input onChange={(e)=> {
        setMessage(e.target.value)
      }}></input>
      <button onClick={()=>{
        socket.send(message)
      }}>Send</button>
      {latestMessage}
    </>
  )
}

export default App
