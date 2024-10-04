interface User{
  name : string;
  email : string;
  password : string;
  id : string;
  age : number;
}

type updateUser = Pick<User , "name" | "age" | "password">
type updateUserOptional = Partial<updateUser>

function updateUser(updatedProps : updateUserOptional) {
  //hit the db to update the user
}