
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRerender />
    <Buttons />
    <IsEven />
  </div>
}

function IsEven() {
  const count = useRecoilValue(evenSelector);
  if (count % 2 == 0) {
    return <div>It is Even</div>
  } else
    return <div>It is Odd</div>
}

function CountRerender() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}
export default App