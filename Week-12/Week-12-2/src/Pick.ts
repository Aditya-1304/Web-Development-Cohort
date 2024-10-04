interface User{
  name : string;
  email : string;
  password : string;
  id : string;
  age : number;
}

type updateProps = Pick<User , "name" | "age" | "password">

function updatedUser(updatedProps : updateProps) {
  //hit the db to update the user
}