// type user ={
//   id : string
//   username : string
// }

// type Users = {
//   [key : string] : user
// }

type User1 = Record<string, {id : string, username : string}>

const users : User1 = {
  "abc@12" : {
    id : "abc@12",
    username : "jlnskjn"
  },
  "abc1@12" : {
    id : "abcfnjs@12",
    username : "jlnskjbjn"
  }
}