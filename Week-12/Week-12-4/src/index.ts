// write a function to create a users table in your database.
import { Client } from 'pg'
 
//connection to the db
const client = new Client({
  connectionString: process.env.POSTGRES_URI
})

//main function which uses the db connection to take user values
async function insertUserData(username : string , email : string , password : string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
    `, [username,email,password]) 
    console.log(result)
}

insertUserData(
  "Aditya123",
  "aditya@gmail.com",
  "napaglena"
);