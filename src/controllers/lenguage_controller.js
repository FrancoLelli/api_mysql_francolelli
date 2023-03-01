import { getConnection } from "../database/database";

//Funcion asincrona (Procesos demoran un tiempo)
//Await debemos esperar que termine el proceso para continuar
const getLenguage = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM language");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Get a language
const getLenguageById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      `SELECT * FROM language WHERE id=${id}`
    );

    console.log(result);

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Add language
const addLanguage = async (req, res) => {
  try {
    const { name, programmers } = req.body;
    const language = { name, programmers };
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO language SET ?",
      language
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Update language
const updateLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, programmers } = req.body;
    const language = { name, programmers };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE language SET ? WHERE id = ?",
      [language, id]
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Delete a language
const deleteLenguageById = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      `DELETE FROM language WHERE id=${id}`
    );

    console.log(result);

    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getLenguage,
  getLenguageById,
  addLanguage,
  updateLanguage,
  deleteLenguageById,
};
