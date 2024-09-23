import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notifactionsAtom } from './atoms'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}
function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobAtomCount = useRecoilValue(jobsAtom)
  const notifactionsAtomCount = useRecoilValue(notifactionsAtom);
  const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom)

return (
  <>
    <button>Home</button>

    <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobAtomCount})</button>
    <button>Messaging({messagingAtomCount})</button>     
    <button>Notifications({notifactionsAtomCount})</button>     

    <button onClick={()=> {
      setMessagingAtomCount(messagingAtomCount + 1);
    }}>Me</button>
  </>
)
}

export default App
