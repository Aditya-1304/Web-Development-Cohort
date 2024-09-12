import { useState } from "react";
import { memo } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="Aditya2"></Header>
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Aditya1");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  );
}

// function Header({ title }) {
//   return <div>{title}</div>;
// }

//Using react.memo

const Header = memo(function Header({ title }) {
  return <div>{title}</div>;
});
export default App;
