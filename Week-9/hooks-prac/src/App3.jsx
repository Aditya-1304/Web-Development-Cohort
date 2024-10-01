
// import useIsOnline from "./Hooks/useIsOnline";
// function App() {
//   const isOnline = useIsOnline();
//   if (isOnline) {
//     return "You are Online"
//   }

//   return "You are offline please connect to the internet"
// }

import useMousePointer from "./Hooks/useMousePointer";

function App() {
  const mousePointer = useMousePointer();

  return (
    <>
      your mouse position is {mousePointer.x} {mousePointer.y}
    </>
  )
}

export default App;