
import { atom, selector } from "recoil"
export const networkAtom = atom({
    key: "networkAtom",
    default : 104
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default : 0
})
export const notifactionsAtom = atom({
    key: "notifactionsAtom",
    default : 12
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default : 0
})

export const totalNotificationCountSelector = selector({
    key : "totalNotificationCountSelector",
    get : ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notifactionsAtomCount = get(notifactionsAtom);
        const messagingAtomCount = get(messagingAtom);
        return (networkAtomCount + jobsAtomCount + notifactionsAtomCount + messagingAtomCount)
}})