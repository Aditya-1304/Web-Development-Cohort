// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:napaglena@localhost/postgres"
})

async function insertUserData(username : string , email : string , password : string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3)
    `, [username,email,password]) 
    console.log(result)
}

insertUserData(
  "Aditya",
  "aditya@gmail.com",
  "napaglena"
);