//INSTEAD OF THIS 

// import axios from "axios";

// async function getUserData() {
//   const response = await axios.get(" https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
//   return response.data;
// }

// WE CAN DO : 
// import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();
import client from "@/db"
async function getUserData() {
  try {
    const user = await client.user.findFirst({});
	  return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userDetail = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
          <div className="border p-8 rounded">
              <div>
                  Name: {userDetail?.name}
              </div>
              
              {userDetail?.email}
          </div>
      </div>
    </div>
  );
}
