//Destructuring, lo cual saca un objecto interno dentro de express
import { Router } from "express";
import { methods as languageController } from "../controllers/lenguage_controller";

const router = Router()

//Get all languages
router.get("/", languageController.getLenguage)

//Get a language
router.get("/:id", languageController.getLenguageById)

//Add new language
router.post("/", languageController.addLanguage)

//Update a language
router.put("/:id", languageController.updateLanguage)

//Delete a language
router.delete("/:id", languageController.deleteLenguageById)


export default router