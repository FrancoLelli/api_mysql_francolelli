import { Router } from "express";
import { methodsUser as userController} from '../controllers/users_controller'

const router = Router()

//Get users 
router.get("/", userController.getUsers)

//Get user by id 
router.get("/:id", userController.getUserById)

//Add new user
router.post("/", userController.addUser)

//Update an user
router.put("/:id", userController.updateUser)

//Update an user
router.delete("/:id", userController.deleteUser)

export default router