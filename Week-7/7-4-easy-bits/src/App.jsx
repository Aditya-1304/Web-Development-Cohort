// import { useMemo } from 'react'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notifactionsAtom, totalNotificationCountSelector } from './atoms'
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
  const messagingAtomCount = useRecoilValue(messagingAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationCountSelector);

  // const totalNotificationCount = useMemo(()=> {
  //   return (networkNotificationCount + jobAtomCount + notifactionsAtomCount + messagingAtomCount);
  // },[networkNotificationCount , jobAtomCount , notifactionsAtomCount , messagingAtomCount])

return (
  <>
    <button>Home</button>

    <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs({jobAtomCount})</button>
    <button>Messaging({messagingAtomCount})</button>     
    <button>Notifications({notifactionsAtomCount})</button>     

    <button>Me ({totalNotificationCount})</button>
  </>
)
}

export default App
