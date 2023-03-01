import { getConnection } from '../database/database'

//Get users
const getUsers = async (req, res) => {
     const connection = await getConnection()
     const result = await connection.query("SELECT (users.id) as 'id', (users.name) as 'name', email, (language.name) as 'language' FROM users, language WHERE users.id_language = language.id ORDER BY users.id ASC;")

     console.log(result);
     res.json(result)
}

//Get user by id
const getUserById = async (req, res) => {
     const { id } = req.params
     const connection = await getConnection()
     const result = await connection.query(`SELECT (users.id) as 'id', (users.name) as 'name', email, (language.name) as 'language' FROM users, language WHERE users.id = ${id} AND users.id_language = language.id`)

     console.log(result);
     res.json(result)
}

//Add an user
const addUser = async (req, res) => {
     const { name, email, id_language } = req.body
     const newUser = { name, email, id_language }
     const connection = await getConnection()
     const result = await connection.query(`INSERT INTO users SET ?`, newUser)

     res.json(result)
}

//Update an user
const updateUser = async (req, res) => {
     const { id } = req.params
     const { name, email, id_language } = req.body
     const newUser = { name, email, id_language }
     const connection = await getConnection()
     const result = await connection.query(`UPDATE users SET ? WHERE id = ?`, [newUser, id])

     res.json(result)
}

//Delete an user
const deleteUser = async (req, res) => {
     
     const { id } = req.params
     const connection = await getConnection()
     const result = await connection.query(`DELETE FROM users WHERE id = ${id}`)

     res.json(result)
}

export const methodsUser = {
     getUsers,
     getUserById, 
     addUser,
     updateUser,
     deleteUser
}