import { Appbar } from "../components/Appbar";
import { getServerSession } from "next-auth";

export default async function () {
  const session = await getServerSession();
  return <div>
    <Appbar />
    User Component
    {JSON.stringify(session)}
    </div>;
}
